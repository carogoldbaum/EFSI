import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Components/logo.png';
import Estilos from "../Estilo/Estilos.css"
import { Link } from 'react-router-dom';

function NavbarCasero() {

    return (
      <Navbar bg="white" variant="white">
      <Container>
      <img src={logo} alt="" width="114"/>
          <Nav className="ms-auto" >
              <Link className="nav-link active" to="/Home">INICIO</Link>
              <Link className="nav-link active" to="/QuienesSomos">QUIENES SOMOS</Link>
              <Link className="nav-link active" to="/Productos">PRODUCTOS</Link>
              <Link className="nav-link active" to="/Contacto">CONTACTO</Link>
              <Link className="nav-link active" to="/Compra">COMPRA</Link>
          </Nav>
      </Container>
  </Navbar>
    );
}

export default NavbarCasero;