// Education.js (Unchanged)
import React from 'react';
import { FaLaptopCode, FaBookOpen } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const educationItems = [
    {
      year: "2022 - Present",
      title: "Self-Taught Developer Journey",
      description: "Mastered multiple technologies including React, JavaScript, Python, Django, Flutter, Firebase, MongoDB, and MySQL through independent study and project-based learning.",
      icon: <FaLaptopCode className="education-icon" />,
      highlights: [
        "Built 15+ personal projects",
        "Contributed to open source",
        "Regularly complete coding challenges"
      ]
    },
    {
      year: "2022",
      title: "Udemy Certifications",
      description: "Completed comprehensive courses in Web Development and Flutter App Development, gaining expertise in HTML, CSS, JavaScript, React, and Flutter for building responsive websites and cross-platform mobile apps.",
      icon: <FaBookOpen className="education-icon" />,
      highlights: [
        "50+ hours of coursework",
        "10+ completed projects",
        "Earned certificates of completion"
      ]
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-timeline">
          {educationItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-card">
                <div className="card-header">
                  <div className="card-icon">
                    {item.icon}
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                </div>
                <p className="card-description">{item.description}</p>
                <div className="card-highlights">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {item.highlights.map((highlight, i) => (
                      <li key={i}>
                        <span className="highlight-bullet">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;