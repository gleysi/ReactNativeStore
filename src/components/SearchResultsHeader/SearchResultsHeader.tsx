import { useSearch } from '@/context/SearchContext';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

export default function SearchResultsHeader() {
  const { searchText, setSearchText, selectedCategoryId, setSelectedCategoryId } = useSearch();

  if (!searchText && !selectedCategoryId) {
    return;
  }

  function handleCLose() {
    setSearchText('');
    setSelectedCategoryId(null);
  }

  return (
    <View style={styles.searchHeader}>

      <Text style={styles.searchText}>
        { searchText ? `Results for: ${searchText}` : `Category: ${selectedCategoryId}` }
      </Text>

      <Pressable onPress={handleCLose}>
        <Ionicons name="close" size={16} color="#555" />
      </Pressable>
    </View>
  )
}
