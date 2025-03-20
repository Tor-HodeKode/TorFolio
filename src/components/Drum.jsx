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
      className={`drum ${isActive ? "active" : ""}`} // Bruker "active" klasse for visuelle effekter
      onClick={handleClick}
    >
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{keyChar.toUpperCase()}</p>
    </div>
  );
};

export default Drum;