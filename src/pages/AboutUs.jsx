import React from "react";
import { Link } from "react-router-dom";

export default function TentangKami() {
    return (
        <div className="container-page">
            {/* Konten utama tentang halaman */}
            <div className="about-content">
                <div className="about-text">
                    <h1>Tentang Kami</h1>
                    <p>
                        Selamat datang di Imelda Craft Gallery, tujuan utama Anda untuk bunga yang indah dan bersumber secara berkelanjutan. 
                        Misi kami adalah membawa keindahan alam ke setiap momen istimewa Anda, dengan mengutamakan kualitas, kerajinan, dan keberlanjutan.
                    </p>
                    <p>
                        Kami percaya pada keberlanjutan dan keindahan alam. Bunga kami berasal dari petani lokal yang memiliki nilai yang sama dengan kami. 
                        Kami berusaha untuk meminimalkan jejak karbon dan mendorong praktik ramah lingkungan dalam setiap aspek bisnis kami.
                    </p>
                </div>

                {/* Gambar pendukung */}
                <div className="about-image">
                    <img 
                        src="/Oranye dan Putih Playful Organic Warung Banner Landscape.png" 
                        alt="Toko Florist" 
                        className="image" 
                    />
                </div>
            </div>

            {/* Navigasi tombol di bawah konten utama */}
            <div className="navigation-buttons">
                <Link to="/contact" className="nav-button">Hubungi Kami</Link>
                <Link to="/media" className="nav-button">Media</Link>
                <Link to="/awards" className="nav-button">Penghargaan</Link>
                <Link to="/reviews" className="nav-button">Ulasan</Link>
                <Link to="/sustainability" className="nav-button">Keberlanjutan</Link>
                <Link to="/help" className="nav-button">Bantuan</Link>
            </div>

            {/* Komitmen perusahaan dengan teks dan gambar tambahan */}
            <div className="about-content">
                <div className="about-text">
                    <h2>Komitmen Kami</h2>
                    <p>
                        Di Imelda Craft Gallery, keberlanjutan bukan sekadar kata-kata, tetapi nilai inti. Kami berkomitmen untuk bekerja dengan petani lokal 
                        yang berbagi semangat kami dalam praktik ramah lingkungan, membantu mengurangi dampak lingkungan kami.
                    </p>
                    <p>
                        Dengan memilih kami, Anda mendukung petani lokal dan berkontribusi pada masa depan yang lebih hijau dan berkelanjutan. 
                        Bergabunglah dengan kami untuk merayakan momen-momen istimewa dalam hidup Anda sambil membuat dampak positif pada lingkungan.
                    </p>
                </div>

                <div className="about-image">
                    <img 
                        src="/best seller.jpg" 
                        alt="Praktik Berkelanjutan" 
                        className="image" 
                    />
                </div>
            </div>
        </div>
    );
}
