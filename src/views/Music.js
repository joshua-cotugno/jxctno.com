import React from "react";
import "../css/App.css";
import TopBar from "../TopBar";
import Card from "../Card";
import Footer from "../Footer";
import { ContentBoxMain, ContentBoxSecondary, ImageBox, Slideshow, VideoBox } from "../Content";

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
          "Here are some of the songs I've transcribed for numerous instruments.",
          "I've transcribed these songs for a variety of instruments, including piano, guitar, violin, and more.",
          <img 
          width={120}
          src="https://lh3.googleusercontent.com/pw/ABLVV84XwqS7Jj-zlJmc9VO_3KJ1o-gGmzy0xIUgcMFHI8UXVijhkSEm2WEcghvM9Crx-Xil_dSvzcbgYU9BaNaP5ajAaXoB7xQWB0mpEgHP0aEQvaCoEq5jS5m5TT0sWIGZlo_k1cEn_I46x8OIaj2pPNFKy8F91vZ8tDBSSrZE-_wBwvQBo-YboIYgL9AZhjxcsoiTuaylg-O4Tz-P4Vug4LdaM9kkMvv4pHSBWg_3RRVjua0hC4JmjGXk3M73KWOPGBKMKDgl_wPIFPFSPYO3HoqWZNOHPZ7LHL_zMMhLoYnFKIuxLp43kE7sIBD2950PPYegqkCHS0nP_6n_HTsJVvhRiYFcYSj2NxbGFIr6Z0YUKeWdQZM9TvfOCNitybFhl_MZEIq2PvC0weB5Dx2a_8C8Qw8kL-OiXd7nm4OgynsAbeea36VLWOrs3aAuyRRzrYatdQWbXHwGJiGYFPJHoQenQ_jaVdKEzQPfO6awoL28-DaHpxNlRlVd4hFwG2LA6c0UiFXzi82JWfhgcusexAXpXg--vp16DdjFcIYj8w7wBBJg_Mo2-IQAhocaOsFyHY8ZBe6f95h4gxbX3qOZS2_zbo2DzLZinGk5yW9E9BiYU33T-cXz9VoGqBWJQCSp-bmPDaVKKxmLiPv6oSxp4J8K9llqD1kJGNb1c4kZXt6e7wldKTyPe_hRnzbp2PdU2eOvvO-Mb5f_ZGh3g7w0IC0JorVl6XrP4j13hhQF_5MNxndu-fy4wgXO3IEidYzX9xxX2Tc-AEUm0IRC9tmvSdcwczODWMl5cKA5ZyOZzLsCBvG2DlVYFautOJu8m6Kj3sRR8O5bKR_1HoIH3r4uiQV6320UJUg8gpXtsVK1MigXZya4l1zSbqxZS14if9tWSfh5xVKQeGjKXUbdz1mclM7bHXWnO9v_ocNJkzdd2w=w1024-h1033-s-no-gm?authuser=0" 
          alt="Sheet Music" />
        ]}>
        <br/>
        <br/>
      </ContentBoxMain>
      <Footer />
    </div>
  );
}

export default Music;