import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="greeting">Hello, I'm</span>
          <span className="name">Mayuresh Borate</span>
          <span className="profession">Full-Stack Developer</span>
        </h1>
        <p className="hero-description">
          Passionate about building scalable, responsive web applications
          with expertise in MERN stack, RESTful APIs, and database management.
        </p>
        <div className="hero-buttons">
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            className="btn btn-primary"
          >
            View Projects
          </Link>
          <a 
            href="/assets/resume/MayureshBorateResume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
          >
            Download Resume
          </a>
        </div>
        <div className="hero-social">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/mayuresh-borate-8a732b1b3" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:mborate18@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/assets/images/profile.jpg" alt="Mayuresh Borate" />
      </div>
      <div className="scroll-indicator">
        <Link to="about" smooth={true} duration={500}>
          <i className="fas fa-chevron-down"></i>
        </Link>
      </div>
    </section>
  );
};

export default Hero;