import React from "react";
import { Heart, Info, ShoppingCart } from "lucide-react"; // Mengimpor ikon dari Lucide
import { useGlobalContext } from "../context/GlobalContext"; // Mengimpor hook context

const ProductCard = ({ product }) => {
  const { addToFavorites, addToCart } = useGlobalContext(); // Mengambil fungsi dari GlobalContext

  // Menambahkan produk ke favorit
  const handleAddToFavorites = () => {
    if (window.confirm("Apakah Anda menyukai bunga ini?")) { // Menampilkan konfirmasi sebelum menambah ke favorit
      addToFavorites(product); // Menambahkan produk ke favorit menggunakan fungsi dari GlobalContext
    }
  };

  // Menambahkan produk ke keranjang belanja
  const handleAddToCart = () => {
    if (window.confirm("Apakah Anda akan menambahkan produk ini ke keranjang?")) { // Konfirmasi sebelum menambah ke keranjang
      addToCart(product); // Menambahkan produk ke keranjang menggunakan fungsi dari GlobalContext
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} /> {/* Menampilkan gambar produk */}
      <h3>{product.name}</h3> {/* Menampilkan nama produk */}
      <p>Harga: {product.price}</p> {/* Menampilkan harga produk */}
      <p>Stok: {product.stock}</p> {/* Menampilkan stok produk */}

      <div className="actions">
        <Info className="icon" /> {/* Ikon informasi (Tidak ada fungsi terkait) */}
        <Heart className="icon" onClick={handleAddToFavorites} /> {/* Ikon favorit yang menambah produk ke favorit */}
        <ShoppingCart className="icon" onClick={handleAddToCart} /> {/* Ikon keranjang belanja yang menambah produk ke keranjang */}
      </div>
      <button 
        className="btn-buy" 
        onClick={() => alert("Produk berhasil ditambahkan ke keranjang!")} // Fungsionalitas tombol Buy Now
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
