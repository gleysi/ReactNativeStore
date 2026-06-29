import { Ionicons } from '@expo/vector-icons';
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
          <View style={styles.header}>
            <Text style={styles.title}>Categories</Text>

            <Pressable onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={22} color="#222" />
            </Pressable>
          </View>

          <Pressable style={styles.menuItem}>
            <Text style={styles.menuText}>Home</Text>
          </Pressable>

        </View>

        {/* Transparent clickable area to close */}
        <Pressable style={styles.backdrop} onPress={onClose} />
      </View>
    </Modal>
  );
}
