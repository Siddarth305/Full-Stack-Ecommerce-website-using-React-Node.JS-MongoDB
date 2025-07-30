import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div
        className="container-fluid"
        style={{
          marginTop: '80px',
          minHeight: 'calc(100vh - 100px)',
          minWidth: '1500px',
          overflowX: 'hidden',
          paddingLeft: '2rem',
          paddingRight: '1rem',
          boxSizing: 'border-box'
        }}
      >
        <div
          className="row justify-content-center align-items-center"
          style={{ minHeight: 'calc(100vh - 200px)' }}
        >
          <div className="col-md-6 text-center">
            <i className="bi bi-basket2 display-1 text-muted mb-4"></i>
            <h2 className="mb-3">Your cart is empty</h2>
            <p className="lead mb-4">Looks like you haven't added any items to your cart yet.</p>
            <Link to="/" className="btn btn-primary btn-lg">Continue Shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="container-fluid"
      style={{
        marginTop: '85px',
        minHeight: 'calc(100vh - 76px)',
        minWidth: '1500px',
        overflowX: 'hidden',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        boxSizing: 'border-box'
      }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h2 className="mb-4">Shopping Cart</h2>

          {cart.map(item => (
            <div key={item.id} className="card mb-3 shadow-sm">
              <div className="row g-0 align-items-center p-2">
                <div className="col-md-2">
                  <img
                    src={item.image}
                    className="img-fluid rounded"
                    alt={item.name}
                    style={{
                      maxHeight: '120px',
                      objectFit: 'contain',
                      maxWidth: '100%',
                      width: '100%'
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text text-muted">${item.price}</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="mx-3 fw-bold">{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-md-2 text-center">
                  <p className="h5 mb-0">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="col-md-1 text-end">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="card mt-4 shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Total:</h4>
                <h4 className="mb-0">${getTotalPrice().toFixed(2)}</h4>
              </div>
              <button className="btn btn-primary btn-lg w-100 mt-3">
                Proceed to Checkout
              </button>
            </div>
          </div>

          <div className="text-center mt-4 mb-5">
            <Link to="/" className="text-decoration-none">
              <i className="bi bi-arrow-left me-2"></i>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
