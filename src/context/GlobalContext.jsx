import React, { createContext, useContext, useState, useEffect } from 'react';

// Membuat context global
const GlobalContext = createContext();

// Hook untuk menggunakan context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

// Komponen provider untuk context
export const GlobalProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]); // Menyimpan daftar produk favorit
  const [cartItems, setCartItems] = useState([]); // Menyimpan daftar produk di keranjang belanja
  const [products, setProducts] = useState([]); // Menyimpan daftar produk yang akan ditampilkan

  // Fungsi untuk inisialisasi data dari Local Storage
  const initializeState = () => {
    const storedFavorites = localStorage.getItem('favorites');
    const storedCartItems = localStorage.getItem('cartItems');

    // Menyimpan data dari Local Storage ke dalam state jika ada
    setFavorites(storedFavorites ? JSON.parse(storedFavorites) : []);
    setCartItems(storedCartItems ? JSON.parse(storedCartItems) : []);
  };

  useEffect(() => {
    initializeState(); // Mengambil data dari Local Storage saat pertama kali render
  }, []);

  // Sinkronisasi dengan Local Storage ketika data berubah
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Fungsi untuk menambah atau menghapus produk dari favorit
  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((item) => item.id === product.id);
      return isFavorite
        ? prevFavorites.filter((item) => item.id !== product.id)
        : [...prevFavorites, product];
    });
  };

  // Mengambil data produk dari API atau file lokal
  const fetchProducts = async () => {
    try {
      const response = await fetch('/path/to/products.json');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Mengambil produk saat komponen pertama kali di-render
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        favorites,
        setFavorites,
        cartItems,
        setCartItems,
        products,
        setProducts,
        toggleFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
