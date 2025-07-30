import { useState } from 'react';
import { Link } from 'react-router-dom';
import useWindowWidth from '../useWindowWidth';
import './Navbar.css';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const width = useWindowWidth();

  const sideNavWidth = width < 768 ? '70%' : '30%';
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>
        <span style={styles.thin}>STO</span>
        <span style={styles.bold}>BITONG</span>
      </h2>

      
      <div className="hamburger" style={styles.hamburger} onClick={() => setMenuOpen(true)}>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
      </div>

      
      <ul className="navLinks" style={styles.navLinks}>
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li><Link className="nav-link" to="/about">About</Link></li>
        <li><Link className="nav-link" to="/projects">Projects</Link></li>
        <li><Link className="nav-link" to="/contact">Contact</Link></li>
      </ul>


      
      <div style={{
        ...styles.sideNavOverlay,
        right: menuOpen ? '0' : `-${sideNavWidth}`,
        width: sideNavWidth,
      }}>
        <button onClick={() => setMenuOpen(false)} style={styles.closeBtn}>×</button>
        <Link className="overlay-link" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link className="overlay-link" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link className="overlay-link" to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link className="overlay-link" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0',
    backgroundColor: 'transparent',
    color: '#fff',
    position: 'relative',
  },
  logo: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '1.5rem',
    zIndex: 1001,
  },
  thin: {
    fontWeight: 200,
  },
  bold: {
    fontWeight: 800,
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '1rem',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    cursor: 'pointer',
    zIndex: 1001,
  },
  bar: {
    width: '25px',
    height: '3px',
    backgroundColor: '#fff',
  },
  sideNavOverlay: {
    position: 'fixed',
    top: 0,
    height: '100%',
    backgroundColor: '#111',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '2rem 1.5rem',
    transition: 'right 0.3s ease-in-out',
    zIndex: 2000,
  },

  closeBtn: {
    alignSelf: 'flex-end',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '2rem',
    cursor: 'pointer',
    marginBottom: '1rem',
  },
  overlayLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
    marginBottom: '1.5rem',
    fontFamily: "'Poppins', sans-serif",
  },
};

export default Navbar;
