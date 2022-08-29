import { useParams } from "react-router-dom";
import Personas from '../Personas';
import NavbarCasero from "../Component/NavbarCasero"

const Persona = () => {
    const { Id } = useParams();

    const buscar = Personas.find(Todopersona =>
        Todopersona.id === Id
    )

    return (
        <>

            <NavbarCasero></NavbarCasero>

            <div className="Body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 my-2">
                            <div className="card box-shadow campus-boxes">
                                <div className="card-header">
                                    {`Nombre: ${buscar.nombre + " " + buscar.apellido}`}
                                </div>
                                <div className="card-body">
                                    {`Id: ${buscar.id}`}
                                    <br></br>
                                    {`Mail: ${buscar.email}`}
                                    <br></br>
                                    {`Edad: ${buscar.edad}`}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Persona;