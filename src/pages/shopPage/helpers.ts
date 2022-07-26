import { CategoryType, ProductType } from '../../types';

const removeCategoryById = (id: string, categories: CategoryType[]) => {
  return categories.filter((category: CategoryType) => category.id !== id);
};

const getCategoryProductsByCategoryId = (
  id: string,
  products: ProductType[],
) => {
  return products.filter((product: ProductType) => product.categoryId === id);
};

const getCategoryById = (id: string, categories: CategoryType[]) => {
  return categories.find((category: CategoryType) => category.id === id);
};

const getProductsChunked = (products: ProductType[], chunkSize: number) => {
  const productChnked = [];

  for (let i = 0; i < products.length; i += chunkSize) {
    const chunk = products.slice(i, i + chunkSize);
    productChnked.push(chunk);
  }

  return productChnked;
};

export {
  removeCategoryById,
  getCategoryProductsByCategoryId,
  getCategoryById,
  getProductsChunked,
};
