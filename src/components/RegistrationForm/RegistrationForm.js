import React, { useState } from 'react';
import MainButton from '../../ui/buttons/main-button';
import FormInput from '../../ui/inputs/FormInput';
import PasswordInput from '../../ui/inputs/PasswordInput';
import cl from './RegistrationForm.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useMutation, useApolloClient, gql } from '@apollo/client';
import { SIGNUP_USER } from '../../utils.js/api';


const RegistrationForm = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();
    const client = useApolloClient();
    const [ signUp , { loading, error }] = useMutation(SIGNUP_USER, {
        onCompleted: data => {
            localStorage.setItem('token', data.signUp);
            client.writeQuery({
                query: gql`
                {
                    isLoggedIn @client
                }
                `,
                data: { isLoggedIn: true }
            })
            setForm({
                username: '',
                email: '',
                password: ''
            })

            history.replace({
                pathname: "/"
            })
        },
        onError: error => {
            console.log(error)
            setErrorMessage(error.toString())
        }
    })

    const onSubmitHandler = (e) => {
        e.preventDefault();

        signUp({
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
    }

    return (
        <section className={cl.login}>
            <h1 className={cl.title}>Sign Up</h1>
            {
                errorMessage && 
                <p className={cl.error}>{errorMessage}</p>
            }
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
                <p className={cl.text}>Are you registered? <br/> <Link to="/login">Sign In</Link></p>
                <MainButton type='submit'>Sign Up</MainButton>
            </form>
        </section>
    );
}

export default RegistrationForm;
