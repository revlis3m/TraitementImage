// src/scenes/Generaliste.js
import React, { useState, useContext } from 'react';
import { UserContext } from '../UserContext';
import GeneralNavigation from '../components/GeneralNavigation';
import BodyPartModal from '../components/BodyPartModal';
import '../styles/Generaliste.css';

const Generaliste = () => {
  const { user } = useContext(UserContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBodyPart, setSelectedBodyPart] = useState('');

  const openModal = (bodyPart) => {
    setSelectedBodyPart(bodyPart);
    setModalIsOpen(true);
  };

  return (
    <div className="generaliste-container">
      <div className="left-section">
        <div className="department-info">
          <h1>Département Généraliste</h1>
          <p>Nom: {user.name}</p>
          <p>Sexe: {user.sex === 'male' ? 'Homme' : user.sex === 'female' ? 'Femme' : 'Autre'}</p>
          <p>Rôle: {user.role === 'medecin' ? 'Médecin' : 'Patient'}</p>
        </div>
      </div>
      <div className="center-section">
        <h1>Vue Anatomie Humaine</h1>
        <div className="image-container">
          <img src="/assets/images/anatomy.png" alt="Anatomie Humaine" />
          <div className="hotspot brain" title="Cerveau" onClick={() => openModal('brain')}></div>
          <div className="hotspot heart" title="Coeur" onClick={() => openModal('heart')}></div>
          <div className="hotspot lungs" title="Poumons" onClick={() => openModal('lungs')}></div>
          <div className="hotspot liver" title="Foie" onClick={() => openModal('liver')}></div>
          <div className="hotspot kidney" title="Rein" onClick={() => openModal('kidney')}></div>
          <div className="hotspot digestion" title="Systeme digestif" onClick={() => openModal('digestion')}></div>
          {/* Ajoutez d'autres zones cliquables ici */}
        </div>
      </div>
      <div className="right-section">
        <GeneralNavigation />
      </div>
      <BodyPartModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        bodyPart={selectedBodyPart}
      />
    </div>
  );
};

export default Generaliste;
