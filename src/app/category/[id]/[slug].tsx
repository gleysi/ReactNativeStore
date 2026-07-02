import ProductList from '@/components/ProductList/ProductList';
import SearchResultsHeader from '@/components/SearchResultsHeader/SearchResultsHeader';
import { useLocalSearchParams } from 'expo-router';

export default function CategoryScreen() {
  const { id, slug } = useLocalSearchParams();

  return (
    <>
      <SearchResultsHeader categoryName={Array.isArray(slug) ? slug[0] : slug} />
      <ProductList categoryId={Number(id)} />
    </>
  );
}
