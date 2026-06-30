import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { ProductType } from '../../types/products.types';
import styles from './styles';

export default function ProductItem({ product }: { product: ProductType }) {
  const [imageError, setImageError] = useState(false);
  const placeholderImage = 'https://placehold.co/600x400';
  return (
    <View style={styles.productItem}>
      <Image
        source={{ uri: imageError ? placeholderImage : product.images[0] }}
        onError={() => setImageError(true)}
        style={styles.image}
      />
      <Text style={styles.title} numberOfLines={2}>
          {product.title}
      </Text>
    </View>
  );
};
