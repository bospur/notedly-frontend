import React, { useState } from 'react';
import MainButton from '../../ui/buttons/main-button';
import FormInput from '../../ui/inputs/FormInput';
import PasswordInput from '../../ui/inputs/PasswordInput';
import cl from './LoginForm.module.css';

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
                    onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                />
                <FormInput 
                    name="email"
                    type="text"
                    placeholder="Email"
                    id="email"
                    label="Email"
                    value={form.email}
                    onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                />
                <PasswordInput 
                    name="password"
                    placeholder="Password"
                    id="password"
                    label="Password"
                    value={form.password}
                    onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                />
                <MainButton>Sign In</MainButton>
            </form>
        </section>
    );
}

export default LoginForm;
