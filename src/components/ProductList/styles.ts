import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    paddingBottom: 24,
  },

  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
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

  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginBottom: 6,
  },

  emptyText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default styles;
