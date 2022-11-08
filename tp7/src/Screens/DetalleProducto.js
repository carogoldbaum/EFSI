import React, { useEffect, useState } from 'react';
import { GetProductoId, GetProductos } from "../AxiosClient"
import Estilos from "../Estilo/Estilos.css"
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { ActionTypes, useContextState } from '../ContextState'

function DetalleProducto() {

    const params = useParams();
    const { contextState, setContextState } = useContextState();

    const [producto, setProducto] = useState({});

    useEffect(() => {
        async function fetchData() {
            const rta = await GetProductoId(params.Id);
            setProducto(rta.data);
        }
        fetchData();
    }, []);

    const existeProducto = contextState.compra.lista.find(item => item.id === producto.id)

    return (

        <Container className='p-3'>

            <div className="card cardMod">
                <Card style={{ width: '25.5rem' }}>
                    <Card.Img variant="top" src={producto && producto.thumbnail} />
                    <Card.Body>
                        <Card.Title>{producto && producto.title}</Card.Title>
                        <Card.Text>
                            description: {producto && producto.description}
                            <br></br>
                            Marca: {producto && producto.brand}
                            <br></br>
                            Categoria: {producto && producto.category}
                            <br></br>
                            Descuento: {producto && producto.discountPercentage}
                            <br></br>
                            Puesto: {producto && producto.rating}
                        </Card.Text>
                        <Card.Text>
                            Precio: ${producto && producto.price}
                        </Card.Text>
                    </Card.Body>

                    {
                        existeProducto
                            ?
                            (
                                <Button
                                    variant="danger"
                                    onClick={() => {
                                        setContextState({
                                            type: ActionTypes.SetCompraEliminarId,
                                            value: producto.id,
                                        })
                                    }}>ELIMINAR DE CARRITO
                                </Button>
                            )

                            :
                            (
                                <Button 
                                 variant="success"
                                    onClick={async () => {
                                        setContextState({
                                            type: ActionTypes.SetCompraLista,
                                            value: producto,
                                        });
                                    }
                                    }>AGREGAR AL CARRITO
                                </Button>
                            )
                    }

                </Card>
            </div>

        </Container>

    )
}
export default DetalleProducto;