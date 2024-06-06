// src/components/DepartmentNavigation.js
import React, { useContext } from 'react';
import { useLocation } from 'wouter';
import { UserContext } from '../UserContext';
import '../styles/Navigation.css';

const DepartmentNavigation = () => {
  const [, setLocation] = useLocation();
  const { user } = useContext(UserContext);

  const navigateTo = (department) => {
    setLocation(`/departments/${department}?name=${user.name}&sex=${user.sex}&role=${user.role}`);
  };

  const navigateToG = (department) => {
    setLocation(`/departments/?name=${user.name}&sex=${user.sex}&role=${user.role}`);
  };

  return (
    <div className="navigation-container">
      <button onClick={() => navigateToG()}>Generaliste</button>
      <button onClick={() => navigateTo('ophtalmo')}>Ophtalmologie</button>
      <button onClick={() => navigateTo('radio')}>Radiologie</button>
      <button onClick={() => navigateTo('cardio')}>Cardiologie</button>
      {/* Ajoutez d'autres boutons ici */}
    </div>
  );
};

export default DepartmentNavigation;
