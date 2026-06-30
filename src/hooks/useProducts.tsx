import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategoryId } from '../services/productsService';

export const useProducts = (categoryId?: number | null) => {

  const [cache, setCache] = useState<Record<string | number, any[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const activeCategoryId = categoryId || 'all';

  useEffect(() => {
    const loadData = async () => {

      // Check if we already have data for this category in our cache
      if (cache[activeCategoryId]) {
        return; 
      }

      setLoading(true);
      try {
        let products;
        if (activeCategoryId && activeCategoryId !== 'all') {
          products = await getProductsByCategoryId(activeCategoryId);
        } else {
          products = await getProducts();
        }

        // 2. Save the new products into the cache under the specific category key
        setCache((prevCache) => ({
          ...prevCache,
          [activeCategoryId]: products,
        }));
      
      } catch (err) {
        setError('There is an issue when loading the products');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [categoryId]);

  return { data: cache[activeCategoryId] || [], loading, error };
};
