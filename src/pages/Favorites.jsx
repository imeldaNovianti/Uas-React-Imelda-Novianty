import React, { useEffect } from "react";
import { Heart, ShoppingCart } from "lucide-react"; // Mengimpor ikon Heart dan ShoppingCart dari lucide-react
import { useNavigate } from "react-router-dom"; // Mengimpor useNavigate untuk navigasi halaman
import { useGlobalContext } from "../context/GlobalContext"; // Mengimpor context global untuk mengelola data favorit

// Komponen untuk menampilkan produk-produk favorit
const Favorites = () => {
  // Mengambil data favorites dan fungsi setFavorites dari context global
  const { favorites, setFavorites } = useGlobalContext();
  
  // Menggunakan useNavigate untuk navigasi halaman
  const navigate = useNavigate();

  // useEffect untuk mengambil data favorit yang disimpan di localStorage
  useEffect(() => {
    // Mengambil data favorit dari localStorage jika ada, jika tidak ada set sebagai array kosong
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    // Jika data favorit berupa array, maka setFavorites akan memperbarui context global
    if (Array.isArray(storedFavorites)) {
      setFavorites(storedFavorites);
    }
  }, [setFavorites]); // Menambahkan setFavorites ke dalam dependensi untuk menghindari masalah rendering

  // Fungsi untuk menghapus produk dari daftar favorit
  const removeFavorite = (productId) => {
    // Memfilter produk favorit yang tidak memiliki productId yang sesuai
    const updatedFavorites = favorites.filter((product) => product.productId !== productId);
    
    // Memperbarui context global dengan data favorit yang telah diubah
    setFavorites(updatedFavorites);
    
    // Menyimpan data favorit yang telah diperbarui ke localStorage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Fungsi untuk mengarahkan pengguna ke halaman checkout dengan produk yang dipilih
  const handleBuyNow = (product) => {
    // Menggunakan navigate untuk pergi ke halaman checkout dan mengirim data produk sebagai state
    navigate("/checkout", { state: { product } });
  };

  return (
    <div className="favorites-container">
      {/* Header untuk halaman favorit */}
      <header className="favorites-header">
        <h2>Daftar Favorit</h2>
      </header>

      <div className="favorites-list">
        {/* Menampilkan pesan jika daftar favorit kosong */}
        {favorites.length === 0 ? (
          <p>Belum ada produk favorit.</p>
        ) : (
          // Menampilkan daftar produk favorit jika ada produk
          favorites.map((product, index) => (
            <div key={`${product.productId}-${index}`} className="product-card">
              {/* Menampilkan gambar produk */}
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              {/* <p>{`Stok: ${product.stock || "Tidak tersedia"}`}</p> */}
              <p>{`Harga: Rp ${product.price}`}</p>
              <div className="product-actions">
                {/* Tombol untuk menghapus produk dari daftar favorit */}
                <button onClick={() => removeFavorite(product.productId)}>
                  <Heart color="gray" /> Hapus dari Favorit
                </button>
                
                {/* Tombol untuk membeli produk sekarang */}
                <button onClick={() => handleBuyNow(product)}>
                  <ShoppingCart /> Beli Sekarang
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
