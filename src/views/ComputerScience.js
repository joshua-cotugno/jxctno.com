import React from "react";
import "../css/App.css";
import TopBar from "../TopBar";
import Card from "../Card";
import Footer from "../Footer";
import { ContentBoxMain, ContentBoxSecondary, ImageBox, Slideshow, VideoBox, Collapse } from "../Content";

// Function to display computer science-related content
function ComputerScience() {
  return (
    <div className="App">
      {/* Render the top bar */}
      <TopBar />
      
      {/* Main container for computer science content */}
      <div className="container">
        {/* Cards displaying different computer science sections */}
        <Card
          id="algorithms"
          title="Algorithms"
          imageURL="../img/algorithms.png"
          content="Explore various algorithms and their implementations."
          redirectURL={"#algorithms"}
        />
        <Card
          id="datastructures"
          title="Data Structures"
          imageURL="https://i.imgur.com/4Q3QJ5b.png"
          content="Learn about different data structures and their applications."
          redirectURL={"#datastructures"}
        />
        <Card
          id="languages"
          title="Programming Languages"
          imageURL="https://i.imgur.com/4Q3QJ5b.png"
          content="Discover different programming languages and their features."
          redirectURL={"#languages"}
        />
        <Card
          id="projects"
          title="Coding Projects"
          imageURL="https://i.imgur.com/4Q3QJ5b.png"
          content="Check out some coding projects I've worked on."
          redirectURL={"#projects"}
        />
      </div>
      {/* Render the footer */}
      <Footer />
    </div>
  );
}

export default ComputerScience;
