import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="d-flex align-items-center justify-content-center text-center" style={{ height: '100vh', width: '100vw' }}>
        <div>
          <i className="bi bi-basket2 display-1 text-muted mb-4" />
          <h2 className="mb-3">Your cart is empty</h2>
          <p className="lead mb-4">Looks like you haven't added any items to your cart yet.</p>
          <Link to="/" className="btn btn-primary btn-lg">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center" style={{ width: '100vw', padding: '2rem 1rem' }}>
      <div style={{ width: '100%', maxWidth: '1100px' }}>
        <h2 className="text-center fw-bold mb-4">Shopping Cart</h2>

        {cart.map(item => (
          <div key={item.id} className="card mb-3 shadow-sm">
            <div className="row g-0 align-items-center p-3">
              <div className="col-md-2 text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid rounded"
                  style={{
                    maxHeight: '100px',
                    objectFit: 'contain',
                    width: '100%',
                  }}
                />
              </div>
              <div className="col-md-4">
                <div className="card-body">
                  <h5 className="card-title mb-2">{item.name}</h5>
                  <p className="text-muted mb-0">${item.price}</p>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="d-flex align-items-center justify-content-center">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    −
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
                <h5 className="mb-0">${(item.price * item.quantity).toFixed(2)}</h5>
              </div>
              <div className="col-md-1 text-end">
                <button className="btn btn-outline-danger" onClick={() => removeFromCart(item.id)}>
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="card mt-4 shadow">
          <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-center">
            <h4 className="mb-3 mb-md-0">Total: <span className="text-primary">${getTotalPrice().toFixed(2)}</span></h4>
            <button className="btn btn-success btn-lg">Proceed to Checkout</button>
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
  );
};

export default Cart;
