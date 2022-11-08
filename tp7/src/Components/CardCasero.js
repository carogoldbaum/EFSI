import { Card, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Estilos from "../Estilo/Estilos.css"
import PropTypes from 'prop-types';

function CardCasero(props) {

    return (

        <Container className='p-3'>
            <Link to={`/detalle/${props.elemento.id}`}>
                <div className="cardMod">
                    <Card style={{ width: '25.13rem' }}>
                        <Card.Img src={props.elemento.thumbnail} />
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

CardCasero.propTypes = {
    id: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,

}// es asi?

export default CardCasero;


