import React, { useState } from 'react';
import MainButton from '../../ui/buttons/main-button';
import FormInput from '../../ui/inputs/FormInput';
import PasswordInput from '../../ui/inputs/PasswordInput';
import cl from './LoginForm.module.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [form, setForm] = useState({
        userName: '',
        email: '',
        password: ''
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();

        console.log(form)
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
                    name="userName"
                    type="text"
                    placeholder="Username"
                    id="username"
                    label="Username"
                    value={form.userName}
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
