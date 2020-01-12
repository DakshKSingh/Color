import React from 'react';
import logo from './logo.svg';
import './App.css';
import Color from "./components/color"

function App() {
  return (
    <div className="App">
      <div>
      <h2>
        Brand Kit
      </h2>
      </div>
      <div>
      <h3>
        Brand Colors
      </h3>
      <Color></Color>
      </div>
    </div>
  );
}

export default App;
