import React from 'react';
import { useQuery } from '@apollo/client';
import NoteFeed from '../components/NoteFeed/NoteFeed';
import { GET_NOTES } from '../utils.js/api';
import cl from './pages-styles/home.module.css';
import MainButton from '../ui/buttons/main-button';



const Home = () => {
    const { data, loading, error, fetchMore } = useQuery(GET_NOTES);
    
    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error);
        return <p>Error!</p>;
    }
    // const hasNextPage = data.noteFeed.hasNextPage;
    const hasNextPage = true;

    const loadMoreClick = (e) => {
        e.preventDefault();

        fetchMore({
            variables: {
                cursor: data.noteFeed.cursor
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                return {
                    noteFeed: {
                        cursor: fetchMoreResult.noteFeed.cursor,
                        hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
                        notes: [
                            ...previousResult.noteFeed.notes,
                            ...fetchMoreResult.noteFeed.notes
                        ],
                        __typename: 'noteFeed'
                    }
                };
            }
        })
    }
    

    return (
        <>
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
