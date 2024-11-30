import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Pastikan untuk mengimpor file CSS

function TrackOrder() {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);
  const [error, setError] = useState('');

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e) => {
    setOrderId(e.target.value);
  };

  // Fungsi untuk men-track pesanan
  const trackOrder = () => {
    if (orderId.trim() === '') {
      setError('Harap masukkan ID Pesanan yang valid');
      return;
    }

    // Simulasi pencarian pesanan (Anda dapat menggantinya dengan API nyata)
    if (orderId.startsWith('123')) {
      setOrderStatus('Pesanan Anda sedang dalam perjalanan!');
      setError('');
    } else {
      setOrderStatus(null);
      setError('ID Pesanan tidak ditemukan');
    }
  };

  return (
    <div className="track-order-container">
      <div className="track-order-page">
        <h1>KAMI BERMITRA DENGAN POS INDONESIA</h1>
        <p>Masukkan ID pesanan Anda untuk melacak status pesanan Anda.</p>

        {/* Penjelasan Kerja Sama */}
        <div className="partnership-info">
          <p>
            Imelda Craft Gallery bangga bermitra dengan <strong>Pos Indonesia</strong> untuk layanan pengiriman yang andal dan efisien.
            Anda dapat dengan mudah melacak status pesanan Anda melalui sistem pelacakan kami yang didukung oleh Pos Indonesia.
          </p>
          <img 
            src="public/Black_and_Brown_Illustrative_Florist_Logo-removebg-preview.png" 
            alt="Logo Imelda Craft Gallery" 
            className="pos-logo"
          />
          <img 
            src="public/pos idn.png" 
            alt="Logo Pos Indonesia" 
            className="pos-logo"
          />
        </div>

        {/* Input ID Pesanan */}
        <input
          type="text"
          placeholder="Masukkan ID Pesanan"
          value={orderId}
          onChange={handleInputChange}
        />

        {/* Tombol Lacak Pesanan */}
        <button onClick={trackOrder}>
          Lacak Pesanan
        </button>

        {/* Pesan Error dan Status Pesanan */}
        {error && <p className="error-message">{error}</p>}
        {orderStatus && <p className="status-message">{orderStatus}</p>}

        {/* Tombol ke halaman Pos Indonesia */}
        <div className="tracking-link">
          <p>Untuk informasi lebih lanjut, Anda juga dapat menggunakan layanan Pos Indonesia:</p>
          <a href="https://www.posindonesia.co.id/id/tracking" target="_blank" rel="noopener noreferrer">
            <button>Lacak dengan Pos Indonesia</button>
          </a>
        </div>

        {/* Tombol untuk menuju halaman riwayat pembelian */}
        <div className="tracking-link">
          <Link to="/history">
            <button className="btn-history">Lihat Riwayat Pembelian</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TrackOrder;
