import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://airbnb-clone-backend-1-7s14.onrender.com/', // Adjust as per your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;