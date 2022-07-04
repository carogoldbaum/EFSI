import principal from "./principal.jpeg";
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
function CarouselOrt() {
  return (

<div class="container">
    <div class="row my-4">
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">

<div class="carousel-inner">
  <div class="carousel-item active">
  <div class="col-md-12"> 
  <img className="img-fluid mb-3" src={principal} alt="Campus ORT"></img>
  </div>
    <div class="carousel-caption d-none d-md-block">
    </div>
  </div>
  <div class="carousel-item">
  <div class="col-md-12"> 
  <img className="img-fluid mb-3" src={principal} alt="Campus ORT"></img>
  </div>
    <div class="carousel-caption d-none d-md-block">
    </div>
  </div>
  <div class="carousel-item">
  <div class="col-md-12"> 
  <img className="img-fluid mb-3" src={principal} alt="Campus ORT"></img>
  </div>
    <div class="carousel-caption d-none d-md-block">
    </div>
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden"></span>
</button>
</div>
</div>
</div>
  );
}
export default CarouselOrt;