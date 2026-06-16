import axios from 'axios';
const API = 'https://api.escuelajs.co/api/v1/products';

export const getProducts = async() => {
  const response = await axios(API);
  return response.data;
}

