import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import { Autorenew, FavoriteBorder, Favorite } from "@mui/icons-material";
import {
  container,
  previewContainer,
  toggleProductscontainer,
  chevronContainer,
  imageStyle,
  detailsContainer,
  quantityContainerStyle,
  quantityButtonStyle,
  quantitytitleStyle,
  productQuantityAndFav,
  iconsContainer,
  priceStyle,
} from "./productPage-style";
import { useProducts } from "../../shared/productsContext";
import { ProductType } from "../../types";
import { ADD_TO_CART } from "../../consts";
import ProductPreviewImages from "../../components/productPreviewImages/productPreviewImages";
import ProductDetails from "../../components/productDetails/productDetails";

type ProductPageProps = {
  scrollToTop: () => void;
};

const ProductPage: React.FC<ProductPageProps> = ({
  scrollToTop,
}: ProductPageProps) => {
  const [product, setProduct] = useState<ProductType>();
  const [quantity, setQuantity] = useState<number>(1);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const { productId = "" } = useParams();
  const {
    state: { products },
  } = useProducts();

  useEffect(() => {
    const productN = products.find(
      (product: ProductType) => product.id === parseInt(productId, 10)
    );
    setProduct(productN);
    scrollToTop();
  }, [productId, products, scrollToTop]);

  const onImageClicked = (image: string) => {
    setSelectedImage(image);
  };

  const onFavoriteClicked = () => {
    setIsFavorite((prev: boolean) => !prev);
  };

  const previewImgs = product?.previewImages || [
    product?.imgUrl ? product?.imgUrl : "",
  ];

  return (
    <Box sx={container}>
      <Box sx={previewContainer}>
        <Box>
          <ProductPreviewImages
            images={previewImgs}
            onImageClicked={onImageClicked}
          />
        </Box>
        <Box>
          <CardMedia
            component="img"
            sx={imageStyle}
            image={selectedImage || product?.imgUrl}
            alt={`Preview image ${product?.name}`}
          />
        </Box>
        <Box sx={detailsContainer}>
          <Typography>Home / {product?.name}</Typography>
          <Typography variant="h4">{product?.name}</Typography>
          <Typography sx={priceStyle}>${product?.price}</Typography>
          <Typography>{product?.desc}</Typography>
          <Box sx={productQuantityAndFav}>
            <Box sx={quantityContainerStyle}>
              <Box
                sx={quantityButtonStyle}
                onClick={() => quantity > 1 && setQuantity((prev) => prev - 1)}
              >
                -
              </Box>
              <Box sx={quantitytitleStyle}>{quantity}</Box>
              <Box
                sx={quantityButtonStyle}
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
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
            <Button> {ADD_TO_CART} </Button>
          </Box>
          <Typography>{product?.name}</Typography>
        </Box>
        <Box sx={toggleProductscontainer}>
          <Box sx={chevronContainer}>
            <ChevronLeftOutlined />
          </Box>
          <Box sx={chevronContainer}>
            <ChevronRightOutlined />
          </Box>
        </Box>
      </Box>
      <Box>
        <ProductDetails />
      </Box>
    </Box>
  );
};

export default ProductPage;
