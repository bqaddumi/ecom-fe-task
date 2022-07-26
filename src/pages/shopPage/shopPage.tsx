import { useEffect, useState } from 'react';
import { Box, Typography, Grid, CardMedia } from '@mui/material';
import ProductsChunk from '../../components/productsChunk/productsChunk';
import ProductCardHorizantal from '../../components/productCardHorizontal/productCardHorizontal';
import CategoryFooter from '../../components/categoryFooter/categoryFooter';
import BrandsFooter from '../../components/brandsFooter/brandsFooter';
import {
  titleStyle,
  boxStyle,
  secondSectionStyle,
  titleContainer,
  categoryImage,
  thirdSectionContainer,
  productsChunkContainer,
  thirdSectionDesktop,
  sectionStyle,
  gridContainer,
  gridSection,
  gridSectionImage,
} from './shopPage-style';

import {
  removeCategoryById,
  getCategoryProductsByCategoryId,
  getCategoryById,
} from './helpers';
import { CategoryType, ProductType } from '../../types';
import { getCategories, getProducts } from '../../axios';

const ShopPage: React.FC = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getProducts();
      const categoriesData = await getCategories();

      setCategories(categoriesData.data);
      setProducts(productsData.data);
    };
    fetchData();
  }, []);

  const c1Products = getCategoryProductsByCategoryId('c1', products);
  const categoryProducts = (id: string) =>
    getCategoryProductsByCategoryId(id, products);

  return (
    <Box sx={boxStyle}>
      <Box sx={sectionStyle}>
        <Box sx={titleContainer}>
          <Typography variant="body1" sx={titleStyle}>
            {getCategoryById('c1', categories)?.name}
          </Typography>
        </Box>
        <Box sx={thirdSectionContainer}>
          {c1Products.map((product: ProductType, index: number) => {
            return <ProductCardHorizantal product={product} key={index} />;
          })}
        </Box>
        <Box sx={productsChunkContainer}>
          <ProductsChunk products={c1Products} chunkLimit={6} />
        </Box>
      </Box>
      <Box sx={secondSectionStyle}>
        {removeCategoryById('c1', categories).map((category: CategoryType) => {
          const cProducts = categoryProducts(category.id);
          return (
            <Box key={category.id} sx={secondSectionStyle}>
              <Box sx={sectionStyle}>
                {category.image ? (
                  <Box sx={gridContainer}>
                    <Box sx={gridSection}>
                      <Box sx={titleContainer}>
                        <Typography variant="body1" sx={titleStyle}>
                          {category.name}
                        </Typography>
                      </Box>
                      <Box sx={thirdSectionContainer}>
                        {cProducts.map(
                          (product: ProductType, index: number) => {
                            return (
                              <ProductCardHorizantal
                                product={product}
                                key={index}
                              />
                            );
                          },
                        )}
                      </Box>
                      <Box sx={productsChunkContainer}>
                        <ProductsChunk products={cProducts} chunkLimit={4} />
                      </Box>
                    </Box>
                    <Box sx={gridSectionImage}>
                      <CardMedia
                        sx={categoryImage}
                        component="img"
                        image={category.image}
                        alt="JBL speaker"
                      />
                    </Box>
                    <CategoryFooter />
                  </Box>
                ) : (
                  <Grid container={true} spacing={2}>
                    <Grid item={true} xs={12}>
                      <Box sx={titleContainer}>
                        <Typography variant="body1" sx={titleStyle}>
                          {category.name}
                        </Typography>
                      </Box>
                      <Box sx={thirdSectionDesktop}>
                        {cProducts.map(
                          (product: ProductType, index: number) => {
                            return (
                              <ProductCardHorizantal
                                product={product}
                                key={index}
                              />
                            );
                          },
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
