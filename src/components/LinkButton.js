// LinkButton.js -- a button that acts like a link

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/LinkButton.css';

function LinkButton(props) {
    return (
        <button className="link-button">
            <Link to={props.to} className="link-button-text">{props.text}</Link>
        </button>
    );
}

export { LinkButton };