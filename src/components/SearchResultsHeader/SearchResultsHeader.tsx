import { useSearch } from '@/context/SearchContext';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

export default function SearchResultsHeader() {
  const { searchText, setSearchText } = useSearch();
  return (
      searchText ? (
        <View style={styles.searchHeader}>
          <Text style={styles.searchText}>
            Results for: "{searchText}"
          </Text>
  
          <Pressable onPress={() => setSearchText('')}>
            <Ionicons name="close" size={16} color="#555" />
          </Pressable>
        </View>
      ) : null
  )
}
