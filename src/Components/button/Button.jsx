import React from 'react';
import './Button.css';
import { hover } from '@testing-library/user-event/dist/hover';

const Button = ({ color, size, label }) => {
  return (
    <button className={`btn ${size}`} style={{ backgroundColor: color }}>
      {label} 
    </button>
  );
};

export default Button;