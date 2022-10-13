import NavbarCasero from "../Components/NavbarCasero"
import CarouselCasero from "../Components/CarouselCasero"
import Productos from "../Components/Productos"
import FooterCasero from "../Components/FooterCasero";

function Home() {

    return (
        //el profe dijo algo de esto
        <>
            <NavbarCasero></NavbarCasero>
            <CarouselCasero></CarouselCasero>
            <Productos></Productos>
            <FooterCasero></FooterCasero>
        </>
    );
}

export default Home;