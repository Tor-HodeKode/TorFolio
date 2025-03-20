// src/components/DrumSet.jsx
import React, { useEffect, useState } from "react";
import Drum from "../components/Drum";  // Fjern mellomrommet


const drumData = [
  { name: "Kick", sound: "/sounds/kick.mp3", key: "k" },
  { name: "Snare", sound: "/sounds/snare.mp3", key: "s" },
  { name: "Hi-Hat", sound: "/sounds/hihat.mp3", key: "h" },
];

const DrumSet = () => {
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const drum = drumData.find((d) => d.key === e.key.toLowerCase());
      if (drum) {
        const audio = new Audio(drum.sound);
        audio.play();
        setActiveKey(drum.key);
        setTimeout(() => setActiveKey(null), 200); // Reset effekt
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="drum-container">
      {drumData.map((drum, index) => (
        <Drum
          key={index}
          name={drum.name}
          sound={drum.sound}
          keyChar={drum.key}
          onPlay={setActiveKey}
        />
      ))}
    </div>
  );
};

export default DrumSet;







