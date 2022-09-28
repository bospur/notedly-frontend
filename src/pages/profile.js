import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useHistory } from 'react-router-dom';
import UserInfo from '../components/UserInfo/UserInfo';
import MainButton from '../ui/buttons/main-button';
import { IS_LOGGED_IN } from '../utils.js/api';
import cl from './pages-styles/profile.module.css';

const Profile = () => {
    const history = useHistory();
    const { client } = useQuery(IS_LOGGED_IN);

    const logOut = () => {
        localStorage.removeItem('token');
        client.resetStore();
        client.writeQuery({
            query: gql`
            {
                isLoggedIn @client
            }
            `,
            data: { isLoggedIn: false }
        });
        history.replace({
            pathname: "/"
        })
    }
    return (
        <section className={cl.profile}>
        <UserInfo />
        <MainButton onClick={logOut}>Log out</MainButton>
        </section>
    );
}

export default Profile;
