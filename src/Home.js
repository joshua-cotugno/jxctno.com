import React from "react";
import "./css/App.css";
import TopBar from "./TopBar";
import Card from "./Card";
import Footer from "./Footer";

function Home() {
  return (
      <div className="Home">
        <TopBar />
        <div className="container">
              <div>
                <Card
                  id="music"
                  title="Music"
                  content="Content related to music goes here..."
                  redirectURL={"/music"}
                />
                <Card
                  id="computer-science"
                  title="Computer Science"
                  content="Content related to computer science goes here..."
                />
                <Card
                  id="other"
                  title="Other"
                  content="Other content goes here..."
                />
              </div>
        </div>
        <Footer />
      </div>
  );
}

export default Home;
