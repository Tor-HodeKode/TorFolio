import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainpage"; // MainPage som viser prosjektene
import Login from "./pages/login"; // Login-siden
import Crypto from "./pages/crypto"; // Crypto side (tar inn Crypto.jsx)
import DrumKit from "./pages/drumkit"; // Legger til import for DrumKit

const App = () => {
  return (
    <Router basename="/TorFolio">
      {/* ...existing code... */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/drumkit" element={<DrumKit />} />
        <Route path="/projects/login" element={<Login />} />
        <Route path="/projects/crypto" element={<Crypto />} />
      </Routes>
    </Router>
  );
};

export default App;
