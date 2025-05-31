import React, { useState, useEffect, useRef } from 'react';
import { FaGraduationCap, FaCode, FaUserTie } from 'react-icons/fa';
import './AboutMe.css';
import Education from './Education';
import Skills from './Skills';

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState('education');
  const [contentKey, setContentKey] = useState('education');
  const sectionRefs = useRef([]);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleTabChange = (sectionId) => {
    setActiveSection(sectionId);
    setContentKey(sectionId);
  };

  const sections = [
    {
      id: 'education',
      title: 'Academic Background',
      icon: <FaGraduationCap />,
      component: <Education />,
      description: 'My educational qualifications and certifications'
    },
    {
      id: 'skills',
      title: 'Technical Expertise',
      icon: <FaCode />,
      component: <Skills />,
      description: 'My technical skills and programming languages'
    }
  ];

  const activeTabData = sections.find(s => s.id === activeSection);

  return (
    <section id="about-me" className="about-me-section">
      <div className="about-me-container">
        <div className="section-header">
          <h2 ref={titleRef} className="section-title">
            <FaUserTie className="title-icon" />
            Professional Journey
          </h2>
          <p className="section-subtitle">
            {activeTabData ? activeTabData.description : '3+ years of development experience'}
          </p>
        </div>

        <div className="tab-container">
          {sections.map((section, index) => (
            <button
              key={section.id}
              ref={el => (sectionRefs.current[index] = el)}
              className={`tab-button ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => handleTabChange(section.id)}
              aria-label={`Show ${section.title}`}
            >
              {section.icon}
              <span>{section.title}</span>
            </button>
          ))}
        </div>

        <div className="content-container" ref={contentRef}>
          <div 
            key={contentKey} 
            className="content-wrapper"
            style={{ animation: 'fadeIn 0.5s ease-out forwards' }}
          >
            {activeTabData?.component}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;