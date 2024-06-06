// src/scenes/Ophtalmo.js
import React, { useState, useContext } from 'react';
import { UserContext } from '../UserContext';
import ModelView from './ModelView';
import Model3DView from './Model3DView';
import Navigation from '../components/Navigation';
import '../styles/Ophtalmo.css';

const Ophtalmo = () => {
  const { user } = useContext(UserContext);
  const [model, setModel] = useState('sphere');

  const renderModel = () => {
    if (model === 'sphere' || model === 'cube') {
      return <ModelView model={model} />;
    } else if (model === 'model3d') {
      return <Model3DView />;
    }
  };

  return (
    <div className="ophtalmo-container">
      <Navigation setModel={setModel} />
      <div className="department-info">
        <h1>Département Ophtalmologie</h1>
        <p>Nom: {user.name}</p>
        <p>Sexe: {user.sex === 'male' ? 'Homme' : user.sex === 'female' ? 'Femme' : 'Autre'}</p>
        <p>Rôle: {user.role === 'medecin' ? 'Médecin' : 'Patient'}</p>
      </div>
      {renderModel()}
    </div>
  );
};

export default Ophtalmo;
