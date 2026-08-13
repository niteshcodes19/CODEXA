import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { loginUser, registerUser, getUserProfile, loginAdmin } from '../services/api';
import { parseJwt, isTokenExpired } from '../utils/authToken';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [tokenPayload, setTokenPayload] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const logout = useCallback(() => {
    setToken(null);
    setTokenPayload(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }, []);

  const syncToken = (nextToken, nextUser) => {
    const payload = parseJwt(nextToken);
    setToken(nextToken);
    setTokenPayload(payload);
    setUser(nextUser);
    if (nextToken) {
      localStorage.setItem('token', nextToken);
    } else {
      localStorage.removeItem('token');
    }
    if (nextUser) {
      localStorage.setItem('user', JSON.stringify(nextUser));
    } else {
      localStorage.removeItem('user');
    }
  };

  useEffect(() => {
    const onSessionExpired = () => logout();
    window.addEventListener('auth:session-expired', onSessionExpired);
    return () => window.removeEventListener('auth:session-expired', onSessionExpired);
  }, [logout]);

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');

      if (!storedToken || isTokenExpired(storedToken)) {
        logout();
        setInitializing(false);
        return;
      }

      const payload = parseJwt(storedToken);
      if (!payload?.type) {
        logout();
        setInitializing(false);
        return;
      }

      let parsedUser = null;
      try {
        parsedUser = storedUser ? JSON.parse(storedUser) : null;
      } catch {
        parsedUser = null;
      }

      if (parsedUser?.type && parsedUser.type !== payload.type) {
        logout();
        setInitializing(false);
        return;
      }

      setToken(storedToken);
      setTokenPayload(payload);

      try {
        if (payload.type === 'admin') {
          setUser({
            ...(parsedUser || {}),
            id: payload.id,
            type: 'admin',
            role: payload.role
          });
        } else {
          const profile = await getUserProfile();
          const userData = { ...profile, type: 'user' };
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
        }
      } catch (error) {
        console.error('Auth init error:', error);
        logout();
      }

      setInitializing(false);
    };

    initAuth();
  }, [logout]);

  const login = async (email, password) => {
    const data = await loginUser(email, password);
    const userData = { ...data.user, type: 'user' };
    syncToken(data.token, userData);
    return data;
  };

  const adminLogin = async (email, password) => {
    const data = await loginAdmin(email, password);
    const adminData = { ...data.admin, type: 'admin' };
    syncToken(data.token, adminData);
    return data;
  };

  const register = async (userData) => registerUser(userData);

  const refreshUser = async () => {
    if (tokenPayload?.type !== 'user') return;
    const profile = await getUserProfile();
    const userData = { ...profile, type: 'user' };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const isAuthenticated = !!token && !!tokenPayload;
  const isUser = tokenPayload?.type === 'user';
  const isAdmin = tokenPayload?.type === 'admin';
  const isSuperAdmin = tokenPayload?.type === 'admin' && tokenPayload?.role === 'superadmin';

  return (
    <AuthContext.Provider value={{
      user, token, tokenPayload, loading: initializing, login, adminLogin, register, logout, refreshUser,
      isAuthenticated, isUser, isAdmin, isSuperAdmin
    }}>
      {!initializing && children}
    </AuthContext.Provider>
  );
};
