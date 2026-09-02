import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-icon">&lt;/&gt;</span> CODEXA
          </Link>
          <p className="footer-tagline">
            Practice coding problems. Track progress. Ace interviews.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Platform</h4>
            <Link to="/problems">Problems</Link>
            <Link to="/ranking">Ranking</Link>
            <Link to="/register">Sign Up</Link>
            <Link to="/login">Login</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/admin/login">Admin Portal</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 CODEXA. All rights reserved.</p>
        <p className="footer-made">Built for developers, by developers.</p>
      </div>
    </footer>
  );
};

export default Footer;
