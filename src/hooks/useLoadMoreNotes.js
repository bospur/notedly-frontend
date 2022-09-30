import { GET_NOTES } from '../utils.js/api';
import { useQuery } from '@apollo/client';

export const useMoreLoadNotes = () => {
    const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

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

    return { data, loading, error, loadMoreClick }
}