import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import "./FitnessHomePage.css";
import img1 from '../Images/travel.jpg';
import img2 from '../Images/burj.jpg';
import img3 from '../Images/rambagh.jpg';
import img4 from '../Images/banyan.jpg';

const FitnessHomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const [likes, setLikes] = useState({});
  const [showFavorites, setShowFavorites] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/hotel");
        setFeaturedProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    setCurrentPage(1);
  };

  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }));
  };

  const filteredProducts = featuredProducts
    .filter((product) =>
      product.hotelname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.places.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") {
        return a.price - b.price;
      } else if (sortOrder === "highToLow") {
        return b.price - a.price;
      }
      return 0;
    });

  const favoriteProducts = featuredProducts.filter(
    (product) => likes[product.id]
  );

  const productsToShow = showFavorites ? favoriteProducts : filteredProducts;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsToShow.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(productsToShow.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="fitness-home-page">
      <section className="heading-section">
        <h1>Famous Hotels Around the World</h1>
      </section>

      <section className="hero">
        <div>
          <img src={img1} alt="Hero Image 1" />
          <p className="legend">Get 15% off on our site</p>
        </div>
      </section>

      <section className="categories">
        <h2>FIVE STAR HOTELS</h2>
        <Carousel
          showThumbs={false}
          autoPlay
          interval={2000}
          infiniteLoop
          emulateTouch={true}
          useKeyboardArrows={true}
          showIndicators={true}
        >
          <div className="category-item">
            <img src={img2} alt="Burj Khalifa" />
            <h3>Burj Khalifa</h3>
          </div>
          <div className="category-item">
            <img src={img3} alt="Rambagh Palace" />
            <h3>Rambagh Palace</h3>
          </div>
          <div className="category-item">
            <img src={img4} alt="Banyan Palace" />
            <h3>Banyan Palace</h3>
          </div>
        </Carousel>
      </section>

      <section className="featured-products">
        <h2>Filter your likes</h2>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search hotels..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <div className="sort-dropdown">
          <label htmlFor="sort">Sort by price: </label>
          <select id="sort" value={sortOrder} onChange={handleSortChange}>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>

        <div className="favorites-toggle">
          <button onClick={() => setShowFavorites(!showFavorites)}>
            {showFavorites ? "Show All" : "Show Favorites"}
          </button>
        </div>

        <div className="product-list">
          {currentProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.hotelname} />
              <h3>{product.hotelname}</h3>
              <p>
                <em>{product.places}, {product.location}</em>
              </p>
              <p>
                <strong>${parseFloat(product.price).toFixed(2)}</strong>
              </p>
              <button
                className={`heart-btn ${likes[product.id] ? "liked" : ""}`}
                onClick={() => handleLike(product.id)}
              >
                {likes[product.id] ? "❤" : "🤍"}
              </button>
            </div>
          ))}
        </div>

        <div className="pagination">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={index + 1 === currentPage ? "active" : ""}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FitnessHomePage;
