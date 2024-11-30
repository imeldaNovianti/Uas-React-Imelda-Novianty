import React, { useState, useEffect } from 'react';

const History = () => {
  // State untuk menyimpan transaksi terakhir yang diambil dari localStorage
  const [lastTransaction, setLastTransaction] = useState(null);
  
  // State untuk mengontrol mode edit (apakah sedang dalam mode edit atau tidak)
  const [isEditing, setIsEditing] = useState(false);
  
  // State untuk menyimpan data transaksi yang sedang diedit
  const [updatedTransaction, setUpdatedTransaction] = useState(null);

  // useEffect untuk mengambil data transaksi dari localStorage saat halaman pertama kali dimuat
  useEffect(() => {
    // Mengambil data transaksi yang disimpan di localStorage
    const storedTransactions = JSON.parse(localStorage.getItem('transactions'));

    // Memastikan bahwa data yang diambil adalah array dan ada transaksi di dalamnya
    if (Array.isArray(storedTransactions) && storedTransactions.length > 0) {
      // Ambil transaksi terakhir dari array transaksi
      setLastTransaction(storedTransactions[storedTransactions.length - 1]);
      setUpdatedTransaction(storedTransactions[storedTransactions.length - 1]); // Set juga untuk digunakan dalam edit
    }
  }, []); // useEffect hanya dipanggil sekali saat pertama kali komponen dimuat

  // Fungsi untuk menangani perubahan input saat form edit diubah
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Mendapatkan nama dan nilai dari input yang berubah
    
    // Memperbarui state transaksi yang sedang diedit
    setUpdatedTransaction((prev) => ({
      ...prev,
      shippingInfo: {
        ...prev.shippingInfo,
        [name]: value, // Menyimpan perubahan pada atribut shippingInfo yang sesuai dengan name input
      },
    }));
  };

  // Fungsi untuk menangani pembaruan transaksi
  const handleUpdate = () => {
    if (updatedTransaction) {
      // Mengambil semua transaksi yang disimpan di localStorage
      const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
      
      // Memperbarui transaksi terakhir di dalam array transaksi
      storedTransactions[storedTransactions.length - 1] = updatedTransaction;

      // Menyimpan kembali array transaksi yang telah diperbarui ke localStorage
      localStorage.setItem('transactions', JSON.stringify(storedTransactions));

      // Memperbarui state transaksi terakhir dengan data yang sudah diupdate
      setLastTransaction(updatedTransaction);

      // Mengubah mode kembali ke mode lihat (tidak dalam mode edit)
      setIsEditing(false);

      // Memberikan notifikasi bahwa transaksi telah diperbarui
      alert('Transaksi berhasil diperbarui!');
    }
  };

  return (
    <div className="history-container">
      <h1>Riwayat Pembelian Terakhir</h1>
      <h3>Selamat datang di fitur history</h3>

      {lastTransaction ? (
        <div>
          <h3>Anda bisa cek dan update data anda di history terakhir Anda disini:</h3>

          {isEditing ? (
            // Menampilkan form edit jika dalam mode edit
            <div>
              <h3>Edit Detail Pengiriman</h3>
              <div className="form-group">
                <label htmlFor="name">Nama Lengkap:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={updatedTransaction.shippingInfo.name}
                  onChange={handleInputChange} // Menangani perubahan input
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Alamat Pengiriman:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={updatedTransaction.shippingInfo.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Nomor Telepon:</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={updatedTransaction.shippingInfo.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="paymentMethod">Metode Pembayaran:</label>
                <input
                  type="text"
                  id="paymentMethod"
                  name="paymentMethod"
                  value={updatedTransaction.shippingInfo.paymentMethod}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="deliveryDate">Tanggal Pengiriman:</label>
                <input
                  type="text"
                  id="deliveryDate"
                  name="deliveryDate"
                  value={updatedTransaction.shippingInfo.deliveryDate}
                  onChange={handleInputChange}
                />
              </div>

              {/* Tombol untuk menyimpan pembaruan */}
              <button onClick={handleUpdate}>Update Transaksi</button>
              {/* Tombol untuk membatalkan perubahan dan keluar dari mode edit */}
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          ) : (
            // Menampilkan transaksi jika tidak dalam mode edit
            <div>
              <p><strong>Tanggal Pembelian:</strong> {lastTransaction.date}</p>

              {/* Menampilkan detail produk dalam transaksi */}
              <div>
                <h3>Produk yang Dibeli:</h3>
                {lastTransaction.items && lastTransaction.items.map((item, idx) => (
                  <div key={idx}>
                    <p><strong>Nama Produk:</strong> {item.name}</p>
                    <p><strong>Harga:</strong> {item.price}</p>
                    <p><strong>Jumlah:</strong> {item.quantity}</p>
                  </div>
                ))}
              </div>

              {/* Menampilkan data pengiriman */}
              <div className="shipping-info">
                <p><strong>Nama Lengkap:</strong> {lastTransaction.shippingInfo.name}</p>
                <p><strong>Alamat Pengiriman:</strong> {lastTransaction.shippingInfo.address}</p>
                <p><strong>Nomor Telepon:</strong> {lastTransaction.shippingInfo.phoneNumber}</p>
                <p><strong>Metode Pembayaran:</strong> {lastTransaction.shippingInfo.paymentMethod}</p>
                <p><strong>Tanggal Pengiriman:</strong> {lastTransaction.shippingInfo.deliveryDate}</p>
              </div>

              {/* Tombol untuk memasuki mode edit */}
              <button onClick={() => setIsEditing(true)}>Edit Transaksi</button>
            </div>
          )}
        </div>
      ) : (
        // Menampilkan pesan jika tidak ada transaksi
        <p>Belum ada transaksi.</p>
      )}
    </div>
  );
};

export default History;
