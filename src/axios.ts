import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "https://test-50167.firebaseio.com";

export const getCart = () => {
  return axiosClient
    .get(`/cart.json`)
    .then((response) => response);
};

export const getProducts = () => {
    return axiosClient
      .get(`/products.json`)
      .then((response) => response);
  };


