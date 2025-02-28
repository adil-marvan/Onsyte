import React from "react";
import "./InputField.css";

const InputField = ({ type, placeholder, size, value, onChange }) => {
  return (
    <input 
      className={`input-field ${size}`} 
      type={type} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
    />
  );
};

export default InputField;

