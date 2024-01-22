// TopBar.js

import React from "react";
import "../css/TopBar.css"; // Import your styles for the top bar

function TopBar() {
  return (
    <div id="headBar" className="topbar" >
      <header className="header">
        <h1 className="title">Welcome to My Website</h1>
      </header>

      <div className="navbar">
        <button className="navbutton" onClick={() => window.location.href = "/"}>Home</button>
        <button className="navbutton" onClick={() => window.location.href = "/music"}>Music</button>
        <button className="navbutton" onClick={() => window.location.href = "/computer-science"}>Computer Science</button>
        <button className="navbutton" onClick={() => window.location.href = "/other"}>Other Projects</button>
      </div>

      <div id="wipTape">
        <span id="tapetext"> ~ This Site is currently under active development!! Expect to see a couple of minor visual anomalies and/or non-functional links!! They *will* Be fixed! ~ </span>
      </div>
    </div>
  );
}

export default TopBar;
