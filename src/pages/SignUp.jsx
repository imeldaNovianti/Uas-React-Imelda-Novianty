import React, { useState } from 'react';  // Mengimpor React dan useState untuk membuat state lokal
import { useNavigate } from 'react-router-dom';  // Mengimpor useNavigate dari react-router-dom untuk navigasi antar halaman

const SignUp = () => {
  // Mendeklarasikan state untuk form input
  const [name, setName] = useState('');  // Menyimpan nama lengkap
  const [email, setEmail] = useState('');  // Menyimpan email
  const [phone, setPhone] = useState('');  // Menyimpan nomor telepon
  const [password, setPassword] = useState('');  // Menyimpan kata sandi
  const navigate = useNavigate();  // Hook untuk navigasi antar halaman

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();  // Mencegah refresh halaman saat submit form

    // Membuat objek user baru berdasarkan data form
    const newUser = { id: Date.now(), name, email, phone, password };

    // Mengambil data user yang sudah ada di localStorage, jika tidak ada, buat array kosong
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Menambahkan user baru ke dalam array existingUsers
    existingUsers.push(newUser);

    // Menyimpan kembali array users yang telah diperbarui ke localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Menampilkan alert bahwa registrasi berhasil
    alert('Registrasi berhasil!');

    // Setelah registrasi berhasil, navigasi ke halaman login
    navigate('/login');
  };

  return (
    <div className="signup-container">  {/* Kontainer utama untuk halaman registrasi */}
      <h2>Registrasi</h2>  {/* Judul halaman registrasi */}
      
      <form onSubmit={handleSubmit}>  {/* Form untuk input data registrasi, yang akan men-trigger handleSubmit saat dikirim */}
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={name}
          onChange={(e) => setName(e.target.value)}  // Mengupdate state 'name' ketika input berubah
          required  // Menandakan bahwa field ini wajib diisi
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Mengupdate state 'email' ketika input berubah
          required  // Menandakan bahwa field ini wajib diisi
        />
        <input
          type="tel"
          placeholder="Nomor Telepon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}  // Mengupdate state 'phone' ketika input berubah
          required  // Menandakan bahwa field ini wajib diisi
        />
        <input
          type="password"
          placeholder="Kata Sandi"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  // Mengupdate state 'password' ketika input berubah
          required  // Menandakan bahwa field ini wajib diisi
        />
        <button type="submit">Daftar</button>  {/* Tombol untuk submit form */}
      </form>
    </div>
  );
};

export default SignUp;  {/* Mengekspor komponen SignUp agar bisa digunakan di tempat lain dalam aplikasi */}
