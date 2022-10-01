import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ME } from '../../utils.js/api';
import cl from './NewNote.module.css';
import NewNoteForm from './NewNoteForm/NewNoteForm';

const NewNote = () => {
    const { data } = useQuery(GET_ME);
    const me = data?.me || null;
    const title = me ? `Hello ${me.username}, what's new?` : 'You need to log in to add notes.'

    return (
        <section className={cl.newNote}>
            <h2 className={cl.title}>{title}</h2>
            <NewNoteForm />
        </section>
    );
}

export default NewNote;
