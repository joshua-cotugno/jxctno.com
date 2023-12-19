import React from "react";
import "./css/App.css";
import TopBar from "./TopBar";
import Card from "./Card";
import Footer from "./Footer";

function Music() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Card
          id="music"
          title="Sheet Music"
          content="Content related to music goes here..."
          redirectURL={"../music"}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Music;