import React from 'react';
import './HeroSection.css';
import { Typewriter } from 'react-simple-typewriter';

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Nikhil Doal</h1>
        <p className="hero-typing">
          <Typewriter
            words={['Developer', 'Problem Solver', 'Tech Enthusiast']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <div className="hero-buttons">
          <button className="btn primary">Contact Me</button>
          <button className="btn secondary">My Resume</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
