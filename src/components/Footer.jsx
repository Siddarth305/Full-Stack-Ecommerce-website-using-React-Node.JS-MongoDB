import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="mb-3">Elite Football Shoes</h5>
            <p>Your premier destination for professional football footwear.</p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/#shop" className="text-light text-decoration-none">Shop</a></li>
              <li><a href="/#about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="bi bi-geo-alt-fill me-2"></i>123 Sport Street, City</li>
              <li><i className="bi bi-telephone-fill me-2"></i>+1 234 567 890</li>
              <li><i className="bi bi-envelope-fill me-2"></i>info@eliteshoes.com</li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Elite Football Shoes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
