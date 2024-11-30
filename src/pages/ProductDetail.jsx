import React from "react";
import { useNavigate } from "react-router-dom";

const ProductDetail = ({ product }) => {
  const navigate = useNavigate();

  // Fungsi untuk menangani klik tombol "Buy Now"
  const handleBuyNow = () => {
    // Tampilkan alert konfirmasi
    const confirmCheckout = window.confirm(
      "Apakah Anda ingin melanjutkan ke halaman checkout untuk produk ini?"
    );

    // Jika pengguna memilih "OK", arahkan ke halaman checkout
    if (confirmCheckout) {
      navigate("/checkout");
    } else {
      // Jika pengguna memilih "Cancel", arahkan kembali ke halaman produk
      navigate(`/products/${product.id}`); // Pastikan URL sesuai dengan halaman produk
    }
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Tombol Buy Now dengan konfirmasi */}
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
};

export default ProductDetail;
