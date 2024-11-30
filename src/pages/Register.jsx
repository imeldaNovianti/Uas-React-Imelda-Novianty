import React, { useState } from "react"; 
// Mengimpor React dan hook useState untuk mengelola state lokal pada komponen ini.

import { useNavigate } from "react-router-dom"; 
// Mengimpor hook useNavigate dari react-router-dom untuk melakukan navigasi antar halaman.

import "../index.css";  // Mengimpor file CSS untuk styling halaman ini.

const Register = () => {  // Mendeklarasikan komponen Register sebagai fungsi komponen fungsional.

  const [email, setEmail] = useState(""); // Mendeklarasikan state untuk menyimpan email yang dimasukkan oleh pengguna.// Menggunakan useState untuk memberi nilai awal kosong ("") pada email.

  const [password, setPassword] = useState(""); 
// Mendeklarasikan state untuk menyimpan password yang dimasukkan oleh pengguna.
  // Menggunakan useState untuk memberi nilai awal kosong ("") pada password.

  const [confirmPassword, setConfirmPassword] = useState(""); 
  // Mendeklarasikan state untuk menyimpan konfirmasi password yang dimasukkan oleh pengguna.
  // Menggunakan useState untuk memberi nilai awal kosong ("") pada confirmPassword.

  const [error, setError] = useState(""); 
  // Mendeklarasikan state untuk menangani error yang terjadi jika password tidak cocok
  // atau jika ada input yang tidak diisi dengan benar.

  const navigate = useNavigate();
  // Menggunakan hook useNavigate untuk mendapatkan fungsi navigasi agar bisa mengarahkan pengguna ke halaman lain setelah registrasi.

  const handleRegister = () => { 
    // Fungsi yang dijalankan ketika pengguna mengklik tombol "Register".

    if (password !== confirmPassword) {
      // Memeriksa apakah password yang dimasukkan sama dengan konfirmasi password.
      setError("Passwords do not match!"); 
      // Jika password dan konfirmasi tidak sama, tampilkan pesan error.
      return; // Keluar dari fungsi jika password tidak cocok.
    }

    if (!email || !password || !confirmPassword) {
      // Memeriksa apakah ada field yang kosong (email, password, atau konfirmasi password).
      setError("All fields are required!"); 
      // Menampilkan pesan error jika ada field yang kosong.
      return; // Keluar dari fungsi jika ada field yang kosong.
    }

    const newUser = { email, password }; 
    // Membuat objek pengguna baru dengan email dan password yang dimasukkan oleh pengguna.

    localStorage.setItem("currentUser", JSON.stringify(newUser)); 
    // Menyimpan data pengguna baru ke dalam LocalStorage agar data bisa digunakan di halaman lain.
    // Menggunakan JSON.stringify untuk mengonversi objek menjadi string agar bisa disimpan di LocalStorage.

    navigate("/home"); 
    // Menggunakan navigate untuk mengarahkan pengguna ke halaman "Home" setelah registrasi berhasil.
  };

  return (
    <div className="register-container">
      {/* Wrapper untuk konten registrasi */}
      <h2>Register</h2>
      {/* Judul halaman registrasi */}
      {error && <p className="error-message">{error}</p>} 
      {/* Menampilkan pesan error jika ada. Hanya muncul jika ada error di state error */}

      <form onSubmit={e => e.preventDefault()}>
        {/* Menggunakan form dengan onSubmit mencegah form melakukan reload (default behavior) */}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)} 
          // Menangani perubahan input email dan memperbarui state email dengan setEmail.
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)} 
          // Menangani perubahan input password dan memperbarui state password dengan setPassword.
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)} 
          // Menangani perubahan input konfirmasi password dan memperbarui state confirmPassword dengan setConfirmPassword.
        />

        <button type="button" onClick={handleRegister}>Register</button>
        {/* Tombol untuk memanggil fungsi handleRegister ketika diklik. */}
      </form>
    </div>
  );
};

export default Register;
