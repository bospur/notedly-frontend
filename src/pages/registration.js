import React, { useEffect } from 'react';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

const Registration = () => {

    useEffect(() => {
        document.title = 'Sign Up - Notedly'
    }, []);

    return (
        <RegistrationForm />
    );
}

export default Registration;
