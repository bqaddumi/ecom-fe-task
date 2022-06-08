import { Box, Stack, ListItem, Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import ProductPage from "../pages/productPage";
import ShopPage from "../pages/shopPage";
import Navbar from "./navbar";
import { HEADER_TITLE } from "../consts";

type MainProps = {};

const Main: React.FC<MainProps> = (props: MainProps) => {
  return (
    <Box>
      <Stack spacing={2}>
        <ListItem>
          <Typography variant="h3" component="div" sx={{ mr: 2 }}>
            {HEADER_TITLE}
          </Typography>
        </ListItem>
        <ListItem>
          <Navbar />
        </ListItem>
        <ListItem>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/products" element={<ShopPage />} />
            <Route path="/products/:productId/" element={<ProductPage />} />
          </Routes>
        </ListItem>
      </Stack>
    </Box>
  );
};

export default Main;
