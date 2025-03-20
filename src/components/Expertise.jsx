import React from "react";
import "../styles/ExpertiseSection.css";

const ExpertiseSection = () => {
  return (
    <section className="expertise" id="expertise">
      <h2></h2>
      <p></p>
      
      <div className="about-box">
        <h2>Tor-Magnus Slatlem</h2>
        <p>
          Hei! Jeg er 24 år gammel og lærer koding gjennom et kurs. Jeg jobber med HTML, CSS, JavaScript, React og webdesign i Figma.
          Jeg er strukturert og nysgjerrig, og jeg trives med å løse problemer og lære nye ting. Jeg har erfaring med feilsøking, spesielt når det gjelder kompatibilitetsproblemer i programmer.</p>
      </div>

      <div className="expertise-grid">
        <div className="expertise-box">
          <h3>Frontend</h3>
          <p>Brukt React, JavaScript, HTML og CSS for å skape brukervennlige nettsider.</p>
        </div>
        <div className="expertise-box">
          <h3>Backend</h3>
          <p>Kjent med Node.js for backend utvikling.</p>
        </div>
        <div className="expertise-box">
          <h3>Figma & UI/UX</h3>
          <p>Erfaring med wireframes og UI/UX design ved bruk av Figma.</p>
          
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
