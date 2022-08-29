import { useState } from "react";
import Formulario from './Formulario';
import ListadoCitas from './ListadoCitas';
import "../input.css";

function App() {
  const [citas, setCitas] = useState([{                     // setcitas es la funcion que cambia los valores de cita
    NombreMascota: "Nina",
    Propietario: "Martin",
    fecha: "2021-08-05",
    hora: "08:20",
    sintomas: "Le duele la pierna"
  }])

  return (
    <div className="text-white bg-gradient-to-bl from-[#A446B2] to-[#FF0066] min-h-[100vh]">
      <h1 className='text-[50px] text-center p-[30px]' id="font-p">ADMINISTRADOR DE PACIENTES</h1>
      <div className="flex flex-col md:flex-row place-content-center pb-20 gap-5">
        <Formulario setCitas={setCitas} />
        <ListadoCitas citas={citas} setCitas={setCitas} />
      </div>
    </div>
    
  );
 
          
  
}

export default App;