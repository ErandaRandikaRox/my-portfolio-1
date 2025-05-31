import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Services from './components/Services';
import Intro from './components/Intro';
import './App.css'; // Create this file for global styles

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content">
        <section id="intro" className="section">
          <Intro />
        </section>

        <section id="AboutMe" className="section">
          <AboutMe />
        </section>

        <section id="services" className="section">
          <Experience />
        </section>

        <section id="services" className="section">
          <Services />
        </section>
    
      
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;