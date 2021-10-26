import React from 'react';
import {Button} from "react-bootstrap";

const Welcome = ({name,setAuthData, setIsAuth}) => {
    const logOut=()=> {
        setAuthData({
            email: '',
            pass: ''
        });
        localStorage.removeItem('loginData')
    setIsAuth(false);
    };

    name = name.split("@").pop();
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h2>Welcome, {name}</h2>
            <Button variant="primary" type="submit" onClick={logOut}>
                Log Out
            </Button>

        </div>
    );
};

export default Welcome;