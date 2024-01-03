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
      <ContentBoxMain
        id="sheets"
        title="Sheet Music"
        content={[
          "When learning a new song, solo or with a band, I like to transcribe the music myself. I find that this helps me learn the song better, and it's also a lot of fun!",
          "My go-to software for transcribing music is MuseScore, a free and open-source music notation software. I've been using it for years, and I've found it to be very intuitive and easy to use.",
          "Here are some of the songs I've transcribed for numerous instruments.",
        ]} />
      <div className="container">
      <Card
        id="FamousLastWords"
        title="Famous Last Words - My Chemical Romance"
        imageURL="https://i.ibb.co/xF4VZSt/Famous-Last-Words.png"
        content={<a href="https://musescore.com/user/52780709/scores/8368668">View on MuseScore</a>}
        redirectURL={"https://musescore.com/user/52780709/scores/8368668"}
      />
      <Card
        id="Trapdoor"
        title="Trapdoor - Twenty One Pilots"
        imageURL="https://i.ibb.co/0mQ1q2Y/Trapdoor.png"
        content={<a href="https://musescore.com/user/52780709/scores/6771538">View on MuseScore</a>}
        redirectURL={"https://musescore.com/user/52780709/scores/6771538"}
      />
      </div>
      <br></br>
      <Footer />
    </div>
  );
}

export default Music;