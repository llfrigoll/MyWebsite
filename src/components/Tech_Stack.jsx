import React, { useEffect, useState } from 'react';
import './Components.css';
import bootstraplogo from "../assets/Bootstrap_Logo.png"
import csslogo from "../assets/CSS_Logo.png"
import gitlogo from "../assets/Git_Logo.png"
import githublogo from "../assets/Github_Logo.png"
import htmllogo from "../assets/HTML5_Logo.png"
import jslogo from "../assets/JS_Logo.png"
import reactlogo from "../assets/React_Logo.png"
import tailwindlogo from "../assets/Tailwind_Logo.png"
import tslogo from "../assets/TS_Logo.png"


const Tech_Stack = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('tech-stack-section');
    const rect = section.getBoundingClientRect();

    // Check if the section is within the viewport
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="tech-stack-section" className="tech-stack-section">
      <div className={`tech-stack-icons ${isVisible ? 'visible' : ''}`}>
        {/* Add your tech stack icons here */}
        <img src={bootstraplogo} alt="Bootstrap Logo" className="tech-icon" />
        <img src={csslogo} alt="CSS Logo" className="tech-icon" />
        <img src={gitlogo} alt="Git Logo" className="tech-icon" />
        <img src={githublogo} alt="Github Logo" className="tech-icon" />
        <img src={htmllogo} alt="HTML Logo" className="tech-icon" />
        <img src={jslogo} alt="JavaScript Logo" className="tech-icon" />
        <img src={reactlogo} alt="React Logo" className="tech-icon" />
        <img src={tailwindlogo} alt="Tailwind CSS Logo" className="tech-icon" />
        <img src={tslogo} alt="TypeScript Logo" className="tech-icon" />
        {/* Add more icons as needed */}
      </div>
    </div>
  );
};

export default Tech_Stack;

