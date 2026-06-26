import ProductList from '@/components/ProductList/ProductList';
import { useSearch } from '@/context/SearchContext';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useProducts } from '../hooks/useProducts';

export default function HomeScreen() {
  const { searchText } = useSearch();
  const { data, loading, error } = useProducts();

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>{error}</Text>;

  return (
    <View style={styles.container}>
      { searchText ? <Text>Results for : {searchText} </Text>: null }
      <ProductList data={data} searchText='searchText'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
