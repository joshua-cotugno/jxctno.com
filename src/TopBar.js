// TopBar.js

import React from 'react';
import './css/TopBar.css'; // Import your styles for the top bar

function TopBar() {
  return (
    <div className="topbar">
      <header className="header">
        <h1 className="title">Welcome to My Domain</h1>
        <p1 className="subtitle">Gettit?</p1>
      </header>

      <nav className="navbar">
        <a href="#home" className="navbar-items">Home</a>
        <a href="#music" className="navbar-items">Music</a>
        <a href="#computer-science" className="navbar-items">Computer Science</a>
        <a href="#other" className="navbar-items">Other</a>
      </nav>
    </div>
  );
}

export default TopBar;
