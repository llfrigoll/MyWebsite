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
                <div className="projects" id="projects">
                    <h1 className="projects-title" id="projects-title">Projects</h1>
                    <div className="project">
                        <img src={podd}></img>
                        <div className="text-container">
                            <p>My Podd podcast application uses the Fetch API to pull podcast data and display it to the user for listening capabilities. A user is capable of selecting a show, followed by a season and selecting an episode from that season. A user is also capable of adding an episode of a show to their favourites allowing them to view them seperately and add and remove them as they please, along with being able to sort them alphabetically and by recently updated. Listening history as well as completed episodes are saved by the application and the user is able to reset all their history. A user is able to filter the shows on their dashboard alphabetically and by the most recently updated shows, a user is also able to filter their shows by genre and by using a searchbar.</p>
                            <div className="link-buttons">
                                <div><a href="https://poddpodcast.netlify.app/" target="_blank">Live App</a></div>
                                <div><a href="https://github.com/llfrigoll/FRAPRE440_WFO2401_GroupA_Franz-Pretorius_DJS11" target="_blank">GitHub link</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <div className="text-container">
                            <p>For this project we had to create a Kanban Task Management App wherein a user is able to keep track of different tasks and its completion, a user is able to add and delete different tasks and move a specific task to different sections based on its completion.</p>
                            <div className="link-buttons">
                                <div><a href="https://franzpretoriusjsl11.netlify.app/" target="_blank">Live App</a></div>
                                <div><a href="https://github.com/llfrigoll/FRAPRE440_WFO2401_GroupA_Franz-Pretorius_JSL11" target="_blank">GitHub link</a></div>
                            </div>
                        </div>
                        <img src={kanban}></img>
                    </div>

                    <div className="project">
                        <img src={cache}></img>
                        <div className="text-container">
                        <p>This project required us to create a landing page for a company called Cache Bank, the page includes a fully functional navbar with working links, it also includes a very comprehensive description of the website using different sections, it also includes hover and focus animations where necessary and includes relevant details for contacting the company and what they do.</p>
                            <div className="link-buttons">
                                <div><a href="https://sdf11franzpretorius.netlify.app/" target="_blank">Live App</a></div>
                                <div><a href="https://github.com/llfrigoll/FRAPRE440_WFO2401_GroupA_FranzPretorius_SDF11" target="_blank">GitHub link</a></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="inbetween-fade-end"></div>
        </>
      );
    };

export default Projects;
