import React from 'react';
import { motion } from 'framer-motion';
import paperplane from '../assets/paperplane.png';
import reactLogo from '../assets/react.svg';
import facebookLogo from '../assets/facebook.png';
import instagramLogo from '../assets/instagram.png';
import './Contact.css';
import { div } from 'framer-motion/client';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fxch83s', 'template_okg0ofm', form.current, 'VT-VRKR9ktVZZ_bPs')
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div>
      <motion.div
        className="contact-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="glass-square sq1"></div>
        <div className="glass-square sq2"></div>
        <div className="glass-square sq3"></div>
        <div className="glass-square sq4"></div>
        <div className="glass-square sq5"></div>
        <div className="glass-square sq6"></div>
        <div className="glass-square sq7"></div>
        <div className="glass-square sq8"></div>


        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="contact-left">
            <div className="headerContainer">
              <h1>Let's Connect</h1><img src={paperplane} alt="paperplane" />
            </div>
            <p>If you’d like to collaborate, ask something, or just say hi — I’d love to hear from you!</p>
            
            <div className="contact-info">
              <p><strong>Email:</strong> stianbitong69@gmail.com</p>
              <p><strong>Phone:</strong> +63 966 569 6441</p>
              <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/stian-trond-bitong-67332417a" target="_blank" rel="noreferrer">Stian Trond Bitong</a></p>
              <p><strong>GitHub:</strong> <a href="https://github.com/SBitong" target="_blank" rel="noreferrer">github.com/SBitong</a></p>
              <br />
              <p><strong>Follow me on Social Media:</strong></p>
              <div>
                <a href="https://www.facebook.com/stian.bitong.1/" target="_blank" rel="noreferrer">
                  <img src={facebookLogo} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/stianbitong/" target="_blank" rel="noreferrer">
                  <img src={instagramLogo} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="name" placeholder="Your Name" required />

              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder="Your Phone Number" required />

              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              />

              <label>Message</label>
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>

              <br />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </motion.div>
      </motion.div>
      <footer className="footer">
        Powered by: {' '}
        <img src={reactLogo} alt="React" />
        <strong>ReactJS</strong>
      </footer>
    </div>
    
  );
}

export default Contact;
