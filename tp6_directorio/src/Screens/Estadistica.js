import { Link, Outlet } from "react-router-dom";
import NavbarCasero from "../Component/NavbarCasero"

const Layout = () => {
  return (
    <>
        <NavbarCasero></NavbarCasero>

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/quienes-somos">Quienes Somos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;