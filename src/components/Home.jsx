import React from 'react';
import './Components.css'; // Import the CSS file for styling
import me from '../assets/pfp.jpg'

const Home = () => {
  return (
    <div className="home" id="home">
        <div className="heading">
            <img src={me} alt="Picture of Franz"/>
            <div className="heading-text">
              <h2>Hi, I'm</h2>
              <h1>Franz Pretorius</h1>
            </div>
        </div>
        <div className="subheading">
            <p>Front-End Developer</p>
        </div>
    </div>
  )
};

export default Home;
