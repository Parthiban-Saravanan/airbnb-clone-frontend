import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://airbnb-clone-backend-1-7s14.onrender.com/', // Backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // This allows cookies to be sent and received (useful for authentication)
  timeout: 30000, // Set a timeout for requests
});

export default axiosInstance;
