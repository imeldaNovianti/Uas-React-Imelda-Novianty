import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <p>Here you can learn more about the services we offer, including custom flower arrangements, subscriptions, and next-day delivery.</p>
      
      <div className="back-to-about">
        <Link to="/about" className="back-link">Back to About Us</Link>
        <Link to="/home" className="back-link">Back to home</Link>

      </div>
    </div>
  );
}
