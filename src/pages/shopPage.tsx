import { useEffect, useState } from "react";
import { ProductType, CartType } from "../types";
import { getProducts, getCart, sendDataToCart } from "../axios";
import { Grid, Paper, Button, CardMedia, Box } from "@mui/material";
import { AlertColor } from "@mui/material/Alert";
import { useTotalQuantity } from "../shared/totalQuantityContext";
import CustomizedSnackbars from "../components/snackbar/snackbar";

type ShopPageProps = {};

const ShopPage: React.FC<ShopPageProps> = (props: ShopPageProps) => {
  const [items, setItems] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<CartType>({
    changed: false,
    items: [],
    totalQuantity: 0,
  });

  const [snackbar, setSnackbar] = useState<{
    message: string;
    severity: AlertColor;
  }>({
    message: "",
    severity: "success",
  });

  const { dispatch } = useTotalQuantity();

  useEffect(() => {
    getProducts().then((res) => {
      const items = res.data;
      setItems(items);
    });

    getCart().then((res) => {
      const nCart = res.data;

      setCart({ ...nCart, items: nCart.items || [] });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToCart = (productId: number, price: number, name: string) => {
    const { totalQuantity, items } = cart;
    const existingItem = items.find((item) => item.id === productId);
    const newTotal = totalQuantity + 1;
    let newItems = items;

    if (!existingItem) {
      newItems.push({
        id: productId,
        price,
        quantity: 1,
        name,
        totalPrice: price,
      });
    } else {
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.price + existingItem.totalPrice;
      const itemIndex = items.findIndex((item) => item.id === existingItem.id);
      newItems[itemIndex] = existingItem;
    }
    dispatch({ type: "set", totalQuantity: newTotal });
    setCart({ ...cart, items: newItems, totalQuantity: newTotal });
    sendDataToCart({ ...cart, items: newItems, totalQuantity: newTotal }).then(
      () => {
        setSnackbar({ message: "Product added!", severity: "success" });
      }
    );
  };

  return (
    <Grid sx={{ flexGrow: 2 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="start" spacing={2}>
          {items.map((item, index) => (
            <Grid key={index} item>
              <Paper
                sx={{
                  height: "200px",
                  width: 100,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <Box>{item.name}</Box>
                <CardMedia
                  component="img"
                  sx={{ width: 100 }}
                  image={item.imgUrl}
                  alt="Product name"
                />
              </Paper>
              <Box>
                <Button
                  onClick={() => addToCart(item.id, item.price, item.name)}
                >
                  Add to cart
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <CustomizedSnackbars
        message={snackbar.message}
        severity={snackbar.severity}
      />
    </Grid>
  );
};

export default ShopPage;
