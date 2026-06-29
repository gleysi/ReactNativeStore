import { useEffect, useState } from 'react';
import { getProducts } from '../services/productsService';

export const useProducts = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const products = await getProducts();
        setData(products);
      } catch (err) {
        setError('There is an issue when loading the products');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return { data, loading, error };
};
