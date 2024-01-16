import React from "react";
import "../css/App.css";
import "../css/FontAwesome.css";
import TopBar from "../components/TopBar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { ContentBoxMain, ContentBoxSecondary, ImageBox, Slideshow, VideoBox, Collapse } from "../components/Content";


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
          <p key="1">
            When learning a new song, solo or with a band, I like to transcribe the music myself. I find that this helps me learn the song better, and it's also a lot of fun!
          </p>,
          <p key="2">
            My go-to software for transcribing music is <a href="https://musescore.com/"><i className="fa fa-link"></i> MuseScore</a>, a free and open-source music notation software. I've been using it for years, and I've found it to be very intuitive and easy to use.
          </p>,
          <p key="3">
            "Here are some of the songs I've transcribed for numerous instruments."
          </p>,
        ]}
      />

      <div className="container">
        <Card
          id="MusescoreProfile"
          title="MuseScore Profile"
          imgURL="https://i.ibb.co/0Xy0b1W/Personal-Statement.png"
          imgAlt="A screenshot of my personal statement"
          content={<a href="https://musescore.com/user/52780709">View on MuseScore</a>}
          redirectURL={"https://musescore.com/user/52780709"}
        />
        <Card
          id="FamousLastWords"
          title="Famous Last Words - My Chemical Romance"
          imgURL="https://i.ibb.co/xF4VZSt/Famous-Last-Words.png"
          imgAlt="Famous Last Words sheet music"
          content={<a href="https://musescore.com/user/52780709/scores/8368668">View on MuseScore</a>}
          redirectURL={"https://musescore.com/user/52780709/scores/8368668"}
        />
        <Card
          id="Trapdoor"
          title="Trapdoor - Twenty One Pilots"
          imgURL="https://i.ibb.co/3rnVV6g/Trapdoor.png"
          imgAlt="Trapdoor sheet music"
          content={<a href="https://musescore.com/user/52780709/scores/6771538">View on MuseScore</a>}
          redirectURL={"https://musescore.com/user/52780709/scores/6771538"}
        />
      </div>
      <br></br>
      <line></line>
      <br></br>
      <ContentBoxMain
        id="compositions"
        title="Compositions"
        content={[
          <p key="1">
            I've been composing music for a few years now. My preferred genre is rock, but I also like to experiment with other genres, such as indie and pop.
          </p>,
          <p key="2">
            Here are some of my compositions.
          </p>,
        ]}
      />
      <br></br>
      <ContentBoxSecondary
        id="bittersweet"
        title="Bittersweet"
        content={[
          <span>This song was written with my (now disbanded) School Band, V<sup>th</sup> Horizon</span>,
          <span>We wrote it in a workshop lead by Hannah Jane Lewis, a singer-songwriter from London.</span>,
          <span>I attempted to record it, but at the time I was using Ardour, a Digital Audio Workstation (DAW) for Linux, which I found to be very hard to use, so I never ended up with a finished result.</span>,
          <span>There is, however, a recording of us performing the song live at the end of the workshop, which you can listen to below.</span>,
          // <iframe width="500" height="350" src="https://www.youtube.com/embed/pZI3ZtL_VRk?si=nI5ng7sGZHSOef2r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        ]}

      />
      <Footer />
    </div>
  );
}

export default Music;