import axios from 'axios';
const BASE_URL = 'https://api.escuelajs.co/api/v1';
const GET_PRODUCTS = '/products';
const GET_CATEGORIES = '/categories';

export const getProducts = async() => {
  const response = await axios(BASE_URL + GET_PRODUCTS);
  return response.data;
}

export const getProductsByCategoryId = async (categoryId: number) => {
  const response = await axios(`${BASE_URL}${GET_CATEGORIES}/${categoryId}${GET_PRODUCTS}`);
  return response.data;
}

export const getProduct = async (productId: number) => {
  const response = await axios(`${BASE_URL}${GET_PRODUCTS}/${productId}`);
  return response.data;
}
