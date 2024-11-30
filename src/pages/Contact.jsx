import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Komponen utama untuk halaman Hubungi Kami
export default function HubungiKami() {
  // State untuk menyimpan data formulir
  const [formData, setFormData] = useState({
    name: '', // Nama pengguna
    email: '', // Email pengguna
    mobile: '', // Nomor ponsel pengguna
    orderNumber: '', // Nomor pesanan pengguna (jika ada)
    postcode: '', // Kode pos penerima (jika tidak ada nomor pesanan)
    message: '', // Pesan yang ingin dikirimkan
  });

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (e) => {
    const { name, value } = e.target; // Mendapatkan nama dan nilai dari input yang berubah
    // Memperbarui state formData dengan nilai baru dari input yang diubah
    setFormData((prev) => ({
      ...prev, // Menyalin data sebelumnya
      [name]: value, // Memperbarui nilai field yang diubah
    }));
  };

  // Fungsi untuk menangani pengiriman formulir
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman setelah formulir disubmit
    console.log('Data Formulir:', formData); // Menampilkan data yang diisi pengguna di console (untuk debugging)

    // Tambahkan logika untuk pengiriman data ke server atau API di sini (misalnya menggunakan fetch atau axios)
    alert('Pesan Anda telah berhasil dikirim!'); // Menampilkan pesan konfirmasi setelah formulir dikirimkan

    // Reset form setelah berhasil dikirim (untuk mengosongkan input)
    setFormData({
      name: '',
      email: '',
      mobile: '',
      orderNumber: '',
      postcode: '',
      message: '',
    });
  };

  return (
    <div className="contact-us-container">
      {/* Judul halaman */}
      <h1>Hubungi Kami</h1>
      <p>
        Kami siap membantu! Silakan isi formulir di bawah ini, dan tim dukungan kami akan menghubungi Anda sesegera mungkin.
      </p>

      {/* Formulir Hubungi Kami */}
      <form onSubmit={handleSubmit} className="contact-form">
        {/* Input untuk Nama */}
        <div className="form-group">
          <label htmlFor="name">*Nama</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name} // Nilai input diikat dengan state formData
            onChange={handleChange} // Memanggil fungsi handleChange saat input berubah
            placeholder="Masukkan nama lengkap"
            required // Menandakan bahwa field ini wajib diisi
          />
        </div>

        {/* Input untuk Email */}
        <div className="form-group">
          <label htmlFor="email">*Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email} // Nilai input diikat dengan state formData
            onChange={handleChange} // Memanggil fungsi handleChange saat input berubah
            placeholder="Masukkan alamat email Anda"
            required // Menandakan bahwa field ini wajib diisi
          />
        </div>

        {/* Input untuk Nomor Ponsel */}
        <div className="form-group">
          <label htmlFor="mobile">Nomor Ponsel</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile} // Nilai input diikat dengan state formData
            onChange={handleChange} // Memanggil fungsi handleChange saat input berubah
            placeholder="Masukkan nomor ponsel"
          />
        </div>

        {/* Input untuk Nomor Pesanan */}
        <div className="form-group">
          <label htmlFor="orderNumber">Nomor Pesanan</label>
          <input
            type="text"
            id="orderNumber"
            name="orderNumber"
            value={formData.orderNumber} // Nilai input diikat dengan state formData
            onChange={handleChange} // Memanggil fungsi handleChange saat input berubah
            placeholder="Nomor pesanan"
          />
        </div>

        {/* Input untuk Kode Pos jika tidak ada nomor pesanan */}
        <div className="form-group">
          <label htmlFor="postcode">Tidak punya nomor pesanan? Masukkan kode pos penerima:</label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            value={formData.postcode} // Nilai input diikat dengan state formData
            onChange={handleChange} // Memanggil fungsi handleChange saat input berubah
            placeholder="Kode Pos Penerima"
          />
        </div>

        {/* Textarea untuk Pesan */}
        <div className="form-group">
          <label htmlFor="message">*Pesan</label>
          <textarea
            id="message"
            name="message"
            value={formData.message} // Nilai input diikat dengan state formData
            onChange={handleChange} // Memanggil fungsi handleChange saat input berubah
            placeholder="Masukkan pesan Anda"
            required // Menandakan bahwa field ini wajib diisi
          ></textarea>
        </div>

        {/* Tombol untuk mengirim formulir */}
        <button type="submit" className="submit-btn">Kirim</button>
      </form>

      {/* Navigasi ke halaman lain */}
      <div className="navigation-buttons">
        <Link to="/about" className="nav-button">about</Link>
        <Link to="/home" className="nav-button">home</Link>
      </div>
    </div>
  );
}
