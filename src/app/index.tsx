import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import ProductItem from '../components/ProductItem/ProductItem';
import { useProducts } from '../hooks/useProducts';

export default function HomeScreen() {
  const { data, loading, error } = useProducts();

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>{error}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.row}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },

});
