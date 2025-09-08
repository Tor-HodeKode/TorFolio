import React from "react";

const Drum = ({ name, sound, keyChar, image, onPlay, activeKey }) => {
  const isActive = activeKey === keyChar; // Kontrollerer om trommen er aktiv

  const handleClick = () => {
    const audio = new Audio(sound);
    audio.play();
    onPlay(keyChar); // Send keyChar til parent-komponenten for å indikere hvilken tast som ble trykket
  };

  return (
    <div
      className={`drum-button${isActive ? " active" : ""}`}
      onClick={handleClick}
    >
      <span className="drum-label">
        {name} ({keyChar.toUpperCase()})
      </span>
      <img src={image} alt={name} />
    </div>
  );
};

export default Drum;
