import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteIcon from '../../../ui/icons/favorite-icon';
import HomeIcon from '../../../ui/icons/home-icon';
import NotesIcon from '../../../ui/icons/notes-icon';
import cl from './navigation.module.css';

const Navigation = () => {
    return (
        <nav className={cl.menu}>
            <ul className={cl.list}>
                <li className={cl.item}>
                    <HomeIcon/>
                    <Link to="/">Home</Link>
                </li>
                <li className={cl.item}>
                    <NotesIcon/>
                    <Link to="/mynotes">My Notes</Link>
                </li>
                <li className={cl.item}>
                    <FavoriteIcon />
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
