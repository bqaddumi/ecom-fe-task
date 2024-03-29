import React from 'react';
import { Box, Typography, CardMedia, CardContent } from '@mui/material';
import {
  container,
  nameStyle,
  cardContentStyle,
} from './productCardHorizontal-style';
import { ProductType } from '../../types';
import { numberWithCommas } from '../../helpers';
import { useNavigate } from 'react-router-dom';

interface ProductCardHorizantalProps {
  product: ProductType;
}

const ProductCardHorizantal: React.FC<ProductCardHorizantalProps> = (
  props: ProductCardHorizantalProps,
) => {
  const navigate = useNavigate();
  const {
    product: { imgUrl, name, price, id },
  } = props;

  return (
    <Box sx={container} onClick={() => navigate(`/products/${id}`)}>
      <CardMedia
        component="img"
        sx={{ width: 151, objectFit: 'contain' }}
        image={imgUrl}
        alt="Live from space album cover"
      />
      <Box sx={cardContentStyle}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="body1" sx={nameStyle}>
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ fontWeight: '500', color: '#AE1B26' }}
          >
            ${numberWithCommas(price.toFixed(2))}
          </Typography>
        </CardContent>
      </Box>
    </Box>
  );
};

export default ProductCardHorizantal;
