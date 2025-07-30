import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { getTotalItems } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm py-2">
      <div className="container-fluid px-4 px-lg-5">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src="/images/img1.png" 
            alt="Logo" 
            width="45" 
            height="45" 
            className="d-inline-block align-text-top rounded-circle me-2" 
          />
          <span className="fw-bold fs-4">Elite Shoes</span>
        </Link>

        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link px-3" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link px-3" 
                href="#shop" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link px-3" 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link px-3" 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </a>
            </li>
            {user?.isAdmin && (
              <li className="nav-item">
                <Link className="nav-link px-3" to="/admin">Dashboard</Link>
              </li>
            )}
          </ul>
          
          <div className="d-flex align-items-center gap-3">
            {user ? (
              <div className="dropdown">
                <button 
                  className="btn btn-link nav-link dropdown-toggle" 
                  type="button" 
                  id="userDropdown" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  {user.name}
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  <li>
                    <Link className="dropdown-item" to="/profile">Profile</Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={logout}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login" className="nav-link">Login</Link>
            )}
            
            <Link 
              to="/cart" 
              className="nav-link position-relative d-flex align-items-center"
            >
              <i className="bi bi-basket2-fill fs-4"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ transform: 'translate(-50%, -25%)' }}>
                {getTotalItems()}
                <span className="visually-hidden">items in cart</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
