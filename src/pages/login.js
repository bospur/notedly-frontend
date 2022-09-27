import React, { useEffect } from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

const Login = () => {

    useEffect(() => {
        document.title = 'Sign In - Notedly'
    }, []);

    return (
        <LoginForm />
    );
}

export default Login;
