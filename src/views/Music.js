import React from "react";
import "../css/App.css";
import TopBar from "../TopBar";
import Card from "../Card";
import Footer from "../Footer";
import { ContentBoxMain, ContentBoxSecondary, ImageBox, Slideshow, VideoBox, Collapse } from "../Content";


function Music() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Card
          id="sheetmusic"
          title="Sheet Music"
          imageURL="../img/sheetmusic.png"
          content="Here are some of the songs I've transcribed for numerous instruments."
          redirectURL={"#sheets"}
        />
        <Card
          id="compositions"
          title="Compositions"
          imageURL="https://i.imgur.com/4Q3QJ5b.png"
          content="Here are some of the songs I've composed."
          redirectURL={"#compositions"}
        />
        <Card
          id="performances"
          title="Performances"
          imageURL="https://i.imgur.com/4Q3QJ5b.png"
          content="Here are some of the places I've performed, and plays I've been in."
          redirectURL={"#performances"}
        />
        <Card
          id="other"
          title="Other Music Projects"
          imageURL="https://i.imgur.com/4Q3QJ5b.png"
          content="A section for any other music-related projects I've worked on."
          redirectURL={"#other"}
        />
      </div>
      <Collapse
        title="Sheet Music"
        content={[
          "Here is the first paragraph.",
          "Here is the second paragraph.",
          "And another paragraph...",
        ]}
      />
      <br></br>
      <Footer />
    </div>
  );
}

export default Music;