import React, { useEffect, useState } from "react";
import Drum from "./Drum"; // Husk å importere Drum-komponenten korrekt.

const drumData = [
  {
    name: "Kick",
    sound: "/TorFolio/kick.wav",
    key: "a",
    image: "/TorFolio/kick.png",
  },
  {
    name: "Snare",
    sound: "/TorFolio/snare.wav",
    key: "b",
    image: "/TorFolio/snaredrum.png",
  },
  {
    name: "Hi-Hat",
    sound: "/TorFolio/hihat.wav",
    key: "c",
    image: "/TorFolio/hi-hat.png",
  },
  {
    name: "Open-Hat",
    sound: "/TorFolio/openhat.wav",
    key: "d",
    image: "/TorFolio/open-hat.png",
  },
  {
    name: "Tom",
    sound: "/TorFolio/tom.wav",
    key: "e",
    image: "/TorFolio/tom.png",
  },
  {
    name: "Tink",
    sound: "/TorFolio/tink.wav",
    key: "f",
    image: "/TorFolio/tink.png",
  },
  {
    name: "Ride",
    sound: "/TorFolio/ride.wav",
    key: "g",
    image: "/TorFolio/ride.png",
  },
  {
    name: "Clap",
    sound: "/TorFolio/clap.wav",
    key: "h",
    image: "/TorFolio/clap.png",
  },
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
