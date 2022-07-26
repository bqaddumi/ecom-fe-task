import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  quantityContainerStyle,
  quantityButtonStyle,
  quantitytitleStyle,
  priceStyle,
  detailsContainer,
  productQuantityAndFav,
  iconsContainer,
  addToCartButtonStyle,
  pathNameStyle,
  productNameStyle,
  descStyle,
} from './productDetails-style';
import { CartItemType, CartType, ProductType } from '../../types';
import {
  getCart,
  getFavoriteProducts,
  sendDataToCart,
  sendDataFavoriteProducts,
} from '../../axios';
import { numberWithCommas } from '../../helpers';
import { Box } from '@mui/system';
import {
  Remove,
  Add,
  Favorite,
  FavoriteBorder,
  Autorenew,
} from '@mui/icons-material';
import { Typography, Button, AlertColor } from '@mui/material';
import { ADD_TO_CART } from '../../consts';
import { useTotalQuantity } from '../../shared/totalQuantityContext';
import CustomizedSnackbars from '../snackbar/snackbar';
import { useTotalFavorite } from '../../shared/favoriteContext';

interface ProductDetailsProps {
  product?: ProductType;
}

const ProductDetails: React.FC<ProductDetailsProps> = (
  props: ProductDetailsProps,
) => {
  const totalQuantityContext = useTotalQuantity();
  const totalFavoriteContext = useTotalFavorite();
  const navigate = useNavigate();
  const { product } = props;
  const [quantity, setQuantity] = useState<number>(1);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState<{
    message: string;
    severity: AlertColor;
  }>({
    message: '',
    severity: 'success',
  });
  const [cart, setCart] = useState<CartType>({
    changed: false,
    items: [],
    totalQuantity: 0,
  });

  const onFavoriteClicked = async () => {
    setIsFavorite((prev: boolean) => !prev);
    const favProduct = await getFavoriteProducts();

    const resultFavProducts = favProduct.data || [];
    const isFav = !!resultFavProducts?.find(
      (e: { id: number | undefined }) => e.id === product?.id,
    );
    const favProducts = isFav
      ? resultFavProducts?.filter(
          (e: { id: number | undefined }) => e.id !== product?.id,
        )
      : product
      ? [...resultFavProducts, product]
      : [];
    await sendDataFavoriteProducts(favProducts);
    if (isFav) {
      totalFavoriteContext.dispatch({ type: 'remove', totalFavorite: 1 });
    } else {
      totalFavoriteContext.dispatch({ type: 'add', totalFavorite: 1 });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const cart = await getCart();
      const favProduct = await getFavoriteProducts();
      const isFav = !!favProduct?.data?.find(
        (e: { id: number | undefined }) => e.id === product?.id,
      );
      setIsFavorite(isFav);
      setCart({ ...cart.data });
    };

    fetchData();
  }, [product]);

  const addToCart = async () => {
    const { totalQuantity, items = [] } = cart;
    const existingItem = items.find(
      (item: CartItemType) => item.id === product?.id,
    );
    const newTotal = totalQuantity + quantity;
    const newItems = items;

    if (!existingItem) {
      newItems.push({
        id: product?.id || -1,
        price: product?.price || 0,
        quantity,
        name: product?.name || '',
        totalPrice: (product?.price || 0) * quantity,
      });
    } else {
      existingItem.quantity += quantity;
      existingItem.totalPrice =
        existingItem.price * quantity + existingItem.totalPrice;
      const itemIndex = items.findIndex((item: CartItemType) => item.id === existingItem.id);
      newItems[itemIndex] = existingItem;
    }
    totalQuantityContext.dispatch({ type: 'set', totalQuantity: newTotal });
    setCart({ ...cart, items: newItems, totalQuantity: newTotal });
    const { status } = await sendDataToCart({
      ...cart,
      items: newItems,
      totalQuantity: newTotal,
    });

    if (status === 200) {
      await setSnackbar({
        message: `Product added! ${totalQuantity}`,
        severity: 'success',
      });
      navigate('/cart');
    } else {
      setSnackbar({
        message: `Proplem in add to cart, please try again later!`,
        severity: 'error',
      });
    }
  };

  return (
    <Box sx={detailsContainer}>
      <Typography sx={pathNameStyle}>Home / {product?.name}</Typography>
      <Typography variant="h4" sx={productNameStyle}>
        {product?.name}
      </Typography>
      <Typography sx={priceStyle}>
        ${numberWithCommas(product?.price.toFixed(2) || '')}
      </Typography>
      <Typography sx={descStyle}>{product?.desc}</Typography>
      <Box sx={productQuantityAndFav}>
        <Box sx={quantityContainerStyle}>
          <Box
            sx={quantityButtonStyle}
            onClick={() => quantity > 1 && setQuantity((prev: number) => prev - 1)}
          >
            <Remove />
          </Box>
          <Box sx={quantitytitleStyle}>{quantity}</Box>
          <Box
            sx={quantityButtonStyle}
            onClick={() => setQuantity((prev: number) => prev + 1)}
          >
            <Add />
          </Box>
        </Box>
        <Box
          sx={{
            ...iconsContainer,
            color: isFavorite ? '#D32F2F' : '#707070',
          }}
          onClick={onFavoriteClicked}
        >
          {isFavorite ? <Favorite /> : <FavoriteBorder />}
        </Box>
        <Box sx={iconsContainer}>
          <Autorenew />
        </Box>
      </Box>
      <Box>
        <Button sx={addToCartButtonStyle} onClick={addToCart}>
          {ADD_TO_CART}
        </Button>
      </Box>
      <Typography sx={pathNameStyle}>{product?.name}</Typography>
      <CustomizedSnackbars
        message={snackbar.message}
        severity={snackbar.severity}
      />
    </Box>
  );
};

export default ProductDetails;
