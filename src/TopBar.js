// TopBar.js

import React from "react";
import "./css/TopBar.css"; // Import your styles for the top bar
  
function TopBar() {
  return (
    <div className="topbar">
      <header className="header">
        <h1 className="title">Welcome to My Domain</h1>
        <p1 className="subtitle">Gettit?</p1>
      </header>

      <nav className="navbar">
        <a href="./index.html" />
        <a href="./music.html" />
        <a href="./computer-science.html" />
        <a href="./other.html" />
      </nav>
    </div>
  );
}

export default TopBar;
