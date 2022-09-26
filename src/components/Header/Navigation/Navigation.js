import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../ui/icons/home-icon';
import NoteFavoriteIcon from '../../../ui/icons/note-favorite-icon';
import NotesIcon from '../../../ui/icons/notes-icon';
import cl from './navigation.module.css';

const Navigation = () => {
    return (
        <nav className={cl.menu}>
            <ul className={cl.list}>
                <li className={cl.item}>
                    <HomeIcon/>
                    <Link to="/" className={cl.link}>Home</Link>
                </li>
                <li className={cl.item}>
                    <NotesIcon/>
                    <Link to="/mynotes" className={cl.link}>My Notes</Link>
                </li>
                <li className={cl.item}>
                    <NoteFavoriteIcon />
                    <Link to="/favorites" className={cl.link}>Favorites</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
