import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { titleStyle } from "./cartPageStyle";
import { SHOPPING_CART } from "../../consts";

type CartPageProps = {};

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: "inherit",
}));

const CartPage: React.FC<CartPageProps> = (props: CartPageProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Item>
            <Typography variant="h3" sx={titleStyle}>
              {SHOPPING_CART}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>3</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;
