import { useProduct } from '@/hooks/useProducts';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './styles';

export default function ProductDetail() {
  const { id } = useLocalSearchParams<{ id: any }>();
  const { productData, productLoad, productError } = useProduct(id);
  const [imageError, setImageError] = useState(false);

  const placeholderImage = 'https://placehold.co/600x400';

  if (productLoad) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (productError) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{productError}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Pressable
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
      </Pressable>

      <Image
        source={{
          uri: imageError
            ? placeholderImage
            : productData.images?.[0],
        }}
        onError={() => setImageError(true)}
        style={styles.image}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{productData.title}</Text>
        <Text style={styles.price}>${productData.price}</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>
          {productData.description}
        </Text>
      </View>
    </ScrollView>
  );
}
