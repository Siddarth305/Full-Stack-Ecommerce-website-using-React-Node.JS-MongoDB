import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: "Nike Mercurial Vapor",
    description: "Lightweight, responsive, and perfect for speed. Dominate the field with Nike's latest technology.",
    price: 120,
    image: "/images/img3.png"
  },
  {
    id: 2,
    name: "Adidas Predator",
    description: "Unmatched control and comfort. The Predator is built for precision and power on every touch.",
    price: 135,
    image: "/images/img4.png"
  },
  {
    id: 3,
    name: "Puma Future Z",
    description: "Dynamic fit and agility. The Future Z adapts to your foot for explosive movement and comfort.",
    price: 110,
    image: "/images/img5.png"
  },
  {
    id: 4,
    name: "Under Armour Magnetico",
    description: "Superior grip and comfort for all weather conditions. Play your best every match.",
    price: 105,
    image: "/images/img6.png"
  },
  {
    id: 5,
    name: "Mizuno Morelia Neo",
    description: "Classic leather, modern performance. Lightweight and flexible for natural movement.",
    price: 130,
    image: "/images/img7.png"
  },
  {
    id: 6,
    name: "New Balance Furon",
    description: "Engineered for speed and accuracy. Lightweight mesh upper for breathability.",
    price: 115,
    image: "/images/img8.png"
  },
  {
    id: 7,
    name: "Nike Phantom GT",
    description: "Precision and power for playmakers. Textured upper for enhanced ball control.",
    price: 140,
    image: "/images/img9.png"
  },
  {
    id: 8,
    name: "Adidas X Ghosted",
    description: "Ultra-lightweight for explosive acceleration. Designed for the fastest players.",
    price: 125,
    image: "/images/img10.png"
  },
  {
    id: 9,
    name: "Puma Ultra",
    description: "Speed and agility combined. Lightweight design for quick movements on the pitch.",
    price: 118,
    image: "/images/img11.png"
  },
  {
    id: 10,
    name: "Umbro Medusae III",
    description: "Soft touch and lightweight. Perfect for creative players who control the game.",
    price: 112,
    image: "/images/img12.png"
  },
  {
    id: 11,
    name: "Diadora Brasil Elite",
    description: "Italian craftsmanship meets modern tech. Comfort and durability for every match.",
    price: 128,
    image: "/images/img13.png"
  },
  {
    id: 12,
    name: "Asics DS Light",
    description: "Lightweight and supportive. Designed for players who value speed and comfort.",
    price: 108,
    image: "/images/img14.png"
  }
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero-section text-light text-center d-flex align-items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/img2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          marginTop: '-76px' // Adjust based on your navbar height
        }}
      >
        <div className="container">
          <h1 className="display-3 fw-bold mb-4">Elite Football Shoes</h1>
          <p className="lead mb-4">Step up your game with our premium collection of football shoes.<br />Designed for comfort, speed, and style.</p>
          <a href="#shop" className="btn btn-primary btn-lg">Shop Now</a>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-5 container-fluid" id="shop">
        <div className="container-fluid px-4 px-lg-5">
          <h2 className="text-center mb-5">Our Collection</h2>
          <div className="row">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light container-fluid" id="about">
        <div className="container-fluid px-4 px-lg-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="/images/img1.png" alt="About Us" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h2 className="mb-4">About Us</h2>
              <p className="lead">Elite Football Shoes is your premier destination for professional football footwear. We carefully curate our collection to bring you the best in comfort, performance, and style.</p>
              <ul className="list-unstyled">
                <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Premium Quality Products</li>
                <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Expert Customer Service</li>
                <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Fast & Secure Shipping</li>
                <li><i className="bi bi-check-circle-fill text-primary me-2"></i>30-Day Return Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5 container-fluid" id="contact">
        <div className="container-fluid px-4 px-lg-5">
          <h2 className="text-center mb-5">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
