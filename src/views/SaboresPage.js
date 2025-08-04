import React from 'react';
import menuImage from '../assets/sabores.png';
import './MenuPage.css';

export default function SaboresPage() {
  return (
    <div className="sabores-page">
      <img src={menuImage} alt="Menú Casa Paté" className="full-width-image" />
    </div>
  );
}