import React, { useEffect, useState } from "react";
import Drum from "./Drum"; // Husk å importere Drum-komponenten korrekt.

const drumData = [
  { name: "Kick", sound: "/kick.wav", key: "a", image: "/kick.png" },
  { name: "Snare", sound: "/snare.wav", key: "b", image: "/snaredrum.png" },
  { name: "Hi-Hat", sound: "/hihat.wav", key: "c", image: "/hi-hat.png" },
  { name: "Open-Hat", sound: "/openhat.wav", key: "d", image: "/open-hat.png" },
  { name: "Tom", sound: "/tom.wav", key: "e", image: "/tom.png" },
  { name: "Tink", sound: "/tink.wav", key: "f", image: "/tink.png" },
  { name: "Ride", sound: "/ride.wav", key: "g", image: "/ride.png" },
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
          setTimeout(() => setActiveKey(null), 200); // Reset etter 200 ms
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
            image={drum.image}
            onPlay={setActiveKey} // Gi tilbake tastetrykket til Drum-komponenten
            activeKey={activeKey} // Pass på at aktiv tast sendes til Drum-komponenten
          />
        ))}
      </div>
    );
  };
  
  export default DrumSet;

