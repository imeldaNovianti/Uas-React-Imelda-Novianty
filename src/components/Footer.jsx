import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react'; // Mengimpor ikon dari Lucide
import { Link } from 'react-router-dom'; // Untuk navigasi internal

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#2c3e50', color: '#ffffff', padding: '20px 0' }}>
      <div className="footer-content" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="footer-left" style={{ flex: '1 1 300px', marginBottom: '20px' }}>
          <h3>Imelda Craft Gallery</h3>
          <p>Crafted with passion and creativity.</p>
          <div className="social-icons" style={{ display: 'flex', gap: '10px' }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={30} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={30} />
            </a>
          </div>
        </div>

        <div className="footer-middle" style={{ flex: '1 1 300px', marginBottom: '20px' }}>
          <h4>Contact Us</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}><Phone size={30} /> <span style={{ marginLeft: '10px' }}>+123 456 789</span></li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}><Mail size={30} /> <span style={{ marginLeft: '10px' }}>info@imeldacraft.com</span></li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}><MapPin size={30} /> <span style={{ marginLeft: '10px' }}>123 Craft Street, City, Country</span></li>
          </ul>
        </div>

        <div className="footer-right" style={{ flex: '1 1 300px', marginBottom: '20px' }}>
          <h4>Quick Links</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}><Link to="/about" style={{ color: '#ffffff', textDecoration: 'none' }}>About Us</Link></li>
            <li style={{ marginBottom: '10px' }}><Link to="/contact" style={{ color: '#ffffff', textDecoration: 'none' }}>Contact Us</Link></li>
            <li style={{ marginBottom: '10px' }}><Link to="/help" style={{ color: '#ffffff', textDecoration: 'none' }}>Help</Link></li>
            <li style={{ marginBottom: '10px' }}><Link to="/reviews" style={{ color: '#ffffff', textDecoration: 'none' }}>Reviews</Link></li>
            <li style={{ marginBottom: '10px' }}><Link to="/sustainability" style={{ color: '#ffffff', textDecoration: 'none' }}>Sustainability</Link></li>
            <li style={{ marginBottom: '10px' }}><Link to="/awards" style={{ color: '#ffffff', textDecoration: 'none' }}>Awards</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
