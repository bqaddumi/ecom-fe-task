import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, CardMedia } from "@mui/material";
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";

import {
  container,
  previewContainer,
  toggleProductscontainer,
  chevronContainer,
  imageStyle,
} from "./productPage-style";
import { useProducts } from "../../shared/productsContext";
import { ProductType } from "../../types";

import ProductPreviewImages from "../../components/productPreviewImages/productPreviewImages";
import ProductInfo from "../../components/productInfo/productInfo";
import ProductDetails from "../../components/productDetails/productDetails";

type ProductPageProps = {
  scrollToTop: () => void;
};

const ProductPage: React.FC<ProductPageProps> = ({
  scrollToTop,
}: ProductPageProps) => {
  const [product, setProduct] = useState<ProductType>();
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
        <ProductDetails product={product} />
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
        <ProductInfo />
      </Box>
    </Box>
  );
};

export default ProductPage;
