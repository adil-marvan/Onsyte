import React from "react";
import "./Button.css";

const Button = ({ color, size, label, type }) => {
  return (
    <button 
      className={`btn ${size}`} 
      style={{ backgroundColor: color }} 
      type={type}
    >
      {label} 
    </button>
  );
};

export default Button;
