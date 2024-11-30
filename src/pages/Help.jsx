import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function PusatBantuan() {
  // Data FAQ untuk digunakan kembali
  const faqs = [
    { href: "https://www.google.com/search?q=pertanyaan+pengiriman", text: "Pertanyaan Pengiriman" },
    { href: "https://www.google.com/search?q=kualitas+dan+perawatan+bunga", text: "Kualitas & Perawatan" },
    { href: "https://www.google.com/search?q=cara+mengubah+pesanan+bunga", text: "Ubah Pesanan Saya" },
    { href: "https://www.google.com/search?q=produk+dan+pemesanan+imelda+craft+gallery", text: "Produk & Pemesanan" },
    { href: "https://www.google.com/search?q=rekomendasi+teman+untuk+layanan+bunga", text: "Rekomendasikan Teman" },
  ];

  return (
    <div className="help-center-container">
      <h1 className="help-center-title">Selamat Datang di Pusat Bantuan Kami</h1>
      <p className="help-center-description">
        Di sini Anda akan menemukan jawaban untuk pertanyaan paling umum melalui tombol-tombol di bawah ini. 
        Pertanyaan yang sering ditanyakan tercantum di bagian atas halaman ini. Jika Anda tidak menemukan apa yang Anda cari, 
        jangan ragu untuk menghubungi tim dukungan kami!
      </p>

      {/* Pertanyaan yang Sering Diajukan */}
      <div className="faq-container">
        <h2 className="faq-title">Pertanyaan yang Sering Diajukan</h2>
        <ul className="faq-list">
          {faqs.map((faq, index) => (
            <li key={index} className="faq-item">
              <a
                href={faq.href}
                target="_blank"
                rel="noopener noreferrer"
                className="faq-link"
                aria-label={`Link ke ${faq.text}`}
              >
                <Search className="faq-icon" />
                {faq.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="support-section">
        <div className="support-container">
          <div className="support-text">
            <h2>Masih membutuhkan bantuan?</h2>
            <p>
              Jika Anda tidak menemukan jawaban atas pertanyaan Anda atau masih membutuhkan bantuan, 
              silakan hubungi tim dukungan kami. Kami siap membantu Anda!
            </p>
          </div>
          <div className="support-actions">
            <a
              href="https://wa.me/6285223284793"
              target="_blank"
              rel="noopener noreferrer"
              className="chat-btn"
            >
              HUBUNGI KAMI DI WHATSAPP
            </a>
            <a
              href="https://www.instagram.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Hubungi Kami di INSTAGRAM
            </a>
          </div>
        </div>

        <div className="live-chat-container">
          <h3>Jam Operasional Live Chat</h3>
          <p>Tim live chat kami tersedia dari Senin - Minggu: 07.00 - 21.00 GMT</p>
        </div>

/
        <div className="track-order-container">
          <h3>Klik di sini untuk melacak pesanan Anda</h3>
          <a
            href="https://www.posindonesia.co.id/id/tracking"
            target="_blank"
            rel="noopener noreferrer"
            className="track-link"
          >          </a>
        </div>

        <div className="back-to-about">
          <Link to="/track-order" className="back-link">Lacak Pesanan Anda</Link>
        </div>
      </div>

      <div className="back-to-about">
        <Link to="/about" className="back-link">Kembali ke Tentang Kami</Link>
        <Link to="/home" className="back-link">Kembali ke Beranda</Link>
      </div>
    </div>
  );
}
