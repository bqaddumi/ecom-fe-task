import { Box, Grid, Typography } from "@mui/material";
import {
  CartItemType,
  CartType,
  ProductsImagesType,
  ProductType,
} from "../../types";
import { getCart, getProducts, sendDataToCart } from "../../axios";
import { styled } from "@mui/material/styles";
import ProductsCartTable from "../../components/productsCartTable/productsCartTable";
import { titleStyle, boxStyle } from "./cartPageStyle";
import { SHOPPING_CART } from "../../consts";
import { useEffect, useState } from "react";

type CartPageProps = {};

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: "inherit",
}));

const CartPage: React.FC<CartPageProps> = (props: CartPageProps) => {
  const [products, setProducts] = useState<CartItemType[]>([]);
  const [productsImages, setProductsImages] = useState<ProductsImagesType>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    getCart().then((res: { data: CartType }) => {
      const { items, totalQuantity } = res.data;
      setTotal(totalQuantity);
      setProducts(items);
    });

    getProducts().then((res) => {
      const { data } = res;
      const productsImages = data.map((product: ProductType) => ({
        id: product.id,
        imgUrl: product.imgUrl,
      }));
      setProductsImages(productsImages);
    });
  }, []);

  const onXClicked = (productId: number) => {
    let existingItem = products.find((item) => item.id === productId);
    const newProducts = products.filter((item) => item.id !== existingItem?.id);
    const quantity = existingItem?.quantity || 0;
    const newTotalQuantity = total - quantity;
    const cart = {
      changed: true,
      items: newProducts,
      totalQuantity: newTotalQuantity,
    };
    setTotal(newTotalQuantity);
    setProducts(newProducts);
    sendDataToCart(cart);
  };

  const onIncreaseclicked = (
    productId: number,
    price: number,
    name: string
  ) => {
    const existingItem = products.find((item) => item.id === productId);
    const newTotal = total + 1;
    setTotal(newTotal);
    let newProducts = products;
    if (!existingItem) {
      newProducts.push({
        id: productId,
        price,
        quantity: 1,
        name,
        totalPrice: price,
      });
      setProducts(newProducts);
    } else {
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.price + existingItem.totalPrice;
      const cart = {
        changed: true,
        items: products,
        totalQuantity: newTotal,
      };

      sendDataToCart(cart);
    }
  };
  const onDecreaseclicked = (productId: number) => {
    let newProducts = products;

    const existingItem = products.find((item) => item.id === productId);
    const newTotal = total - 1;
    setTotal(newTotal);
    if (existingItem?.quantity === 1) {
      newProducts = products.filter((item) => item.id !== existingItem.id);
      setProducts(newProducts);
      const cart = {
        changed: true,
        items: newProducts,
        totalQuantity: newTotal,
      };
      sendDataToCart(cart);
    } else {
      if (existingItem) {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        const cart = {
          changed: true,
          items: products,
          totalQuantity: newTotal,
        };

        sendDataToCart(cart);
      }
    }
  };

  return (
    <Box sx={boxStyle}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Item>
            <Typography variant="h3" sx={titleStyle}>
              {SHOPPING_CART}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <ProductsCartTable
            products={products}
            onXClicked={onXClicked}
            productsImages={productsImages}
            onIncreaseclicked={onIncreaseclicked}
            onDecreaseclicked={onDecreaseclicked}
          />
        </Grid>
        <Grid item xs={4}>
          <Item>{total}</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;