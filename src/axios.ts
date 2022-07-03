import axios from "axios";
import { CartType, CheckoutType, ProductType } from "./types";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "https://test-50167.firebaseio.com";

export const getCart = async () => {
  return await axiosClient.get(`/cart.json`);
};

export const getProducts = async () => {
  return await axiosClient.get(`/products.json`);
};

export const sendDataToProducts = async (products: ProductType[]) => {
  return await axiosClient.put(`/products.json`, products);
};

export const sendDataToCart = async (cart: CartType) => {
  return await axiosClient.put(`/cart.json`, cart);
};

export const sendDataToCheckout = async (checkout: CheckoutType) => {
  return await axiosClient.put(`/checkout.json`, checkout);
};

export const sendDataFavoriteProducts = async (products: ProductType[]) => {
  return await axiosClient.put(`/favoriteProducts.json`, products);
};

export const getFavoriteProducts = async () => {
  return await axiosClient.get(`/favoriteProducts.json`);
};

export const getCheckout = async () => {
  return await axiosClient.get(`/checkout.json`);
};

export const getCategories = async () => {
  return await axiosClient.get(`/categories.json`);
};
