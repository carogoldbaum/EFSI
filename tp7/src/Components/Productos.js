import React, { Component, useEffect, useState, FlatList, View } from 'react';
import { GetProductos } from "../AxiosClient"
import { StyleSheet, Text, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground, Alert, Button, Card, Row,Col, Container } from 'react-bootstrap';
import Estilos from "../Estilo/Estilos.css"
import CardCasero from './CardCasero';

function Productos() {

    const [producto, setProducto] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const rta = await GetProductos();
            setProducto(rta.data.products);
        }
        fetchData();
    }, []);

    return (
             <Container>
                <br></br>
                   <h5>Productos destacados</h5>
                <Row md={3}>
                    {producto && producto.map(item => <CardCasero key={item.id} elemento={item}/>
                    )}
                </Row>
            </Container>
    );
}

export default Productos;

