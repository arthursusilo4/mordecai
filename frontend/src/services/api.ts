import axios from 'axios';
import { User, CreateUserRequest, UpdateUserRequest } from '../types/user';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const userAPI = {
  getAllUsers: async (search?: string) => {
    const response = await api.get('/users', {
      params: search ? { search } : {},
    });
    return response; // Return the full response object
  },
  
  getUserById: async (id: string) => {
    const response = await api.get(`/users/${id}`);
    return response; // Return the full response object
  },
  
  createUser: async (userData: CreateUserRequest) => {
    const response = await api.post('/users', userData);
    return response; // Return the full response object
  },
  
  updateUser: async (id: string, userData: UpdateUserRequest) => {
    const response = await api.put(`/users/${id}`, userData);
    return response; // Return the full response object
  },
  
  deleteUser: async (id: string) => {
    const response = await api.delete(`/users/${id}`);
    return response; // Return the full response object
  },
};

export default api;