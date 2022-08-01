import React from 'react';
import { Box, CardMedia } from '@mui/material';
import { numberWithCommas } from '../../helpers';
import {
  containerStyle,
  productImage,
  nameStyle,
  priceStyle,
} from './productCard-style';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  imgUrl: string;
  name: string;
  price: number;
  productId: number;
}

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
  const navigate = useNavigate();
  const { imgUrl, name, price, productId } = props;
  return (
    <Box data-testid="productCardContainer" sx={containerStyle} onClick={() => navigate(`/products/${productId}`)}>
      <CardMedia
      data-testid="productImg"
        component="img"
        sx={productImage}
        image={imgUrl}
        alt="Product name"
      />
      <Box data-testid="productName" sx={nameStyle}>{name}</Box>
      <Box data-testid="productPrice" sx={priceStyle}>${numberWithCommas(price.toFixed(2))}</Box>
    </Box>
  );
};

export default ProductCard;
