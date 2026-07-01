import { useSearch } from '@/context/SearchContext';
import useCategories from '@/hooks/useCategories';
import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import {
  Modal,
  Pressable,
  Text,
  View
} from 'react-native';
import styles from './styles';

type SideMenuProps = {
  visible: boolean;
  onClose: () => void;
};

export default function SideMenu({ visible, onClose }: SideMenuProps) {
  const router = useRouter();
  const currentPathname = usePathname();
  const { categories, loading, error } = useCategories();
  const { setSelectedCategoryId, setSearchText, setCategoryName } = useSearch();

  const handleProducts = (categoryId: number, categoryName: string) => {
    setSelectedCategoryId(categoryId);
    setCategoryName(categoryName);
    setSearchText('');
    onClose();
    if (currentPathname !== '/') {
      router.dismissAll();
    }
  }

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        {/* Left menu */}
        <View style={styles.menuContainer}>

          { /* Categories Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Categories</Text>

            <Pressable onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={22} color="#222" />
            </Pressable>
          </View>

          {
            /* Load Categories */
            loading ? (
              <Text style={styles.menuText}>Loading...</Text>
            ) : error ? (
              <Text style={styles.menuText}>Error loading categories</Text>
            ) : (
              categories.map((category) => {
                return (
                  <Pressable key={category.id} style={styles.menuItem} onPress={() => handleProducts(category.id, category.name)}>
                    <Text style={styles.menuText}>{category.name}</Text>
                  </Pressable>
                );
              })
            )
          }
        </View>

        {/* Transparent clickable area to close */}
        <Pressable style={styles.backdrop} onPress={onClose} />
      </View>
    </Modal>
  );
}
