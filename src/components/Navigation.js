// src/components/Navigation.js
import React from 'react';
import '../styles/Navigation.css';

const Navigation = ({ setModel }) => {
  return (
    <div className="navigation-container">
      <button onClick={() => setModel('sphere')}>Sphere View</button>
      <button onClick={() => setModel('cube')}>Cube View</button>
      <button onClick={() => setModel('model3d')}>3D Model View</button>
    </div>
  );
};

export default Navigation;
