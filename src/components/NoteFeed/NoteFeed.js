import React from 'react';
import Note from './Note/Note';
import cl from './NoteFeed.module.css';

const NoteFeed = ({ notes }) => {
    return (
        <ul className={cl.notesList}>
            {
                notes.noteFeed.notes.map(note => (
                    <Note note={note} key={note.id}/>
                ))
            }
        </ul>
    );
}

export default NoteFeed;
