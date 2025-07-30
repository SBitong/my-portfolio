import React from 'react';
import { motion } from 'framer-motion';
import htmlLogo from '../assets/html.svg';
import cssLogo from '../assets/css.svg';
import jsLogo from '../assets/javascript.svg';
import bootstrapLogo from '../assets/bootstrap.svg';
import reactLogo from '../assets/react.svg';
import nodejsLogo from '../assets/nodejs.svg';
import mysqlLogo from '../assets/mysql.svg';
import kotlinLogo from '../assets/kotlin.svg';
import pythonLogo from '../assets/python.svg';
import pygameLogo from '../assets/pygame.svg';
import gitLogo from '../assets/git.svg';
import figmaLogo from '../assets/figma.svg';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2 className="section-title">About Me</h2>
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="about-text">
          <p>
            Hello! I'm <strong>Stian Trond Bitong</strong>, a passionate software and mobile developer with a degree in <strong>Bachelor of Information Technology</strong> from Ateneo de Davao University.
          </p>
          <p>
            I specialize in building full-stack web and mobile applications using modern technologies like <strong>ReactJS</strong>, <strong>Kotlin</strong>, and <strong>Python</strong>. My focus is on creating fast, responsive, and user-friendly interfaces.
          </p>
          <p>
            Aside from coding, I enjoy learning new tools, contributing to team projects, and constantly improving my development workflow. I'm driven, curious, and always ready to take on a challenge.
          </p>
        </div>
        <div className="about-skills">
          <h3>Skills</h3>
          <div className="skills-grid">
                {[
                    { name: 'HTML', logo: htmlLogo },
                    { name: 'CSS', logo: cssLogo },
                    { name: 'JavaScript', logo: jsLogo },
                    { name: 'Bootstrap', logo: bootstrapLogo },
                    { name: 'ReactJS', logo: reactLogo },
                    { name: 'Node.js', logo: nodejsLogo },
                    { name: 'MySQL', logo: mysqlLogo },
                    { name: 'Kotlin', logo: kotlinLogo },
                    { name: 'Python', logo: pythonLogo },
                    { name: 'Pygame', logo: pygameLogo },
                    { name: 'Git', logo: gitLogo },
                    { name: 'Figma', logo: figmaLogo }
                ].map((skill, index) => (
                    <div key={index} className="skill-item">
                    <img src={skill.logo} alt={skill.name} className="skill-logo" />
                    <span>{skill.name}</span>
                    </div>
                ))}
          </div>
        </div>
      </motion.div>
      <footer className="footer">
        Powered by: {' '}
        <img src={reactLogo} alt="React" />
        <strong>ReactJS</strong>
      </footer>
    </div>
  );
}

export default About;
