import SearchModal from '@/components/SearchModal/SearchModal';
import SideMenu from '@/components/SideMenu/SideMenu';
import { SearchProvider } from '@/context/SearchContext';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text } from 'react-native';

export default function RootLayout() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [sideMenuVisible, setsideMenuVisible] = useState(false);
  const router = useRouter();

  return (
    <SearchProvider>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerLeft: () => (
            <Pressable
              onPress={() => setsideMenuVisible(true)}
              style={{ marginLeft: 16 }}
            >
              <Ionicons name="menu" size={28} color="#222" />
            </Pressable>
          ),

          headerTitle: () => (
            <Pressable
              onPress={() => router.navigate('/')}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: '#222',
                }}
              >
                SoniStore
              </Text>
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
      <SideMenu
        visible={sideMenuVisible}
        onClose={() => setsideMenuVisible(false)}
      />
    </SearchProvider>
  );
}
