import React from 'react';
import cl from './Note.module.css';
import { convertDate } from '../../../utils.js/util';
import FavoriteIcon from '../../../ui/icons/favorite-icon';
import NoteFavoriteIcon from '../../../ui/icons/note-favorite-icon';
import SettingIcon from '../../../ui/icons/setting-icon';

const Note = ({ note }) => {
    const date = convertDate(note.createdAt);

    return (
        <li className={cl.noteItem}>
            <div className={cl.noteHeader}>
                <img 
                    src={note.author.avatar}
                    alt={`${note.author.username} avatar`}
                    className={cl.noteAvatar}
                />
                <div>
                    <a href='#' className={cl.noteUser}>{note.author.username}</a>
                    <p className={cl.date}>{date}</p>
                </div>
                <div className={cl.favorites}>
                    <NoteFavoriteIcon />
                    {note.favotiteCount ? <p>{note.favotiteCount}</p> : ''}
                </div>
                <div className={cl.setting}>
                    <SettingIcon />
                </div>
            </div>
            <div className={cl.noteMain}>
                <p className={cl.noteContent}>{note.content}</p>
            </div>
        </li>
    );
}

export default Note;
