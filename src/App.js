import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";
import TopBar from "./TopBar";
import Card from "./Card";
import Footer from "./Footer";
import Music from "./Music/Music"; // Import the Music component

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <div className="container">
            <Route exact path="/">
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
            </Route>
            <Route path="/music">
              <MusicPage />
            </Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
