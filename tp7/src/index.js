import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Screens/Home';
import DetalleProducto from './Screens/DetalleProducto';
import Layout from './Components/Layout';
import PantallaProductos from  './Screens/PantallaProductos';
import QuienesSomos from "./Screens/QuienesSomos"
import Contacto from "./Screens/Contacto"
import Compra from "./Screens/Compra"
import Estilos from "../src/Estilo/Estilos.css"
import { ContextProvider } from './ContextState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/detalle/:Id" element={<DetalleProducto />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Productos" element={<PantallaProductos/>}></Route>
        <Route path="/QuienesSomos" element={<QuienesSomos />}></Route>
        <Route path="/Contacto" element={<Contacto />}></Route>
        <Route path="/Compra" element={<Compra />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </ContextProvider>
);