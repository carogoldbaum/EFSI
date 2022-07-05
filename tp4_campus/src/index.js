import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './Carousel';
import Navbar from './Navbar';
import BodyOrt from './Body';
import FooterOrt from './Footer';
import inscripcion from './inscipcion.jpeg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <Navbar/>
   <Carousel/>
   <BodyOrt
   
        Titulo="Inscripción ciclo lectivo 2021 - Nivel Secundario"
        Imagen= {inscripcion}
        Descripcion="Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo 2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!"
   />
   <FooterOrt/>

  </React.StrictMode>
);


