import React, { useEffect } from 'react';
import { FaCode, FaChartLine } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Flutter', percentage: 100, color: '#02569B' },
    { name: 'React', percentage: 90, color: '#61DAFB' },
    { name: 'MySQL', percentage: 85, color: '#4479A1' },
    { name: 'Express', percentage: 72, color: '#000000' },
    { name: 'HTML', percentage: 60, color: '#E34F26' },
    { name: 'CSS', percentage: 60, color: '#1572B6' },
    { name: 'JavaScript', percentage: 50, color: '#F7DF1E' },
    { name: 'Python', percentage: 50, color: '#3776AB' },
  ];

  useEffect(() => {
    const skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach(bar => {
      const width = bar.getAttribute('data-percent');
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = `${width}%`;
      }, 100);
    });
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
         
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="skill-progress-container">
                <div 
                  className="skill-level" 
                  style={{ 
                    width: `${skill.percentage}%`, 
                    backgroundColor: skill.color 
                  }}
                  data-percent={skill.percentage}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;