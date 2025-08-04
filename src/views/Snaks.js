import React from 'react';
import menuImage from '../assets/snaks.png';
import './MenuPage.css';

export default function SnaksPage() {
  return (
    <div className="snaks-page">
      <img src={menuImage} alt="Menú Casa Paté" className="full-width-image" />
    </div>
  );
}