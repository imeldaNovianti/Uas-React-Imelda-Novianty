import React, { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { Home, HelpCircle, User, ShoppingCart, Truck, Heart, Package, Moon, Sun } from 'lucide-react'; 
import { useGlobalContext } from '../context/GlobalContext'; 

function Header() {
  const { favorites, cartItems } = useGlobalContext();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedMode = localStorage.getItem('theme') || 'light';
    setIsDarkMode(savedMode === 'dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const iconStyle = {
    color: 'black',
  };

  return (
    <header
      className="main-header"
      style={{
        position: 'sticky', // Membuat header tetap di posisi atas
        top: 0, // Posisi dari atas halaman
        zIndex: 1000, // Memberikan prioritas agar tetap di atas elemen lainnya
        background: 'linear-gradient(135deg, #76b176, #696867e8)', 
        padding: '10px 20px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Memberikan sedikit bayangan untuk efek elegan
      }}
    >
      <div
        className="header-content"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* Bagian Logo */}
        <div className="header-logo">
          <Link to="/">
            <img
              src="/public/Black_and_Brown_Illustrative_Florist_Logo-removebg-preview.png"
              alt="Imelda Craft Gallery Logo"
              className="logo-image"
              style={{ maxHeight: '100px', width: 'auto' }}
            />
          </Link>
        </div>

        {/* Bagian Ikon Utama */}
        <div
          className="header-main-icons"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            flexWrap: 'wrap',
          }}
        >
          <Link to="/">
            <Home size={30} style={iconStyle} />
          </Link>
          <Link to="/about">
            <HelpCircle size={30} style={iconStyle} />
          </Link>
          <Link to="/products">
            <Package size={30} style={iconStyle} />
          </Link>
          <Link to="/track-order">
            <Truck size={30} style={iconStyle} />
          </Link>
          <Link to="/plants">
            <User size={30} style={iconStyle} />
          </Link>
        </div>

        {/* Bagian Kanan Header */}
        <div
          className="header-right-section"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
          }}
        >
          <div
            className="action-icons"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
            }}
          >
            <div
              className="icon-container"
              style={{
                position: 'relative',
              }}
            >
              {/* <Link to="/favorites">
                <Heart size={30} style={iconStyle} />
              </Link> */}
              {favorites.length > 0 && (
                <span
                  className="badge"
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '5px 10px',
                    fontSize: '12px',
                  }}
                >
                  {favorites.length}
                </span>
              )}
            </div>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="theme-toggle-button"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'inherit',
                transition: 'color 0.3s ease',
              }}
            >
              {isDarkMode ? (
                <Sun size={30} style={iconStyle} />
              ) : (
                <Moon size={30} style={iconStyle} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
