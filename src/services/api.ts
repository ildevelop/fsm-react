import axios, { AxiosResponse, AxiosError } from 'axios';
import { PresentI } from '../context/UserContext';

const BASE_URL = 'https://fakestoreapi.com';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens or other headers here
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle common errors here
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error('Unauthorized');
          break;
        case 404:
          console.error('Not Found');
          break;
        default:
          console.error('An error occurred');
      }
    } else if (error.request) {
      console.error('No response received');
    } else {
      console.error('Error setting up request');
    }
    return Promise.reject(error);
  }
);

export const apiService = {
  getPresents: async (limit: number = 10): Promise<PresentI[]> => {
    try {
      const response = await api.get<PresentI[]>(`/products?limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching presents:', error);
      return [];
    }
  },

  // Add other API methods here as needed
};
