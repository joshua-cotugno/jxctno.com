// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Music from './views/Music';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for Home and Music */}
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </Router>
  );
};

export default App;
