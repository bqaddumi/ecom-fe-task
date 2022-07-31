import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
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
import { Autorenew } from '@mui/icons-material';
import { Typography, Button } from '@mui/material';
import ProductCounter from './productCounter';
import FavProduct from './FavProduct';
import { ADD_TO_CART } from '../../consts';
import { useTotalQuantity } from '../../shared/totalQuantityContext';
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
  const [cart, setCart] = useState<CartType>({
    changed: false,
    items: [],
    totalQuantity: 0,
  });

  const onFavoriteClicked = async () => {
    setIsFavorite((prev: boolean) => !prev);
    const favProduct = await getFavoriteProducts();

    const resultFavProducts = favProduct.data || [];

    // Check if the current product is favorite
    const isFav = !!resultFavProducts?.find(
      (e: { id: number | undefined }) => e.id === product?.id,
    );

    // If current product is favorite then filter out the product else add it to array
    const favProducts = isFav
      ? resultFavProducts?.filter(
          (e: { id: number | undefined }) => e.id !== product?.id,
        )
      : product
      ? [...resultFavProducts, product]
      : [];
    await sendDataFavoriteProducts(favProducts);
    // Add the count of favorite products to context
    if (isFav) {
      totalFavoriteContext.dispatch({ type: 'remove', totalFavorite: 1 });
    } else {
      totalFavoriteContext.dispatch({ type: 'add', totalFavorite: 1 });
    }
  };

  useEffect(() => {
    // Get current cart and check if the product is fav to change the icon
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

  // Add the current product to cart with its count
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
      const itemIndex = items.findIndex(
        (item: CartItemType) => item.id === existingItem.id,
      );
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
      navigate('/cart');
    } else {
      window.alert('Something went wrong please try again later!');
    }
  };

  return (
    <Box sx={detailsContainer}>
      <Typography data-testid="breadcrumbs" sx={pathNameStyle}>
        Home / {product?.name}
      </Typography>
      <Typography data-testid="productName" variant="h4" sx={productNameStyle}>
        {product?.name}
      </Typography>
      <Typography data-testid="price" sx={priceStyle}>
        ${numberWithCommas(product?.price.toFixed(2) || '')}
      </Typography>
      <Typography data-testid="desc" sx={descStyle}>
        {product?.desc}
      </Typography>
      <Box sx={productQuantityAndFav}>
        <ProductCounter quantity={quantity} setQuantity={setQuantity} />
        <FavProduct
          isFavorite={isFavorite}
          onFavoriteClicked={onFavoriteClicked}
        />
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
    </Box>
  );
};

export default ProductDetails;
