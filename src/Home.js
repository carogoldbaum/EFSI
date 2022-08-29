import Personas from './Personas';

function Home() {

    return (
        <div className="Body">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-12 my-2">
                        <div class="card box-shadow campus-boxes">
                            <div class="card-header">
                                {Personas.nombre}
                            </div>
                            <div class="card-body">
                                <p>{Personas.email + Personas.edad}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;