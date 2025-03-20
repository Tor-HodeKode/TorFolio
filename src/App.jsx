import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/Mainpage"; // MainPage som viser prosjektene
import Login from "./Pages/Login"; // Login-siden
import Crypto from "./Pages/Crypto"; // Crypto side (tar inn Crypto.jsx)
import DrumKit from "./pages/Drumkit"; // Legger til import for DrumKit

const App = () => {
  return (
    <Router basename="/TorFolio"> {/* 👈 Legger til basename her */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/DrumKit" element={<DrumKit />} />
        <Route path="/projects/login" element={<Login />} />
        <Route path="/projects/crypto" element={<Crypto />} />
      </Routes>
    </Router>
  );
};

export default App;






