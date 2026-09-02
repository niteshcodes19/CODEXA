import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ fullPage = false, size = 'medium' }) => {
  return (
    <div className={`spinner-container ${fullPage ? 'spinner-fullpage' : ''} spinner-${size}`}>
      <div className={`spinner spinner-${size}`}></div>
    </div>
  );
};

export default LoadingSpinner;
