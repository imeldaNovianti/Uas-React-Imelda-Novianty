import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // Import ikon dari Lucide

// Fungsi untuk menghasilkan bintang sesuai rating
const renderStars = (rating) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(i < Math.floor(rating) ? '⭐' : '☆');
  }
  return stars.join('');
};

const Review = () => {
  const initialReviews = [
    {
      name: 'Carol Reed',
      location: 'Plymouth',
      date: '19/11/2024',
      reviewText: 'Recipient very pleased with the flowers although box was damaged.',
      isSaved: false, // Menandakan review ini bukan review yang disimpan
    },
    {
      name: 'Noel Smith',
      location: 'Lancing',
      date: '19/11/2024',
      reviewText: 'Wonderful flowers, candy and card all done online from my home in Raleigh, North Carolina. Delivered on time with a smile.',
      isSaved: false, // Menandakan review ini bukan review yang disimpan
    },
  ];

  const [reviews, setReviews] = useState([]); // Menyimpan data review
  const [newReview, setNewReview] = useState({ // Menyimpan input review baru
    name: '',
    location: '',
    date: '',
    reviewText: '',
  });

  useEffect(() => {
    // Mengambil review dari localStorage, atau menggunakan review awal
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || initialReviews;
    setReviews(savedReviews);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    const updatedReviews = [...reviews, { ...newReview, isSaved: true }];
    setReviews(updatedReviews); // Menambahkan review baru ke state
    localStorage.setItem('reviews', JSON.stringify(updatedReviews)); // Menyimpan review baru ke localStorage
    setNewReview({ name: '', location: '', date: '', reviewText: '' }); // Reset form
  };

  const handleDeleteReview = (index) => {
    // Menghapus review hanya jika review tersebut disimpan di localStorage
    if (reviews[index].isSaved) {
      const updatedReviews = reviews.filter((review, i) => i !== index);
      setReviews(updatedReviews);
      localStorage.setItem('reviews', JSON.stringify(updatedReviews)); // Menyimpan perubahan ke localStorage
    }
  };

  return (
    <div className="review-container">
      <h1 className="review-title">Imelda Craft Gallery Flowers Customer Reviews</h1>
      <div className="customer-satisfaction">
        <p>Please see our Customer Satisfaction and Reviews as verified by these Independent Organisations:</p>
        <h2>Trustpilot</h2>

        {/* Ratings Container */}
        <div className="ratings-container">
          {/* All Time Rating */}
          <div className="rating-box">
            <h4>All Time</h4>
            <p>4.3/5 (86.4%)</p>
            <p>(Based on 553,275 reviews)</p>
            <div className="star-rating">{renderStars(4.3)} (4.3/5)</div>
          </div>

          {/* Last 30 Days Rating */}
          <div className="rating-box">
            <h4>Last 30 days</h4>
            <p>4.2/5 (84.6%)</p>
            <p>(Based on 1,066 reviews, 20 October - 19 November)</p>
            <div className="star-rating">{renderStars(4.2)} (4.2/5)</div>
          </div>

          {/* Last Week Rating */}
          <div className="rating-box">
            <h4>Last Week</h4>
            <p>4.1/5 (82.8%)</p>
            <p>(Based on 212 reviews, 12 November - 19 November)</p>
            <div className="star-rating">{renderStars(4.1)} (4.1/5)</div>
          </div>
        </div>
      </div>

      {/* Rating Breakdown */}
      <div className="rating-breakdown">
        <h2>Rating Breakdown</h2>
        <div className="star-rating">
          <div className="rating-item">
            <h3>5 star</h3>
            <p>⭐ 71%</p>
          </div>
          <div className="rating-item">
            <h3>4 star</h3>
            <p>⭐ 11%</p>
          </div>
          <div className="rating-item">
            <h3>3 star</h3>
            <p>⭐ 4%</p>
          </div>
          <div className="rating-item">
            <h3>2 star</h3>
            <p>⭐ 5%</p>
          </div>
          <div className="rating-item">
            <h3>1 star</h3>
            <p>⭐ 9%</p>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="customer-reviews">
        <h2>Customer Reviews</h2>

        {/* Existing reviews */}
        {reviews.map((review, index) => (
          <div className="review-item" key={index}>
            <div className="review-header">
              <img
                src={`https://i.pravatar.cc/50?img=${index}`}
                alt={`Profile of ${review.name}`}
                className="review-profile-pic"
              />
              <p>
                <strong>{review.name}</strong> - {review.location}, {review.date}
              </p>
            </div>
            <p>{review.reviewText}</p>

            {/* Button to delete review only if it's saved in localStorage */}
            {review.isSaved && (
              <button onClick={() => handleDeleteReview(index)} className="delete-button">
                Delete Review
              </button>
            )}
          </div>
        ))}

        {/* Form untuk menambahkan review baru */}
        <form onSubmit={handleAddReview} className="review-form">
          <h3>Add Your Review</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={newReview.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Your Location"
            value={newReview.location}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="date"
            value={newReview.date}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="reviewText"
            placeholder="Your Review"
            value={newReview.reviewText}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit Review</button>
        </form>
      </div>

      {/* Back to About Us */}
      <div className="back-to-about">
        <Link to="/about" className="back-link">Back to About Us</Link>
        <Link to="/home" className="back-link">Back to Home</Link>
      </div>
    </div>
  );
};

export default Review;
