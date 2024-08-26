import React from 'react';
import Navbar from './components/Navbar.jsx'; // Import the navbar component
import Home from './components/Home.jsx';
import Tech_Stack from './components/Tech_Stack.jsx';
import './App.css'; // Import your app’s CSS

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Tech_Stack />
    </div>
  );
};

export default App;
