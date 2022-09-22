import React from 'react';
import MainButton from '../ui/buttons/main-button';
import { useQuery, gql } from '@apollo/client';

const GET_NOTES = gql`
    query NoteFeed($cursor: String) {
        noteFeed(cursor: $cursor) {
        cursor
        hasNextPage
        notes {
            id
            createdAt
            content
            favoriteCount
            author {
            username
            id
            avatar
            }
        }
        }
    }
`

const Home = () => {
    const { data, loading, error, fetchMore } = useQuery(GET_NOTES);
    console.log(data)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <div>
            {console.log(data)}
            The data loaded;
        </div>
    );
}

export default Home;