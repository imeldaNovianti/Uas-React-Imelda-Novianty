import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { ArrowLeft } from "lucide-react"; // Import ikon ArrowLeft dari Lucide

// Data Hampers
const hampersData = [
  {
    id: 1,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/111157_standing",
    name: "Winter Wonderland Hamper",
    price: "£49.99",
    stock: "Available",
    description: "A delightful hamper with festive treats for all to enjoy.",
    rating: 4.5,
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/111160_standing",
    name: "Luxury Hamper",
    price: "£59.99",
    stock: "Available",
    description: "A luxury hamper packed with gourmet delights.",
    rating: 4.8,
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/111159_standing",
    name: "Christmas Hamper",
    price: "£39.99",
    stock: "Available",
    description: "Perfect for the holiday season with festive goodies.",
    rating: 4.2,
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/111158_standing",
    name: "Gourmet Hamper",
    price: "£69.99",
    stock: "Limited",
    description: "A curated selection of gourmet treats.",
    rating: 4.7,
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/111161_standing",
    name: "Deluxe Hamper",
    price: "£89.99",
    stock: "Available",
    description: "A deluxe hamper with premium wines and chocolates.",
    rating: 5.0,
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/111083_standing",
    name: "Spring Hamper",
    price: "£45.99",
    stock: "Available",
    description: "A fresh spring hamper with seasonal delights.",
    rating: 4.3,
  },
  {
    id: 7,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/110924_standing",
    name: "Afternoon Tea Hamper",
    price: "£39.99",
    stock: "Available",
    description: "An afternoon tea hamper with premium teas and treats.",
    rating: 4.1,
  },
  {
    id: 8,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/111084_standing",
    name: "The Perfect Hamper",
    price: "£55.99",
    stock: "Limited",
    description: "A perfect hamper for any occasion with luxury snacks.",
    rating: 4.6,
  },
  {
    id: 9,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/111153_standing",
    name: "Cheese and Wine Hamper",
    price: "£74.99",
    stock: "Available",
    description: "A delightful hamper with a selection of fine cheese and wine.",
    rating: 4.9,
  },
  {
    id: 10,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/111084_standing",
    name: "Classic Treats Hamper",
    price: "£49.99",
    stock: "Available",
    description: "An elegant hamper with classic treats and snacks.",
    rating: 4.4,
  },
  {
    id: 11,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/111086_standing",
    name: "Celebration Hamper",
    price: "£79.99",
    stock: "Limited",
    description: "Celebrate in style with this luxurious hamper.",
    rating: 4.7,
  },
  {
    id: 12,
    image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/v1/Raw/111087_standing",
    name: "Healthy Living Hamper",
    price: "£59.99",
    stock: "Available",
    description: "A hamper filled with healthy and organic treats.",
    rating: 4.3,
  },
];

const Hampers = () => {
  return (
    <div className="page-content">
      {/* Banner Section */}
      <div className="banner-section">
        <img
          src="https://www.weddingsutra.com/images/wedding-images/entertaining/festive-gifting/festive-gifting-50.webp"
          alt="Hampers Banner"
          className="banner-image"
        />
        <div className="banner-text">
          <h1>Hampers</h1>
          <p>Explore our delightful hampers for any occasion!</p>
        </div>
      </div>

      {/* Products */}
      <div className="products">
        {hampersData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="info">
              <h3>{product.name}</h3>
              <p className="description">{product.description}</p>
              <p className="price">{product.price}</p>
              <p className="stock">Stock: {product.stock}</p>
              <div className="rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    color={i < Math.round(product.rating) ? "#FFD700" : "#ccc"}
                  />
                ))}
                <span className="rating-value">({product.rating})</span>
              </div>
            </div>
          </div>
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

export default Hampers;
