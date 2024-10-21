import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Utilisé pour la navigation entre les pages
import { FaInstagram, FaTiktok, FaYoutube, FaBars, FaTimes } from 'react-icons/fa'; // Importation des icônes et du burger/croix
import '../styles/Navbar.css'; // Le même fichier CSS que celui utilisé pour NavbarCode

const NavbarServe = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo à gauche avec lien vers Home */}
      <div className="navbar-logo">
        <Link to="/">
          <img src="../assets/images/serve-logo.png" alt="Serve Logo" />
        </Link>
      </div>

      {/* Icônes de réseaux sociaux au centre */}
      <div className="navbar-socials">
        <a href="https://www.instagram.com/matlovestennis/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" size={24} />
        </a>
        <a href="https://www.tiktok.com/@matlovestennis" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="social-icon" size={24} />
        </a>
        <a href="https://www.youtube.com/channel/UC1a9_a_8XQkGdbv_GjfiZjQ" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="social-icon" size={24} />
        </a>
      </div>

      {/* Liens alignés à droite en mode desktop */}
      <ul className="navbar-links">
        <li>
          <a href="https://calendly.com/afrotennis/60min" target="_blank" rel="noopener noreferrer">Book a Session</a>
        </li>
        <li>
          <Link to="/code">Go to Code</Link>
        </li>
      </ul>

      {/* Bouton "Book" et burger menu pour le mode responsive */}
      <div className="navbar-right">
        <a href="https://calendly.com/afrotennis/60min" target="_blank" rel="noopener noreferrer">
          <button className="book-button">Book</button>
        </a>
        {/* Change between burger menu and cross icon based on the state */}
        {isMenuOpen ? (
          <FaTimes className="burger-icon" onClick={toggleMenu} />
        ) : (
          <FaBars className="burger-icon" onClick={toggleMenu} />
        )}
      </div>

      {/* Menu burger qui apparaît avec un slide en mode responsive */}
      <div className={`slide-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="slide-menu-content">
          <Link to="/offer" onClick={toggleMenu}>Offer</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarServe;
