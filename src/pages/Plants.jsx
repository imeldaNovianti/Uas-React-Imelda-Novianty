import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { History } from 'lucide-react'; // Import ikon History dari Lucide

function Plants() {
  const [user, setUser] = useState(null);  // State untuk menyimpan data pengguna
  const navigate = useNavigate();  // Hook untuk navigasi ke halaman lain

  // Mengambil data user dari Local Storage
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUser(currentUser);  // Menyimpan data pengguna ke state jika ada
    }
  }, []);  // Kosongkan dependency array agar efek hanya dijalankan sekali

  // Fungsi untuk navigasi ke halaman riwayat
  const goToHistory = () => {
    navigate('/history');  // Mengarahkan ke halaman riwayat pesanan
  };

  return (
    <div className="page-content" style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center'}}>
      <h1 style={{ marginBottom: '20px' }}>HALLO!</h1>
      <p style={{ marginBottom: '20px' }}>INFO YOUR ACCOUNT</p>

      {/* Tampilkan data pengguna jika ada */}
      {user ? (
        <div className="user-info" style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '10px' }}>Selamat datang, {user.name}!</h3> {/* Menampilkan nama pengguna */}
          <p style={{ marginBottom: '10px' }}>Email: {user.email}</p> {/* Menampilkan email pengguna */}
          <p style={{ marginBottom: '20px' }}>Nomor Telepon: {user.phone}</p> {/* Menampilkan nomor telepon pengguna */}
          
          {/* Tambahkan tombol untuk mengakses halaman history */}
          <button
            onClick={goToHistory}
            style={{
              background: 'black',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              fontSize: '26px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            data pemesanan anda
          </button>
        </div>
      ) : (
        <p>Data pengguna tidak ditemukan. Silakan login untuk melihat informasi Anda.</p> // Pesan jika tidak ada data pengguna
      )}

      {/* Ikon History di tengah layar */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
        <History size={50} /> {/* Menampilkan ikon History dari Lucide */}
      </div>
    </div>
  );
}

export default Plants;
