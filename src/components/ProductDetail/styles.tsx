import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  image: {
    width: '100%',
    height: 300,
    backgroundColor: '#f5f5f5',
  },

  infoContainer: {
    padding: 16,
  },

  category: {
    fontSize: 14,
    color: '#6b7280', // gray
    marginBottom: 6,
    textTransform: 'capitalize',
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#111827',
  },

  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2563eb', // blue
    marginBottom: 12,
  },

  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 12,
  },

  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#374151',
  },
});

export default styles;
