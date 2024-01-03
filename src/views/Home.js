import React from "react";
import "../css/App.css";
import TopBar from "../TopBar";
import Card from "../Card";
import Footer from "../Footer";

function Home() {
  return (
    <div className="Home">
      <TopBar />
      <div className="container">
        <div className="container">
          <Card
            id="music"
            imgURL="https://i.ibb.co/KrZt6mG/joshua-guitar-concert-mr-brightside.jpg"
            imgAlt="Joshua playing guitar at a concert"
            title="Music"
            content="Content related to music goes here..."
            redirectURL={"/music"}
          />
          <Card
            id="computer-science"
            imageAlt="A screenshot of the development of this website project"
            imageURL="https://i.ibb.co/qRs4ngK/code.png"
            title="Computer Science"
            content="Content related to computer science goes here..."
            redirectURL={"/computer-science"}
          />
          <Card
            id="other"
            imgURL="https://i.ibb.co/znHsMhP/slideshow-guitarcapacitor.png"
            imageAlt="A screenshot of a powerpoint presentation about capacitors in guitars"
            title="Other Projects"
            content="Other content goes here..."
            redirectURL={"/other"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
