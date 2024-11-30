
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link untuk navigasi
import { ArrowLeft } from "lucide-react"; // Import ikon ArrowLeft dari Lucide

const products = {
  flowers: [
    {
      id: 1,
      name: "Lili Merah",
      price: "$10",
      stock: 10,
      image: "https://i.pinimg.com/736x/60/ec/b9/60ecb9e0b8895b87bf1ede62b81dda5b.jpg",
      description: "Lili merah melambangkan gairah dan kemakmuran.",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Lili Putih",
      price: "$12",
      stock: 15,
      image: "https://i.pinimg.com/736x/09/fb/75/09fb754077702f47dc5edeb89e210fe8.jpg",
      description: "Lili putih melambangkan kemurnian dan cinta.",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Lili Pink",
      price: "$15",
      stock: 8,
      image: "https://i.pinimg.com/736x/46/c1/04/46c1041440dee640c4c34e7fb3d4e66c.jpg",
      description: "Lili pink melambangkan kasih sayang dan rasa syukur.",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Lili Ungu",
      price: "$18",
      stock: 6,
      image: "https://i.pinimg.com/736x/80/b6/fb/80b6fb308ba0ef5a5c57d871706b1f28.jpg",
      description: "Lili ungu melambangkan kemegahan dan kebangsawanan.",
      rating: 4.9,
    },
    {
      id: 5,
      name: "Mawar Merah",
      price: "$6",
      stock: 25,
      image: "https://i.pinimg.com/736x/f1/94/8b/f1948b460828cdb7107424d8d1a1b568.jpg",
      description: "Mawar merah adalah simbol cinta dan romantisme.",
      rating: 5.0,
    },
    {
      id: 6,
      name: "Mawar Putih",
      price: "$7",
      stock: 20,
      image: "https://i.pinimg.com/736x/d1/fd/66/d1fd66d3c649959f9f6ac970abff17fa.jpg",
      description: "Mawar putih melambangkan kemurnian dan kepolosan.",
      rating: 4.6,
    },
    {
      id: 7,
      name: "Mawar Pink",
      price: "$8",
      stock: 22,
      image: "https://i.pinimg.com/736x/e2/a7/46/e2a74613a707bc5b2f51ef48ee21297a.jpg",
      description: "Mawar pink adalah simbol rasa kagum dan terima kasih.",
      rating: 4.4,
    },
    {
      id: 8,
      name: "Mawar Kuning",
      price: "$9",
      stock: 18,
      image: "https://i.pinimg.com/736x/90/8e/c2/908ec27192c64545ab58602b53da4d8f.jpg",
      description: "Mawar kuning melambangkan persahabatan dan kebahagiaan.",
      rating: 4.7,
    },
    {
      id: 9,
      name: "Mawar Oranye",
      price: "$10",
      stock: 14,
      image: "https://i.pinimg.com/736x/95/2b/32/952b3208e50324a04d939cb49bebcdc2.jpg",
      description: "Mawar oranye melambangkan semangat dan antusiasme.",
      rating: 4.5,
    },
    {
      id: 10,
      name: "Tulip Merah",
      price: "$12",
      stock: 16,
      image: "https://i.pinimg.com/736x/3d/62/70/3d6270173bd449fab91e4311a2a341aa.jpg",
      description: "Tulip merah adalah simbol cinta yang sempurna.",
      rating: 4.8,
    },
    {
      id: 11,
      name: "Tulip Kuning",
      price: "$14",
      stock: 12,
      image: "https://i.pinimg.com/736x/90/71/b5/9071b51ea729679956836e1e42962474.jpg",
      description: "Tulip kuning melambangkan keceriaan dan persahabatan.",
      rating: 4.7,
    },
    {
      id: 12,
      name: "Tulip Putih",
      price: "$16",
      stock: 10,
      image: "https://i.pinimg.com/736x/ed/55/a0/ed55a0e1909eb837ac9978fb648df8b2.jpg",
      description: "Tulip putih melambangkan rasa hormat dan ampunan.",
      rating: 4.9,
    },
    {
      id: 13,
      name: "Tulip Pink",
      price: "$18",
      stock: 8,
      image: "https://i.pinimg.com/736x/36/9e/39/369e394b1913a1526e3c8fc217a925f6.jpg",
      description: "Tulip pink melambangkan cinta dan perhatian.",
      rating: 4.6,
    },
    {
      id: 14,
      name: "Tulip Ungu",
      price: "$20",
      stock: 6,
      image: "https://i.pinimg.com/736x/2e/ab/e7/2eabe7cc65b6f76c9bba9974e0b57e6b.jpg",
      description: "Tulip ungu melambangkan kebangsawanan dan keanggunan.",
      rating: 5.0,
    },
    {
      id: 15,
      name: "Anggrek Putih",
      price: "$22",
      stock: 10,
      image: "https://i.pinimg.com/736x/8e/cc/a3/8ecca3a653b8de22044e0a56c72aaad9.jpg",
      description: "Anggrek putih melambangkan keindahan dan kemurnian hati.",
      rating: 4.8,
    },
    {
    id: 16,
    name: "Anggrek Pink",
    price: "$24",
    stock: 8,
    image: "https://i.pinimg.com/736x/db/86/5c/db865cd939497dd040578f3ff8d64a72.jpg",
    description: "Anggrek pink melambangkan kasih sayang dan keanggunan.",
    rating: 4.5
},
{
    id: 17,
  name: "Anggrek Ungu",
    price: "$26",
    stock: 5,
    image: "https://i.pinimg.com/736x/d2/eb/4a/d2eb4a2a399c3734a56db41885359051.jpg",
    description: "Anggrek ungu melambangkan kehormatan dan kekuatan.",
    rating: 4.7
},
{
    id: 18,
    name: "Anyelir Merah",
    price: "$6",
    stock: 20,
    image: "https://i.pinimg.com/736x/64/c6/e4/64c6e44fdf9d3a8b0d4416b73a292918.jpg",
    description: "Anyelir merah adalah simbol cinta dan kekaguman.",
    rating: 4.4
},
{
    id: 19,
    name: "Anyelir Putih",
    price: "$8",
    stock: 15,
    image: "https://i.pinimg.com/736x/99/c3/11/99c3112457ecb251455626375f1a7f7c.jpg",
    description: "Anyelir putih melambangkan kemurnian dan keberuntungan.",
    rating: 4.2
},
{
    id: 20,
    name: "Anyelir Pink",
    price: "$10",
    stock: 12,
    image: "https://i.pinimg.com/736x/15/da/0d/15da0d76515631add7c37572690415ed.jpg",
    description: "Anyelir pink melambangkan rasa syukur dan pengakuan.",
    rating: 4.6
},
{
    id: 21,
    name: "Gerbera Merah",
    price: "$12",
    stock: 18,
    image: "https://i.pinimg.com/736x/c8/dc/17/c8dc173f31bd9d2322ff83cfdf4539eb.jpg",
    description: "Gerbera merah melambangkan cinta dan daya tarik.",
    rating: 4.8
},
{
    id: 22,
    name: "Gerbera Kuning",
  price: "$14",
    stock: 20,
    image: "https://i.pinimg.com/736x/f3/67/f2/f367f297ac38f2bb76784c988f141e4e.jpg",
    description: "Gerbera kuning adalah simbol kegembiraan dan persahabatan.",
    rating: 4.9
},
{
    id: 23,
    name: "Gerbera Oranye",
    price: "$16",
    stock: 15,
    image: "https://i.pinimg.com/736x/8a/8c/de/8a8cde31a029500c1c6bc30e21274b80.jpg",
    description: "Gerbera oranye melambangkan kegembiraan dan semangat.",
    rating: 4.7
},
{
    id: 24,
    name: "Gerbera Pink",
    price: "$18",
    stock: 12,
    image: "https://i.pinimg.com/736x/ae/43/e1/ae43e1f2cd9901fa5c0aca8001251b26.jpg",
    description: "Gerbera pink melambangkan kelembutan dan kehangatan.",
    rating: 4.8
},
{
    id: 25,
    name: "Gerbera Putih",
    price: "$20",
    stock: 8,
    image: "https://i.pinimg.com/736x/17/8a/35/178a35498552a02b1abae125a30589f1.jpg",
    description: "Gerbera putih melambangkan kemurnian dan ketulusan.",
    rating: 4.6
},
{
    id: 26,
    name: "Hydrangea Biru",
    price: "$22",
    stock: 7,
    image: "https://i.pinimg.com/736x/1d/c3/35/1dc335d9ecd62f38b8adeb31e260007d.jpg",
    description: "Hydrangea biru melambangkan keharmonisan dan perdamaian.",
    rating: 4.9
},
{
    id: 27,
    name: "Hydrangea Pink",
    price: "$24",
    stock: 6,
    image: "https://i.pinimg.com/736x/73/e4/a9/73e4a98bdb36e95b499bd9082afc24b3.jpg",
    description: "Hydrangea pink melambangkan rasa syukur dan kasih sayang.",
    rating: 4.8
},
{
    id: 28,
    name: "Hydrange putih",
    price: "$26",
    stock: 5,
    image: "https://i.pinimg.com/736x/8c/f4/fe/8cf4fef727991db06e3f738137737ab8.jpg",
    description: "Hydrangea putih melambangkan keanggunan dan kemurnian.",
    rating: 4.7
},
{
    id: 29,
    name: "Peony Pink",
    price: "$28",
    stock: 4,
    image: "https://i.pinimg.com/736x/c8/30/2e/c8302e1a80b6d4f589947f8a84012d6a.jpg",
    description: "Peony pink melambangkan kebahagiaan dan cinta.",
    rating: 4.9
},
{
    id: 30,
    name: "Peony Putih",
    price: "$30",
    stock: 3,
    image: "https://i.pinimg.com/736x/e3/d4/8d/e3d48d061c0a14f3b694c142ec5fd8c8.jpg",
    description: "Peony putih melambangkan keberuntungan dan cinta sejati.",
    rating: 4.9
}

  ],
};
const Subscriptions = () => {
  const { flowers } = products;

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Jumlah produk per halaman

  // Hitung jumlah halaman
  const totalPages = Math.ceil(flowers.length / itemsPerPage);

  // Data untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = flowers.slice(indexOfFirstItem, indexOfLastItem);

  // Fungsi untuk berpindah halaman
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="page-content">
      {/* Banner Section */}
      <div className="banner-section">
        <div className="banner">
          <img
            src="https://media.theeverymom.com/wp-content/uploads/2023/04/05124448/best-mothers-day-gifts-theeverymom15.jpg"
            alt="Subscriptions Banner"
            className="banner-image"
          />
        </div>
        <div className="banner-text">
          <h1>Our Gallery Flowers</h1>
          <p>
            Enjoy fresh flowers delivered to your doorstep weekly or monthly.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="products">
        {currentItems.map((flower) => (
          <div className="product-card" key={flower.id}>
            <img src={flower.image} alt={flower.name} />
            <h3>{flower.name}</h3>
            <p className="price">{flower.price}</p>
            <p>Stock: {flower.stock}</p>
            <p>{flower.description}</p>
            <p className="rating">
              Rating: {flower.rating}{" "}
              <span role="img" aria-label="star">
                ⭐
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Back Home Button */}
      <div className="back-home">
        <Link to="/">
          <button className="back-home-button">
            <ArrowLeft size={20} /> Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Subscriptions;
