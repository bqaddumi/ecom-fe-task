import { Box, Stack, ListItem } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { mainContainer, bodyScollableBoxstyle } from "./main-style";
import CartPage from "../../pages/cartPage/cartPage";
import ShopPage from "../../pages/shopPage/shopPage";
import FooterLinks from "../footer/footerLinks";

type MainProps = {};

const Main: React.FC<MainProps> = (props: MainProps) => {
  return (
    <Box sx={mainContainer}>
      <Header />
      <Navbar />
      <Box sx={bodyScollableBoxstyle}>
        <Stack>
          <ListItem>
            <Routes>
              <Route path="/" element={<CartPage />} />
              <Route path="*" element={<CartPage />} />
              {/* TODO: add product page */}
              {/* <Route path="/home" element={<HomePage />} /> */}
              <Route path="/cart" element={<CartPage />} />
              {/* TODO: Implement products page */}
              <Route path="/shop" element={<ShopPage />} />
              {/* TODO: add product page */}
              {/* <Route path="/products/:productId/" element={<ProductPage />} /> */}
            </Routes>
          </ListItem>

          <Footer />
          <FooterLinks />
        </Stack>
      </Box>
    </Box>
  );
};

export default Main;
