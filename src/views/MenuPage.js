import React from 'react';
import menuImage from '../assets/Inicio.jpg';
import './MenuPage.css';

export default function MenuPage() {
  return (
    <div className="menu-page">
      <img src={menuImage} alt="Menú Casa Paté" className="full-width-image" />
    </div>
  );
}