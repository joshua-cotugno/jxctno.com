// App.js

import React from 'react';
import './css/App.css';
import TopBar from './TopBar';
import Card from './Card';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Card id="music" title="Music" content="Content related to music goes here..." />
        <Card id="computer-science" title="Computer Science" content="Content related to computer science goes here..." />
        <Card id="other" title="Other" content="Other content goes here..." />
      </div>
      <Footer />
    </div>
  );
}

export default App;
