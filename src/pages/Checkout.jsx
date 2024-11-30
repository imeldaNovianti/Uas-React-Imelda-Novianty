import React, { useState, useEffect } from 'react'; // Mengimpor React, useState, dan useEffect dari React
import { useNavigate } from 'react-router-dom'; // Mengimpor hook useNavigate dari react-router-dom untuk navigasi antar halaman

const Checkout = () => {
  // Mendeklarasikan state untuk menyimpan informasi pengiriman
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    paymentMethod: '',
    deliveryDate: '',
  });

  // Mendeklarasikan state untuk menyimpan cart, yang diambil dari localStorage
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []); // Mengambil data keranjang dari localStorage, atau menggunakan array kosong jika tidak ada data

  const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi antar halaman

  // Fungsi untuk menangani perubahan input pada form
  const handleChange = (e) => {
    const { name, value } = e.target; // Mengambil nama dan nilai dari input
    setShippingInfo((prevInfo) => ({
      ...prevInfo, // Menyalin data sebelumnya
      [name]: value, // Mengubah nilai input yang sesuai dengan nama field
    }));
  };

  // Fungsi untuk menangani pengiriman formulir (checkout)
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah perilaku default form (refresh halaman)

    // Simpan data pengiriman ke localStorage
    localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo));

    // Menyimpan transaksi ke localStorage
    const transaction = {
      date: new Date().toLocaleDateString(), // Mengambil tanggal saat transaksi dilakukan
      items: cart, // Menyimpan daftar produk dari keranjang
      shippingInfo: shippingInfo, // Menyimpan data pengiriman
    };

    // Mengambil daftar transaksi yang ada dari localStorage, jika tidak ada, inisialisasi dengan array kosong
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push(transaction); // Menambahkan transaksi baru ke dalam array transaksi
    localStorage.setItem('transactions', JSON.stringify(transactions)); // Menyimpan daftar transaksi kembali ke localStorage

    // Mengosongkan keranjang setelah checkout
    localStorage.removeItem('cart');
    setCart([]); // Mengupdate state cart menjadi array kosong

    // Menampilkan konfirmasi checkout
    alert('Pembelian berhasil! Informasi pengiriman sudah disimpan.');

    // Arahkan pengguna ke halaman riwayat setelah checkout
    navigate('/history');
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {/* Form untuk memasukkan informasi pengiriman */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nama Lengkap</label>
          <input
            type="text"
            id="name"
            name="name"
            value={shippingInfo.name}
            onChange={handleChange}
            required // Menandakan bahwa field ini wajib diisi
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Alamat Pengiriman</label>
          <input
            type="text"
            id="address"
            name="address"
            value={shippingInfo.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Nomor Telepon</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={shippingInfo.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="paymentMethod">Metode Pembayaran</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={shippingInfo.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Pilih metode pembayaran</option>
            <option value="creditCard">Kartu Kredit</option>
            <option value="bankTransfer">Transfer Bank</option>
            <option value="cashOnDelivery">Bayar di Tempat</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="deliveryDate">Tanggal Pengiriman</label>
          <input
            type="date"
            id="deliveryDate"
            name="deliveryDate"
            value={shippingInfo.deliveryDate}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="checkout-btn">Konfirmasi Pembelian</button>
      </form>
    </div>
  );
};

export default Checkout;
