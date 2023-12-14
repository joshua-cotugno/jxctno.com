// TopBar.js

import React from "react";
import "./css/TopBar.css"; // Import your styles for the top bar

function linkTo(location) {
  return (
    <a href={location} className="navbar-items">
      {location}
    </a>
  );
}
function TopBar() {
  return (
    <div className="topbar">
      <header className="header">
        <h1 className="title">Welcome to My Domain</h1>
        <p1 className="subtitle">Gettit?</p1>
      </header>

      <nav className="navbar">
        <linkTo location="./index.html" />
        <linkTo location="./music.html" />
        <linkTo location="./computer-science.html" />
        <linkTo location="./other.html" />
      </nav>
    </div>
  );
}

export default TopBar;
