// src/scenes/ImageView.js
import React from 'react';
import '../styles/ImageView.css';

const ImageView = ({ imageSrc, description }) => {
  return (
    <div className="image-view">
      <img src={imageSrc} alt="Ophtalmo View" style={{width: 500}} />
      <p>{description}</p>
    </div>
  );
};

export default ImageView;
