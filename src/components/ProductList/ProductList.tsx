import { FlatList, StyleSheet } from 'react-native';
import { ProductListProps } from '../../types/products.types';
import ProductItem from '../ProductItem/ProductItem';

export default function ({ data, searchText }: ProductListProps) {
  return (
    <FlatList
      numColumns={2}
      contentContainerStyle={styles.listContent}
      columnWrapperStyle={styles.row}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ProductItem item={item} />}
      showsVerticalScrollIndicator={true}
    />
)};

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },

});
