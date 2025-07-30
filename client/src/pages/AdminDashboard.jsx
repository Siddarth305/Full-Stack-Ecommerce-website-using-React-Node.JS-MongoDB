import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import api from '../utils/api';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    brand: '',
    description: '',
    image: '', // ✅ renamed from imageUrl
    category: '',
    countInStock: ''
  });

  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const response = await api.get('/products');
      setProducts(response.data.products);
    } catch (error) {
      setError(error.response?.data?.message || 'Error fetching products');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authLoading) return;
    if (!user) return navigate('/login');
    if (!user.isAdmin) return navigate('/');
    fetchProducts();
  }, [user, authLoading, navigate, fetchProducts]);

  const handleChange = (e) => {
    const value =
      e.target.name === 'price' || e.target.name === 'countInStock'
        ? parseFloat(e.target.value)
        : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setFormData({
      name: '',
      price: '',
      brand: '',
      description: '',
      image: '',
      category: '',
      countInStock: ''
    });
    setShowForm(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      brand: product.brand,
      description: product.description,
      image: product.image, // ✅ fixed
      category: product.category,
      countInStock: product.countInStock
    });
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      if (editingProduct) {
        await api.put(`/products/${editingProduct._id}`, formData);
      } else {
        await api.post('/products', formData);
      }
      setShowForm(false);
      fetchProducts();
    } catch (error) {
      setError(error.response?.data?.message || 'Error saving product');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (productId) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      setLoading(true);
      setError('');
      await api.delete(`/products/${productId}`);
      fetchProducts();
    } catch (error) {
      setError(error.response?.data?.message || 'Error deleting product');
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="text-center">
          <div className="spinner-border text-primary" role="status" />
          <p className="mt-2">Loading authentication...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning">
          No user found. You will be redirected to login...
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center" style={{ padding: '5rem 1rem', width: '100vw' }}>
      <div style={{ width: '100%', maxWidth: '1100px' }}>
        <div className="card shadow-sm p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="h3 mb-0">Admin Dashboard</h1>
              <p className="text-muted">Manage your products</p>
            </div>
            <button className="btn btn-primary" onClick={handleAddProduct} disabled={loading}>
              Add New Product
            </button>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          {loading && !showForm ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status" />
            </div>
          ) : showForm ? (
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title mb-4">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </h5>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="price" className="form-label">Price</label>
                      <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="countInStock" className="form-label">Stock</label>
                      <input type="number" className="form-control" id="countInStock" name="countInStock" value={formData.countInStock} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="brand" className="form-label">Brand</label>
                    <input type="text" className="form-control" id="brand" name="brand" value={formData.brand} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input type="text" className="form-control" id="category" name="category" value={formData.category} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input type="url" className="form-control" id="image" name="image" value={formData.image} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} rows="3" required />
                  </div>
                  <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Saving...
                        </>
                      ) : 'Save Product'}
                    </button>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => setShowForm(false)} disabled={loading}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted mb-0">No products found. Add your first product!</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover text-center">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td>
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                          className="rounded"
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>${product.price.toFixed(2)}</td>
                      <td>{product.countInStock}</td>
                      <td>{product.category}</td>
                      <td>
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-primary" onClick={() => handleEditProduct(product)}>
                            Edit
                          </button>
                          <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(product._id)}>
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
