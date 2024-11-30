import React from "react"; 
// Mengimpor React dari library untuk dapat menggunakan JSX

import { Navigate } from "react-router-dom"; 
// Mengimpor komponen Navigate dari React Router untuk melakukan pengalihan halaman

const ProtectedRoute = ({ element, isAuthenticated }) => { 
  // Membuat komponen ProtectedRoute yang menerima prop 'element' dan 'isAuthenticated'.
  // 'element' adalah elemen yang ingin ditampilkan jika user sudah terautentikasi
  // 'isAuthenticated' adalah status autentikasi pengguna

  return isAuthenticated ? element : <Navigate to="/login" />; 
  // Jika 'isAuthenticated' bernilai true (pengguna sudah login),
  // maka elemen yang diteruskan melalui prop 'element' akan dirender.
  // Jika tidak, pengguna akan diarahkan ke halaman login.
};

export default ProtectedRoute; 
// Mengekspor komponen ProtectedRoute agar dapat digunakan di tempat lain dalam aplikasi
