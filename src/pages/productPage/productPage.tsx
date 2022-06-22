import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";

import {
  container,
  previewContainer,
  toggleProductscontainer,
  chevronContainer
} from "./productPage-style";
import { useProducts } from "../../shared/productsContext";
import { ProductType } from "../../types";

type ProductPageProps = {
  scrollToTop: () => void;
};

const ProductPage: React.FC<ProductPageProps> = ({
  scrollToTop,
}: ProductPageProps) => {
  const [product, setProduct] = useState<ProductType>();
  const { productId = "" } = useParams();
  const {
    state: { products },
  } = useProducts();

  useEffect(() => {
    const product = products.find(
      (product: ProductType) => product.id === parseInt(productId, 10)
    );
    setProduct(product);
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={container}>
      <Box sx={previewContainer}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box sx={toggleProductscontainer}>
          <Box sx={chevronContainer}>
            <ChevronLeftOutlined />
          </Box>
          <Box sx={chevronContainer}>
            <ChevronRightOutlined />
          </Box>
        </Box>
      </Box>
      <Box>4</Box>
    </Box>
  );
};

export default ProductPage;
