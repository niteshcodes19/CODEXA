import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Home', exact: true },
  { to: '/problems', label: 'Problems' },
  { to: '/ranking', label: 'Ranking' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const { user, isAuthenticated, isAdmin, isSuperAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate('/');
  };

  const isActive = (path, exact) =>
    exact ? location.pathname === path : location.pathname.startsWith(path);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-icon">&lt;/&gt;</span>
          <span className="logo-text">Mini LeetCode</span>
        </Link>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(({ to, label, exact }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${isActive(to, exact) ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <div className="navbar-mobile-auth">
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="btn-secondary" onClick={() => setMenuOpen(false)}>Login</Link>
                <Link to="/register" className="btn-primary" onClick={() => setMenuOpen(false)}>Sign Up</Link>
              </>
            ) : (
              <>
                {isAdmin && (
                  <Link to="/admin" className="nav-link" onClick={() => setMenuOpen(false)}>Admin</Link>
                )}
                {isSuperAdmin && (
                  <Link to="/superadmin" className="nav-link" onClick={() => setMenuOpen(false)}>Super Admin</Link>
                )}
                {!isAdmin && (
                  <>
                    <Link to="/profile" className="nav-link" onClick={() => setMenuOpen(false)}>Profile</Link>
                    <Link to="/settings" className="nav-link" onClick={() => setMenuOpen(false)}>Settings</Link>
                  </>
                )}
                <button onClick={handleLogout} className="btn-outline">Logout</button>
              </>
            )}
          </div>
        </div>

        <div className="navbar-right desktop-only">
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="btn-secondary">Login</Link>
              <Link to="/register" className="btn-primary">Sign Up</Link>
            </>
          ) : (
            <>
              <span className="username">Hi, {user?.name?.split(' ')[0] || 'User'}</span>
              {isAdmin && !isSuperAdmin && (
                <Link to="/admin" className={`nav-link ${location.pathname === '/admin' ? 'active' : ''}`}>Admin</Link>
              )}
              {isSuperAdmin && (
                <>
                  <Link to="/admin" className={`nav-link ${location.pathname === '/admin' ? 'active' : ''}`}>Admin</Link>
                  <Link to="/superadmin" className={`nav-link ${location.pathname === '/superadmin' ? 'active' : ''}`}>Super Admin</Link>
                </>
              )}
              {!isAdmin && (
                <>
                  <Link to="/profile" className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}>Profile</Link>
                  <Link to="/settings" className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`}>Settings</Link>
                </>
              )}
              <button onClick={handleLogout} className="btn-outline">Logout</button>
            </>
          )}
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
