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
          imgURL="https://i.ibb.co/jfPgdNc/musescore-profile.png"
          content="Here are some of the songs I've transcribed for numerous instruments."
          redirectURL={"#sheets"}
        />
        <Card
          id="compositions"
          title="Compositions"
          imgURL="https://i.ibb.co/jbkNnpV/piano.png"
          content="Here are some of the songs I've composed."
          redirectURL={"#compositions"}
        />
        <Card
          id="performances"
          title="Performances"
          imgURL="https://i.ibb.co/KrZt6mG/joshua-guitar-concert-mr-brightside.jpg"
          content="Here are some of the places I've performed, and plays I've been in."
          redirectURL={"#performances"}
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
          imgURL="https://i.ibb.co/jfPgdNc/musescore-profile.png"
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
        <Card
          id="kaibutsu"
          title="Kaibutsu (怪物)- YOASOBI"
          imgURL="https://i.ibb.co/NVQjj99/kaibutsu.png"
          imgAlt="Kaibutsu sheet music"
          content={<p><a href="https://musescore.com/user/52780709/scores/6771538">View on MuseScore</a><br />My favourite arrangement to date</p>}
          redirectURL={"https://musescore.com/user/52780709/scores/6771538"}
        />
      </div>
      <br />
      <line></line>
      <br />
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
      <br />
      <ContentBoxSecondary
        id="bittersweet"
        title="Bittersweet"
        content={[
          <span>This song was written with my (now disbanded) School Band, V<sup>th</sup> Horizon</span>,
          <span>We wrote it in a workshop lead by Hannah Jane Lewis, a singer-songwriter from London.</span>,
          <span>I attempted to record it, but at the time I was using Ardour, a Digital Audio Workstation (DAW) for Linux, which I found to be very hard to use, so I never ended up with a finished result.</span>,
          <span>There is, however, a recording of us performing the song live at the end of the workshop, which you can listen to below.</span>,
          <br />,
          <iframe width="500" height="350" src="https://www.youtube.com/embed/RCViVfr0OP8?si=lboQQCJOwEQbmXd-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        ]}
      />
      <ContentBoxSecondary
        id="railhead"
        title="Railhead"
        content={[
          <span>This song is currently a work in progress for my A Level Music Composition, so until I've finished it, I can't share it here (for copyright reasons and invigilating checks)</span>,
          <span>However, I can share the lyrics, and what the song is about.</span>,
          <br />,

          <span className="lyricsContainer">
            <span class="lyrics section">Verse 1:</span>
            <span class="lyrics stanza">
              // Sweet apprehension,<br />
              My saving grace <br />
              From all the smog that <br />
              Smothers my face<br />
            </span>
            <span class="lyrics stanza">// Love me or leave me,<br />
              I’m done giving chase <br />
              I’m growing tired in this <br />
              Star-crossed rat race <br />
            </span>
            <span class="lyrics section">Chorus:</span>
            <span class="lyrics stanza">// Faster than fairies, faster than witches <br />
              Pass my desires, pass my wishes<br />
              Desperately waiting for something new <br />
              Leaving behind the world I knew <br /></span>

            <span class="lyrics section">Verse 2:</span>
            <span class="lyrics stanza">// Can’t turn away now <br />
              The gates are locked <br />
              The tracks are diverging, <br />
              The signals are crossed<br />
            </span>
            <span class="lyrics stanza">// Listen to voices, <br />
              Look to the stars<br />
              The path is there somewhere, <br />
              We’ve gone to far<br />
            </span>

            <span class="lyrics section">Chorus</span>
            <span class="lyrics stanza"></span>
            <span class="lyrics section">Solo (16 bars)</span>
            <span class="lyrics stanza">Angels are dark<br/>The lights have gone gray
            Can't tell the time anymore ,<br/>Can't tell the night from day</span>
            <span class="lyrics section">Chorus (x2)</span>

          </span>

        ]} />
      <br />
      <ContentBoxMain
        id="performances"
        title="Performances"
        content={[
          <p>
            Since around year 10, I've been performing in various bands and plays at school, playing either guitar or bass
          </p>,
          <p>
            Here are some of the places I've performed, and plays I've been in:
          </p>,
          <h3>Plays:</h3>,
          <li>
            <ul><i>Grease</i> - 2019 (note, I was backstage, but helped make a wide variety of props)</ul>
            <ul><i>Back to the 80s</i> - December 2021</ul>
            <ul><i>Billy Elliot</i> - December 2022</ul>
            <ul><i>Fame The Musical</i> - December 2023</ul>
          </li>,
          <h3>Showcases:</h3>,
          <p>These are showcases of the performing arts departments at my school, where there is a wide variety of performances, from music to dance to drama.</p>,
          <p>These are the songs I've performed in these showcases: <i>I am unsure of exactly when each happened</i></p>,
          <li>
            <ul><i>Wake Me Up When September Ends by Green Day</i> - Co-ordinator, Electric Guitar + Voice - School Rock Group</ul>
            <ul><i>Mr Brightside by The Killers</i> - Guitar - V<sup>th</sup> Horizon</ul>
            <ul><i>Cigarette Daydreams by Cage The Elephant</i> - Bass Guitar - V<sup>th</sup> Horizon</ul>
            <ul><i>Disenchanted by My Chemical Romance</i> - Acoustic Guitar - Solo</ul>
            <ul><i>Teenagers by My Chemical Romance</i> - Electric Guitar - Solo, with drummer + backup guitarist</ul>
            <ul><i>House of Gold by Twenty One Pilots</i> - Ukulele + Voice - V<sup>th</sup> Horizon</ul>
            <ul><i>Bags by Clairo</i> - Electric Guitar - V<sup>th</sup> Horizon</ul>
            <ul><i>Nothing Else Matters by Metallica</i> - Acoustic Guitar - Solo</ul>
            <ul><i>Teenage Dirtbag by Wheatus</i> - Acoustic Guitar + Voice - Solo with Drummer + Piano</ul>
            <ul><i>Fluorescant Adolescent by Arctic Monkeys</i> - Electric Guitar - V<sup>th</sup> Horizon</ul>
            <ul><i>Everlong by Foo Fighters</i> - Electric Guitar - V<sup>th</sup> Horizon</ul>
            <ul>And many more... most of which I have since forgotten that I've performed them</ul>
          </li>
        ]}
      />
      <Footer />
    </div>
  );
}

export default Music;