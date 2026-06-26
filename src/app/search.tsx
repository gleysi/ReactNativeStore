import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function SearchScreen() {
  const { query } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search results</Text>
      <Text style={styles.query}>You searched for: {query}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },

  query: {
    fontSize: 16,
    color: '#555',
  },
});
