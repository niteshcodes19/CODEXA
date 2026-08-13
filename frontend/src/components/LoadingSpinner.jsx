import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ fullPage = false }) => {
  return (
    <div className={`spinner-container ${fullPage ? 'spinner-fullpage' : ''}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
