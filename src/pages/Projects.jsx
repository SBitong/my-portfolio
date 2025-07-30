import React, { useState } from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import dyscapeImage from '../assets/dyscape-2.png';
import dyscape1 from '../assets/dyscape-screenshot-1.png';
import dyscape2 from '../assets/dyscape-screenshot-2.png';
import dyscape3 from '../assets/dyscape-screenshot-3.png';
import dyscape4 from '../assets/dyscape-screenshot-4.png';
import dyscape5 from '../assets/dyscape-screenshot-5.png';  
import dyscape6 from '../assets/dyscape-screenshot-6.png';
import timesheetImage from '../assets/timesheet.png';
import timesheet1 from '../assets/timesheet-screenshot-1.png';
import timesheet2 from '../assets/timesheet-screenshot-2.png';
import timesheet3 from '../assets/timesheet-screenshot-3.png';
import portfolioImage from '../assets/portfolio.png';
import portfolio1 from '../assets/portfolio-screenshot-1.png';
import portfolio2 from '../assets/portfolio-screenshot-2.png';
import portfolio3 from '../assets/portfolio-screenshot-3.png';
import reactLogo from '../assets/react.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { i } from 'framer-motion/client';
import { time } from 'framer-motion/m';


const projectList = [
  {
    id: 1,
    name: 'Dyscape',
    image: dyscapeImage,
    date: 'August 2024 - December 2024',
    screenshots: [dyscapeImage, dyscape1, dyscape2, dyscape3, dyscape4, dyscape5, dyscape6],
    description: 'A game created with intention to help dyslexic children learn how to read and write. It is a fantasy adventure game where there is a story that the player must follow to complete the game. Every level is equipped with phonological activities that will help the player learn and progress throughout the story. A game created for fun and learning.',
    technologies: ['Python', 'Pygame', 'pyttsx3', 'Figma', 'Canva', 'SQLite', 'aseprite', 'Git']
  },
  {
    id: 2,
    name: 'Timesheet App',
    image: timesheetImage,
    date: 'April 2025',
    screenshots: [timesheetImage, timesheet1, timesheet2, timesheet3],
    description: 'An Android app for employees to clock in/out and generate reports. Made using Kotlin and Jetpack Compose, it allows users to track their working hours and generate timesheet reports easily. It also includes features like running clock in/clock out and viewing past entries.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'Rest API', 'Postman']
  },
  {
    id: 3,
    name: 'Personal Portfolio',
    image: portfolioImage,
    date: 'July 2025',
    screenshots: [portfolio1, portfolio2, portfolio3],
    description: 'A personal portfolio website showcasing my projects and skills. Made entirely with ReactJS, it features a modern design and smooth animations using framer-motion. The website is responsive and includes sections for projects, skills, and contact information. No backend and framework used.',
    technologies: ['HTML/CSS', 'Javascript', 'ReactJS', 'framer-motion', 'EmailJS']
  },
  // Add more projects here...
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openPanel = (project) => setSelectedProject(project);
  const closePanel = () => setSelectedProject(null);

  return (
    <div className="projects-container">
      <h2 className='section-title-projects'>My Projects</h2>
      <motion.div 
        className="project-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {projectList.map(project => (
          <div key={project.id} className="project-card" onClick={() => openPanel(project)}>
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p className="date">{project.date}</p>
          </div>
        ))}
      </motion.div>

      {selectedProject && (
        <motion.div className="project-panel-overlay" 
          onClick={closePanel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <div className="project-panel" onClick={e => e.stopPropagation()}>
            {/* Carousel */}
            {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
              <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
                {selectedProject.screenshots.map((img, idx) => (
                  <div key={idx}>
                    <img src={img} alt={`Screenshot ${idx + 1}`} className="carousel-image" />
                  </div>
                ))}
              </Slider>
            )}
            {/* Info */}
            <h2>{selectedProject.name}</h2>
            <div className="tech-badges">
              {selectedProject.technologies.map((tech, index) => (
                <span className="tech-pill" key={index}>{tech}</span>
              ))}
            </div>
            <p>{selectedProject.description}</p>
            {/* <strong>Technologies:</strong>
            <ul>
              {selectedProject.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul> */}
            <button onClick={closePanel}>Close</button>
          </div>
        </motion.div>
      )}
      <footer className="footer">
        Powered by: {' '}
        <img src={reactLogo} alt="React" />
        <strong>ReactJS</strong>
      </footer>
    </div>
  );
}

export default Projects;
