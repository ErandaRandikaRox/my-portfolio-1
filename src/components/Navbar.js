import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaCode, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = ['intro', 'AboutMe', 'experience', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Calculate offset for fixed navbar (adjust 80px based on navbar height)
      const navbarHeight = 80;
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionPosition - navbarHeight,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    } else {
      console.warn(`Section with ID "${sectionId}" not found`);
    }
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-left">
          <span className="logo">ER</span>
          <span className="name">Eranda Randika</span>
        </div>

        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-center ${isOpen ? 'open' : ''}`}>
          <button
            onClick={() => scrollToSection('intro')}
            className={`nav-link ${activeSection === 'intro' ? 'active' : ''}`}
          >
            <FaHome className="nav-icon" />
            <span>Home</span>
          </button>
          <button
            onClick={() => scrollToSection('AboutMe')}
            className={`nav-link ${activeSection === 'AboutMe' ? 'active' : ''}`}
          >
            <FaUser className="nav-icon" />
            <span>About</span>
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
          >
            <FaBriefcase className="nav-icon" />
            <span>Experience</span>
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            <FaCode className="nav-icon" />
            <span>Projects</span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            <FaEnvelope className="nav-icon" />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;