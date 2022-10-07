import { gql } from "@apollo/client";

export const GET_NOTES = gql`
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
`;

export const GET_NOTE = gql`
    query note($id: ID!) {
        note(id: $id) {
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
`;

export const SIGNUP_USER = gql`
    mutation signUp($email: String!, $username: String!, $password: String!) {
        signUp(email: $email, username: $username, password: $password)
    }
`;

export const SIGNIN_USER = gql`
    mutation signIn($username: String!, $email: String!, $password: String!) {
        signIn(username: $username, email: $email, password: $password)
    }
`;

export const IS_LOGGED_IN = gql`
    {
        isLoggedIn @client
    }
`;

export const GET_ME = gql`
    query me {
        me {
            id
            username
            email
            avatar
        }
    }
`;

export const NEW_NOTE = gql`
    mutation newNote($content: String!) {
        newNote(content: $content) {
        id
        content
        createdAt
        favoriteCount
        favoritedBy {
            id
            username
        }
        author {
            username
            id
        }
        }
    }
`;