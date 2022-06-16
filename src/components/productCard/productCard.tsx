import React from "react";
import { Box, CardMedia } from "@mui/material";

import { containerStyle, productImage,nameStyle, priceStyle } from "./productCard-style";

type ProductCardProps = {
  imgUrl: string;
  name: string;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
  const { imgUrl, name, price } = props;
  return (
    <Box sx={containerStyle}>
      <CardMedia
        component="img"
        sx={productImage}
        image={imgUrl}
        alt="Product name"
      />
      <Box sx={nameStyle}>{name}</Box>
      <Box sx={priceStyle}>${price}</Box>
    </Box>
  );
};

export default ProductCard;
