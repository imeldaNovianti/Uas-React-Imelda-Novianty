import React, { createContext, useState, useContext } from 'react';

// Context untuk pencarian produk
const SearchContext = createContext();

// Hook custom untuk mengakses pencarian
export const useSearch = () => {
  return useContext(SearchContext);
};

// Provider untuk pencarian
export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');  // Menyimpan term pencarian

  // Mengembalikan Context dengan nilai yang dibagikan
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};
