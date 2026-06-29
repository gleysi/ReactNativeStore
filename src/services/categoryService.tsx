import axios from 'axios';
const API = 'https://api.escuelajs.co/api/v1/categories';

export const getCategories = async() => {
    const response = await axios(API);
    return response.data;
}
