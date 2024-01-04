// TopBar.js

import React from "react";
import "./css/TopBar.css"; // Import your styles for the top bar

function TopBar() {
  return (
    <div className="topbar">
      <header className="header">
        <h1 className="title">Welcome to My Website</h1>
      </header>

      <div className="navbar">
        <button className="navbutton" onClick={() => window.location.href = "/"}>Home</button>
        <button className="navbutton" onClick={() => window.location.href = "/music"}>Music</button>
        <button className="navbutton" onClick={() => window.location.href = "/computer-science"}>Computer Science</button>
        <button className="navbutton" onClick={() => window.location.href = "/other"}>Other Projects</button>
      </div>
    </div>
  );
}

export default TopBar;
