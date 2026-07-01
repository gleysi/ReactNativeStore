import { useEffect, useState } from 'react';
import { getProduct, getProducts, getProductsByCategoryId } from '../services/productsService';

const globalProductsCache: Record<string | number, any[]> = {};

export const useProducts = (categoryId?: number | null) => {
  const activeCategoryId = categoryId || 'all';
  const [data, setData] = useState<any[]>(globalProductsCache[activeCategoryId] || []);
  const [loading, setLoading] = useState(!globalProductsCache[activeCategoryId]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {

      if (globalProductsCache[activeCategoryId]) {
        setData(globalProductsCache[activeCategoryId]);
        setLoading(false);
        return; 
      }

      setLoading(true);
      setError(null);

      try {
        let products;
        if (activeCategoryId && activeCategoryId !== 'all') {
          products = await getProductsByCategoryId(activeCategoryId);
        } else {
          products = await getProducts();
        }

        globalProductsCache[activeCategoryId] = products;
        setData(products);
      
      } catch (err) {
        setError('There is an issue when loading the products');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [activeCategoryId]);

  return { data, loading, error };
};

export const useProduct = (productId : number) => {
  const [productData, setProductData] = useState<any>([]);
  const [productLoad, setProductLoad] = useState(false);
  const [productError, setProductError] = useState<string | null>(null);

  // Runs AFTER every render (if dependencies change) Setup side effects (fetch data)
  useEffect(() => {

    const loadProduct = async () => {

      setProductLoad(true);
      try {
        const product = await getProduct(productId);
        setProductData(product);
      } catch (error) {
        setProductError('There is an issue when loading the product');
      } finally {
        setProductLoad(false);
      }
    }

    // Clean up function
    loadProduct();
  }, [productId]); // Dependency Array

  return { productData, productLoad, productError};
}
