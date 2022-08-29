import './App.css';

function BodyOrt(props) {
  return (
    <div className="Body">
    <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-12 my-2">
        <div class="card box-shadow campus-boxes">
          <div class="card-header">
          {props.Titulo}
          </div>
          <div class="card-body">
            <img className="img-fluid mb-3" src={props.Imagen} alt="Campus ORT"></img>
            
            <p>{props.Descripcion}</p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-sm-12 my-2">
        <div class="card box-shadow campus-boxes">
          <div class="card-header">
          {props.Titulo}
          </div>
          <div class="card-body">
            <img className="img-fluid mb-3" src={props.Imagen} alt="Campus ORT"></img>
            <p>{props.Descripcion}</p>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-12 my-2">
        <div class="card box-shadow campus-boxes">
          <div class="card-header">
          {props.Titulo}
          </div>
          <div class="card-body">
            <img className="img-fluid mb-3" src={props.Imagen} alt="Campus ORT"></img>
            <p>{props.Descripcion}</p>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-12 my-2">
        <div class="card box-shadow campus-boxes">
          <div class="card-header">
          {props.Titulo}
          </div>
          <div class="card-body">
            <img className="img-fluid mb-3" src={props.Imagen} alt="Campus ORT"></img>
            <p>{props.Descripcion}</p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-sm-12 my-2">
        <div class="card box-shadow campus-boxes">
          <div class="card-header">
          {props.Titulo}
          </div>
          <div class="card-body">
            <img className="img-fluid mb-3" src={props.Imagen} alt="Campus ORT"></img>
            <p>{props.Descripcion}</p>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-12 my-2">
        <div class="card box-shadow campus-boxes">
          <div class="card-header">
          {props.Titulo}
          </div>
          <div class="card-body">
            <img className="img-fluid mb-3" src={props.Imagen} alt="Campus ORT"></img>
            <p>{props.Descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}
export default BodyOrt;