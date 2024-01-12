// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Music from './views/Music';
import ComputerScience from './views/ComputerScience';
import Other from './views/Other';
import Credits from './views/Credits';
import PDF from './PDF.js';
import PersonalStatement from './views/PersonalStatement';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for Home and Music */}
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/computer-science" element={<ComputerScience />} />
        <Route path="/other" element={<Other />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/PersonalStatement" element={<PersonalStatement />} />
        <Route path="/other/Capacitors in Guitars.pdf" element={<PDF url="./resources/Capacitors in Guitars.pdf"/>} />
      </Routes>
    </Router>
  );
};

export default App;
