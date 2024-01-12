import React from "react";
import "../css/App.css";
import TopBar from "../TopBar";
import Card from "../Card";
import Footer from "../Footer";

function Home() {
  return (
    <div className="Home">
      <TopBar />
      <div className="page-container">
        <div className="container">
          <Card
            id="music"
            imgURL="https://i.ibb.co/KrZt6mG/joshua-guitar-concert-mr-brightside.jpg"
            imgAlt="Joshua playing guitar at a concert"
            title="Music"
            content="My music projects and performances."
            redirectURL={"/music"}
          />
          <Card
            id="computer-science"
            imgAlt="A screenshot of the development of this website"
            imgURL="https://i.ibb.co/qRs4ngK/code.png"
            title="Computer Science"
            content="Projects related to Computer Science."
            redirectURL={"/computer-science"}
          />
          <Card
            id="other"
            imgURL="https://i.ibb.co/znHsMhP/slideshow-guitarcapacitor.png"
            imgAlt="A screenshot of a powerpoint presentation about capacitors in guitars"
            title="Other Projects"
            content="Other projects of mine"
            redirectURL={"/other"}
          />
          <Card
            id="personal-statement"
            imgURL="https://i.ibb.co/0Xy0b1W/Personal-Statement.png"
            imgAlt="A screenshot of my personal statement"
            title="Personal Statement"
            content="My personal statement for university applications"
            redirectURL={"/personal-statement"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
