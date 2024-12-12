import axios from 'axios';

// Create Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: "https://task-management-backend-h9v4.onrender.com", 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
