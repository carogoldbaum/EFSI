import React from "react";
import Estilos from "../Estilo/Estilos.css"
import Container from 'react-bootstrap/Container';
import { ActionTypes, useContextState } from '../ContextState'
import { Card, Text, View} from 'react';

function Compra() {
    let PrecioCompra = 0

    const { contextState, setContextState } = useContextState();

    for (let i = 0; i < contextState.compra.lista.length; i++) {
        PrecioCompra += contextState.compra.lista[i].price
    }

    return (
        <Container>
        
            <h5>El precio total es: {PrecioCompra}</h5>
            <h5>La cantidad de productos en el carrito es: {contextState.compra.lista.length}</h5>

        </Container>
    );
}

export default Compra;