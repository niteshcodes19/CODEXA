import axios from 'axios';
import { parseJwt } from '../utils/authToken';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://codexa-backend-8pxu.onrender.com/api',
});

const clearSession = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.dispatchEvent(new CustomEvent('auth:session-expired'));
};

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const status = error.response?.status;
    const url = error.config?.url || '';
    const isAuthAttempt =
      /\/auth\/(login|register)$/.test(url) ||
      /\/admin\/login$/.test(url);

    // Session expired or invalid token — always clear, even if localStorage was already wiped
    if (status === 401 && !isAuthAttempt) {
      clearSession();
      const path = window.location.pathname;
      if (!path.startsWith('/login') && !path.startsWith('/register')) {
        window.location.href = '/login';
      }
    }

    // Regular user token used on admin routes — force admin re-login
    if (status === 403 && /\/admin\//.test(url) && !url.includes('/admin/login')) {
      const payload = parseJwt(localStorage.getItem('token'));
      if (payload?.type !== 'admin') {
        clearSession();
        if (!window.location.pathname.startsWith('/login')) {
          window.location.href = '/vikash';
        }
      }
    }
    return Promise.reject(error);
  }
);

export const getApiError = (error) => {
  const data = error.response?.data;
  if (typeof data === 'string') return data;
  return data?.error || data?.message || error.message || 'An error occurred';
};

// Auth
export const loginUser = (email, password) => api.post('/auth/login', { email, password });
export const registerUser = (data) => api.post('/auth/register', data);
export const getUserProfile = () => api.get('/auth/profile');
export const getUserSubmissions = () => api.get('/auth/submissions');
export const getLeaderboard = () => api.get('/auth/leaderboard');
export const updateProfile = (data) => api.put('/auth/profile', data);
export const changePassword = (data) => api.put('/auth/password', data);

// Admin auth
export const loginAdmin = (email, password) => api.post('/admin/login', { email, password });

// Questions (public + user)
export const getAllQuestions = () => api.get('/questions/all-questions');
export const getQuestion = (id) => api.get(`/questions/question/${id}`);
export const runCode = (data) => api.post('/questions/run', data);
export const submitCode = (data) => api.post('/questions/submit', data);

// Admin question management
export const adminGetAllQuestions = () => api.get('/admin/all-questions');
export const adminCreateQuestion = (data) => api.post('/admin/upload-question', data);
export const adminUpdateQuestion = (id, data) => api.put(`/admin/update-question/${id}`, data);
export const adminDeleteQuestion = (id) => api.delete(`/admin/delete-question/${id}`);
export const adminGetStats = () => api.get('/admin/dashboard-stats');

// Superadmin
export const getAdmins = () => api.get('/superadmin/admins');
export const createAdmin = (data) => api.post('/superadmin/create-admin', data);
export const updateAdmin = (id, data) => api.put(`/superadmin/update-admin/${id}`, data);
export const deleteAdmin = (id) => api.delete(`/superadmin/delete-admin/${id}`);
export const getUsers = () => api.get('/superadmin/users');
export const banUser = (id) => api.put(`/superadmin/ban-user/${id}`);
export const unbanUser = (id) => api.put(`/superadmin/unban-user/${id}`);
export const deleteUser = (id) => api.delete(`/superadmin/delete-user/${id}`);
export const superadminGetStats = () => api.get('/superadmin/dashboard-stats');

export default api;
