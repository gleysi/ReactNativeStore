import ProductList from '@/components/ProductList/ProductList';
import SearchResultsHeader from '@/components/SearchResultsHeader/SearchResultsHeader';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SearchResultsHeader/>
      <ProductList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
