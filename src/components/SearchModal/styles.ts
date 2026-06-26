
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 56,
    paddingHorizontal: 12,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  iconButton: {
    padding: 8,
  },

  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 44,
    marginHorizontal: 8,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#222',
    marginLeft: 8,
  },

  searchButton: {
    backgroundColor: '#ff9900',
    paddingHorizontal: 12,
    height: 44,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchButtonText: {
    color: '#111',
    fontWeight: '700',
    fontSize: 14,
  },

  content: {
    flex: 1,
    padding: 16,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
    marginBottom: 12,
  },

  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  suggestionText: {
    fontSize: 16,
    color: '#222',
    marginLeft: 12,
  },

  liveSuggestion: {
    marginTop: 24,
  },
});

export default styles;
