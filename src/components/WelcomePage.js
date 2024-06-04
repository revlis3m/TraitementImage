// src/components/WelcomePage.js
import React, { useState, useContext } from 'react';
import { useLocation } from 'wouter';
import '../styles/WelcomePage.css';
import receptionImage from '../assets/images/reception.png';
import { UserContext } from '../UserContext';

const WelcomePage = () => {
  const [, setLocation] = useLocation();
  const [dialogStep, setDialogStep] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const dialogs = [
    "Bienvenue à l'Hôpital Virtuel !",
    "Ici, vous pouvez explorer différentes salles et en apprendre davantage sur nos services.",
    "Nous avons une salle de radiologie, une pharmacie, un poste de soins et une salle d'ophtalmologie.",
    "Veuillez vous identifier pour continuer. Êtes-vous un médecin ou un patient ?"
  ];

  const handleNextDialog = () => {
    if (dialogStep < dialogs.length - 1) {
      setDialogStep(dialogStep + 1);
    } else {
      setShowForm(true);
    }
  };

  const handleRoleSelect = (selectedRole) => {
    setUser((prevData) => ({
      ...prevData,
      role: selectedRole
    }));
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(`/departments/${user.department}`);
  };

  return (
    <div className="welcome-container">
      <img src={receptionImage} alt="Réception" className="welcome-image" />
      {!showForm && (
        <div className="dialog-box" onClick={handleNextDialog}>
          <p>{dialogs[dialogStep]}</p>
        </div>
      )}
      {showForm && (
        <div className="form-container">
          {!user.role && (
            <div className="role-selection">
              <button onClick={() => handleRoleSelect('medecin')}>Médecin</button>
              <button onClick={() => handleRoleSelect('patient')}>Patient</button>
            </div>
          )}
          {user.role && (
            <form onSubmit={handleSubmit}>
              <h2>Formulaire d'identification - {user.role}</h2>
              <label>
                Nom :
                <input type="text" name="name" value={user.name} onChange={handleInputChange} required />
              </label>
              <label>
                Sexe :
                <select name="sex" value={user.sex} onChange={handleInputChange} required>
                  <option value="">Sélectionner</option>
                  <option value="male">Homme</option>
                  <option value="female">Femme</option>
                  <option value="other">Autre</option>
                </select>
              </label>
              {user.role === 'medecin' && (
                <label>
                  Département :
                  <select name="department" value={user.department} onChange={handleInputChange} required>
                    <option value="general">Généraliste</option>
                    <option value="ophtalmo">Ophtalmologie</option>
                    <option value="radio">Radiologie</option>
                    <option value="cardio">Cardiologie</option>
                  </select>
                </label>
              )}
              {user.role === 'patient' && (
                <>
                  <label>
                    Âge :
                    <input type="number" name="age" value={user.age} onChange={handleInputChange} required />
                  </label>
                  <label>
                    Motif de consultation :
                    <input type="text" name="reason" value={user.reason} onChange={handleInputChange} required />
                  </label>
                  <label>
                    Département médical :
                    <select name="department" value={user.department} onChange={handleInputChange} required>
                      <option value="general">Généraliste</option>
                      <option value="ophtalmo">Ophtalmologie</option>
                      <option value="radio">Radiologie</option>
                      <option value="cardio">Cardiologie</option>
                    </select>
                  </label>
                </>
              )}
              <button type="submit">Soumettre</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
