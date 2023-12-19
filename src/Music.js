import React from "react";
import "./css/App.css";
import TopBar from "./TopBar";
import Card from "./Card";
import Footer from "./Footer";
import {ContentBoxMain, ContentBoxSecondary, ImageBox, Slideshow, VideoBox} from "./Content";

function Music() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Card
          id="sheetmusic"
          title="Sheet Music"
          imageURL="./img/fame_guitar_smile.jpg"
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
      <ContentBoxMain
          id="sheets"
          title="Sheet Music"
          content={[
            "Here are some of the songs I've transcribed for numerous instruments.",
            "I've transcribed these songs for a variety of instruments, including piano, guitar, violin, and more.",
          ]}>
          <ImageBox
            id="sheets-image"
            imageURL="./img/fame_guitar_smile.jpg"
            imageAlt="Sheet Music"
            caption="Sheet Music"
            wrap="inline"
            align="center"/>
          </ContentBoxMain>
      <Footer />
    </div>
  );
}

export default Music;