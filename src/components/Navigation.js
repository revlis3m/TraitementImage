// src/components/Navigation.js
import React from 'react';
import '../styles/Navigation.css';

const Navigation = ({ setModel }) => {
  return (
    <div className="navigation-container">
      <button onClick={() => setModel('sphere')}>Sphere View</button>
      {/* <button onClick={() => setModel('cube')}>Cube View</button> */}
      <button onClick={() => setModel('eye')}>Oeil model 3D</button>
      {/* <button onClick={() => setModel('glasses')}>Glasses View</button> */}
      <button onClick={() => setModel('oeil detaille')}>Oeil detaille</button>
      <button onClick={() => setModel('eyeillus')}>Animation de la vision</button>
    </div>
  );
};

export default Navigation;
