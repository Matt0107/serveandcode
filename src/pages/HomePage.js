import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importer Link pour la navigation
import '../styles/HomePage.css'; // Le fichier CSS pour styliser la page

const HomePage = () => {
  const [hovered, setHovered] = useState(null); // Pour détecter quel côté est survolé

  return (
    <div className={`home-container ${hovered}`}>
      {/* Section Serve */}
      <Link 
        to="/serve" // Chemin vers la page TennisServices
        className="home-section serve-section"
        onMouseEnter={() => setHovered('hover-serve')}
        onMouseLeave={() => setHovered(null)}
      >
        <h1>Serve</h1>
      </Link>

      {/* Section Code */}
      <Link 
        to="/code" // Chemin vers la page TechServices
        className="home-section code-section"
        onMouseEnter={() => setHovered('hover-code')}
        onMouseLeave={() => setHovered(null)}
      >
        <h1>Code</h1>
      </Link>
    </div>
  );
};

export default HomePage;
