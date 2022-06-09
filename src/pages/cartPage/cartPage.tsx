import { Box, Grid, Typography } from "@mui/material";
import { CartItemType, CartType } from "../../types";
import { getCart } from "../../axios";
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
  useEffect(() => {
    getCart().then((res: { data: CartType }) => {
      const { items } =res.data;
      setProducts(items)
    });
  },[]);

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
          <ProductsCartTable products={products}/>
        </Grid>
        <Grid item xs={4}>
          <Item>3</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;
