import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <h1 className="logo">
        Zeynab<span>Dev</span>
      </h1>

      {/* MENU DESKTOP */}
      <ul className="nav-links">
        <li><a href="#hero">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#skills">Compétences</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* BURGER BUTTON */}
      <div className={`burger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* MENU MOBILE */}
      <div className={`mobile-menu ${open ? "mobile-open" : ""}`}>
        <a href="#hero" onClick={() => setOpen(false)}>Accueil</a>
        <a href="#about" onClick={() => setOpen(false)}>À propos</a>
        <a href="#skills" onClick={() => setOpen(false)}>Compétences</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projets</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}
