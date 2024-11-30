import React, { createContext, useState, useContext } from 'react';

// Membuat Context untuk Cart (Keranjang Belanja)
const CartContext = createContext();

// Hook untuk mengakses CartContext di komponen lain
export const useCart = () => useContext(CartContext);

// CartProvider bertugas untuk menyediakan dan mengelola data keranjang belanja
export const CartProvider = ({ children }) => {
  // State untuk menyimpan produk yang ada di keranjang belanja, default-nya adalah array kosong
  const [cart, setCart] = useState([]);

  // Fungsi untuk menambahkan produk ke dalam keranjang belanja
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Menambahkan produk ke array keranjang
  };

  // Fungsi untuk menghapus produk dari keranjang belanja berdasarkan id produk
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId)); // Menghapus produk yang memiliki id yang sesuai
  };

  return (
    // Provider yang menyuplai context ke seluruh komponen yang dibungkus oleh CartProvider
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}  {/* Komponen anak-anak yang dibungkus oleh CartProvider dapat mengakses context ini */}
    </CartContext.Provider>
  );
};
