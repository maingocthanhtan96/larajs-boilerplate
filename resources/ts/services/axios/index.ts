import axios from 'axios';
import { setupInterceptorsTo } from './interceptors';

const axiosInstance = setupInterceptorsTo(
  axios.create({
    baseURL: '/api',
    timeout: 60_000, // Request timeout
    withCredentials: true,
  })
);
export default axiosInstance;
