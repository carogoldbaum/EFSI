import React, { Component, useEffect, useState, FlatList, View } from 'react';
import { GetProductos } from "../AxiosClient"
import { StyleSheet, Text, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground, Alert, Button, Card, Row,Col } from 'react-bootstrap';

import CardCasero from './CardCasero';

function Productos() {

    const [producto, setProducto] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const rta = await GetProductos();
            setProducto(rta.data.products);
            console.log("sdflksdjngfsangñdikdilgfhdudbfnidkf", producto)
            console.log("sdflksdjngf,,,----", rta.data.products)
        }
        fetchData();
    }, []);

    return (
        <Row xs={1} md={3} className="g-4">
            {producto && producto.map(item => <Col><CardCasero key={item.id} elemento={item} /></Col>)}
        </Row>
    );
}

export default Productos;

