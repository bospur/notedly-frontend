import React from 'react';
import NoteFeed from '../components/NoteFeed/NoteFeed';
import cl from './pages-styles/home.module.css';
import MainButton from '../ui/buttons/main-button';
import NewNote from '../components/NewNote/NewNote';
import { useMoreLoadNotes } from '../hooks/useLoadMoreNotes';



const Home = () => {
    const { data, loading, error, loadMoreClick } = useMoreLoadNotes();

    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error);
        return <p>Error!</p>;
    }
    const hasNextPage = data.noteFeed.hasNextPage;
    return (
        <>
            <NewNote />
            <section className={cl.home}>
                <NoteFeed notes={data} />
            </section>
            {
                hasNextPage && 
                <MainButton onClick={loadMoreClick}>Load More</MainButton>
            }
        </>
    );
}

export default Home;
