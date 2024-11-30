import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";  // Pastikan untuk mengimpor file CSS

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState(""); // State untuk menyimpan email
  const [password, setPassword] = useState(""); // State untuk menyimpan password
  const navigate = useNavigate(); // Hook untuk menavigasi pengguna ke halaman lain setelah login

  // Fungsi untuk menangani proses login
  const handleLogin = () => {
    const user = { email, password }; // Simulasi data user yang berisi email dan password
    localStorage.setItem("currentUser", JSON.stringify(user)); // Menyimpan informasi user ke localStorage
    setIsAuthenticated(true); // Mengubah status autentikasi menjadi true setelah login
    navigate("/home"); // Mengarahkan pengguna ke halaman Home setelah login berhasil
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={e => e.preventDefault()}> {/* Menghindari pengiriman form secara default */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)} // Menangani perubahan input email
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)} // Menangani perubahan input password
        />
        <button type="button" onClick={handleLogin}>Login</button> {/* Menangani klik tombol login */}
      </form>
    </div>
  );
};

export default Login;
