import axios from 'axios';

const api = axios.create({
  baseURL:'https://healthmate-backend.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
//  'https://healthmate-backend.vercel.app'
// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add logic here to include tokens in the header if needed
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handling
    console.error('API Error:', error);
    // You can add more sophisticated error handling here
    return Promise.reject(error);
  }
);

export default api;