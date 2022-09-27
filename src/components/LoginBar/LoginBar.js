import { useQuery } from '@apollo/client';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { IS_LOGGED_IN } from '../../utils.js/api';
import cl from './LoginBar.module.css';

const LoginBar = () => {
    const history = useHistory();
    const data = useQuery(IS_LOGGED_IN)
    console.log(data)
    const onLoginBarClick = () => {
        history.replace({
            pathname: '/login'
        })
    };
    // const backgroundColor = data.isLoggedIn ? 'var(--loginBar-online)': 'var(--loginBar-offline)';
    return (
        <section className={cl.login} onClick={onLoginBarClick}>
            Login
        </section>
    );
}

export default LoginBar;
