import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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

  const findProductIndex = () => {
    const productIndex = products.findIndex(
      (product: ProductType) => product.id === parseInt(productId, 10)
    );

    return productIndex;
  };

  const changeProduct = (direction: string) => {
    let index = findProductIndex();
    if (index === 0 && products && direction === "left") {
      index = products.length;
    } else if (index === products.length - 1 && direction === "right") {
      index = -1;
    }
    let nextProduct: ProductType;
    switch (direction) {
      case "left":
        nextProduct = products[index - 1];
        navigate(`/products/${nextProduct.id}`);
        break;
      case "right":
        nextProduct = products[index + 1];
        navigate(`/products/${nextProduct.id}`);

        break;
    }
  };
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
          <Box sx={chevronContainer} onClick={() => changeProduct("left")}>
            <ChevronLeftOutlined />
          </Box>
          <Box sx={chevronContainer}>
            <ChevronRightOutlined onClick={() => changeProduct("right")} />
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
