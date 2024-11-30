import React, { useState, useEffect } from 'react';

const TransactionHistory = () => {
  // Mendeklarasikan state untuk menyimpan riwayat transaksi
  const [history, setHistory] = useState([]);

  // Mengambil data riwayat transaksi dari localStorage saat komponen di-mount
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));  // Mengambil data pengguna yang sedang login
    if (!currentUser) {
      alert('Silakan login untuk melihat riwayat transaksi');  // Jika tidak ada pengguna yang login, tampilkan peringatan
      return;  // Menghentikan eksekusi lebih lanjut
    }

    // Mengambil data transaksi dari localStorage (jika ada), atau array kosong jika belum ada
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    
    // Menyaring transaksi yang hanya dimiliki oleh pengguna yang sedang login
    const userHistory = transactions.filter(tx => tx.userId === currentUser.id);
    
    // Memperbarui state history dengan riwayat transaksi yang sesuai
    setHistory(userHistory);
  }, []);  // Menjalankan efek hanya sekali saat komponen pertama kali dimuat

  return (
    <div>
      <h2>Riwayat Transaksi</h2>
      {history.length > 0 ? (
        // Jika ada riwayat transaksi, tampilkan dalam bentuk daftar
        history.map((tx, index) => (
          <div key={index} className="transaction-card">
            <h3>{tx.product.name}</h3>  {/* Menampilkan nama produk */}
            <p>{tx.product.price}</p>  {/* Menampilkan harga produk */}
            <p>Tanggal: {tx.date}</p>  {/* Menampilkan tanggal transaksi */}
          </div>
        ))
      ) : (
        // Jika tidak ada transaksi, tampilkan pesan
        <p>Tidak ada transaksi</p>
      )}
    </div>
  );
};

export default TransactionHistory;
