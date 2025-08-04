import React from 'react';
import licImage from '../assets/lic.png';
import './MenuPage.css';

export default function LicPage() {
  return (
    <div className="lic-page">
      <img src={licImage} alt="Menú Casa Paté" className="full-width-image" />
    </div>
  );
}

