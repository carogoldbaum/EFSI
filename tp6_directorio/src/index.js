import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Screens/Home';
import Persona from './Screens/Persona';
import Estadistica from './Screens/Estadistica';
import Contacto from './Screens/Contacto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>       
    <Routes>         
      <Route path="/persona/:Id" element={<Persona />}></Route>    
      <Route path="/" element={<Home />}></Route>    
      <Route path="/Estadistica" element={<Estadistica/>}></Route> 
      <Route path="/contacto" element={<Contacto />}></Route>   
      </Routes>     
      </BrowserRouter>
   
  </React.StrictMode>
);


