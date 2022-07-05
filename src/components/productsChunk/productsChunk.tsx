import React, { useState } from "react";
import { Box } from "@mui/material";
import ProductCard from "../../components/productCard/productCard";
import PaginationButton from "../../components/paginationButton/paginationButton";
import { productsContainer, pageButtonContainer } from "./productsChunk-style";
import { ProductType } from "../../types";
import { getProductsChunked } from "../../pages/shopPage/helpers";

type ProductsChunkProps = {
  products: ProductType[];
  chunkLimit?: number;
};

const ProductsChunk: React.FC<ProductsChunkProps> = ({
  products = [],
  chunkLimit = 6,
}: ProductsChunkProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onTabClicked = (index: number) => {
    setActiveIndex(index);
  };

  const chunkedProducts = getProductsChunked(products, chunkLimit);

  return (
    <Box width={"100%"}>
      <Box sx={productsContainer}>
        {chunkedProducts[activeIndex]?.map((product) => {
          const { name, imgUrl, price, id } = product;
          return (
            <Box key={product.id}>
              <ProductCard
                name={name}
                imgUrl={imgUrl}
                price={price}
                productId={id}
              />
            </Box>
          );
        })}
      </Box>
      <Box sx={pageButtonContainer}>
        {chunkedProducts.map((item, index) => (
          <Box key={index}>
            <PaginationButton
              key={index}
              onTabClicked={() => onTabClicked(index)}
              isActive={activeIndex === index}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductsChunk;
