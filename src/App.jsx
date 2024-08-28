import React from 'react';
import Navbar from './components/Navbar.jsx'; // Import the navbar component
import Home from './components/Home.jsx';
import Tech_Stack from './components/Tech_Stack.jsx';
import About_Me from './components/About_Me.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import './App.css'; // Import your app’s CSS

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Tech_Stack />
      <About_Me />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
