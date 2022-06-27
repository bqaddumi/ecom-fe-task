import { useEffect, useState } from "react";
import { Box, Typography, Grid, CardMedia } from "@mui/material";
import { isMobile, isBrowser } from "react-device-detect";
import ProductsChunk from "../../components/productsChunk/productsChunk";
import ProductCardHorizantal from "../../components/productCardHorizontal/productCardHorizontal";
import CategoryFooter from "../../components/categoryFooter/categoryFooter";
import BrandsFooter from "../../components/brandsFooter/brandsFooter";
import {
  titleStyle,
  boxStyle,
  boxMobileStyle,
  firstSectionStyle,
  secondSectionStyle,
  titleContainer,
  firstSectionMobileStyle,
  categoryImage,
  thirdSectionContainer
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
  const categoryProducts = (id: string) =>
    getCategoryProductsByCategoryId(id, products);

  return (
    <Box sx={isMobile ? boxMobileStyle : boxStyle}>
      <Box sx={sectionStyle}>
        <Box sx={titleContainer}>
          <Typography variant="body1" sx={titleStyle}>
            {getCategoryById("c1", categories)?.name}
          </Typography>
        </Box>
        {isMobile ? (
          <Box
            sx={thirdSectionContainer}
          >
            {c1Products.map((product: ProductType, index: number) => {
              return <ProductCardHorizantal product={product} key={index} />;
            })}
          </Box>
        ) : (
          <ProductsChunk products={c1Products} chunkLimit={6} />
        )}
      </Box>
      <Box sx={secondSectionStyle}>
        {removeCategoryById("c1", categories).map((category: CategoryType) => {
          const cProducts = categoryProducts(category.id);
          return (
            <Box key={category.id} sx={secondSectionStyle}>
              <Box sx={sectionStyle}>
                {category.image ? (
                  <Grid container spacing={2}>
                    <Grid item xs={isMobile ? 12 : 8}>
                      <Box sx={titleContainer}>
                        <Typography variant="body1" sx={titleStyle}>
                          {category.name}
                        </Typography>
                      </Box>
                      {isMobile ? (
                        <Box
                          sx={thirdSectionContainer}
                        >
                          {cProducts.map(
                            (product: ProductType, index: number) => {
                              return (
                                <ProductCardHorizantal
                                  product={product}
                                  key={index}
                                />
                              );
                            }
                          )}
                        </Box>
                      ) : (
                        <ProductsChunk products={cProducts} chunkLimit={4} />
                      )}
                    </Grid>
                    <Grid item xs={isMobile ? 12 : 4}>
                      <CardMedia
                        sx={categoryImage}
                        component="img"
                        image={category.image}
                        alt="JBL speaker"
                      />
                    </Grid>
                    {isBrowser && <CategoryFooter />}
                  </Grid>
                ) : (
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Box sx={titleContainer}>
                        <Typography variant="body1" sx={titleStyle}>
                          {category.name}
                        </Typography>
                      </Box>
                      <Box
                        sx={thirdSectionContainer}
                      >
                        {cProducts.map(
                          (product: ProductType, index: number) => {
                            return (
                              <ProductCardHorizantal
                                product={product}
                                key={index}
                              />
                            );
                          }
                        )}
                        <BrandsFooter />
                      </Box>
                    </Grid>
                  </Grid>
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ShopPage;
