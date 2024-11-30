import React, { useEffect, useState } from 'react';

const OrderConfirmation = () => {
  const [order, setOrder] = useState(null); // State untuk menyimpan data pesanan

  // Mengambil data pesanan dari LocalStorage saat komponen dimuat
  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('orders')); // Mengambil data pesanan dari localStorage
    setOrder(orders ? orders[orders.length - 1] : null);  // Menyimpan pesanan terakhir ke state
  }, []); // Empty array sebagai dependency, hanya dijalankan sekali saat komponen dimuat

  return (
    <div>
      <h2>Konfirmasi Pesanan</h2>
      {order ? ( // Jika ada data pesanan
        <div>
          <p>Produk: {order.product.name}</p> {/* Menampilkan nama produk */}
          <p>Harga: Rp {order.product.price}</p> {/* Menampilkan harga produk */}
          <p>Penerima: {order.recipientName}</p> {/* Menampilkan nama penerima */}
          <p>Alamat: {order.address}</p> {/* Menampilkan alamat pengiriman */}
          <p>Tanggal Pesan: {order.orderDate}</p> {/* Menampilkan tanggal pemesanan */}
        </div>
      ) : (
        <p>Belum ada pesanan.</p> // Menampilkan pesan jika tidak ada pesanan
      )}
    </div>
  );
};

export default OrderConfirmation;
