import React from 'react';
import { useQuery } from '@apollo/client';
import NoteFeed from '../components/NoteFeed/NoteFeed';
import { GET_NOTES } from '../utils.js/api';
import cl from './pages-styles/home.module.css';



const Home = () => {
    const { data, loading, error, fetchMore } = useQuery(GET_NOTES);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <section className={cl.home}>
            <NoteFeed notes={data} />
        </section>
    );
}

export default Home;
