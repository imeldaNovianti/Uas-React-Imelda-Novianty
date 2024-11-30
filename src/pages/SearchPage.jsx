import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchPage() {
  const { state } = useLocation();
  const { results } = state || { results: [] };

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="product-list">
        {results.length > 0 ? (
          results.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{`Rp ${product.price}`}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
