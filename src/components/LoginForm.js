import React, {useEffect, useState} from 'react';
import {Form, Button} from "react-bootstrap";


const LoginForm = ({setAuthData, setIsAuth}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const clearInputs =()=> {
        setEmail('');
        setPass('');
    };

    const handleLogin =(e)=> {
        e.preventDefault();
        setAuthData({
            email,
            pass
        });
        localStorage.setItem('loginData', JSON.stringify({email, pass}));
        setIsAuth(true);
        clearInputs()

    };

    return (
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={pass} onChange={e=>setPass(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default LoginForm;