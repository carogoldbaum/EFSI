import React, { useEffect, useState } from 'react';
import { GetProductos } from "../AxiosClient"
import { Row, Container } from 'react-bootstrap';
import CardCasero from './CardCasero';
import Estilos from "../Estilo/Estilos.css"
import PropTypes from 'prop-types';

function Productos(props) {
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        async function fetchData() {
            
            const rta = await GetProductos(props.Numero);
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

Productos.propTypes = {
    Numero: PropTypes.number.isRequired,
}// es asi?

export default Productos;

