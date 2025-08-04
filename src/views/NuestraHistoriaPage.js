import React from 'react';
import menuImage from '../assets/logo_icono.png';
import './MenuPage.css';

export default function NuestraHistoriaPage() {
  return (
    <div className="menu-page">
      <img src={menuImage} alt="Menú Casa Paté" className="full-width-image" />
    </div>
  );
}