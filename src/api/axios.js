import axios from 'axios';

// Create Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // Change this to your backend URL if needed
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
