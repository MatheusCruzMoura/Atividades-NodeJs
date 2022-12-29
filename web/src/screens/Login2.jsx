import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';

function Login2() {
    return (
        <div className="App">
            <div className="caixa2">
                <div className="login-box2">
                    <img className="banner2" src="https://bit.ly/3vcjmXV" alt="" />

                    <Form className="login-form2" action="/">
                        <h1>Login Bootstrap</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="e-mail" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="senha" />
                        </Form.Group>
                        <Button className="login-submit" variant="primary" type="submit">Entrar</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login2