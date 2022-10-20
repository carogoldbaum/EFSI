import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Screens/Home';
import DetalleProducto from './Screens/DetalleProducto';
import Layout from './Components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/detalle/:Id" element={<DetalleProducto />}></Route>
        <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);