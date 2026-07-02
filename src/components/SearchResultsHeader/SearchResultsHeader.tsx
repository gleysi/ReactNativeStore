import { useSearch } from '@/context/SearchContext';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

export default function SearchResultsHeader({categoryName}: {categoryName?: string | null}) {
  const { searchText, setSearchText  } = useSearch();
  const router = useRouter();

  if (!searchText && !categoryName ) {
    return;
  }

  function handleCLose() {
    setSearchText('');
    router.navigate('/');
  }

  return (
    <View style={styles.searchHeader}>

      <Text style={styles.searchText}>
        { searchText ? `Results for: ${searchText}` : `Category: ${categoryName}` }
      </Text>

      <Pressable onPress={handleCLose}>
        <Ionicons name="close" size={16} color="#555" />
      </Pressable>
    </View>
  )
}
