import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Music from './views/Music';
import ComputerScience from './views/ComputerScience';
import Other from './views/Other';
import Credits from './views/Credits';
import About from './views/About';
import NotFound from './views/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/music" element={<Music />} />
      <Route path="/computing" element={<ComputerScience />} />
      <Route path="/other" element={<Other />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
