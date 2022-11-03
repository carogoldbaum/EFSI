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

    console.log("parametros",params)

    const [producto, setProducto] = useState({});

    useEffect(() => {
        async function fetchData() {
            const rta = await GetProductoId(params.Id);
            setProducto(rta.data);
        }
        fetchData();
    }, []);

    let existeProducto = contextState.compra.lista.find(item => item.id === params)

    console.log("resultado existeProductos" ,existeProducto)
    console.log("resultado contexstate" ,contextState)
    console.log("resultado useeffect", producto)
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
                            <>
                                <Button  style={{ fontSize: 48 }}
                                    text="ELIMINAR"
                                    onClick={async () => {
                                        console.log("hay algo")
                                        setContextState({
                                            type: ActionTypes.SetCompraPrecio,
                                            value: producto.price,
                                        });
                                        setContextState({
                                            type: ActionTypes.SetCompraEliminarId,
                                            value: producto.id,
                                        });
                                    }}
                                />
                            </>
                            :
                            <>
                                <Button  style={{ fontSize: 48 }}
                                    text="AGREGAR"
                                    onClick={async () => {
                                        console.log("hay algo0000")
                                        setContextState({
                                            type: ActionTypes.SetCompraPrecio,
                                            value: producto.price,
                                        });

                                        setContextState({
                                            type: ActionTypes.SetCompraLista,
                                            value: producto,
                                        });
                                        console.log("agregar contextstate", contextState )
                                    }
                                    }
                                />
                            </>
                    }

                </Card>
            </div>

        </Container>

    )
}
export default DetalleProducto;