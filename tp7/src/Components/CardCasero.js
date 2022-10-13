import { StyleSheet, Text, View, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground, Alert, Button, Card, Container, Row } from 'react-bootstrap';
import Estilos from "../Estilo/Estilos.css"

function CardCasero(props) {
    console.log(props.elemento)

    return (
     
        <Container className='p-3'>
            <div className="card cardMod">
                <Card style={{ width: '25.5rem' }}>
                    <Card.Img className="imgCard" variant="top" src={props.elemento.thumbnail} />
                    <Card.Body>
                        <Card.Title>{props.elemento.title}</Card.Title>
                        <Card.Text>
                            {props.elemento.description}
                        </Card.Text>
                        <Card.Text>
                            ${props.elemento.price}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        </Container>



    )
}
export default CardCasero;


