import axios from 'axios';

// Create Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: "https://task-management-app-backend-r097.onrender.com",
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
