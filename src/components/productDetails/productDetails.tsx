import React, { useState } from "react";
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
} from "./productDetails-style";
import { ProductType } from "../../types";
import { Box } from "@mui/system";
import {
  Remove,
  Add,
  Favorite,
  FavoriteBorder,
  Autorenew,
} from "@mui/icons-material";
import { Typography, Button } from "@mui/material";
import { ADD_TO_CART } from "../../consts";

type ProductDetailsProps = {
  product?: ProductType;
};

const ProductDetails: React.FC<ProductDetailsProps> = (
  props: ProductDetailsProps
) => {
  const { product } = props;
  const [quantity, setQuantity] = useState<number>(1);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const onFavoriteClicked = () => {
    setIsFavorite((prev: boolean) => !prev);
  };

  return (
    <Box sx={detailsContainer}>
      <Typography sx={pathNameStyle}>Home / {product?.name}</Typography>
      <Typography variant="h4" sx={productNameStyle}>
        {product?.name}
      </Typography>
      <Typography sx={priceStyle}>${product?.price}</Typography>
      <Typography sx={descStyle}>{product?.desc}</Typography>
      <Box sx={productQuantityAndFav}>
        <Box sx={quantityContainerStyle}>
          <Box
            sx={quantityButtonStyle}
            onClick={() => quantity > 1 && setQuantity((prev) => prev - 1)}
          >
            <Remove />
          </Box>
          <Box sx={quantitytitleStyle}>{quantity}</Box>
          <Box
            sx={quantityButtonStyle}
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            <Add />
          </Box>
        </Box>
        <Box
          sx={{
            ...iconsContainer,
            color: isFavorite ? "#D32F2F" : "#707070",
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
        <Button sx={addToCartButtonStyle}> {ADD_TO_CART} </Button>
      </Box>
      <Typography sx={pathNameStyle}>{product?.name}</Typography>
    </Box>
  );
};

export default ProductDetails;
