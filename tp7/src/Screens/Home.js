import NavbarCasero from "../Components/NavbarCasero"
import CarouselCasero from "../Components/CarouselCasero"
import Productos from "../Components/Productos"
import FooterCasero from "../Components/FooterCasero";
import Estilos from "../Estilo/Estilos.css"
import Marcas from "../Components/Marcas";

function Home() {

    return (
        //el profe dijo algo de esto
        <>
            <NavbarCasero></NavbarCasero>
            <CarouselCasero></CarouselCasero>
            <Productos></Productos>
            <div class="rectangulo"></div>
            <Marcas></Marcas>
            <FooterCasero></FooterCasero>
        </>
    );
}

export default Home;