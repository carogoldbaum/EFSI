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
        <View>
        
            <Text>El precio total es: {PrecioCompra}</Text>
        
        </View>
    );
}

export default Compra;