import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import menuImage from "../assets/Inicio.png";
import nuesta_historiaImage from "../assets/nuestra_historia.png";
import nuesta_historiaDosImage from "../assets/nuestra_historia_dos.jpg";
import por_que_casapateImage from "../assets/porque_casapate.png";
import "./MenuPage.css";

export default function MenuPage() {
  const location = useLocation();

  useEffect(() => {
    // Esperamos a que el DOM esté renderizado antes de hacer scroll
    setTimeout(() => {
      if (location.hash === "#nuestra_historia") {
        const nuestra_historiaSection =
          document.getElementById("nuestra_historia");
        if (nuestra_historiaSection) {
          nuestra_historiaSection.scrollIntoView({ behavior: "smooth" });
        }
      } else if (location.hash === "#por_que_casapate") {
        const por_que_casapateSection =
          document.getElementById("por_que_casapate");
        if (por_que_casapateSection) {
          por_que_casapateSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100); // pequeño retraso para asegurar que el DOM se cargue
  }, [location]);

  return (
    <div className="menu-page">
      <div className="inicio-section" id="inicio">
        <img
          src={menuImage}
          alt="Menú Casa Paté"
          className="full-width-image"
        />
        {/* Botón rosa para conocer productos */}
        <div className="productos-boton-wrapper">
          <a href="/productos" className="productos-footer-button">
            🌟 Conócelos aquí
          </a>
        </div>
      </div>

      <div className="nuesta_historia-section" id="nuestra_historia">
        <img
          src={nuesta_historiaImage}
          alt="Nuestra-historia - Casa Paté"
          className="full-width-image"
        />
      </div>
      <div className="nuesta_historia_dos-section" id="nuestra_historia_dos">
        <img
          src={nuesta_historiaDosImage}
          alt="Nuestra-historia - Casa Paté"
          className="full-width-image"
        />
        
      </div>

      <div className="por_que_casapate-section" id="por_que_casapate">
        
        <img
          src={por_que_casapateImage}
          alt="Por-que-Casa-Pate? - Casa Paté"
          className="porque-image"
        />
        {/* Botón encima de la imagen */}
        <div className="historia-overlay-button">
          <a href="/lic" className="historia-button-link">
            Storytelling
          </a>
        </div>
      </div>
    </div>
  );
}
