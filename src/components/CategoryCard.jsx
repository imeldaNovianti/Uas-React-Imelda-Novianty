import React from 'react'; // Mengimpor React untuk mendefinisikan komponen fungsional
import { Link } from 'react-router-dom'; // Mengimpor Link dari react-router-dom untuk navigasi internal

// Mendefinisikan dan mengekspor komponen fungsional CategoryCard, yang menerima prop 'category'
export default function CategoryCard({ category }) {
  return (
    <div className="category-item"> {/* Kontainer utama untuk item kategori */}
      <Link to={category.link}> {/* Link untuk navigasi ke URL yang diberikan oleh prop 'category.link' */}
        <img src={category.image} alt={category.name} /> {/* Menampilkan gambar kategori dengan sumber dari prop 'category.image' dan alt text dari 'category.name' */}
        <h3>{category.name}</h3> {/* Menampilkan nama kategori dalam elemen heading */}
      </Link>
    </div>
  );
}
