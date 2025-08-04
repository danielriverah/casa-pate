import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import MenuPage from './views/MenuPage';
import NuestraHistoriaPage from './views/NuestraHistoriaPage';
import SaboresPage from './views/SaboresPage';
import NotFound from './views/NotFound';
import HazTuPedidoPage from './views/HazTuPedidoPage';
import ProductosPage from './views/Productos';
import LicPage from './views/Lic';
import SnaksPage from './views/Snaks';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/nuestra-historia" element={<NuestraHistoriaPage />} />
        <Route path="/sabores" element={<SaboresPage />} />
        <Route path="/haz-tu-pedido" element={<HazTuPedidoPage />} />
        {/* <Route path="/contacto" element={<ContactoPage />} /> */}
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/contacto" element={<HazTuPedidoPage />} />
        <Route path="/lic" element={<LicPage />} />
        <Route path="/snaks" element={<SnaksPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
