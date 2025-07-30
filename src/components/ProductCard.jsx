import React from 'react';
import { useCart } from '../hooks/useCart';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`bi ${
            i <= rating
              ? 'bi-star-fill text-warning'
              : i - 0.5 <= rating
              ? 'bi-star-half text-warning'
              : 'bi-star text-warning'
          }`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm product-card">
        <div className="position-relative">
          <img 
            src={product.image} 
            className="card-img-top" 
            alt={product.name}
            style={{ height: '200px', objectFit: 'cover' }}
          />
          {product.featured && (
            <span className="position-absolute top-0 start-0 badge bg-danger m-2">
              Featured
            </span>
          )}
          {product.countInStock === 0 && (
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <span className="badge bg-danger fs-6">Out of Stock</span>
            </div>
          )}
        </div>
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-1">
            <h5 className="card-title mb-0">{product.name}</h5>
            <span className="badge bg-secondary">{product.brand}</span>
          </div>
          <p className="text-muted small mb-2">{product.category}</p>
          <div className="mb-2">
            {renderStars(product.rating)}
            <span className="ms-2 text-muted small">({product.numReviews} reviews)</span>
          </div>
          <p className="card-text text-truncate small mb-3" title={product.description}>
            {product.description}
          </p>
          <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5 className="mb-0">${product.price.toFixed(2)}</h5>
              <small className="text-muted">
                {product.countInStock > 0 ? `${product.countInStock} in stock` : 'Out of stock'}
              </small>
            </div>
            <button 
              className="btn btn-primary w-100"
              onClick={() => addToCart(product)}
              disabled={product.countInStock === 0}
            >
              {product.countInStock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
