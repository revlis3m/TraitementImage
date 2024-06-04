// src/scenes/Cardio.js
import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Cardio = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="department-container">
      <h1>Département Cardiologie</h1>
      <p>Nom: {user.name}</p>
      <p>Sexe: {user.sex === 'male' ? 'Homme' : user.sex === 'female' ? 'Femme' : 'Autre'}</p>
      <p>Rôle: {user.role === 'medecin' ? 'Médecin' : 'Patient'}</p>
    </div>
  );
};

export default Cardio;
