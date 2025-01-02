import React, { useState } from 'react';
import "../styles/components/ProgressBar.css";

const ProgressBar = ({ value }) => {
  console.log(value);
  return (
    <div className='progressBarContainer'>
        <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${value}%` }}></div>
        </div>
        <p className='progressBarText'>{value}/100</p>
    </div>
  );
};

export default ProgressBar;