import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

console.log('API URL:', API_URL);

// Test API connection
const testConnection = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log('API connection successful:', response.data);
  } catch (error) {
    console.error('API connection failed:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
  }
};

testConnection();

// Create axios instance with base configuration
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptor to add auth token to requests
api.interceptors.request.use(
  (config) => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const { token } = JSON.parse(userData);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor
api.interceptors.response.use(
  (response) => {
    console.log('API Response:', {
      url: response.config.url,
      method: response.config.method,
      status: response.status,
      data: response.data
    });
    return response;
  },
  (error) => {
    console.error('API Error:', {
      url: error.config?.url,
      method: error.config?.method,
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    return Promise.reject(error);
  }
);

export default api;
