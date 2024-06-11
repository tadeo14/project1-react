import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Registro = () => {
    return (
        <div>
            <h1 className="ms-5 py-3">Registro</h1>
            <Form className="w-25 px-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirmar contraseña</Form.Label>
        <Form.Control type="password"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
      </div>
    
  )
}
