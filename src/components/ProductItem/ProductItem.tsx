import { Image, Text, View } from 'react-native';
import { ProductType } from '../../types/products.types';
import styles from './styles';

export default function ProductItem({ item }: { item: ProductType }) {
  return (
    <View style={styles.productItem}>
      <Image source={{ uri: item.images[0] }} style={styles.image}/>
      <Text style={styles.title} numberOfLines={2}>
          {item.title}
      </Text>
    </View>
  );
};
