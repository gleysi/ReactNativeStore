import { createContext, ReactNode, useContext, useState } from 'react';

type SearchContextType = {
  searchText: string;
  setSearchText: (value: string) => void;
  selectedCategoryId: number | null;
  setSelectedCategoryId: (value: number | null) => void;
  categoryName: string | null;
  setCategoryName: (value: string | null) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchText, setSearchText] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [categoryName, setCategoryName] = useState<string | null>(null);

  return (
    <SearchContext.Provider value={{ searchText, setSearchText, selectedCategoryId, setSelectedCategoryId, categoryName, setCategoryName }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used inside SearchProvider');
  }

  return context;
}
