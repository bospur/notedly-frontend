import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import MainButton from '../../ui/buttons/main-button';
import { GET_ME } from '../../utils.js/api';
import cl from './NewNote.module.css';
import NewNoteForm from './NewNoteForm/NewNoteForm';

const NewNote = () => {
    const [isActive, setIsActive] = useState(false);
    const { data } = useQuery(GET_ME);
    const me = data?.me || null;
    const title = me ? `Hello ${me.username}, what's new?` : 'You need to log in to add notes.'
    const ButtonText = isActive ? 'Close' : 'Add Note';
    
    return (
        <section className={cl.newNote}>
            <div className={cl.newNoteHeader}>
                <h2 className={cl.title}>{title}</h2>
                { me && <MainButton onClick={() => setIsActive(!isActive)}>{ButtonText}</MainButton>}
            </div>
            {
                me && isActive &&
                <NewNoteForm />
            }
        </section>
    );
}

export default NewNote;
