import React, {useState} from 'react';
import './Navbar.css'; // Import the CSS file for styling

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
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#about">About</a></li>
        <li className="navbar-item"><a href="#projects">Projects</a></li>
        <li className="navbar-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;