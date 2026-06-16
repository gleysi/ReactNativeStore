import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useProducts } from '../hooks/useProducts';

export default function HomeScreen() {
  const { data, loading, error } = useProducts();

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>{error}</Text>;

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}

