import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function FormContacto() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (

        <Form>

            <h5>Formulario contacto</h5>

            <Form.Group controlId="validationCustom01" noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Label>Ingrese nombre</Form.Label>
                <Form.Control
                    maxLength={20}
                    minLength={5}
                    required
                    type="text"
                    placeholder="Nombre"
                />
            </Form.Group>

            <Form.Group controlId="validationCustom02" noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Label>Ingrese email</Form.Label>
                <Form.Control
                    required
                    maxLength={40}
                    type="text"
                    placeholder="Email"
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Ingrese texto</Form.Label>
                <Form.Control
                      maxLength={255}
                    type="text"
                    placeholder="Texto"
                />
            </Form.Group>

            <Button type="submit">Enviar form</Button>

        </Form>
    );
}
/*FormContacto.propTypes = {
    Nombre: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Texto: PropTypes.string.
}*/

export default FormContacto;