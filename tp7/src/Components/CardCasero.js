import { Card, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

function CardCasero(props) {
    console.log(props.elemento)

    return (

        <Container className='p-3'>
            <Link to={`/detalle/${props.elemento.id}`}>
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
            </Link>
        </Container>

    )
}
export default CardCasero;


