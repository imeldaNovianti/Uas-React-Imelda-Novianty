import React, { useState, useEffect } from 'react'; // Mengimpor React dan Hook useState serta useEffect
import { Heart, ShoppingCart } from 'lucide-react'; // Mengimpor ikon Heart dan ShoppingCart dari lucide-react
import { useNavigate } from 'react-router-dom'; // Mengimpor useNavigate untuk melakukan navigasi antar halaman

const Product = () => {
  const [products, setProducts] = useState([]); // State untuk menyimpan data produk
  const [filteredProducts, setFilteredProducts] = useState([]); // State untuk menyimpan produk yang telah difilter
  const [favorites, setFavorites] = useState([]); // State untuk menyimpan produk favorit
  const [searchTerm, setSearchTerm] = useState(''); // State untuk menyimpan kata kunci pencarian
  const [sortOption, setSortOption] = useState('name'); // State untuk menyimpan opsi pengurutan, default adalah nama produk
  const [categoryOption, setCategoryOption] = useState('all'); // State untuk menyimpan opsi kategori, default adalah 'all'
  const navigate = useNavigate(); // Hook untuk melakukan navigasi ke halaman lain

  // Load data produk dari file JSON
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/src/assets/products.json'); // Memanggil file JSON yang berisi data produk
        const data = await response.json(); // Mengonversi response menjadi JSON

        // Menggabungkan semua kategori produk menjadi satu array
        const allProducts = [
          ...data.flowersData,
          ...data.hampersData,
          ...data.letterboxFlowersData
        ];

        // Menyimpan data produk ke state
        setProducts(allProducts);
        setFilteredProducts(allProducts); // Menyimpan produk yang sudah digabungkan

        // Mengambil data favorit dari Local Storage
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites); // Menyimpan favorit ke state
      } catch (error) {
        console.error("Error loading JSON data", error); // Menangani error jika data tidak bisa dimuat
      }
    };

    loadData(); // Menjalankan fungsi loadData hanya sekali saat komponen pertama kali dimuat
  }, []); // Hanya dipanggil sekali saat komponen pertama kali dimuat

  // Filter produk berdasarkan pencarian
  useEffect(() => {
    let filtered = products.filter(product =>
      product?.name?.toLowerCase().includes(searchTerm?.toLowerCase() || '') // Memfilter produk berdasarkan nama produk yang mengandung kata kunci pencarian
    );

    // Filter berdasarkan kategori jika kategori yang dipilih bukan 'all'
    if (categoryOption !== 'all') {
      filtered = filtered.filter(product => product.category === categoryOption); // Memfilter produk berdasarkan kategori
    }

    setFilteredProducts(filtered); // Menyimpan produk yang sudah difilter
  }, [searchTerm, products, categoryOption]); // Efek dijalankan jika ada perubahan pada searchTerm, products, atau categoryOption

  // Sorting produk berdasarkan nama atau harga
  useEffect(() => {
    const sorted = [...filteredProducts].sort((a, b) => {
      if (!a.name || !b.name) return 0; // Jika 'name' tidak valid, urutan tetap
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name); // Urutkan berdasarkan nama
      } else if (sortOption === 'price') {
        return parseFloat(a.price.replace(/[^\d.-]/g, '')) - parseFloat(b.price.replace(/[^\d.-]/g, '')); // Urutkan berdasarkan harga
      }
      return 0;
    });
    setFilteredProducts(sorted); // Menyimpan produk yang sudah diurutkan
  }, [sortOption]); // Efek dijalankan jika ada perubahan pada sortOption

  // Menambahkan produk ke favorit
  const handleAddToFavorites = (productId) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')); // Mengambil data pengguna yang sedang login dari Local Storage
    if (!currentUser) {
      alert('Harap login terlebih dahulu'); // Jika tidak ada pengguna yang login, tampilkan pesan untuk login
      navigate('/login'); // Arahkan pengguna ke halaman login
      return;
    }

    // Cek apakah produk sudah ada di favorit
    const newFavorites = [...favorites];
    const isAlreadyFavorite = newFavorites.some(fav => fav.productId === productId && fav.userId === currentUser.id); // Memeriksa apakah produk sudah ada di favorit pengguna

    if (!isAlreadyFavorite) {
      newFavorites.push({ userId: currentUser.id, productId }); // Jika produk belum ada di favorit, tambahkan ke favorit
      setFavorites(newFavorites); // Menyimpan favorit baru ke state
      localStorage.setItem('favorites', JSON.stringify(newFavorites)); // Menyimpan favorit ke Local Storage
      alert('Produk berhasil ditambahkan ke favorit!'); // Menampilkan pesan jika berhasil
    } else {
      alert('Produk sudah ada di favorit'); // Menampilkan pesan jika produk sudah ada di favorit
    }
  };

  // Menangani pembelian produk
  const handleBuyNow = (product) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')); // Mengambil data pengguna yang sedang login dari Local Storage
    if (!currentUser) {
      alert('Harap login terlebih dahulu'); // Jika tidak ada pengguna yang login, tampilkan pesan untuk login
      navigate('/login'); // Arahkan pengguna ke halaman login
      return;
    }

    // Menambahkan transaksi pembelian ke Local Storage
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push({
      userId: currentUser.id,
      product,
      date: new Date().toLocaleDateString(), // Menambahkan tanggal pembelian
    });
    localStorage.setItem('transactions', JSON.stringify(transactions)); // Menyimpan transaksi ke Local Storage
    alert('Pembelian berhasil!'); // Menampilkan pesan jika pembelian berhasil
    navigate('/history'); // Arahkan pengguna ke halaman riwayat transaksi
  };

  return (
    <div className="product-container">
      <h2>Daftar Produk</h2>
      
      {/* Pencarian */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Mengubah nilai searchTerm saat pengguna mengetik
        />
      </div>
      
      {/* Kategori Filter */}
      <div className="category-filter">
        <label>Kategori:</label>
        <select onChange={(e) => setCategoryOption(e.target.value)} value={categoryOption}>
          <option value="all">Semua</option>
          <option value="flowers">Bunga</option>
          <option value="hampers">Hampers</option>
          <option value="letterboxFlowers">Letterbox Flowers</option>
        </select>
      </div>
      
      {/* Sorting */}
      <div className="sort-container">
        <label>Sort By: </label>
        <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
          <option value="name">Nama</option>
          <option value="price">Harga</option>
        </select>
      </div>
      
      {/* Daftar Produk */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{`Harga: ${product.price}`}</p>
              <p>{`Stok: ${product.stock}`}</p>

              {/* Tombol Favorit */}
              <button onClick={() => handleAddToFavorites(product.id)}>
                <Heart /> Tambah ke Favorit
              </button>

              {/* Tombol Beli Sekarang */}
              <button onClick={() => handleBuyNow(product)}>
                <ShoppingCart /> Beli Sekarang
              </button>
            </div>
          ))
        ) : (
          <p>No products found</p> // Menampilkan pesan jika tidak ada produk yang ditemukan
        )}
      </div>
    </div>
  );
};

export default Product;
