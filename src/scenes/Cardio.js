// src/scenes/Cardio.js
import React, { useContext, useState } from 'react';
import { useLocation } from 'wouter';
import { UserContext } from '../UserContext';
import HeartModel from '../components/HeartModel';
import DepartmentNavigation from '../components/DepartmentNavigation';
import '../styles/Cardio.css';

const Cardio = () => {
  const [, setLocation] = useLocation();
  const { user } = useContext(UserContext);
  const [showModel, setShowModel] = useState(false);

  const handleToggleModel = () => {
    setShowModel(!showModel);
  };

  return (
    <div className="cardio-container">
      <div className="cardio-sidebar">
        <div className="department-info">
          <h2>Département de Cardiologie</h2>
          <p>Nom: {user.name}</p>
          <p>Sexe: {user.sex}</p>
          <p>Rôle: {user.role}</p>
        </div>
        <DepartmentNavigation />
      </div>
      <div className="cardio-content">
        {showModel ? (
          <HeartModel />
        ) : (
          <div>
            <img src="/assets/images/coeur.png" alt="Heart Model" className="heart-image" />
            <button onClick={handleToggleModel} className="toggle-button">
              Voir le modèle 3D
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cardio;
