import api from './api';

export const ProductService = {
  // Get all products
  getProducts: async (page = 1, limit = 10, search = '') => {
    try {
      const { data } = await api.get(`/products?page=${page}&limit=${limit}&search=${search}`);
      return data;
    } catch (error) {
      throw error.response?.data?.message || error.message;
    }
  },

  // Get featured products
  getFeaturedProducts: async () => {
    try {
      const { data } = await api.get('/products/featured');
      return data;
    } catch (error) {
      throw error.response?.data?.message || error.message;
    }
  },

  // Get single product
  getProduct: async (id) => {
    try {
      const { data } = await api.get(`/products/${id}`);
      return data;
    } catch (error) {
      throw error.response?.data?.message || error.message;
    }
  },

  // Create product (admin only)
  createProduct: async (productData) => {
    try {
      const { data } = await api.post('/products', productData);
      return data;
    } catch (error) {
      throw error.response?.data?.message || error.message;
    }
  },

  // Update product (admin only)
  updateProduct: async (id, productData) => {
    try {
      const { data } = await api.put(`/products/${id}`, productData);
      return data;
    } catch (error) {
      throw error.response?.data?.message || error.message;
    }
  },

  // Delete product (admin only)
  deleteProduct: async (id) => {
    try {
      const { data } = await api.delete(`/products/${id}`);
      return data;
    } catch (error) {
      throw error.response?.data?.message || error.message;
    }
  },

  // Add review
  addReview: async (productId, review) => {
    try {
      const { data } = await api.post(`/products/${productId}/reviews`, review);
      return data;
    } catch (error) {
      throw error.response?.data?.message || error.message;
    }
  },

  // Upload product image (admin only)
  uploadImage: async (formData) => {
    try {
      const { data } = await api.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (error) {
      throw error.response?.data?.message || error.message;
    }
  },
};
