import React from 'react';
import { Link } from 'react-router-dom';
import '../css/TopBar.css';

import { LinkButton } from './LinkButton';

function TopBar() {
    return (
        <nav className="top-bar">
            <LinkButton to="/" text="Home" />
            <LinkButton to="/about" text="About" />
            <LinkButton to="/music" text="Music" />
            <LinkButton to="/computing " text="Computing" />
            <LinkButton to="/about#contact" text="Contact" />
        </nav>
    );
}

export default TopBar;
