import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormContacto() {

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }};

    return (

        <Form>

            <h5>Formulario contacto</h5>

            <Form.Group controlId="validationCustom01" noValidate  onSubmit={handleSubmit}>
                <Form.Label>Ingrese nombre</Form.Label>
                <Form.Control
                    maxLength={20}
                    minLength={5}
                    required
                    type="text"
                    placeholder="Nombre"
                />
            </Form.Group>

            <Form.Group controlId="validationCustom02" noValidate  onSubmit={handleSubmit}>
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

export default FormContacto;