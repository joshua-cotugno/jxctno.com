import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PurplePropaganda from "./pages/PurplePropaganda";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/purplepropaganda" element={<PurplePropaganda />} />
      </Routes>
    </Router>
  );
};

export default App;
