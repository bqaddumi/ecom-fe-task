import axios from "axios";
import { CartType, CheckoutType } from "./types";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "https://test-50167.firebaseio.com";

export const getCart = () => {
  return axiosClient.get(`/cart.json`).then((response) => response);
};

export const getProducts = () => {
  return axiosClient.get(`/products.json`).then((response) => response);
};

export const sendDataToCart = (cart: CartType) => {
  return axiosClient.put(`/cart.json`, cart).then((response) => response);
};

export const sendDataToCheckout = (checkout: CheckoutType) => {
  return axiosClient.put(`/checkout.json`, checkout).then((response) => response);
};

export const getCheckout = () => {
  return axiosClient.get(`/checkout.json`).then((response) => response);
};

export const getCategories = () => {
  return axiosClient.get(`/categories.json`).then((response) => response);
}