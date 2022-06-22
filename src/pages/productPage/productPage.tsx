import React, { useEffect } from "react";
import { Box } from "@mui/system";
import { container } from "./productPage-style";
import { useParams } from "react-router-dom";

type ProductPageProps = {
  scrollToTop: () => void;
};

const ProductPage: React.FC<ProductPageProps> = ({
  scrollToTop,
}: ProductPageProps) => {
  const { productId } = useParams();

  useEffect(() => {
     scrollToTop();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Box sx={container}>productId{productId}</Box>;
};

export default ProductPage;
