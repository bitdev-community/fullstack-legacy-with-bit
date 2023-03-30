import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_HELLO_API_HOST,
});

export default api;