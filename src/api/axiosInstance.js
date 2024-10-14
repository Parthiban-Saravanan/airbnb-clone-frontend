import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://airbnb-clone-backend-1-7s14.onrender.com',
});

instance.interceptors.push({
  request: (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
});

export default instance;
