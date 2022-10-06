import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from "../img/Logo.png";

function NavbarCasero() {

    return (
        <Navbar className="navbar navbar-expand-lg bg-white">
        <div className="container">
            <div >
                 <img className="img-fluid " src={Logo} style="width: 75%"/> 
             </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="text-center text-md-right">
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">INICIO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">QUIENES SOMOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">PRODUCTOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">CONTACTO</a>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </Navbar>
    );
}

export default NavbarCasero;