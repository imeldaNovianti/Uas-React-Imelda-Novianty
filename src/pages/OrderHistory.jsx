import React, { useState, useEffect } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);  // State untuk menyimpan riwayat pesanan

  // Mengambil data riwayat pesanan dari localStorage saat komponen dimuat
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || []; // Ambil data 'orders' dari localStorage dan parse JSON
    setOrders(storedOrders);  // Simpan data riwayat pesanan ke state 'orders'
  }, []);  // Empty array sebagai dependency, artinya hanya dijalankan sekali saat komponen dimuat

  return (
    <div>
      <h2>Riwayat Pesanan</h2>
      {orders.length > 0 ? ( // Cek apakah ada pesanan yang tersimpan
        orders.map((order, index) => ( // Iterasi melalui array orders
          <div key={index}>  {/* Menampilkan setiap pesanan */}
            <p>Produk: {order.product.name}</p> {/* Menampilkan nama produk yang dibeli */}
            <p>Tanggal Pesan: {order.orderDate}</p> {/* Menampilkan tanggal pesanan */}
          </div>
        ))
      ) : (
        <p>Belum ada riwayat pesanan.</p> // Menampilkan pesan jika belum ada pesanan
      )}
    </div>
  );
};

export default OrderHistory;
