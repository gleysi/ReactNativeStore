import { useSearch } from '@/context/SearchContext';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './styles';

type SearchModalProps = {
  visible: boolean;
  onClose: () => void;
};

const recentSearches = [
  'Laptop',
  'Headphones',
  'Shoes',
  'Backpack',
  'Smartwatch',
];

export default function SearchModal({ visible, onClose }: SearchModalProps) {
  const [localSearchText, setLocalSearchText] = useState('');
  const { setSearchText, setSelectedCategoryId } = useSearch();

  const handleSearch = (value?: string) => {
    const query = value ?? localSearchText;

    if (!query.trim()) return;

    setSearchText(query.trim());
    setSelectedCategoryId(null);
    setLocalSearchText('');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Top Search Bar */}
        <View style={styles.header}>
          <Pressable onPress={onClose} style={styles.iconButton}>
            <Ionicons name="arrow-back" size={24} color="#222" />
          </Pressable>

          <View style={styles.searchBox}>
            <Ionicons name="search" size={20} color="#777" />

            <TextInput
              value={localSearchText}
              onChangeText={setLocalSearchText}
              placeholder="Search products"
              placeholderTextColor="#777"
              style={styles.input}
              autoFocus
              returnKeyType="search"
              onSubmitEditing={() => handleSearch()}
            />

            {localSearchText.length > 0 && (
              <Pressable onPress={() => setLocalSearchText('')}>
                <Ionicons name="close-circle" size={20} color="#777" />
              </Pressable>
            )}
          </View>

          <Pressable onPress={() => handleSearch()} style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </Pressable>
        </View>

        {/* Recent Searches Content */}
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Recent searches</Text>

          <FlatList
            data={recentSearches}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Pressable
                style={styles.suggestionItem}
                onPress={() => handleSearch(item)}
              >
                <Ionicons name="time-outline" size={20} color="#555" />
                <Text style={styles.suggestionText}>{item}</Text>
              </Pressable>
            )}
          />

          {/* Bottom Search suggestion, typing... */}
          {localSearchText.length > 0 && (
            <View style={styles.liveSuggestion}>
              <Text style={styles.sectionTitle}>Search suggestion</Text>

              <Pressable
                style={styles.suggestionItem}
                onPress={() => handleSearch(localSearchText)}
              >
                <Ionicons name="search-outline" size={20} color="#555" />
                <Text style={styles.suggestionText}>
                  Search for "{localSearchText}"
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
