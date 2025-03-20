import React from "react";
import CryptoWidget from "../components/CryptoWidget"; // Importer CryptoWidget-komponenten
import "../styles/Crypto.css"; // Importer CSS-filen for styling
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Crypto = () => {
  return (
    <div className="crypto-page">
      <NavBar /> {/* Navigasjonsbaren med logo */}
      <CryptoWidget /> {/* CryptoWidget-komponenten */}
      <Footer /> {/* Footer xD*/}
    </div>
  );
};

export default Crypto;







