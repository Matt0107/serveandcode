import React, { useState, useEffect } from 'react';
import NavbarServe from '../components/NavbarServe'; // Importation de la NavbarServe
import '../styles/ServePage.css'; // Styles spécifiques à ServePage

const testimonials = [
  { id: 1, text: "Great coaching! I improved my serve dramatically.", name: "John D." },
  { id: 2, text: "Amazing experience, very professional and motivating.", name: "Sarah K." },
  { id: 3, text: "Highly recommended for anyone looking to improve their tennis.", name: "Mark P." },
];

const ServePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [transitionClass, setTransitionClass] = useState(''); // Pour la gestion des transitions

  useEffect(() => {
    // Déclenchement de la transition de sortie
    setTransitionClass('slide-out');
    
    const interval = setInterval(() => {
      setTransitionClass('slide-in'); // Applique la transition d'entrée

      // Change de témoignage après la transition de sortie
      setTimeout(() => {
        setCurrentTestimonial((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
        setTransitionClass('slide-out'); // Prépare la transition de sortie
      }, 500); // Durée de la transition en millisecondes
    }, 4000); // Changement tous les 4 secondes

    // Nettoyage de l'intervalle à la fin
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="serve-page">
      {/* Ajout de la barre de navigation */}
      <NavbarServe />

      {/* Section de fond (2/3 de la page) */}
      <div className="serve-background">
        <h1>Improve Your Tennis Skills</h1>
      </div>

      {/* Deuxième section (1/3 de la page) avec 3 parties */}
      <div className="serve-details">
        <div className="detail-item">
          <h2>Our Offer</h2>
          <p>Check out our exclusive tennis programs and coaching packages.</p>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            <button className="cta-button">See More</button>
          </a>
        </div>
        <div className="detail-item">
          <h2>Testimonials</h2>
          <div className="testimonial-carousel">
            <div className={`testimonial-content ${transitionClass}`}>
              <p>"{testimonials[currentTestimonial].text}"</p>
              <p>- {testimonials[currentTestimonial].name}</p>
            </div>
          </div>
        </div>
        <div className="detail-item">
          <h2>Book Your Class</h2>
          <p>Ready to take your tennis to the next level? Book a class now!</p>
          <a href="https://calendly.com/afrotennis/60min" target="_blank" rel="noopener noreferrer">
            <button className="cta-button">Book Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServePage;
