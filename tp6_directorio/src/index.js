import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/Layout";
import Home from "../src/Home";
import Contacto from "../src/Contacto";
import Persona from "../src/Persona";
import Estadisticas from "../src/Estadisticas";

const index = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/quienes-somos/:personaId" element={<Persona />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/Estadisticas" element={<Estadisticas />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default index;
