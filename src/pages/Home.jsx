import { s } from 'framer-motion/client';
import bitongImg from '../assets/bitong-img-2.jpg';
import linkedinLogo from '../assets/linkedin-logo-svgrepo-com.svg';
import githubLogo from '../assets/github-svgrepo-com.svg';
import reactLogo from '../assets/react.svg'; 
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "./Home.css"


function Home() {
  return (
    <div className="container">
      <motion.div
      className="grid-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
        <div className='text-container'>
          <h1 className='myHeader'>
            I am <span className="highlight-name">Stian Trond</span>.
          </h1>
          <h1 className='myPosition'>
            A{' '}
            <span>
              <Typewriter
                words={['Software Developer', 'Mobile Developer','Web Developer']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2500}
              />
            </span>
          </h1>
          <p className='myDescription'>I am a Software and Mobile Developer and a graduate of Bachelor of 
            Information Technology in Ateneo de Davao University. I specialize in <strong>HTML/CSS</strong>, <strong>Javascript</strong>, 
            <strong> ReactJS</strong>, <strong>Python</strong>, and <strong>Kotlin</strong>.
          </p>
          <br></br><br></br><br></br>
          <div className="button-container">
            <a href="/Stian_Bitong_Resume.pdf" className="resumeBtn" download="Stian_Bitong_Resume.pdf">
              Download Resume
            </a>
            <a href="https://www.linkedin.com/in/stian-trond-bitong-67332417a/" className="iconBtn">
              <div className="iconInner">
                <img src={linkedinLogo} alt="LinkedIn" />
              </div>
            </a>
            <a href="https://github.com/SBitong" className="iconBtn2">
              <div className="iconInner2">
                <img src={githubLogo} alt="Github" />
              </div>
            </a>
          </div>
        </div>
        <div className='image-container'>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="box">
              <div className="content">
                <img
                  src={bitongImg}
                  alt="STIAN TROND BITONG"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
                <h2>Stian Trond O. Bitong<br></br><span>Software Developer</span></h2>
                <Link to="/contact" className="hireMeBtn">Hire Me!</Link>
              </div>
            </div>
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

export default Home;
