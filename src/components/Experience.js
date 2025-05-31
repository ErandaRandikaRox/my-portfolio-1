import React, { useEffect, useRef } from 'react';
import './Experience.css';
import { FaMobileAlt, FaCode, FaLaptopCode } from 'react-icons/fa';

const Experience = () => {
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

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div className="experience-container">
        <div className="experience-grid">
          <div
            className="experience-card primary"
            ref={(el) => (cardsRef.current[0] = el)}
          >
            <div className="card-icon">
              <div className="icon-background"></div>
              <FaCode className="icon" />
            </div>
            <h3 className="card-title">Full-Stack Development</h3>
            <p className="card-description">
              I specialize in end-to-end web application development using modern frameworks like React, Node.js, and Express. My focus is on building scalable, performant solutions with clean architecture, integrating RESTful APIs and databases like MongoDB and PostgreSQL. I’ve delivered projects ranging from e-commerce platforms to real-time dashboards, ensuring robust backend logic and seamless user experiences.
            </p>
            <ul className="card-skills">
              <li>React, Node.js, Express</li>
              <li>MongoDB, PostgreSQL</li>
              <li>REST APIs, GraphQL</li>
            </ul>
            <div className="card-footer">
              <span className="experience-years">3+ Years Experience</span>
            </div>
          </div>

          <div
            className="experience-card"
            ref={(el) => (cardsRef.current[1] = el)}
          >
            <div className="card-icon">
              <div className="icon-background"></div>
              <FaMobileAlt className="icon" />
            </div>
            <h3 className="card-title">Mobile Development</h3>
            <p className="card-description">
              I develop cross-platform mobile applications using Flutter and React Native, delivering smooth, native-like experiences. My work emphasizes UI/UX design, performance optimization, and integration with backend services. Projects include fitness trackers and social networking apps, built with a focus on responsive layouts and accessibility.
            </p>
            <ul className="card-skills">
              <li>Flutter, React Native</li>
              <li>Dart, JavaScript</li>
              <li>Firebase, GraphQL</li>
            </ul>
            <div className="card-footer">
              <span className="experience-years">2+ Years Experience</span>
            </div>
          </div>

          <div
            className="experience-card"
            ref={(el) => (cardsRef.current[2] = el)}
          >
            <div className="card-icon">
              <div className="icon-background"></div>
              <FaLaptopCode className="icon" />
            </div>
            <h3 className="card-title">Frontend Engineering</h3>
            <p className="card-description">
              I craft beautiful, responsive interfaces using React, TypeScript, and modern CSS frameworks like Tailwind. My expertise lies in creating intuitive user experiences with pixel-perfect implementation, optimized for performance across devices. I’ve built dynamic web apps, including portfolio sites and data visualization tools, with a focus on accessibility and SEO.
            </p>
            <ul className="card-skills">
              <li>React, TypeScript</li>
              <li>Tailwind CSS, SASS</li>
              <li>Webpack, Vite</li>
            </ul>
            <div className="card-footer">
              <span className="experience-years">4+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;