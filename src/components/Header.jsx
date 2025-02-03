import React from "react";
import "../styles/Header.css"
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
        <Logo />
      <h1>Purple Propaganda</h1>
      <p>
        What happens when you put an ethereal singer/songwriter, an emo guitarist, and a metal drummer in the same room?
      </p>
    </header>
  );
};

export default Header;