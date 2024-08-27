import React, { useEffect } from 'react';
import './Components.css'; // Import the CSS file for styling
import './Animated_bg.css';
import podd from '../assets/Podd.png'
import kanban from '../assets/Kanban.png'
import cache from '../assets/CacheBank.png'

const Projects = () => {
    return (
        <>
            <div className="inbetween-fade-begin"></div>
            <div className="stars-div">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div className="projects">
                    <h1 className="projects-title">Projects</h1>
                    <div className="project">
                        <img src={podd}></img>
                        <p></p>
                    </div>
                    <div className="project">
                        <img src={kanban}></img>
                        <p></p>
                    </div>
                    <div className="project">
                        <img src={cache}></img>
                        <p></p>
                    </div>
                    
                </div>
            </div>
            <div className="inbetween-fade-end"></div>
            <div className='placeholder'></div>
        </>
      );
    };

export default Projects;
