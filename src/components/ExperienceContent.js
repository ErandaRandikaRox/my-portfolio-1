import React from 'react';
import { FaCode, FaLaptopCode, FaCalendarAlt, FaUserTie } from 'react-icons/fa';
import './ExperienceContent.css';

const ExperienceContent = () => {
  const experiences = [
    {
      title: "Software Developer",
      period: "2022 - 2024",
      description: "Developed mobile and web applications using Flutter, React, and JavaScript. Delivered projects on time, improving user experience for over 10,000 users across various platforms.",
      icon: <FaCode className="experience-icon" />,
      highlights: [
        "Built 15+ applications",
        "Improved performance by 40%",
        "Collaborated with cross-functional teams"
      ]
    },
    {
      title: "Freelance Developer",
      period: "2024 - Present",
      description: "Creating custom solutions for clients using Python, Django, and MySQL. Built scalable systems for e-commerce and educational platforms, enhancing business efficiency and user satisfaction.",
      icon: <FaLaptopCode className="experience-icon" />,
      highlights: [
        "5+ successful client projects",
        "100% client satisfaction rate",
        "Reduced operational costs by 30%"
      ]
    }
  ];

  return (
    <div className="experience-container">
      <div className="experience-cards">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="card-header">
              <div className="icon-container">
                {exp.icon}
              </div>
              <div className="title-container">
                <h4>{exp.title}</h4>
                <div className="period">
                  <FaCalendarAlt className="period-icon" />
                  <span>{exp.period}</span>
                </div>
              </div>
            </div>
            <p className="card-description">{exp.description}</p>
            <div className="highlights">
              <h5>Key Achievements:</h5>
              <ul>
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>
                    <span className="highlight-bullet">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div className="experience-footer">
              <FaUserTie className="footer-icon" />
              <span>Professional Experience</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceContent;