import React from 'react';
import { Link } from 'react-router-dom';

export default function Penghargaan() {
  return (
    <div className="container-page">
      {/* Judul Halaman */}
      <h1 className="page-title">Penghargaan Kami</h1>
      <p className="page-description">
        IMELDA CRAFT GALLERY merasa terhormat telah menerima sejumlah penghargaan dan pengakuan bergengsi.
        Kami percaya pada keunggulan di semua aspek bisnis kami dan memberikan pengalaman bintang lima kepada semua
        pelanggan kami. Terima kasih yang tulus kepada lebih dari dua juta pelanggan yang mempercayakan kami untuk mengirimkan
        perasaan mereka melalui bunga yang indah pada kesempatan istimewa.
      </p>

      {/* Grid Container untuk Penghargaan */}
      <div className="award-grid">
        <div className="award-item">
          <img src="/penghargaan1 (1).jpg" alt="Penghargaan Layanan Pelanggan Terbaik 2024" />
          <h3>Penghargaan Layanan Pelanggan Terbaik 2024</h3>
        </div>
        <div className="award-item">
          <img src="/penghargaan1 (4).jpg" alt="Penghargaan Desain Bunga Terbaik 2024" />
          <h3>Penghargaan Desain Bunga Terbaik 2024</h3>
        </div>
        <div className="award-item">
          <img src="/penghargaan1 (2).jpg" alt="Inovasi Luar Biasa dalam Layanan Bunga" />
          <h3>Inovasi Luar Biasa dalam Layanan Bunga</h3>
        </div>
        <div className="award-item">
          <img src="/penghargaan1 (3).jpg" alt="Penghargaan Pengiriman Bunga Online Terbaik 2024" />
          <h3>Penghargaan Pengiriman Bunga Online Terbaik 2024</h3>
        </div>
        <div className="award-item">
          <img src="/penghargaan1 (5).jpg" alt="Penghargaan Kepuasan Pelanggan Terbaik" />
          <h3>Penghargaan Kepuasan Pelanggan Terbaik</h3>
        </div>
        <div className="award-item">
          <img src="/penghargaan1 (6).jpg" alt="Penghargaan Penyusunan Bunga Terbaik" />
          <h3>Penghargaan Penyusunan Bunga Terbaik</h3>
        </div>
      </div>

      {/* Tombol Navigasi */}
      <div className="navigation-buttons">
        <Link to="/about" className="nav-button">BACK TO ABOUT</Link>
        <Link to="/home" className="nav-button">BACK TO HOME</Link>
      </div>
    </div>
  );
}
