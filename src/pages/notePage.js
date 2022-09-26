import { useQuery } from '@apollo/client';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { GET_NOTE } from '../utils.js/api';
import cl from './pages-styles/notePage.module.css';
import { convertDate } from '../utils.js/util';

const NotePage = props => {
    const { params } = useRouteMatch();
    const id = params.id;

    const { data, loading, error } = useQuery(GET_NOTE, { variables: { id } })
    
    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error);
        return <p>Error!</p>;
    }
    
    const note = data.note;

    const date = convertDate(note.createdAt)
    return (
       <article className={cl.note}>
            <div className={cl.noteHeader}>
                <img
                    src={note.author.avatar}
                    alt={`${note.author.username} avatar`}
                    className={cl.noteAvatar}
                />
                <div className={cl.noteInfo}>
                    <p>{note.author.username}</p>
                    <p>{date}</p>
                </div>
            </div>
            <div className={cl.noteMain}>
                <p className={cl.content}>{note.content}</p>
            </div>
       </article>
    );
}

export default NotePage;
