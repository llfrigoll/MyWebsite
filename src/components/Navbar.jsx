import React, {useState} from 'react';
import './Components.css'; // Import the CSS file for styling

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };

    let navIcon = <></>
    if(isOpen) {
        navIcon = <>✖</>
    }else {
        navIcon = <>☰</>
    }

  return (
    <div className="navbar-container">
      <button className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
        {navIcon}
      </button>
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#home" onClick={toggleNavbar}>Home</a></li>
        <li className="navbar-item"><a href="#tech-stack-section" onClick={toggleNavbar}>Tech Stack</a></li>
        <li className="navbar-item"><a href="#about-me" onClick={toggleNavbar}>About</a></li>
        <li className="navbar-item"><a href="#projects" onClick={toggleNavbar}>Projects</a></li>
        <li className="navbar-item"><a href="#contact" onClick={toggleNavbar}>Contact</a></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;