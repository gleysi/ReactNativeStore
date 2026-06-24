import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import ProductItem from '../components/ProductItem/ProductItem';
import { useProducts } from '../hooks/useProducts';

export default function HomeScreen() {
  const { data, loading, error } = useProducts();

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>{error}</Text>;

  return (
    <View>
      <FlatList
        numColumns={2}
        contentContainerStyle={style.listContent}
        columnWrapperStyle={style.row}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductItem item={item} />}
      />
    </View>
  );
}

const style = StyleSheet.create({
  listContent: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },

});
