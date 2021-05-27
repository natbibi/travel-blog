import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css'

const Header = () => {
    return (
        <nav role="navigation">
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="/about" activeClassName="current">About</NavLink>
            <NavLink to="/visited" activeClassName="current">Visited</NavLink>
            <NavLink to="/photos" activeClassName="current">Photos</NavLink>
        </nav>
    );
}

export default Header;
