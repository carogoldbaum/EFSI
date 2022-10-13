import { StyleSheet, Text, View, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground, Alert, Button, Card } from 'react-bootstrap';

function CardCasero(props) {
    console.log(props.elemento)

    return (

        
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.elemento.thumbnail}></Card.Img>
                        <Card.Body>
                            <Card.Title>{props.elemento.title}</Card.Title>
                            <Card.Text>
                                {props.elemento.description}
                            </Card.Text>
                            <Card.Text>
                                ${props.elemento.price}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
              

    )
}
export default CardCasero;


