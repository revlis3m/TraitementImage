// src/scenes/Ophtalmo.js
import React, { useState, useContext } from 'react';
import { UserContext } from '../UserContext';
import ModelView from './ModelView';
import EyeView from './EyeView';
import GlassesView from './GlassesView';
import Navigation from '../components/Navigation';
import '../styles/Ophtalmo.css';

const Ophtalmo = () => {
  const { user } = useContext(UserContext);
  const [model, setModel] = useState('sphere');

  const renderModel = () => {
    if (model === 'eye') {
      return <EyeView />;
    } else if (model == 'glasses') {
      return <GlassesView />;
    }
  };

  const getViewName = () => {
    switch (model) {
      case 'sphere':
        return 'Sphere View';
      case 'cube':
        return 'Cube View';
      case 'eye':
        return 'Eye View';
      case 'glasses' :
        return 'Glasses View'
      default:
        return '';
    }
  };

  return (
    <div className="ophtalmo-container">
      <div className="left-section">
        <div className="department-info">
          <h1>Département Ophtalmologie</h1>
          <p>Nom: {user.name}</p>
          <p>Sexe: {user.sex === 'male' ? 'Homme' : user.sex === 'female' ? 'Femme' : 'Autre'}</p>
          <p>Rôle: {user.role === 'medecin' ? 'Médecin' : 'Patient'}</p>
        </div>
      </div>
      <div className="center-section">
        <h1>{`Vue ${getViewName()}`}</h1>
        {renderModel()}
      </div>
      <div className="right-section">
        <Navigation setModel={setModel} />
      </div>
    </div>
  );
};

export default Ophtalmo;
