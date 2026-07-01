import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, Text } from 'react-native';
import { ProductType } from '../../types/products.types';
import styles from './styles';

export default function ProductItem({ product }: { product: ProductType }) {
  const [imageError, setImageError] = useState(false);
  const placeholderImage = 'https://placehold.co/600x400';
  const router = useRouter();

  return (
    <Pressable
      style={styles.productItem}
      onPress={() => router.push({ pathname: '/productDetailScreen', params: { id: product.id}})}
    >
        <Image
          source={{ uri: imageError ? placeholderImage : product.images[0] }}
          onError={() => setImageError(true)}
          style={styles.image}
        />
        <Text style={styles.title} numberOfLines={2}>
          {product.title}
        </Text>
    </Pressable>
  );
};
