import { getCategories } from '@/services/categoryService';
import { useEffect, useState } from 'react';

export default function useCategories() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Runs AFTER every render (if dependencies change)
  useEffect(() => {
    // Setup side effects (fetch data)
    const categories = async() => {
      try {
        const categories = await getCategories();
        setCategories(categories);
      } catch (err) {
        setError('There is an issue when loading the categories');
      } finally {
        setLoading(false);
      }
    }

    // Return the Cleanup Function
    categories();
  }, []); // Dependency Array

  return {categories, loading, error};

}
