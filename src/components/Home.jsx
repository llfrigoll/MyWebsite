import React from 'react';
import './Components.css'; // Import the CSS file for styling
import me from '../assets/pfp.jpg'

const Home = () => {
  return (
    <div className="home">
        <div className="heading">
            <img src={me} alt="Picture of Franz"/>
            <h1>Hi, I'm Franz Pretorius</h1>
        </div>
        <div className="subheading">
            <p>bleh</p>
        </div>
    </div>
  )
};

export default Home;
