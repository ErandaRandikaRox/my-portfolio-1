import React, { useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaMobileAlt, FaLaptopCode, FaServer, FaLightbulb, FaPaintBrush, FaCode } from 'react-icons/fa';
import './Services.css';

import projectImage1 from '../assets/images/img_no1.webp';
import projectImage2 from '../assets/images/img_no2.webp';
import projectImage3 from '../assets/images/img_no3.webp';

const Services = () => {
  const cardsRef = useRef([]);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            entry.target.style.animationDelay = `${index * 0.15}s`;
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const projects = [
    {
      title: 'Mobile Selling Helper App',
      description:
        'A Flutter-based mobile application designed to assist sellers by streamlining inventory management, tracking sales, and providing real-time analytics for small businesses on iOS and Android.',
      image: projectImage1,
      tags: ['Flutter', 'Firebase', 'Dart'],
      links: {
        github: 'https://github.com/ErandaRandikaRox/Billing_App_flutter',
        live: '#',
      },
      icon: <FaMobileAlt className="project-icon" />
    },
    {
      title: 'Elephant Protection System',
      description:
        'A web application developed with React and Express to monitor elephant movements near railway tracks, using real-time data to alert train operators and prevent accidents in wildlife zones.',
      image: projectImage2,
      tags: ['React', 'Express', 'Node.js'],
      links: {
        github: '#',
        live: '#',
      },
      icon: <FaLaptopCode className="project-icon" />
    },
    {
      title: 'Rent Bodim House',
      description:
        'A Flutter-crafted mobile app that simplifies finding and renting boarding houses, offering features like location-based search, pricing filters, and direct booking for students and travelers.',
      image: projectImage3,
      tags: ['Flutter', 'Google Maps API', 'Dart'],
      links: {
        github: '#',
        live: '#',
      },
      icon: <FaServer className="project-icon" />
    },
  ];

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects-container">
        <div className="section-header">
          <div className="title-decoration">
            <FaLightbulb className="decoration-icon left-bulb" />
            <div className="main-title-container">
              <h1 className="creative-title">
                <span className="title-text">
                  <FaPaintBrush className="inline-icon brush-icon" />
                  Explore my technical solutions
                  <FaCode className="inline-icon code-icon" />
                </span>
                <span className="title-subtext">that bridge creativity with functionality</span>
              </h1>
              <div className="title-underline"></div>
            </div>
            <FaLightbulb className="decoration-icon right-bulb" />
          </div>
          <p className="section-description">
            Each project represents a unique challenge solved through clean code and thoughtful design
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index} ref={(el) => (cardsRef.current[index] = el)}>
              <div className="card-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="image-overlay"></div>
                <div className="project-type-icon">
                  {project.icon}
                </div>
              </div>

              <div className="card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.links.github}
                    className="link-button github"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} code on GitHub`}
                  >
                    <FaGithub className="link-icon" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.links.live}
                    className="link-button live"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <FaExternalLinkAlt className="link-icon" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;