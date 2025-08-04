import React from 'react';
import { NavLink } from 'react-router-dom';
import Icono from '../assets/icono.png';
import Logo from '../assets/logo_icono.png';
import './NavBar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-content">
        <NavLink to="/"><img src={Icono} alt='logo' width='35' height='35' /></NavLink>
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Inicio</NavLink>
        <NavLink to="/#nuestra_historia" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Nuestra Historia</NavLink>
        <NavLink to="/#por_que_casapate" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>¿Por qué Casa Pate?</NavLink>
        <NavLink to="/"><img src={Logo} alt='logo' width='auto' height='35'  /></NavLink>
        <NavLink to="/sabores" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Sabores</NavLink>
        <NavLink to="/haz-tu-pedido" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Haz tu pedido</NavLink>
        {/* <NavLink to="/contacto" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contacto</NavLink> */}
       <NavLink to="/haz-tu-pedido#contacto" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contacto</NavLink>

      </div>
    </header>
  );
}

// components/Navbar.css
