import React from 'react';
import './InputField.css';

const InputField = ({ type, placeholder, size }) => {
  return (
    <input className={`input-field ${size}`} type={type} placeholder={placeholder} />
  );
};

export default InputField;
