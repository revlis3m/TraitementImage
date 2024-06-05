// src/scenes/Ophtalmo.js
import React, { useState } from 'react';
import { UserContext } from '../UserContext';
import { useContext } from 'react';
import ModelView from './ModelView';
import Navigation from '../components/Navigation';
import '../styles/Ophtalmo.css';

const Ophtalmo = () => {
  const { user } = useContext(UserContext);
  const [model, setModel] = useState('sphere');

  return (
    <div className="ophtalmo-container">
      <Navigation setModel={setModel} />
      <div className="department-info">
        <h1>Département Ophtalmologie</h1>
        <p>Nom: {user.name}</p>
        <p>Sexe: {user.sex === 'male' ? 'Homme' : user.sex === 'female' ? 'Femme' : 'Autre'}</p>
        <p>Rôle: {user.role === 'medecin' ? 'Médecin' : 'Patient'}</p>
      </div>
      <ModelView model={model} />
    </div>
  );
};

export default Ophtalmo;
