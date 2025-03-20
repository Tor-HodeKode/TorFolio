import React from "react";
import DrumSet from "../components/DrumSet"; // Denne er korrekt for filplasseringen
import "../styles/Drumkit.css";

const DrumKit = () => {
  return (
    <div className="drumkit-page">
      <h1>Drumkit</h1>
  
      <DrumSet />
    </div>
  );
};

export default DrumKit;



