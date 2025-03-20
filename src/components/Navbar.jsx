import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Crypto.css';

const NavBar = () => {
  const location = useLocation();

  // Funksjon for å velge riktig logo basert på ruten
  const getLogo = () => {
    switch (location.pathname) {
      case '/projects/crypto':
        return '/Basecoin.png'; // Erstatt med banen til logoen for Crypto
      case '/projects/weather':
        return '/weather-logo.png'; // Erstatt med banen til logoen for Weather
      default:
        return '/default-logo.png'; // Standard logo for Hjem
    }
  };

  // Funksjon for å sette riktig bakgrunnsfarge og tekstfarge i navbar
  const getNavBarStyles = () => {
    switch (location.pathname) {
      case '/projects/crypto':
        return { backgroundColor: '#080808', color: '#130d0d' }; // Mørk tema for Crypto
      case '/projects/weather':
        return { backgroundColor: '#405677', color: '#fff' }; // Blå tema for Weather
      default:
        return { backgroundColor: '#fff', color: '#000' }; // Standard tema for Hjem
    }
  };

  // Funksjon for å reload siden (ved å laste inn på nytt)
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="navbar" style={getNavBarStyles()}>
      <img src={getLogo()} alt="Logo" className="navbar-logo" />
      <nav className="nav-links">
        <ul>
          {/* Reload-knapp med stil */}
          <li><button onClick={handleReload} className="reload-button">Reload</button></li>
          {/* Weather lenke */}
          <li><a href="/projects/weather" className="nav-link">Weather</a></li>
          {/* Home lenke som leder til MainPage.jsx */}
          <li><a href="/" className="nav-link">Home</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;



