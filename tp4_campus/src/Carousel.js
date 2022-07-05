import principal from "./principal.jpeg";
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
function CarouselOrt() {
  return (

  <div class="container">
    <div class="pt-4 pb-4">
      <div id="carouselExampleControls" class="carousel slide box-shadow" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img className="d-block w-100" src={principal} alt="Campus ORT"></img>
          </div>
          <div class="carousel-item">
            <img className="d-block w-100" src={principal} alt="Campus ORT"></img>
          </div>
          <div class="carousel-item">
            <img className="d-block w-100" src={principal} alt="Campus ORT"></img>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>

  );
}
export default CarouselOrt;