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
  
    // Calculate the percentage of the section that is visible
    const windowHeight = window.innerHeight;
    const sectionHeight = rect.height;
  
    // Determine the visible height of the section
    const visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
  
    // Calculate the visibility percentage (0 to 1 scale)
    let visibilityPercentage = visibleHeight / sectionHeight;
  
    // Apply threshold: only start showing icons if 25% of the section is visible
    if (visibilityPercentage < 0.35) {
      visibilityPercentage = 0; // Set opacity to 0 if less than 25% is visible
    } else {
      visibilityPercentage = (visibilityPercentage - 0.30) / 0.65; // Normalize to start from 25% visibility
    }
  
    // Set the visibility percentage for the opacity
    setIsVisible(visibilityPercentage);

    const heading = document.getElementById('tech-stack-heading')
    const headingRect = heading.getBoundingClientRect()

    const headingHeight = headingRect.height;
    const visibleHeadingHeight = Math.max(0, Math.min(headingRect.bottom, windowHeight) - Math.max(headingRect.top, 0));

    let headingVisibilityPercentage = visibleHeadingHeight / headingHeight

    if(headingVisibilityPercentage > 0.8) {
      heading.classList.add('visible')
    }else {
      heading.classList.remove('visible')
    }
  };
  
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className="tech-stack-heading" id="tech-stack-heading">
        <h1>Tech Stack</h1>
        <br />
    </div>
    <div id="tech-stack-section" className="tech-stack-section">
        <div className="tech-stack-icons visible" style={{ '--visibility-percentage': isVisible }} >
            <img src={bootstraplogo} alt="Bootstrap Logo" className="tech-icon" />
            <img src={csslogo} alt="CSS Logo" className="tech-icon" />
            <img src={gitlogo} alt="Git Logo" className="tech-icon" />
        </div>

        <div className="tech-stack-icons visible" style={{ '--visibility-percentage': isVisible }} >
            <img src={reactlogo} alt="React Logo" className="tech-icon" />
            <img src={tailwindlogo} alt="Tailwind CSS Logo" className="tech-icon" />
            <img src={tslogo} alt="TypeScript Logo" className="tech-icon" />
        </div>

        <div className="tech-stack-icons visible" style={{ '--visibility-percentage': isVisible }} >
            <img src={githublogo} alt="Github Logo" className="tech-icon" />
            <img src={htmllogo} alt="HTML Logo" className="tech-icon" />
            <img src={jslogo} alt="JavaScript Logo" className="tech-icon" />
        </div>
    </div>
    </>
  );
};

export default Tech_Stack;

