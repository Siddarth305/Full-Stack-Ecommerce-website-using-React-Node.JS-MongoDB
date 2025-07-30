import { createContext, useState, useEffect } from 'react';
import api from '../utils/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        console.log('Initializing auth...');
        // Check for saved user data on mount
        const userData = localStorage.getItem('userData');
        if (userData) {
          const parsedUser = JSON.parse(userData);
          console.log('Found stored user data:', parsedUser);
          setUser(parsedUser);
          
          // Verify token is still valid
          try {
            await api.get('/users/profile');
            console.log('Token is valid');
          } catch (error) {
            console.log('Token validation failed:', error);
            localStorage.removeItem('userData');
            setUser(null);
          }
        } else {
          console.log('No stored user data found');
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        console.log('Auth initialization complete');
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await api.post('/users/login', { email, password });
      localStorage.setItem('userData', JSON.stringify(data));
      setUser(data);
      return data;
    } catch (error) {
      throw error.response?.data?.message || error.message;
    }
  };

  const register = async (name, email, password) => {
    try {
      const { data } = await api.post('/users', { name, email, password });
      localStorage.setItem('userData', JSON.stringify(data));
      setUser(data);
      return data;
    } catch (error) {
      throw error.response?.data?.message || error.message;
    }
  };

  const logout = () => {
    localStorage.removeItem('userData');
    setUser(null);
  };

  const updateProfile = async (userData) => {
    try {
      const { data } = await api.put('/users/profile', userData);
      const updatedUser = { ...user, ...data };
      localStorage.setItem('userData', JSON.stringify(updatedUser));
      setUser(updatedUser);
      return data;
    } catch (error) {
      throw error.response?.data?.message || error.message;
    }
  };

  // Function to check if user is admin
  const isAdmin = () => {
    return user?.isAdmin === true;
  };

  const value = {
    user,
    login,
    logout,
    register,
    updateProfile,
    isAdmin,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
