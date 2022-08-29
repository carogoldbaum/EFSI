import Personas from '../Personas';
import { Link } from "react-router-dom";
import NavbarCasero from "../Component/NavbarCasero"

function Home() {

    return (
        <>
            <NavbarCasero></NavbarCasero>

            <div className="Body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 my-2">
                            <div className="card box-shadow campus-boxes">
                                <div className="card-header">
                                    Lista personas
                                </div>
                                <div className="card-body">

                                    {Personas.map(UnaPersona =>
                                        <div key={UnaPersona.id}>
                                            <Link to={`/persona/${UnaPersona.id}`}>{UnaPersona.nombre + " " + UnaPersona.apellido}</Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;