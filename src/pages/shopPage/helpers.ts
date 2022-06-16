import { CategoryType, ProductType } from "../../types";

const removeCategoryById = (id: string, categories: CategoryType[]) => {
  return categories.filter((category: CategoryType) => category.id !== id);
};

const getCategoryProductsByCategoryId = (
  id: string,
  products: ProductType[]
) => {
  return products.filter((product: ProductType) => product.categoryId === id);
};

const getCategoryById = (id: string, categories: CategoryType[]) => {
  return categories.find((category: CategoryType) => category.id === id);
};

export { removeCategoryById, getCategoryProductsByCategoryId, getCategoryById };
