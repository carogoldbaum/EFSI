import React, { useEffect, useState } from 'react';
import { GetProductoId, GetProductos } from "../AxiosClient"

import CardCasero from '../Components/CardCasero';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function DetalleProducto() {
    const params = useParams();
    console.log(params)
    const [producto, setProducto] = useState({});

    useEffect(() => {
        async function fetchData() {
            const rta = await GetProductoId(params.Id);
            setProducto(rta.data);
        }
        fetchData();
    }, []);

console.log("resultado useeffect", producto)
    return (
        
        <Container className='p-3'>
          
                <div className="card cardMod">
                    <Card style={{ width: '25.5rem' }}>
                        <Card.Img className="imgCard" variant="top" src={producto && producto.thumbnail} />
                        <Card.Body>
                            <Card.Title>{producto && producto.title}</Card.Title>
                            <Card.Text>
                                {producto && producto.description}
                            </Card.Text>
                            <Card.Text>
                                ${producto && producto.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
    
        </Container>

    )
}
export default DetalleProducto;


