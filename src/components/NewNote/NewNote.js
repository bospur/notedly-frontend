import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ME } from '../../utils.js/api';
import cl from './NewNote.module.css';
import NewNoteForm from './NewNoteForm/NewNoteForm';

const NewNote = () => {
    const { data } = useQuery(GET_ME);
    console.log(data)
    return (
        <section className={cl.newNote}>
            <NewNoteForm />
        </section>
    );
}

export default NewNote;
