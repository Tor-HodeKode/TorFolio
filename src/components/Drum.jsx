import React from "react";
import classNames from "classnames"; // For enklere håndtering av klasser

const Drum = ({ name, sound, keyChar, image, onPlay, activeKey }) => {
  const handlePlay = () => {
    const audio = new Audio(sound);
    audio.play();
    onPlay(keyChar); // Gi tilbakemelding om hvilken tast som ble trykket
  };

  // Bruk classNames for å legge til "active"-klassen hvis trommen er aktiv
  const buttonClass = classNames("drum-button", {
    active: activeKey === keyChar, // Legg til aktiv klasse hvis riktig tast ble trykket
  });

  return (
    <button className={buttonClass} onClick={handlePlay}>
      <img src={image} alt={name} />
      <span>{keyChar.toUpperCase()}</span>
    </button>
  );
};

export default Drum;

