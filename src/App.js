import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Card from './components/Card';
import Footer from './components/Footer';
import './App.css';

function App() {
  const projects = [
    {
      title: "Automated Plant Watering System",
      description: "A smart IoT system to water plants based on soil moisture.",
      buttonText: "View Project",
      link: "#",
    },
    {
      title: "Math Game for Kids",
      description: "An educational game to make learning math fun and interactive.",
      buttonText: "Try It Out",
      link: "#",
    },
    {
      title: "Budgeting App for Students",
      description: "A modern React app to manage student finances efficiently.",
      buttonText: "Explore",
      link: "#",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div className="card-container">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            buttonText={project.buttonText}
            link={project.link}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
