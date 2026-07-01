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

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  errorText: {
    fontSize: 14,
    color: '#d32f2f',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default styles;
