import React, { useState, useEffect } from 'react'; 
// Mengimport React dan hook useState, useEffect untuk state dan efek samping
import { Heart, ShoppingCart, Search } from 'lucide-react'; 
// Mengimport ikon Heart, ShoppingCart, dan Search dari Lucide untuk digunakan di UI
import { useNavigate } from 'react-router-dom'; 
// Mengimport hook useNavigate untuk menavigasi antar halaman

const Product = () => { 
  // Menyimpan state untuk produk, produk yang difilter, produk favorit, dll
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [favorites, setFavorites] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [sortOption, setSortOption] = useState('name-asc'); 
  const navigate = useNavigate(); // Menyimpan instance navigate untuk berpindah antar halaman

  // Mengambil data produk dan favorit dari localStorage, atau mengambilnya dari file JSON
  useEffect(() => { 
    const loadData = async () => { 
      const storedProducts = JSON.parse(localStorage.getItem('products')); // Mengambil data produk dari localStorage

      if (storedProducts && storedProducts.length > 0) {
        setProducts(storedProducts); 
        setFilteredProducts(storedProducts); // Menyimpan data produk jika sudah ada di localStorage
      } else {
        try {
          const response = await fetch('/src/assets/products.json'); 
          const data = await response.json(); 
          const allProducts = [
            ...data.letterboxFlowersData, 
            ...data.hampersData, 
            ...data.flowersData
          ]; 

          localStorage.setItem('products', JSON.stringify(allProducts)); 
          setProducts(allProducts); 
          setFilteredProducts(allProducts); // Menyimpan produk ke localStorage jika belum ada
        } catch (error) {
          console.error("Error loading JSON data", error); // Menangani error jika terjadi kesalahan saat mengambil data
        }
      }

      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(storedFavorites); // Mengambil data favorit dari localStorage
    };

    loadData();
  }, []); // Hook ini berjalan sekali saat komponen dimuat

  // Menyaring produk berdasarkan searchTerm setiap kali produk atau searchTerm berubah
  useEffect(() => {
    let filtered = products.filter(product => 
      product?.name?.toLowerCase().includes(searchTerm?.toLowerCase() || '') 
    );

    setFilteredProducts(filtered); // Mengupdate daftar produk yang difilter
  }, [searchTerm, products]); // Hook ini dipicu saat searchTerm atau produk berubah

  // Menyortir produk berdasarkan sortOption setiap kali opsi sortOption berubah
  useEffect(() => {
    const sorted = [...filteredProducts].sort((a, b) => {
      if (!a.name || !b.name) return 0;

      if (sortOption === 'name-asc') {
        return a.name.localeCompare(b.name); // Menyortir berdasarkan nama produk (A-Z)
      } else if (sortOption === 'name-desc') {
        return b.name.localeCompare(a.name); // Menyortir berdasarkan nama produk (Z-A)
      } else if (sortOption === 'price-asc') {
        return parseFloat(a.price.replace(/[^\d.-]/g, '')) - parseFloat(b.price.replace(/[^\d.-]/g, '')); // Menyortir berdasarkan harga termurah
      } else if (sortOption === 'price-desc') {
        return parseFloat(b.price.replace(/[^\d.-]/g, '')) - parseFloat(a.price.replace(/[^\d.-]/g, '')); // Menyortir berdasarkan harga termahal
      }
      return 0;
    });
    setFilteredProducts(sorted); // Mengupdate produk yang sudah disortir
  }, [sortOption]); // Hook ini dipicu setiap kali sortOption berubah

  // Fungsi untuk menambahkan produk ke daftar favorit
  const handleAddToFavorites = (productId) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')); // Mengambil data user dari localStorage
    if (!currentUser) {
      alert('Harap login terlebih dahulu');
      navigate('/login'); // Jika user belum login, arahkan ke halaman login
      return;
    }

    const newFavorites = [...favorites]; 
    const isAlreadyFavorite = newFavorites.some(fav => fav.productId === productId && fav.userId === currentUser.id); // Memeriksa apakah produk sudah ada di favorit

    if (!isAlreadyFavorite) {
      newFavorites.push({ userId: currentUser.id, productId }); // Menambahkan produk ke daftar favorit
      setFavorites(newFavorites); 
      localStorage.setItem('favorites', JSON.stringify(newFavorites)); // Menyimpan daftar favorit ke localStorage
      alert('Produk berhasil ditambahkan ke favorit!');
    } else {
      alert('Produk sudah ada di favorit'); // Memberikan peringatan jika produk sudah ada di favorit
    }
  };

  // Fungsi untuk membeli produk dan melanjutkan ke halaman checkout
  const handleBuyNow = (product) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')); // Mengambil data user dari localStorage
    if (!currentUser) {
      alert('Harap login terlebih dahulu');
      navigate('/login'); // Jika user belum login, arahkan ke halaman login
      return;
    }

    const confirmCheckout = window.confirm(
      "Apakah Anda ingin melanjutkan ke halaman checkout untuk produk ini?"
    );

    if (confirmCheckout) {
      const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
      transactions.push({
        userId: currentUser.id,
        product,
        date: new Date().toLocaleDateString(), // Menambahkan transaksi pembelian produk
      });
      localStorage.setItem('transactions', JSON.stringify(transactions)); // Menyimpan transaksi ke localStorage
      alert('Pembelian berhasil!');
      navigate('/checkout'); // Menavigasi ke halaman checkout
    } else {
      navigate(`/products/${product.id}`); // Menavigasi ke halaman detail produk jika user membatalkan checkout
    }
  };

  return (
    <div className="page-content">
      {/* Banner Section */}
      <div className="banner-section" style={{ marginTop: '20px' }}>
        <div className="banner" style={{ marginTop: '10px' }}>
          <img
            src="https://th.bing.com/th/id/OIP.Eov1GgqtWGl_6sgK2X6N2AHaEK?w=750&h=422&rs=1&pid=ImgDetMain"
            alt="Letterbox Flowers Banner"
            className="banner-image"
            style={{ marginTop: '10px' }}
          />
        </div>
        <div className="banner-text" style={{ marginTop: '15px' }}>
          <h1 style={{ marginTop: '10px' }}>CATALOG FLOWERS</h1>
          <p style={{ marginTop: '10px' }}>Explore our delightful catalog flowers!</p>
        </div>
      </div>

      {/* Product Listing Section */}
      <div className="product-container">
        <header className="product-header">
          <div className="search-container">
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="search-input"
            />
            <Search className="search-icon" /> {/* Ikon pencarian */}
          </div>

          <div className="sort-container">
            <select onChange={(e) => setSortOption(e.target.value)} value={sortOption} className="sort-select">
              <option value="name-asc">Nama: A-Z</option>
              <option value="name-desc">Nama: Z-A</option>
              <option value="price-asc">Harga: Termurah</option>
              <option value="price-desc">Harga: Termahal</option>
            </select>
          </div>
        </header>

        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h6>{product.name}</h6>
                <p>{`Harga: ${product.price}`}</p>
                <p>{`Stok: ${product.stock}`}</p>

                {/* Tombol untuk menambah produk ke favorit */}
                <button onClick={() => handleAddToFavorites(product.id)} className="favorite-btn">
                  <Heart /> Tambah ke Favorit
                </button>

                {/* Tombol untuk membeli produk */}
                <button onClick={() => handleBuyNow(product)} className="buy-btn">
                  <ShoppingCart /> Beli Sekarang
                </button>
              </div>
            ))
          ) : (
            <h2 style={{ textAlign: 'center' }}>Produk tidak ditemukan</h2> // Pesan jika produk tidak ditemukan
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
