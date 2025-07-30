import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import api from '../utils/api';
import AOS from 'aos';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await api.get('/products');
      setProducts(data.products);
    } catch (error) {
      setError(error.response?.data?.message || 'Error fetching products');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1579952363873-27f3bade9f55)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          width: '100vw'
        }}
      >
        <div className="w-100 text-center" style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          padding: '3rem',
          borderRadius: '10px',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          <h1 className="display-3 fw-bold text-white" data-aos="fade-up">Elite Football Shoes</h1>
          <p className="lead mt-3 text-white" data-aos="fade-up" data-aos-delay="200">
            Step up your game with our premium collection.<br />
            Designed for comfort, speed, and style.
          </p>
          <a href="#shop" className="btn btn-primary btn-lg mt-4" data-aos="zoom-in" data-aos-delay="400">Shop Now</a>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-2" data-aos="fade-up">Our Collection</h2>
          {loading ? (
            <div className="spinner-border text-primary" role="status"></div>
          ) : error ? (
            <div className="alert alert-danger">{error}</div>
          ) : products.length === 0 ? (
            <p className="text-muted">No products available.</p>
          ) : (
            <div className="row justify-content-center">
              {products.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
      {/* About Section */}
      <section id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2 mb-4 mb-md-0" data-aos="zoom-in">
              <img src="https://images.unsplash.com/photo-1511886929837-354d827aae26" alt="About" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold mb-5">About Us</h2>
              <p className="lead text-muted">
                Elite Football Shoes is your destination for professional football footwear. Designed for athletes who demand quality.
              </p>
              <ul className="list-unstyled mt-3">
                <li><i className="bi bi-check-circle-fill text-success me-2"></i> High Performance</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i> Trusted Shipping</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i> Friendly Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-4" data-aos="fade-up">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-md-8" data-aos="fade-up" data-aos-delay="200">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" rows="5" className="form-control" required />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary px-4">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </>
  );
};

export default Home;