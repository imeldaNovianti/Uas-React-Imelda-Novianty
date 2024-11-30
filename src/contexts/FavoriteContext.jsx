import React, { createContext, useState, useContext } from 'react';

// Membuat Context untuk Favorite (Favorit)
const FavoriteContext = createContext();

// Hook untuk mengakses FavoriteContext di komponen lain
export const useFavorite = () => useContext(FavoriteContext);

// FavoriteProvider bertugas untuk menyediakan dan mengelola data favorit
export const FavoriteProvider = ({ children }) => {
  // State untuk menyimpan produk favorit, default-nya adalah array kosong
  const [favorites, setFavorites] = useState([]);

  // Fungsi untuk menambahkan produk ke dalam favorit
  const addToFavorite = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]); // Menambahkan produk ke array favorit
  };

  // Fungsi untuk menghapus produk dari favorit berdasarkan id produk
  const removeFromFavorite = (productId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== productId)); // Menghapus produk yang memiliki id yang sesuai
  };

  return (
    // Provider yang menyuplai context ke seluruh komponen yang dibungkus oleh FavoriteProvider
    <FavoriteContext.Provider value={{ favorites, addToFavorite, removeFromFavorite }}>
      {children}  {/* Komponen anak-anak yang dibungkus oleh FavoriteProvider dapat mengakses context ini */}
    </FavoriteContext.Provider>
  );
};
