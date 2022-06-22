import React from "react";
import { Box } from "@mui/system";
import { container } from "./productPage-style";
import { useParams } from "react-router-dom";

const ProductPage: React.FC = () => {
  const { productId } = useParams();

  return <Box sx={container}>productId{productId}</Box>;
};

export default ProductPage;
