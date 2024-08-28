import React, { useEffect } from 'react';
import './Components.css'; // Import the CSS file for styling
import github from '../assets/Github_Logo.png'
import linkedin from '../assets/LinkedIn_Logo.png'
import gmail from '../assets/GMail_Logo.png'

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <a href="https://github.com/llfrigoll" target="_blank"><img className="footer-image" id="footer-image" src={github}></img></a>
            <a href="https://www.linkedin.com/in/franzpretorius2003/" target="_blank"><img className="footer-image" id="footer-image" src={linkedin}></img></a>
            <a href="mailto:franzj.pretorius.2003@gmail.com"><img className="footer-image" id="footer-image" src={gmail}></img></a>
            <p>Franz Pretorius &copy;2024</p>
        </div>
      );
    };

export default Footer;
