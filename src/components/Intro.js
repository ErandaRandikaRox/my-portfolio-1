import React, { useState, useEffect, useRef } from 'react';
import './Intro.css';

import githubIcon from '../assets/svg/github.svg';
import facebookIcon from '../assets/svg/facebook.svg';
import linkedinIcon from '../assets/svg/icons8-linkedin-100.svg';
import flutterIcon from '../assets/svg/flutter.svg';
import reactIcon from '../assets/svg/react.svg';
import pythonIcon from '../assets/svg/python.svg';
import javascriptIcon from '../assets/svg/javascript.svg';
import expressIcon from '../assets/svg/express.svg';
import mongodbIcon from '../assets/svg/mongodb.svg';
import mysqlIcon from '../assets/svg/mysql.svg';

import myPhoto from '../assets/images/profile_pic.jpeg';

const Intro = () => {
  const jobTitles = ['Android Developer', 'iOS Developer', 'Web Developer'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const photoRef = useRef(null);
  const skillItemsRef = useRef([]);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
        setIsTyping(true);
      }, 300);
    }, 2000);

    const handleMouseMove = (e) => {
      if (photoRef.current) {
        const { left, top, width, height } = photoRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        
        photoRef.current.style.transform = `
          perspective(1000px)
          rotateX(${y * 10}deg)
          rotateY(${-x * 10}deg)
          scale(1.03)
        `;
        photoRef.current.style.boxShadow = `
          ${-x * 20}px ${y * 20}px 40px rgba(0, 0, 0, 0.2)
        `;
      }
    };

    const handleMouseLeave = () => {
      if (photoRef.current) {
        photoRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        photoRef.current.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
      }
    };

    const photoElement = photoRef.current;
    if (photoElement) {
      photoElement.addEventListener('mousemove', handleMouseMove);
      photoElement.addEventListener('mouseleave', handleMouseLeave);
    }

    skillItemsRef.current.forEach(item => {
      if (item) {
        item.addEventListener('mousemove', (e) => {
          const { left, top, width, height } = item.getBoundingClientRect();
          const x = (e.clientX - left) / width - 0.5;
          const y = (e.clientY - top) / height - 0.5;
          
          item.style.transform = `
            perspective(500px)
            rotateX(${y * 5}deg)
            rotateY(${-x * 5}deg)
            translateZ(10px)
          `;
        });

        item.addEventListener('mouseleave', () => {
          item.style.transform = 'perspective(500px) rotateX(0) rotateY(0) translateZ(0)';
        });
      }
    });

    return () => {
      clearInterval(titleInterval);
      if (photoElement) {
        photoElement.removeEventListener('mousemove', handleMouseMove);
        photoElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [jobTitles.length]);

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="intro" className="intro">
      <div className="intro-container">
        <div className="intro-left">
          <div className="welcome-badge">WELCOME!</div>
          <h1>
            Hi, I'm <span className="highlight-name">Eranda Randika</span>
          </h1>
          <div className="job-title-container">
            <h3 className={`job-title ${isTyping ? 'typing' : ''}`}>
              {jobTitles[currentTitleIndex]}
            </h3>
            <span className="cursor">|</span>
          </div>
          <p className="intro-description">
            I'm passionate about creating innovative digital solutions. With expertise in multiple programming languages and frameworks, I transform ideas into functional, beautiful applications. Continuous learning and staying updated with the latest technologies drive my work.
          </p>
          
          <div className="intro-columns">
            <div className="column find-me">
              <h4 className="section-subtitle">FIND ME ON</h4>
              <div className="social-links">
                <button
                  className="social-button github"
                  onClick={() => openLink('https://github.com/ErandaRandikaRox')}
                  aria-label="GitHub"
                >
                  <img src={githubIcon} alt="GitHub" className="social-icon" />
                  <span>GitHub</span>
                </button>
                <button
                  className="social-button facebook"
                  onClick={() => openLink('https://www.facebook.com/eranda.randika.908884/')}
                  aria-label="Facebook"
                >
                  <img src={facebookIcon} alt="Facebook" className="social-icon" />
                  <span>Facebook</span>
                </button>
                <button
                  className="social-button linkedin"
                  onClick={() => openLink('https://www.linkedin.com/in/eranda-randika-93453b284/')}
                  aria-label="LinkedIn"
                >
                  <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                  <span>LinkedIn</span>
                </button>
              </div>
            </div>
            
            <div className="column skills">
              <h4 className="section-subtitle">TECH STACK</h4>
              <div className="skills-grid">
                <div className="skill-category">
                  <h5 className="skill-category-title">Frontend</h5>
                  <div className="skill-items">
                    <div 
                      className="skill-item" 
                      ref={el => skillItemsRef.current[0] = el}
                    >
                      <img src={flutterIcon} alt="Flutter" className="skill-icon" />
                      <span>Flutter</span>
                    </div>
                    <div 
                      className="skill-item" 
                      ref={el => skillItemsRef.current[1] = el}
                    >
                      <img src={reactIcon} alt="React" className="skill-icon" />
                      <span>React</span>
                    </div>
                  </div>
                </div>
                
                <div className="skill-category">
                  <h5 className="skill-category-title">Backend</h5>
                  <div className="skill-items">
                    <div 
                      className="skill-item" 
                      ref={el => skillItemsRef.current[2] = el}
                    >
                      <img src={pythonIcon} alt="Python" className="skill-icon" />
                      <span>Python</span>
                    </div>
                    <div 
                      className="skill-item" 
                      ref={el => skillItemsRef.current[3] = el}
                    >
                      <img src={expressIcon} alt="Express" className="skill-icon" />
                      <span>Express</span>
                    </div>
                  </div>
                </div>
                
                <div className="skill-category">
                  <h5 className="skill-category-title">Databases</h5>
                  <div className="skill-items">
                    <div 
                      className="skill-item" 
                      ref={el => skillItemsRef.current[4] = el}
                    >
                      <img src={mongodbIcon} alt="MongoDB" className="skill-icon" />
                      <span>MongoDB</span>
                    </div>
                    <div 
                      className="skill-item" 
                      ref={el => skillItemsRef.current[5] = el}
                    >
                      <img src={mysqlIcon} alt="MySQL" className="skill-icon" />
                      <span>MySQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="intro-right">
          <div className="photo-container">
            <img 
              ref={photoRef}
              src={myPhoto} 
              alt="Eranda Randika" 
              className="intro-photo" 
            />
            <div className="photo-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;