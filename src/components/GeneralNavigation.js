// src/components/GeneralNavigation.js
import React, { useState } from 'react';
import BodyPartModal from './BodyPartModal';
import '../styles/Navigation.css';

const GeneralNavigation = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBodyPart, setSelectedBodyPart] = useState('');

  const openModal = (bodyPart) => {
    setSelectedBodyPart(bodyPart);
    setModalIsOpen(true);
  };

  return (
    <div className="navigation-container">
      <button onClick={() => openModal('brain')}>Cerveau</button>
      <button onClick={() => openModal('heart')}>Coeur</button>
      <button onClick={() => openModal('lungs')}>Poumons</button>
      <button onClick={() => openModal('liver')}>Foie</button>
      <button onClick={() => openModal('kidney')}>Kidney</button>
      <button onClick={() => openModal('digestion')}>Systeme digestif</button>
      {/* Ajoutez d'autres boutons ici */}
      <BodyPartModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        bodyPart={selectedBodyPart}
      />
    </div>
  );
};

export default GeneralNavigation;
