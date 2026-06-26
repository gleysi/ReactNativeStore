import SearchModal from '@/components/SearchModal/SearchModal';
import { SearchProvider } from '@/context/SearchContext';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { Pressable } from 'react-native';

export default function RootLayout() {
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <SearchProvider>
      <Stack
        screenOptions={{
          headerTitle: '',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerLeft: () => (
            <Pressable
              onPress={() => console.log('Menu pressed')}
              style={{ marginLeft: 16 }}
            >
              <Ionicons name="menu" size={28} color="#222" />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => setSearchVisible(true)}
              style={{ marginRight: 16 }}
            >
              <Ionicons name="search" size={24} color="#222" />
            </Pressable>
          ),
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>

      <SearchModal
        visible={searchVisible}
        onClose={() => setSearchVisible(false)}
      />
    </SearchProvider>
  );
}
