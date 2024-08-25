import React from 'react';
import Navbar from './components/Navbar.jsx'; // Import the navbar component
import Home from './components/Home.jsx';
import './App.css'; // Import your app’s CSS

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
