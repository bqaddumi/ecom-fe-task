import { Box, Stack, ListItem } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Header from "../header/header";
import ShopPage from "../../pages/shopPage";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { mainContainer } from "./main-style";
import CartPage from "../../pages/cartPage/cartPage";

type MainProps = {
  isDark: boolean;
  onToggleDarkClicked: () => void;
};

const Main: React.FC<MainProps> = (props: MainProps) => {
  const { isDark, onToggleDarkClicked } = props;
  return (
    <Box sx={mainContainer}>
      <Stack>
        <Header onToggleDarkClicked={onToggleDarkClicked} isDark={isDark} />
        <Navbar />
        <ListItem>
          <Routes>
            <Route path="/" element={<CartPage />} />
            <Route path="*" element={<CartPage />} />
            {/* TODO: add product page */}
            {/* <Route path="/home" element={<HomePage />} /> */}
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products" element={<ShopPage />} />
            {/* TODO: add product page */}
            {/* <Route path="/products/:productId/" element={<ProductPage />} /> */}
          </Routes>
        </ListItem>
      
          <Footer />
       
      </Stack>
    </Box>
  );
};

export default Main;
