import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { isMobile } from "react-device-detect";
import {
  CartItemType,
  CartType,
  ProductsImagesType,
  ProductType,
} from "../../types";
import { getCart, getProducts, sendDataToCart } from "../../axios";
import { useTotalQuantity } from "../../shared/totalQuantityContext";
import { styled } from "@mui/material/styles";
import ProductsCartTable from "../../components/productsCartTable/productsCartTable";
import CartSummary from "../../components/cartSummary/cartSummary";
import { titleStyle, boxStyle, boxMobileStyle } from "./cartPageStyle";
import { SHOPPING_CART } from "../../consts";

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
  const [orderTotalPrice, setOrderTotalPrice] = useState<number>(0);

  const { dispatch } = useTotalQuantity();

  const getOrderTotalPrice = (items: CartItemType[]) => {
    let totalPrice = 0;

    for (let i = 0; i < items.length; i++) {
      totalPrice += items[i].totalPrice;
    }

    setOrderTotalPrice(totalPrice);
  };

  useEffect(() => {
    getCart().then((res: { data: CartType }) => {
      const { items, totalQuantity } = res.data;
      setTotal(totalQuantity);
      setProducts(items);

      let totalPrice = 0;

      for (let i = 0; i < items.length; i++) {
        totalPrice += items[i].totalPrice;
      }

      setOrderTotalPrice(totalPrice);
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
    dispatch({ type: "set", totalQuantity: newTotalQuantity });
    setTotal(newTotalQuantity);
    setProducts(newProducts);
    sendDataToCart(cart);
    getOrderTotalPrice(newProducts);
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
    dispatch({ type: "set", totalQuantity: newTotal });
    getOrderTotalPrice(products);
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
    dispatch({ type: "set", totalQuantity: newTotal });
    getOrderTotalPrice(products);
  };

  return (
    <Box sx={isMobile ? boxMobileStyle : boxStyle}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
        <Grid item xs={12}>
          <Item>
            <Typography variant="h3" sx={titleStyle}>
              {SHOPPING_CART}
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={isMobile ? 12 : 7}>
          <ProductsCartTable
            products={products}
            onXClicked={onXClicked}
            productsImages={productsImages}
            onIncreaseclicked={onIncreaseclicked}
            onDecreaseclicked={onDecreaseclicked}
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 5}>
          <CartSummary totalPrice={orderTotalPrice} products={products} totalQuantity={total} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;
