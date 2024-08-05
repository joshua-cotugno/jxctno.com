import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Credits() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Credits</h1>
        <p>FontAwesome credits, images taken by me unless otherwise specified.</p>
        <Link to="/" className="home-button">
          <FontAwesomeIcon icon={faHome} /> Return to Home
        </Link>
      </header>
    </div>
  );
}

export default Credits;
