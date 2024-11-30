import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Data Letterbox Flowers
const letterboxFlowersData = [
  {
    id: 1,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/t_overlay_bestseller_nb/v1/Raw/110606_overview",
    name: "Bestseller Letterbox Flowers",
    price: "£24.99",
    stock: "Available",
    rating: 4.8,
    description: "A popular choice, these letterbox flowers are perfect for any occasion.",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/t_overlay_indy_best/v1/Raw/110120_overview",
    name: "Indy Best Letterbox",
    price: "£29.99",
    stock: "Available",
    rating: 4.9,
    description: "Indulge in a unique arrangement of letterbox flowers for your loved ones.",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/86304_overview",
    name: "Spring Letterbox Flowers",
    price: "£22.99",
    stock: "Available",
    rating: 4.7,
    description: "A fresh and colorful arrangement perfect for spring.",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/110560_overview",
    name: "Luxury Letterbox Flowers",
    price: "£39.99",
    stock: "Limited",
    rating: 4.8,
    description: "A premium collection of letterbox flowers for a luxurious gift.",
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/110722_overview",
    name: "Classic Letterbox Flowers",
    price: "£19.99",
    stock: "Available",
    rating: 4.6,
    description: "A timeless and elegant bouquet for any occasion.",
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/110721_overview",
    name: "Rose Letterbox Flowers",
    price: "£24.99",
    stock: "Available",
    rating: 4.5,
    description: "A stunning selection of roses packed neatly into a letterbox.",
  },
  {
    id: 7,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/111098_overview",
    name: "Letterbox Fresh Flowers",
    price: "£28.99",
    stock: "Limited",
    rating: 4.8,
    description: "Fresh and vibrant letterbox flowers delivered to your door.",
  },
  {
    id: 8,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/111009_overview",
    name: "Romantic Letterbox Flowers",
    price: "£34.99",
    stock: "Available",
    rating: 4.9,
    description: "Perfect for a romantic gesture, these flowers will brighten any day.",
  },
  {
    id: 9,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/105371_overview",
    name: "Simply Letterbox Flowers",
    price: "£19.99",
    stock: "Available",
    rating: 4.4,
    description: "A simple and beautiful bouquet, perfect for any occasion.",
  },
  {
    id: 10,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/111101_overview",
    name: "Bright Letterbox Flowers",
    price: "£27.99",
    stock: "Available",
    rating: 4.7,
    description: "Brighten someone's day with these vibrant letterbox flowers.",
  },
  {
    id: 11,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/111112_overview",
    name: "Elegant Letterbox Flowers",
    price: "£31.99",
    stock: "Available",
    rating: 4.8,
    description: "Elegance in a box, perfect for celebrating a special occasion.",
  },
  {
    id: 12,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/111010_overview",
    name: "Pure Letterbox Flowers",
    price: "£21.99",
    stock: "Available",
    rating: 4.3,
    description: "Pure and simple beauty, these flowers will delight any recipient.",
  },
  {
    id: 13,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/t_overlay_available_from_18/v1/Raw/110741_overview",
    name: "Available from 18th Letterbox Flowers",
    price: "£23.99",
    stock: "Available from 18th",
    rating: 4.6,
    description: "Available from the 18th, these flowers are a perfect gift.",
  },
  {
    id: 14,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/111100_overview",
    name: "Perfect Letterbox Flowers",
    price: "£30.99",
    stock: "Available",
    rating: 4.9,
    description: "The perfect letterbox flowers for any celebration.",
  },
  {
    id: 15,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/t_overlay_available_from_18/v1/Raw/111464_overview",
    name: "Seasonal Letterbox Flowers",
    price: "£25.99",
    stock: "Available from 18th",
    rating: 4.7,
    description: "A seasonal selection of flowers that will bring joy to any recipient.",
  },
];const LetterboxFlowers = () => {
  const itemsPerPage = 6; // Jumlah item per halaman
  const [currentPage, setCurrentPage] = useState(1);

  // Menghitung total halaman
  const totalPages = Math.ceil(letterboxFlowersData.length / itemsPerPage);

  // Menentukan data untuk halaman saat ini
  const currentData = letterboxFlowersData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Fungsi untuk navigasi halaman
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="page-content">
      {/* Banner Section */}
      <div className="banner-section">
        <div className="banner">
          <img
            src="https://th.bing.com/th/id/OIP.9bsMKFa9HJDHII2FnGql3QHaEK?w=1200&h=675&rs=1&pid=ImgDetMain"
            alt="Letterbox Flowers Banner"
            className="banner-image"
          />
        </div>
        <div className="banner-text">
          <h1>Letterbox Flowers</h1>
          <p>Explore our delightful letterbox flowers!</p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="products">
        {currentData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="info">
              <h3>{product.name}</h3>
              <p className="description">{product.description}</p>
              <p className="price">{product.price}</p>
              <p className="stock">Stock: {product.stock}</p>
              <p className="rating">Rating: {product.rating} / 5</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Back Home Button */}
      <div className="back-home">
        <Link to="/">
          <button className="back-home-button">
            <ArrowLeft size={20} /> Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LetterboxFlowers;
