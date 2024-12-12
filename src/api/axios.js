import axios from 'axios';

// Create Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
