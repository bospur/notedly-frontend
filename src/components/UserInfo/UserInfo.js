import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../utils.js/api';
import cl from './UserInfo.module.css';

const UserInfo = () => {
    const { data, loading, error} = useQuery(GET_ME);

    if (error) <h2>{error.toString()}</h2>
    if (loading) <h2>Loading...</h2>

    const { email, username, id, avatar } = data.me;
    return (
        <section className={cl.user}>
            <h2 className={cl.title}>You</h2>
            <img 
                src={avatar}
                alt={`avatar ${username}`}
                className={cl.avatar}
            />
            <p className={cl.name}>{username}</p>
            <p className={cl.mail}>{email}</p>

        </section>
    );
}

export default UserInfo;
