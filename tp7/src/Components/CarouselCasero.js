import Carousel from 'react-bootstrap/Carousel';
import slider from '../Components/slider.png';
import Estilos from "../Estilo/Estilos.css"

function CarouselCasero() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h3>
          <p>Lo que Ud. necesita</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h3>
          <p>Lo que Ud. necesita</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h3>
          <p>Lo que Ud. necesita</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}
export default CarouselCasero;