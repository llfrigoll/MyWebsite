import React from 'react';
import Navbar from './components/Navbar.jsx'; // Import the navbar component
import './App.css'; // Import your app’s CSS

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Welcome to My App</h1>
        <p>Content goes here.</p>
      </div>
    </div>
  );
};

export default App;
