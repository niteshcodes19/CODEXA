import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getApiError } from '../services/api';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Auth.css';

const Auth = ({ mode: modeProp, adminOnly = false }) => {
  const { login, register, adminLogin, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const routeMode = adminOnly
    ? 'login'
    : modeProp || (queryParams.get('mode') === 'register' ? 'register' : 'login');

  const [mode, setMode] = useState(routeMode);
  const [role, setRole] = useState(adminOnly ? 'admin' : 'user');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  useEffect(() => {
    if (!adminOnly && queryParams.get('admin') === '1') {
      navigate('/vikash', { replace: true });
    }
  }, [adminOnly, location.search, navigate]);

  useEffect(() => {
    setMode(routeMode);
  }, [routeMode]);

  useEffect(() => {
    if (location.state?.registered) {
      setSuccess('Registration successful! Please login.');
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location.state, location.pathname, navigate]);

  useEffect(() => {
    if (!isAuthenticated) return;
    if (adminOnly || isAdmin) {
      navigate('/admin', { replace: true });
    } else {
      navigate('/problems', { replace: true });
    }
  }, [isAuthenticated, isAdmin, adminOnly, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
    setSuccess(null);
  };

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setRole('user');
    setError(null);
    setSuccess(null);
    setFormData({ name: '', email: '', phone: '', password: '' });
    navigate(nextMode === 'register' ? '/register' : '/login', { replace: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (mode === 'login') {
        if (role === 'admin' || adminOnly) {
          await adminLogin(formData.email, formData.password);
          navigate('/admin', { replace: true });
        } else {
          await login(formData.email, formData.password);
          navigate('/problems', { replace: true });
        }
      } else {
        const payload = {
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim(),
          password: formData.password
        };

        if (!payload.name || !payload.email || !payload.phone || !payload.password) {
          throw new Error('All fields are required');
        }
        if (payload.password.length < 6) {
          throw new Error('Password must be at least 6 characters');
        }

        await register(payload);
        setFormData({ name: '', email: '', phone: '', password: '' });
        navigate('/login', { replace: true, state: { registered: true } });
      }
    } catch (err) {
      setError(getApiError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-mesh-bg"></div>
      
      <div className="auth-card">
        <div className="auth-header">
          <h2>{adminOnly ? 'Admin Sign In' : mode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
          <p>
            {adminOnly
              ? 'Authorized personnel only'
              : mode === 'login'
                ? 'Enter your details to continue'
                : 'Join the platform and start coding'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className={`auth-form ${(adminOnly || role === 'admin') ? 'admin-theme' : ''}`}>
          {error && <div className="auth-alert error">{error}</div>}
          {success && <div className="auth-alert success">{success}</div>}

          {mode === 'register' && (
            <>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                />
                <label htmlFor="name">Full Name</label>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder=" "
                />
                <label htmlFor="phone">Phone Number</label>
              </div>
            </>
          )}

          <div className="input-group">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="email">Email Address</label>
          </div>

          <div className="input-group password-group">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="password">Password</label>
            <button
              type="button"
              className="pwd-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button type="submit" className="auth-submit-btn" disabled={loading}>
            {loading ? <span className="spinner"></span> : (mode === 'login' ? (adminOnly || role === 'admin' ? 'Admin Login' : 'Login') : 'Create Account')}
          </button>
        </form>

        {!adminOnly && (
          <div className="auth-footer">
            {mode === 'login' ? (
              <p>Don't have an account? <button type="button" className="switch-btn" onClick={() => switchMode('register')}>Register</button></p>
            ) : (
              <p>Already have an account? <button type="button" className="switch-btn" onClick={() => switchMode('login')}>Login</button></p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
