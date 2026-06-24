import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listContent: {
    padding: 16,
    paddingBottom: 24,
  },

  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  productItem: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    minHeight: 220,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  image: {
    width: '100%',
    height: 140,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
  },
});

export default styles;
