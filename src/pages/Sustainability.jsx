import React from 'react';
import { Link } from 'react-router-dom';

export default function Keberlanjutan() {
  return (
    <div className="sustainability-container">
      <h1>Kontribusi Kami di Imelda Craft Gallery</h1>
      <p>
        Imelda Craft Gallery menjalankan tanggung jawab sosialnya dengan serius dan bekerja keras untuk memastikan bahwa produk 
        dan layanan kami, bersama dengan mitra kami, dikelola berdasarkan etika yang baik. Dalam semua operasi kami — mulai dari perencanaan, 
        pembelian, produksi, hingga pengiriman — kami berupaya memenuhi standar kualitas tertinggi. Ini berarti mengelola dan menggunakan 
        sumber daya alam secara bijaksana untuk menjaga kelestarian lingkungan.
      </p>

      {/* Mengurangi Limbah Plastik */}
      <section className="sustainability-section">
        <h2>Mengurangi Limbah Plastik</h2>
        <div className="sustainability-content">
          <div className="sustainability-image">
            <img src="public/recycling-removebg-preview.png" alt="Daur Ulang" />
          </div>
          <div className="sustainability-text">
            <p>
              Di Imelda Craft Gallery, kami berkomitmen penuh untuk meminimalkan dampak lingkungan dan mengambil langkah proaktif 
              dalam mengurangi limbah plastik. Kami menyadari bahwa polusi plastik adalah masalah global yang mendesak, dan sebagai 
              merek yang menghargai kreativitas, komunitas, dan peduli lingkungan, kami bertekad untuk menemukan solusi berkelanjutan.
            </p>
            <p>
              Kami telah beralih menggunakan kardus yang 100% dapat didaur ulang untuk kemasan kami, menghilangkan penggunaan plastik, 
              dan mengurangi dampak lingkungan kami.
            </p>
          </div>
        </div>
      </section>

      {/* Bekerja Sama dengan Mitra untuk Mengurangi Emisi */}
      <section className="sustainability-section">
        <h2>Bekerja Sama dengan Mitra untuk Mengurangi Emisi</h2>
        <div className="sustainability-content">
          <div className="sustainability-text">
            <p>
              Sebagai anggota yang bertanggung jawab dalam industri kerajinan, Imelda Craft Gallery menyadari pentingnya mengurangi emisi 
              untuk melawan perubahan iklim. Kami bekerja erat dengan mitra pengiriman dan logistik untuk menerapkan praktik berkelanjutan 
              yang meminimalkan jejak karbon kami.
            </p>
            <p>
              Kami berkolaborasi dengan mitra pengiriman untuk mengoptimalkan rute, menggunakan kendaraan hemat bahan bakar, dan menjajaki 
              bahan bakar serta teknologi alternatif.
            </p>
          </div>
          <div className="sustainability-image">
            <img src="public/delivery_truck-removebg-preview.png" alt="Truk Pengiriman" />
          </div>
        </div>
      </section>

      {/* Bekerja Sama dengan Mitra untuk Mendukung Komunitas */}
      <section className="sustainability-section">
        <h2>Bekerja Sama dengan Mitra untuk Mendukung Komunitas</h2>
        <div className="sustainability-content">
          <div className="sustainability-image">
            <img src="public/Sustainable_Practices-removebg-preview.png" alt="Praktik Berkelanjutan" />
          </div>
          <div className="sustainability-text">
            <p>
              Kami telah menjalin kemitraan yang kuat dengan petani bunga di Afrika Timur, khususnya di Kenya dan Ethiopia, untuk mendukung 
              komunitas lokal dan berkontribusi pada pengembangan mereka. Kami memprioritaskan praktik etis yang menguntungkan pelanggan 
              sekaligus memberdayakan mereka yang menanam bunga.
            </p>
            <p>
              Dengan memberikan upah yang layak, kondisi kerja yang aman, serta mendukung pendidikan dan layanan kesehatan, kami berupaya 
              meningkatkan kehidupan mitra kami dan komunitas mereka.
            </p>
          </div>
        </div>
      </section>

      <div className="back-to-about">
        <Link to="/about" className="back-link">back to about</Link>
      </div>
    </div>
  );
}
