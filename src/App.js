import React, {useEffect, useState} from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./components/LoginForm";
import {Container, Row} from "react-bootstrap";
import Welcome from "./components/Welcome";

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [authData, setAuthData] = useState({
        email: '',
        pass: ''
    });

    useEffect(() => {
        if (localStorage.getItem('loginData')) {
            const {email, pass} = JSON.parse(localStorage.getItem('loginData'))
            setAuthData({email, pass})
            setIsAuth(true)
        }

    }, [])
    return (
        <Container>
            <Row className="justify-content-md-center" lg={2}>
                <div className="wrapper">
                    {isAuth ?
                        <Welcome name={authData.email} setAuthData={setAuthData} setIsAuth={setIsAuth}/>
                        :
                        <LoginForm setAuthData={setAuthData} setIsAuth={setIsAuth}/>
                    }


                </div>

            </Row>
        </Container>
    );
};

export default App;