import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ExpertiseSection from "../components/Expertise.jsx";
import "../styles/ExpertiseSection.css";
import "../styles/Mainpage.css";

const MainPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      // Beregner en verdi fra 0 til 1 for opacity basert på scroll
      const opacity = Math.min(scrollY / maxScroll, 0.8);
      document.documentElement.style.setProperty("--scroll-opacity", opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main-container">
      <div className="background-overlay"></div>

      <Header />
      <section className="logo">
        <img src="Logo.png" alt="Logo" />
      </section>

      <nav id="side-navbar">
        <div className="nav-item">
          <span className="nav-number">01</span>
          <a href="#about">About</a>
        </div>
        <div className="nav-item">
          <span className="nav-number">02</span>
          <a href="#expertise">Expertise</a>
        </div>
        <div className="nav-item">
          <span className="nav-number">03</span>
          <a href="#projects">Projects</a>
        </div>
        <div className="nav-item">
          <span className="nav-number">04</span>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="about" id="about">
        <p>STUDENT, FRONT END AND BACKEND DEVELOPER</p>
      </section>

      <ExpertiseSection />

      <section className="projects" id="projects">
        <div className="projects-container">
          <h2>Prosjekter</h2>
          <div className="project-grid">
            {[
              {
                title: "Login nettside",
                desc: "Login nettside med simple funksjoner",
                img: "Login.png",
                link: "/projects/login",
              },
              {
                title: "DrumKit",
                desc: "Drumkit med mulighet til å legge til flere instrumenter",
                img: "omgdrumkit.png",
                link: "/projects/drumkit",
              },
              {
                title: "CryptoWidget",
                desc: "Viser sanntidsdata for kryptovalutaer.",
                img: "Cryptotn.png",
                link: "/projects/crypto",
              },
            ].map((project, index) => (
              <div className="project-card" key={index}>
                <Link to={project.link} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="project-text">
                    <h3>{project.title}</h3>
                    <p><strong>Beskrivelse:</strong> {project.desc}</p>
                  </div>
                  <div className="project-image">
                    <img src={project.img} alt={`Prosjekt ${project.title}`} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MainPage;



