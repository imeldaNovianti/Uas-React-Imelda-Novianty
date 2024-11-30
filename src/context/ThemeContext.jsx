import React, { createContext, useState, useContext, useEffect } from "react";

// Membuat context untuk tema aplikasi (light/dark)
const ThemeContext = createContext();

// Provider untuk tema yang akan membungkus komponen-komponen lain di aplikasi
export const ThemeProvider = ({ children }) => {
  // State untuk menyimpan status dark mode, default-nya adalah false (light mode)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect pertama untuk memeriksa apakah ada preferensi tema yang disimpan di localStorage
  useEffect(() => {
    // Mengambil nilai preferensi tema dari localStorage
    const savedTheme = localStorage.getItem("theme");

    // Jika ada preferensi yang tersimpan, set state isDarkMode sesuai dengan nilai tersebut
    setIsDarkMode(savedTheme === "dark");  // Jika nilai yang disimpan adalah "dark", set isDarkMode ke true
  }, []);  // Efek ini hanya dijalankan sekali saat pertama kali render komponen

  // useEffect kedua untuk menyimpan preferensi tema ke localStorage setiap kali isDarkMode berubah
  useEffect(() => {
    // Menyimpan nilai isDarkMode ke localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);  // Efek ini dijalankan setiap kali nilai isDarkMode berubah

  // Fungsi untuk toggle antara mode terang dan gelap
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);  // Membalik nilai isDarkMode dari true ke false atau sebaliknya
  };

  return (
    // Menyediakan ThemeContext ke seluruh komponen anak yang dibungkus oleh ThemeProvider
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}  {/* Komponen anak-anak yang dibungkus oleh ThemeProvider akan bisa mengakses ThemeContext */}
    </ThemeContext.Provider>
  );
};

// Hook untuk menggunakan ThemeContext di komponen lain
export const useTheme = () => useContext(ThemeContext);  // Menggunakan useContext untuk mengambil nilai dari ThemeContext
