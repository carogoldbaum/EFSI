import React from "react";
import { Outlet } from 'react-router-dom';
import NavbarCasero from './NavbarCasero';
import FooterCasero from './FooterCasero';
import Estilos from "../Estilo/Estilos.css"

const Layout = () => {

    return (
        <React.Fragment>
            <NavbarCasero />
            <Outlet className="content-body" />
            <FooterCasero />
        </React.Fragment>
    )
}

export default Layout;