import axios, { AxiosInstance } from 'axios';
import http from 'http';

const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_HELLO_API_HOST,
  httpAgent: new http.Agent({ keepAlive: true }) // Remove this, after API is hosted in HTTPS URL
});

export default api;