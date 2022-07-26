import React, { useRef } from 'react';
import { Box, Stack, ListItem } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import { mainContainer, bodyScollableBoxstyle, listItem } from './main-style';
import CartPage from '../../pages/cartPage/cartPage';
import ShopPage from '../../pages/shopPage/shopPage';
import FooterLinks from '../footer/footerLinks';
import ProductPage from '../../pages/productPage/productPage';
import AddProductPage from '../../pages/addProduct/addProduct';
import Login from '../../pages/loginPage/loginPage';

const Main: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

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
              <Route path="/add-product" element={<AddProductPage />} />
              <Route path="/login" element={<Login />} />
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
