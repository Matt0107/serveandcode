import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importation des icônes du burger et de la croix
import '../styles/Navbar.css';

const NavbarCode = () => {
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

      {/* Liens alignés à droite en mode desktop */}
      <ul className="navbar-links">
        <li>
          <Link to="/contact">Contact Us</Link> {/* Redirection vers ContactForm.js */}
        </li>
        <li>
          <Link to="/serve">Go to Tennis</Link>
        </li>
      </ul>

      {/* Burger menu pour le mode responsive */}
      <div className="navbar-right">
        {isMenuOpen ? (
          <FaTimes className="burger-icon" onClick={toggleMenu} />
        ) : (
          <FaBars className="burger-icon" onClick={toggleMenu} />
        )}
      </div>

      {/* Menu burger qui apparaît avec un slide en mode responsive */}
      <div className={`slide-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="slide-menu-content">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarCode;
