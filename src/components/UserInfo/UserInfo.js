import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../utils.js/api';
import cl from './UserInfo.module.css';

const UserInfo = () => {
    const { data, loading, error} = useQuery(GET_ME);

    if (error) <h2>{error.toString()}</h2>
    if (loading) <h2>Loading...</h2>
    
   if (data) {
    return (
        <section className={cl.user}>
            <h2 className={cl.title}>You</h2>
            <img 
                src={data.me.avatar}
                alt={`avatar ${data.me.username}`}
                className={cl.avatar}
            />
            <p className={cl.name}>{data.me.username}</p>
            <p className={cl.mail}>{data.me.email}</p>

        </section>
    );
   }
}

export default UserInfo;
