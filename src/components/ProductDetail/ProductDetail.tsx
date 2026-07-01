import { useLocalSearchParams } from 'expo-router';
import {
  Text,
  View
} from 'react-native';

export default function ProductDetail() {

  const { id } = useLocalSearchParams<{ id: string }>();
  return(
    <View>
      <Text>{id}</Text>
    </View>
  );
}
