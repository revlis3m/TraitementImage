// src/components/WelcomeDialog.js
import React from 'react';
import '../styles/WelcomeDialog.css';

const WelcomeDialog = ({ onClose }) => {
  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <p>Bienvenue à l'Hôpital Virtuel !</p>
        <button onClick={onClose} className="dialog-button">OK</button>
      </div>
    </div>
  );
};

export default WelcomeDialog;
