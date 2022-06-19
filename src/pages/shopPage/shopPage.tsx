import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { isMobile } from "react-device-detect";
import ProductCard from "../../components/productCard/productCard";
import PaginationButton from "../../components/paginationButton/paginationButton";
import ProductsChunk from "../../components/productsChunk/productsChunk";

import {
  titleStyle,
  boxStyle,
  boxMobileStyle,
  firstSectionStyle,
  secondSectionStyle,
  titleContainer,
  firstSectionMobileStyle,
  productsContainer,
} from "./shopPage-style";

import {
  removeCategoryById,
  getCategoryProductsByCategoryId,
  getCategoryById,
} from "./helpers";
import { CategoryType, ProductType } from "../../types";
import { getCategories, getProducts } from "../../axios";
type ShopPageProps = {};

const ShopPage: React.FC<ShopPageProps> = (props: ShopPageProps) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);

  const sectionStyle = isMobile ? firstSectionMobileStyle : firstSectionStyle;

  useEffect(() => {
    getCategories().then((res: { data: CategoryType[] }) => {
      const { data } = res;
      setCategories(data);
    });
    getProducts().then((res: { data: ProductType[] }) => {
      const { data } = res;
      setProducts(data);
    });
  }, []);

  const c1Products = getCategoryProductsByCategoryId("c1", products);

  return (
    <Box sx={isMobile ? boxMobileStyle : boxStyle}>
      <Box sx={sectionStyle}>
        <Box sx={titleContainer}>
          <Typography variant="body1" sx={titleStyle}>
            {getCategoryById("c1", categories)?.name}
          </Typography>
        </Box>
        <ProductsChunk products={c1Products} />
      </Box>
      <Box sx={secondSectionStyle}>
        {removeCategoryById("c1", categories).map((category: CategoryType) => {
          return (
            <Box key={category.id} sx={secondSectionStyle}>
              <Box sx={sectionStyle}>
                <Box sx={titleContainer}>
                  <Typography variant="body1" sx={titleStyle}>
                    {category.name}
                  </Typography>
                </Box>
                <Box sx={productsContainer}>
                  {getCategoryProductsByCategoryId(category.id, products).map(
                    (product) => {
                      const { name, imgUrl, price } = product;
                      return (
                        <ProductCard
                          name={name}
                          imgUrl={imgUrl}
                          price={price}
                        />
                      );
                    }
                  )}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ShopPage;
