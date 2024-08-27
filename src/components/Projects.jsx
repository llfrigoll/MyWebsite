import React, { useEffect } from 'react';
import './Components.css'; // Import the CSS file for styling
import './Animated_bg.css';

const Projects = () => {
    return (
        <>
            <div className="inbetween-fade"></div>
            <div className="stars-div">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div className="projects">
                    <div className="project">
                        <img></img>
                        <p></p>
                    </div>
                    <div className="project">
                        <img></img>
                        <p></p>
                    </div>
                    <div className="project">
                        <img></img>
                        <p></p>
                    </div>
                    
                </div>
            </div>
            <div className='placeholder'></div>
        </>
      );
    };

export default Projects;
