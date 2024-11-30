import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Gift, Heart } from 'lucide-react';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1> bunga indah dikirim ke depan pintu Anda</h1>
          <p>Pesan secara online dan dapatkan pengiriman gratis besok!</p>
          {/* Navigasi ke halaman Produk */}
          <Link to="/products">
            <button className="shop-now-btn">Belanja Sekarang</button>
          </Link>
        </div>
      </section>
      {/* Featured Categories Section */}
      <section className="featured-categories">
        <h2>KATEGORI PILIHAN</h2>
        <div className="categories-container">
          <div className="category-item">
            <Link to="/letterbox">
              <img src="https://i.pinimg.com/736x/34/23/0f/34230f1c2845165d6d3b1856adfee4f2.jpg" alt="Letterbox Flowers" />
              <h3>GALERI</h3>
            </Link>
            <Link to="/letterboxFlowers">
              <button className="shop-now-btn">LETTERBOX</button>
            </Link>
          </div>
          <div className="category-item">
            <Link to="/hampers">
              <img src="https://i.pinimg.com/736x/f8/aa/99/f8aa9913756306c9c6e3193472623c43.jpg" alt="Hampers" />
              <h3>GALERI</h3>
            </Link>
            <Link to="/hampers">
              <button className="shop-now-btn">HAMPERS</button>
            </Link>
          </div>
          <div className="category-item">
            <Link to="/subscriptions">
              <img src="https://cdn.atwilltech.com/flowerdatabase/s/spirited-delphinium-hydrangea-lifestyle-arrangement-LS090422.300.jpg" alt="Subscriptions" />
              <h3>GALERI</h3>
            </Link>
            <Link to="/subscriptions">
              <button className="shop-now-btn">BUNGA</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="promotions-section">
        <h2>Penawaran Khusus</h2>
        <div className="promotion-items">
          <div className="promotion-item">
            <Gift />
            <h3>Hampers Hadiah Spesial</h3>
            <p>Hampers eksklusif untuk setiap acara.</p>
          </div>
          <div className="promotion-item">
            <Heart />
            <h3>Sale Hari Valentine</h3>
            <p>Dapatkan diskon 20% untuk semua rangkaian bunga.</p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Produk Terlaris</h2>
        <div className="product-list" style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
          <div className="product-item" style={{ width: '23%', textAlign: 'center' }}>
            <img src="https://media.bloomandwild.com/v1/1080x1080/filters:format(webp):quality(75)/https://assets-0.bloomandwild.com/letterbox-main/the-kirsty-lb/ecec12a5-9e89-47eb-a7e7-299e2283dc16.jpeg" alt="Fresh Roses" style={{ width: '100%' }} />
            <h3>lovwersy</h3>
            <div className="product-actions" style={{ marginTop: '10px' }}></div>
          </div>
          <div className="product-item" style={{ width: '23%', textAlign: 'center' }}>
            <img src="https://th.bing.com/th/id/OIP.ios0QM-LnuXy5vqYo0giewAAAA?pid=ImgDet&w=192&h=192&c=7" alt="Sunflowers" style={{ width: '100%' }} />
            <h3>grawess</h3>
            <div className="product-actions" style={{ marginTop: '10px' }}></div>
          </div>
          <div className="product-item" style={{ width: '23%', textAlign: 'center' }}>
            <img src="https://media.bloomandwild.com/v1/1080x1080/filters:format(webp):quality(75)/https://assets-0.bloomandwild.com/addon-carousel/the-tamsin-ht-uic/19c55b10-a311-4e33-83a6-f859e455c992.jpg" alt="Tulips" style={{ width: '100%' }} />
            <h3>mix flowers</h3>
            <div className="product-actions" style={{ marginTop: '10px' }}></div>
          </div>
          <div className="product-item" style={{ width: '23%', textAlign: 'center' }}>
            <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1677151013-e04670d9-a6f4-4cf7-b74d-4b24714990e4.jpg?crop=1xw:1.00xh;center,top&resize=980:*" alt="Orchids" style={{ width: '100%' }} />
            <h3>pink roses</h3>
            <div className="product-actions" style={{ marginTop: '10px' }}></div>
          </div>
        </div>
      </section>

      {/* Freshly Picked - New Flowers Section */}
      <section className="new-flowers-section">
        <h2>Bunga Segar yang Baru Dipetik</h2>
        <div className="new-flowers-content">
          <img
            src="public/1.jpg"
            alt="New Flowers Collection"
            className="new-flowers-image"
          />
          <div className="new-flowers-text">
            <p>
              Di awal setiap musim, kami suka membawa sesuatu yang baru. Seniman bunga kami bekerja keras menciptakan buket indah yang menangkap esensi setiap musim dan membawa kebahagiaan bagi setiap penerima.
            </p>
            <p>
              Kejutkan orang yang Anda cintai dengan salah satu buket spektakuler dari koleksi terbaru kami, dan buat hari mereka dengan bunga segar yang dikirim ke pintu mereka. Seperti biasa, dengan pengiriman gratis 7 hari seminggu di seluruh Inggris.
            </p>
            <Link to="/contact">
              <button className="shop-now-btn">Hubungi Kami</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Most Popular Flower Subscriptions Section */}
      <section className="flower-subscriptions-section">
        <h2>Langganan Bunga Terpopuler</h2>
        <div className="flower-subscriptions-content">
          <img
            src="public/6.jpg"
            alt="Flower Subscriptions"
            className="flower-subscriptions-image"
          />
          <div className="flower-subscriptions-text">
            <p>
              Suka bunga segar? Biarkan kebahagiaan bunga segar bertahan lebih lama dengan langganan bunga kami! Pilih untuk menerima bunga segar setiap minggu atau bulan, dan nikmati kebahagiaan membuka kotak bunga baru sesering yang Anda inginkan.
            </p>
            <p>
              Sempurna sebagai hadiah istimewa untuk orang yang Anda cintai, atau hadiah untuk diri sendiri - langganan bunga adalah cara yang menyenangkan untuk menambah lebih banyak kebahagiaan dalam HIDUP Anda.
            </p>
            <Link to="/help">
              <button className="shop-now-btn">BANTUAN?</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="customer-reviews">
        <h2>Apa Kata Pelanggan Kami</h2>
        <div className="review-list">
          <div className="review-item">
            <div className="review-profile">
              <img src="https://i.pinimg.com/736x/61/f9/13/61f913bee4a8dc12ba8f0ce5f68c53ed.jpg" alt="jenni blekpingg" />
            </div>
            <div className="review-text">
              <p>
                <strong>Diana Kaars Sijpesteijn, London</strong> - "Bunga yang bagus, dikirim dengan cepat."
              </p>
            </div>
          </div>

          <div className="review-item">
            <div className="review-profile">
              <img src="https://i.pinimg.com/736x/4f/01/e9/4f01e98b58f7fd073b1c450f955f9f43.jpg" alt="jungkook mantan imel" />
            </div>
            <div className="review-text">
              <p>
                <strong>Ellie Chandler, Oxford</strong> - "Layanan luar biasa dan bunga selalu indah."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
