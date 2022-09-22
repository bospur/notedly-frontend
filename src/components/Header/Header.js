import React from 'react';
import Navigation from './Navigation/Navigation';
import cl from './header.module.css';

const Header = () => {
    return (
        <header className={cl.header}>
           <Navigation /> 
        </header>
    );
}

export default Header;
