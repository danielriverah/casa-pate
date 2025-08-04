import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import pedidoImage from '../assets/haz_tu_pedido.png';
import contactoImage from '../assets/contacto.png';
import './MenuPage.css';

// export default function HazTuPedidoPage() {
//   return (
//     <div className="haz_tu_pedido-page">
//       <img src={menuImage} alt="Menú Casa Paté" className="full-width-image" />
//     </div>
    
//   );
// }

export default function HazTuPedidoPage() {
  const location = useLocation();
  
  useEffect(() => {
    // Esperamos a que el DOM esté renderizado antes de hacer scroll
    setTimeout(() => {
      if (location.hash === '#contacto') {
        const contactoSection = document.getElementById('contacto');
        if (contactoSection) {
          contactoSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100); // pequeño retraso para asegurar que el DOM se cargue
  }, [location]);

  return (
    <div className="haz_tu_pedido-page">
      {/* Imagen de Haz tu pedido */}
      <img
        src={pedidoImage}
        alt="Haz tu pedido - Casa Paté"
        className="full-width-image"
      />

      {/* Sección de Contacto debajo */}
      <div className="contacto-section" id="contacto">
        <img
          src={contactoImage}
          alt="Contacto - Casa Paté"
          className="full-width-image"
        />

        {/* Botón normal al final */}
         <div className="contacto-boton-whatsapp-wrapper">
          <a
            href="https://api.whatsapp.com/send?phone=+524491182546&text=Buen%20Dia!%20Quiero%20Realizar%20Un%20Pedido%20en%20CasaPate!"
            target="_blank"
            rel="noopener noreferrer"
             className="whatsapp-footer-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M12.04 2c-5.523 0-10 4.477-10 10a9.936 9.936 0 001.456 5.258l-1.456 5.311 5.481-1.437A9.934 9.934 0 0012.04 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm-.056 18.28a8.216 8.216 0 01-4.211-1.191l-.302-.18-3.252.854.867-3.172-.197-.322a8.23 8.23 0 01-1.25-4.363c0-4.552 3.701-8.253 8.253-8.253 4.552 0 8.253 3.701 8.253 8.253 0 4.553-3.701 8.254-8.253 8.254zm4.57-6.161c-.249-.124-1.474-.727-1.702-.811-.227-.084-.393-.124-.56.124-.167.249-.645.811-.79.978-.145.167-.29.187-.538.062-.249-.125-1.053-.387-2.005-1.235-.74-.66-1.239-1.475-1.384-1.723-.145-.248-.015-.382.109-.506.112-.111.248-.29.373-.435.125-.145.166-.249.248-.415.084-.167.042-.311-.021-.435-.062-.124-.56-1.347-.767-1.842-.202-.483-.408-.417-.56-.417h-.478c-.166 0-.435.062-.662.29-.228.228-.867.849-.867 2.072 0 1.223.889 2.403 1.013 2.567.124.166 1.748 2.672 4.24 3.745.593.255 1.057.406 1.418.519.596.19 1.138.164 1.565.1.477-.07 1.474-.603 1.682-1.187.208-.582.208-1.081.145-1.187-.062-.104-.228-.166-.477-.29z" />
            </svg>
            Realizar pedido por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}