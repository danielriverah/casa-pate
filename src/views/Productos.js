import React from 'react';
import menuImage from '../assets/productos.png';
import './MenuPage.css';

export default function ProductosPage() {
  return (
    <div className="productos-page">
      <img src={menuImage} alt="Menú Casa Paté" className="productos-image" />
       {/* Botón encima de la imagen */}
        <div className="snaks-overlay-button">
          <a href="/snaks" className="snaks-button-link">
            Arma tus snaks
          </a>
        </div>
    </div>
  );
}