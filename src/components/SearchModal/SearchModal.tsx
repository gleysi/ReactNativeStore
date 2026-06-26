import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    FlatList,
    KeyboardAvoidingView,
    Modal,
    Platform,
    Pressable,
    Text,
    TextInput,
    View
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
  const [searchText, setSearchText] = useState('');

  const handleSearch = (value?: string) => {
    const query = value ?? searchText;

    if (!query.trim()) return;

    onClose();

    router.push({
      pathname: '/search' as any,
      params: { query },
    });

    setSearchText('');
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
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Search products"
              placeholderTextColor="#777"
              style={styles.input}
              autoFocus
              returnKeyType="search"
              onSubmitEditing={() => handleSearch()}
            />

            {searchText.length > 0 && (
              <Pressable onPress={() => setSearchText('')}>
                <Ionicons name="close-circle" size={20} color="#777" />
              </Pressable>
            )}
          </View>

          <Pressable onPress={() => handleSearch()} style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </Pressable>
        </View>

        {/* Content */}
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

          {searchText.length > 0 && (
            <View style={styles.liveSuggestion}>
              <Text style={styles.sectionTitle}>Search suggestion</Text>

              <Pressable
                style={styles.suggestionItem}
                onPress={() => handleSearch(searchText)}
              >
                <Ionicons name="search-outline" size={20} color="#555" />
                <Text style={styles.suggestionText}>
                  Search for "{searchText}"
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
