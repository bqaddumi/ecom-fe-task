import { Box, Stack, ListItem } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Header from "../header/header";
import ProductPage from "../../pages/productPage";
import ShopPage from "../../pages/shopPage";
import Navbar from "../navbar/navbar";
import { styles } from "./main-style";
import CartPage from "../../pages/cartPage/cartPage";

type MainProps = {
  isDark: boolean;
  onToggleDarkClicked: () => void;
};

const Main: React.FC<MainProps> = (props: MainProps) => {
  const { isDark, onToggleDarkClicked } = props;
  const { backgroundColor, color } = styles;
  return (
    <Box
      sx={{
        backgroundColor,
        color,
        height: "100vh",
      }}
    >
      <Stack spacing={2}>
        <Header onToggleDarkClicked={onToggleDarkClicked} isDark={isDark} />
        <ListItem>
          <Navbar />
        </ListItem>
        <ListItem>
          <Routes>
            <Route path="/" element={<CartPage />} />
            <Route path="*" element={<CartPage />} />
            {/* <Route path="/home" element={<CartPage />} /> */}
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products" element={<ShopPage />} />
            <Route path="/products/:productId/" element={<ProductPage />} />
          </Routes>
        </ListItem>
      </Stack>
    </Box>
  );
};

export default Main;
