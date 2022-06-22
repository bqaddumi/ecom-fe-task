import React, { useEffect, useRef } from "react";
import { Box, Stack, ListItem } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { useProducts } from "../../shared/productsContext";
import { getProducts } from "../../axios";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { mainContainer, bodyScollableBoxstyle, listItem } from "./main-style";
import CartPage from "../../pages/cartPage/cartPage";
import ShopPage from "../../pages/shopPage/shopPage";
import FooterLinks from "../footer/footerLinks";
import ProductPage from "../../pages/productPage/productPage";
import { ProductType } from "../../types";

type MainProps = {};

const Main: React.FC<MainProps> = (props: MainProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { dispatch } = useProducts(); //{type:"set", products: products}

  useEffect(() => {
    getProducts().then((res: { data: ProductType[] }) => {
      const { data } = res;
      dispatch({ type: "set", products: data });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToTop = () => {
    ref.current?.scrollTo(0, 0);
  };

  return (
    <Box sx={mainContainer}>
      <Header />
      <Navbar />
      <Box ref={ref} sx={bodyScollableBoxstyle}>
        <Stack>
          <ListItem sx={listItem}>
            <Routes>
              <Route path="/" element={<CartPage />} />
              <Route path="*" element={<CartPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route
                path="/products/:productId/"
                element={<ProductPage scrollToTop={scrollToTop} />}
              />
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
