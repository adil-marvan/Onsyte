import React from 'react';
import Button from './Components/button/Button';
import InputField from './Components/input-field/Inputfield';
// import Button from './Button';
// import './App.css';

function App() {
  return (
    <div>
      <h1>Reusable Button Component</h1>
      <Button color="blue" size="small" label="Small Blue" />
      <Button color="red" size="medium" label="Medium Red" />
      <Button color="green" size="large" label="Large Green" />
      <Button color="blue" size="extra-large" label ="Login" />

      <h1>Reusable Input Field Component</h1>
      
      <InputField type="email" placeholder="Enter your email" size="small" />
      <InputField type="password" placeholder="Enter your password" size="medium" />
    </div>
  );
}

export default App;