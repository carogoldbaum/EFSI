import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Screens/Home';
import DetalleProducto from './Screens/DetalleProducto';
import Layout from './Components/Layout';
import PantallaProductos from  './Screens/PantallaProductos';
import Estilos from "../src/Estilo/Estilos.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/detalle/:Id" element={<DetalleProducto />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Productos" element={<PantallaProductos/>}></Route>
        <Route path="/QuienesSomos"></Route>
        <Route path="/Contacto"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
);