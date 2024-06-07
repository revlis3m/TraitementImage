// src/scenes/Ophtalmo.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import ModelView from './ModelView';
import EyeView from './EyeView';
import ImageView from './ImageView';
import Navigation from '../components/Navigation';
import DepartmentNavigation from '../components/DepartmentNavigation';
import '../styles/Ophtalmo.css';

const Ophtalmo = () => {
  const [location] = useLocation();
  const [user, setUser] = useState({ name: '', sex: '', role: '' });
  const [model, setModel] = useState('sphere');

  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1]);
    const name = params.get('name');
    const sex = params.get('sex');
    const role = params.get('role');
    setUser({ name, sex, role });
  }, [location]);

  const renderModel = () => {
    switch (model) {
      case 'sphere':
      case 'cube':
        return <ModelView model={model} />;
      case 'eye':
        return <EyeView />;
      case 'oeil detaille':
        return (
          <ImageView
            imageSrc="/assets/gif/eye.gif"
            description="Modele 3D d'un oeil anime et detaille"
          />
        );
      case 'eyeillus':
        return (
          <ImageView
            imageSrc="/assets/gif/eyeillus.gif"
            description="Animation de comment marche la vision"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="ophtalmo-container">
      <div className="left-section">
        <div className="department-info">
          <h1>Département Ophtalmologie</h1>
          <p>Nom: {user.name}</p>
          <p>Sexe: {user.sex === 'male' ? 'Homme' : user.sex === 'female' ? 'Femme' : 'Autre'}</p>
          <p>Rôle: {user.role === 'medecin' ? 'Médecin' : 'Patient'}</p><br/><br/><br/><br/><br/><br/><br/>
          <DepartmentNavigation />
        </div>
      </div>
      <div className="center-section">
        <h1>{`Vue ${model.charAt(0).toUpperCase() + model.slice(1)}`}</h1>
        {renderModel()}
      </div>
      <div className="right-section">
        <Navigation setModel={setModel} />
      </div>
    </div>
  );
};

export default Ophtalmo;
