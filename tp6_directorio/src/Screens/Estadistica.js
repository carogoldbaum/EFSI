import { Link, Outlet } from "react-router-dom";
import NavbarCasero from "../Component/NavbarCasero"
import Personas from '../Personas';

const Estadistica = () => {

  let CantMayores35 = 0
  let MasGrande = 0
  let MasChico = 70
  let NombreMasGrande = []
  let NombreMasChico = []
  let ContadorGrande = 0
  let ContadorChico = 0


  for (let i = 0; i < Personas.length; i++) {
    if ( MasGrande < Personas[i].edad ){
      MasGrande =  Personas[i].edad  
    }
    if ( MasChico > Personas[i].edad ){
      MasChico =  Personas[i].edad  
    }
  }
  for (let i = 0; i < Personas.length; i++) {
    if (Personas[i].edad > 35) {
      CantMayores35++;
    }
    if (MasGrande === Personas[i].edad){
      NombreMasGrande[ContadorGrande] = Personas[i].nombre
      ContadorGrande++
    }
    if  (MasChico === Personas[i].edad){
      NombreMasChico[ContadorChico] = Personas[i].nombre
      ContadorChico++
    }

  }

return (
  <>
    <NavbarCasero></NavbarCasero>

    <div className="Body">
      <div className="container">

        <div className="row">

          <div className="col-md-3 col-sm-12 my-2">

            <div className="card box-shadow campus-boxes">

              <div className="card-header">

                {`Estadisticas`}

              </div>
              <div className="card-body">
                {`Cantidad de personas mayores de 35: ${CantMayores35}`}
                <p></p>
                {`Nombre de persona con la mayor edad: ${NombreMasGrande} `}
                <p></p>
                {`Nombre de persona con la menor edad: ${NombreMasChico} `}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Outlet />
  </>
);
};

export default Estadistica;