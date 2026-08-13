import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <div className="not-found-page">
    <div className="not-found-card glass-card">
      <span className="not-found-code">404</span>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist or was moved.</p>
      <div className="not-found-actions">
        <Link to="/" className="btn btn-primary">Go Home</Link>
        <Link to="/problems" className="btn btn-outline">Browse Problems</Link>
      </div>
    </div>
  </div>
);

export default NotFound;
