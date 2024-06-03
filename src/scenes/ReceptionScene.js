// src/scenes/ReceptionScene.js
import React, { useState } from 'react';
import { useLocation } from 'wouter';
import '../styles/ReceptionScene.css';
import hospitalImage from '../assets/images/hopital.jpg';
import WelcomeDialog from '../components/WelcomeDialog';

const ReceptionScene = () => {
  const [, setLocation] = useLocation();
  const [dialogVisible, setDialogVisible] = useState(true);

  const handleEnter = () => {
    setLocation('/welcome');
  };

  const closeDialog = () => {
    setDialogVisible(false);
  };

  return (
    <div className="reception-container">
      {dialogVisible && <WelcomeDialog onClose={closeDialog} />}
      <img src={hospitalImage} alt="Hôpital" className="reception-image" />
      <button className="enter-button" onClick={handleEnter}>
        Entrer dans l'hôpital
      </button>
    </div>
  );
};

export default ReceptionScene;
