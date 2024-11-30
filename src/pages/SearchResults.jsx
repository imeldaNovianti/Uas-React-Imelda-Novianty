import React from "react";  // Mengimpor React untuk menggunakan JSX
import { useLocation } from "react-router-dom";  // Mengimpor useLocation dari react-router-dom untuk mendapatkan data dari halaman sebelumnya

const SearchResults = () => {
  // Menggunakan useLocation hook untuk mendapatkan lokasi dan state dari halaman sebelumnya
  const location = useLocation();

  // Mengambil data 'results' dari state yang dikirim melalui navigation. Jika tidak ada, maka defaultnya adalah array kosong
  const { results } = location.state || { results: [] };

  return (
    <div className="search-results">  {/* Kontainer utama untuk menampilkan hasil pencarian */}
      <h2>Search Results</h2>  {/* Judul halaman hasil pencarian */}

      {/* Mengecek apakah ada hasil pencarian */}
      {results.length > 0 ? (
        <ul>  {/* Jika ada hasil, tampilkan dalam format list */}
          {results.map((product) => (  {/* Loop untuk menampilkan setiap produk */}
            <li key={product.id}>{product.name}</li>  {/* Menampilkan nama produk dalam list item */}
          ))}
        </ul>
      ) : (
        <p>No products found.</p>  {/* Jika tidak ada hasil pencarian, tampilkan pesan ini */}
      )}
    </div>
  );
};

export default SearchResults;  {/* Mengekspor komponen SearchResults agar bisa digunakan di bagian lain aplikasi */}
