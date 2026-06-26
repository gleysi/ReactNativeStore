import { useSearch } from '@/context/SearchContext';
import { useProducts } from '@/hooks/useProducts';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import ProductItem from '../ProductItem/ProductItem';
import styles from './styles';

export default function ProductList() {
  const { searchText } = useSearch();
  const { data, loading, error } = useProducts();

  const normalizedSearch = searchText.trim().toLowerCase();
  const filteredData = normalizedSearch
    ? data.filter((product) => product.title.toLowerCase().includes(normalizedSearch))
    : data;

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  
  if (filteredData.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.emptyTitle}>No products found</Text>
        <Text style={styles.emptyText}>
          Try searching with another keyword.
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      numColumns={2}
      contentContainerStyle={styles.listContent}
      columnWrapperStyle={styles.row}
      data={filteredData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ProductItem item={item} />}
      showsVerticalScrollIndicator={true}
    />
  )
};
