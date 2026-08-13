import React, { useEffect, useState } from 'react';
import './StatsCircle.css';

const StatsCircle = ({ solved, total, label, color }) => {
  const [offset, setOffset] = useState(0);
  
  const size = 120;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percent = total > 0 ? (solved / total) * 100 : 0;

  useEffect(() => {
    const progressOffset = circumference - (percent / 100) * circumference;
    setOffset(progressOffset);
  }, [percent, circumference]);

  return (
    <div className="stats-circle-container">
      <svg width={size} height={size} className="stats-svg">
        <circle
          className="stats-circle-bg"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="stats-circle-progress"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ stroke: color }}
        />
      </svg>
      <div className="stats-circle-text">
        <div className="stats-count">
          <span style={{ color }}>{solved}</span>
          <span className="stats-total">/{total}</span>
        </div>
        <div className="stats-label">{label}</div>
      </div>
    </div>
  );
};

export default StatsCircle;
