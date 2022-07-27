import React, { useRef } from 'react';
import { Box, Stack, ListItem } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import Header from '../header';
import Navbar from '../navbar';
import SubscribeForm from '../subscribeForm';
import { mainContainer, bodyScollableBoxstyle, listItem } from './main-style';
import CartPage from '../../pages/cartPage';
import ShopPage from '../../pages/shopPage';
import ProductPage from '../../pages/productPage';
import AddProductPage from '../../pages/addProduct';
import Login from '../../pages/loginPage';
import FooterLinks from '../footerLinks';

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
          <SubscribeForm />
          <FooterLinks />
        </Stack>
      </Box>
    </Box>
  );
};

export default Main;
