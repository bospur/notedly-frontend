import React from 'react';
import { useHistory } from 'react-router-dom';
import cl from './LoginBar.module.css';

const LoginBar = () => {
    const history = useHistory();

    const onLoginBarClick = () => {
        history.replace({
            pathname: '/login'
        })
    };

    return (
        <section className={cl.login} onClick={onLoginBarClick}>
            Login
        </section>
    );
}

export default LoginBar;
