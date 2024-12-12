import axios from 'axios';

// Create Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Change this to your backend URL if needed
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
