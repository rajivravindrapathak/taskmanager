import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const login = (email, password) => api.post('/login', { email, password });
export const signup = (email, password) => api.post('/signup', { email, password });
export const getTasks = () => api.get('/tasks');
export const createTask = (task) => api.post('/tasks', task);
export const updateTask = (id, updates) => api.put(`/tasks/${id}`, updates);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);
            