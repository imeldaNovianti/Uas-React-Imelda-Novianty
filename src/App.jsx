import React, { useState, useEffect, createContext, useContext } from "react"; 
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext"; // Menyediakan context untuk pencarian produk

// Import Header dan Footer dari folder components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import halaman-halaman yang digunakan di aplikasi
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Flowers from "./pages/Flowers";
import Hampers from "./pages/Hampers";
import LetterboxFlowers from "./pages/LetterboxFlowers";
import Subscriptions from "./pages/Subscriptions";
import TrackOrder from "./pages/TrackOrder";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import Awards from "./pages/Awards";
import Reviews from "./pages/Reviews";
import Sustainability from "./pages/Sustainability";
import Help from "./pages/Help";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import History from "./pages/History";
import Plants from "./pages/Plants";
import SearchPage from "./pages/SearchPage";

// Context untuk tema aplikasi (light/dark)
const ThemeContext = createContext();

// Hook untuk menggunakan ThemeContext di komponen lain
const useTheme = () => useContext(ThemeContext);

// Komponen ProtectedRoute untuk mengamankan halaman tertentu
const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? (
    element // Jika pengguna sudah login, tampilkan elemen
  ) : (
    <Navigate to="/login" /> // Jika belum login, arahkan ke halaman login
  );
};

const App = () => {
  // Mengatur state untuk tema dan status autentikasi
  const [theme, setTheme] = useState("light");
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Status login pengguna

  useEffect(() => {
    // Ambil tema yang disimpan di localStorage atau set default ke "light"
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme); 
    document.body.className = savedTheme; // Terapkan tema pada body element

    // Cek apakah ada data pengguna di localStorage (menandakan bahwa pengguna sudah login)
    const user = localStorage.getItem("currentUser");
    if (user) {
      setIsAuthenticated(true); // Jika ada data pengguna, set status autentikasi ke true
    }
  }, []); // useEffect berjalan saat komponen pertama kali di-render

  // Fungsi untuk mengganti tema (light/dark)
  const toggleTheme = () => {
    // Ganti tema antara light dan dark
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme); // Update state tema
    document.body.className = newTheme; // Terapkan kelas tema pada body
    localStorage.setItem("theme", newTheme); // Simpan tema yang dipilih di localStorage
  };

  return (
    // ThemeContext.Provider untuk menyediakan tema dan toggleTheme ke seluruh aplikasi
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SearchProvider>
        <Router> {/* Router untuk menavigasi antar halaman */}
          <Header /> {/* Header aplikasi, berisi menu dan navigasi */}
          <main className={`main-content ${theme}`}> {/* Main content yang akan berubah berdasarkan tema */}
            <Routes>
              {/* Route default, jika sudah login arahkan ke home, jika belum ke halaman register */}
              <Route
                path="/"
                element={
                  isAuthenticated ? (
                    <Navigate to="/home" /> // Arahkan ke halaman home jika pengguna sudah login
                  ) : (
                    <Navigate to="/register" /> // Arahkan ke halaman register jika pengguna belum login
                  )
                }
              />

              {/* Route untuk halaman Register */}
              <Route path="/register" element={<Register />} />
              {/* Route untuk halaman Login, pass setIsAuthenticated untuk update status login */}
              <Route
                path="/login"
                element={<Login setIsAuthenticated={setIsAuthenticated} />}
              />
              
              {/* Proteksi halaman home agar hanya bisa diakses jika pengguna sudah login */}
              <Route
                path="/home"
                element={<ProtectedRoute element={<Home />} isAuthenticated={isAuthenticated} />}
              />

              {/* Proteksi halaman Chat agar hanya bisa diakses jika pengguna sudah login */}
              <Route
                path="/chat"
                element={<ProtectedRoute element={<Chat />} isAuthenticated={isAuthenticated} />}
              />

              {/* Proteksi halaman Cart agar hanya bisa diakses jika pengguna sudah login */}
              <Route
                path="/cart"
                element={<ProtectedRoute element={<Cart />} isAuthenticated={isAuthenticated} />}
              />

              {/* Proteksi halaman Favorites agar hanya bisa diakses jika pengguna sudah login */}
              <Route
                path="/favorites"
                element={<ProtectedRoute element={<Favorites />} isAuthenticated={isAuthenticated} />}
              />

              {/* Proteksi halaman Products agar hanya bisa diakses jika pengguna sudah login */}
              <Route
                path="/products"
                element={<ProtectedRoute element={<Products />} isAuthenticated={isAuthenticated} />}
              />

              {/* Proteksi halaman Flowers agar hanya bisa diakses jika pengguna sudah login */}
              <Route
                path="/flowers"
                element={<ProtectedRoute element={<Flowers />} isAuthenticated={isAuthenticated} />}
              />

              {/* Proteksi halaman Hampers agar hanya bisa diakses jika pengguna sudah login */}
              <Route
                path="/hampers"
                element={<ProtectedRoute element={<Hampers />} isAuthenticated={isAuthenticated} />}
              />

              {/* Proteksi halaman LetterboxFlowers agar hanya bisa diakses jika pengguna sudah login */}
              <Route
                path="/letterboxflowers"
                element={<ProtectedRoute element={<LetterboxFlowers />} isAuthenticated={isAuthenticated} />}
              />

              {/* Proteksi halaman Subscriptions agar hanya bisa diakses jika pengguna sudah login */}
              <Route
                path="/subscriptions"
                element={<ProtectedRoute element={<Subscriptions />} isAuthenticated={isAuthenticated} />}
              />

              {/* Proteksi halaman TrackOrder agar hanya bisa diakses jika pengguna sudah login */}
              <Route
                path="/track-order"
                element={<ProtectedRoute element={<TrackOrder />} isAuthenticated={isAuthenticated} />}
              />

              {/* Proteksi halaman Checkout agar hanya bisa diakses jika pengguna sudah login */}
              <Route
                path="/checkout"
                element={<ProtectedRoute element={<Checkout />} isAuthenticated={isAuthenticated} />}
              />

              {/* Proteksi halaman History agar hanya bisa diakses jika pengguna sudah login */}
              <Route
                path="/history"
                element={<ProtectedRoute element={<History />} isAuthenticated={isAuthenticated} />}
              />

              {/* Halaman-halaman yang tidak memerlukan autentikasi */}
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/media" element={<Media />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/sustainability" element={<Sustainability />} />
              <Route path="/help" element={<Help />} />
              <Route path="/searchpage" element={<SearchPage />} />
              
              {/* Route untuk halaman NotFound, jika halaman tidak ditemukan */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          {/* Footer aplikasi yang muncul di bagian bawah */}
          <Footer />
        </Router>
      </SearchProvider>
    </ThemeContext.Provider>
  );
};

export default App;
