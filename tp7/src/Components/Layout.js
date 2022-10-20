import React from "react";
import { Outlet } from 'react-router-dom';
import NavbarCasero from './NavbarCasero';
import FooterCasero from './FooterCasero';

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