import React from "react";
import CarouselCasero from "../Components/CarouselCasero"
import Productos from "../Components/Productos"
import Estilos from "../Estilo/Estilos.css"

function Home() {

    return (

        <React.Fragment>
            <CarouselCasero></CarouselCasero>
            <Productos Numero={6}></Productos>
        </React.Fragment>
    );
}

export default Home;