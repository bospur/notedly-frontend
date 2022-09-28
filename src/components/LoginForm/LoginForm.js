import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MainButton from '../../ui/buttons/main-button';
import FormInput from '../../ui/inputs/FormInput';
import PasswordInput from '../../ui/inputs/PasswordInput';
import cl from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import { SIGNIN_USER } from '../../utils.js/api';
import { useMutation, useApolloClient, gql } from '@apollo/client';

const LoginForm = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();
    const client = useApolloClient();

    const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
        onCompleted: data => {
            localStorage.getItem('token', data.signIn);
            client.writeQuery({
                query: gql`
                {
                    isLoggedIn @client
                }
                `,
                data: { isLoggedIn: true }
            });

            setForm({
                username: '',
                email: '',
                password: ''
            });

            history.replace({
                pathname: "/"
            });
        },
        onError: error => {
            console.log(error)
            setErrorMessage(error.toString())
        }
    })
    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        signIn({
            variables: {
                ...form
            }
        })
        
    };

    const onChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    return (
        <section className={cl.login}>
            <h1 className={cl.title}>Sign In</h1>
            <form className={cl.loginForm} onSubmit={onSubmitHandler}>
                <FormInput 
                    name="username"
                    type="text"
                    placeholder="Username"
                    id="username"
                    label="Username"
                    value={form.username}
                    onChange={onChange}
                />
                <FormInput 
                    name="email"
                    type="text"
                    placeholder="Email"
                    id="email"
                    label="Email"
                    value={form.email}
                    onChange={onChange}
                />
                <PasswordInput 
                    name="password"
                    placeholder="Password"
                    id="password"
                    label="Password"
                    value={form.password}
                    onChange={onChange}
                />
                <p className={cl.text}>Are you not registered? <br/> <Link to="/registration">Sign Up</Link></p>
                <MainButton type='submit'>Sign In</MainButton>
            </form>
        </section>
    );
}

export default LoginForm;
