// src/components/BodyPartModal.js
import React from 'react';
import Modal from 'react-modal';
import '../styles/BodyPartModal.css';
import { Center } from '@react-three/drei';

const BodyPartModal = ({ isOpen, onRequestClose, bodyPart }) => {
  const bodyPartsInfo = {
    heart: {
      title: 'Coeur',
      image: '/assets/gif/heart.gif',
      description: 'Le cœur est un organe vital qui pompe le sang à travers le corps.'
    },
    brain: {
      title: 'Cerveau',
      image: '/assets/gif/brain.gif',
      description: 'Le cerveau est l\'organe du système nerveux central.'
    },
    lungs: {
      title: 'Poumons',
      image: '/assets/gif/lungs.gif',
      description: 'Les poumons sont des organes respiratoires situés dans la cage thoracique.'
    },
    liver: {
      title: 'Foie',
      image: '/assets/gif/liver.gif',
      description: 'Le foie est un organe vital qui détoxifie les substances chimiques et métabolise les médicaments.'
    },
    kidney: {
      title: 'Rein',
      image: '/assets/gif/kidney.gif',
      description: 'Le foie est un organe vital qui détoxifie les substances chimiques et métabolise les médicaments.'
    },
    digestion: {
      title: 'Systeme digestif',
      image: '/assets/gif/digestion.gif',
      description: 'Le foie est un organe vital qui détoxifie les substances chimiques et métabolise les médicaments.'
    },
    // Ajoutez d'autres descriptions ici
  };

  const { title, image, description } = bodyPartsInfo[bodyPart] || {};

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Body Part Information"
      className="modal"
      overlayClassName="overlay"
      ariaHideApp={false}
    >
      <div className="modal-header">
        <h2 style={{textAlign: Center}}>{title}</h2>
        <button onClick={onRequestClose} className="close-button">✖</button>
      </div>
      <div className="modal-content">
        <img src={image} alt={title} className="modal-image" style={{width: 200}}/>
        <p>{description}</p>
      </div>
    </Modal>
  );
};

export default BodyPartModal;
