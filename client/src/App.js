import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          nospoilers
        </p>
        <button onClick={RandomMovie}>
          Random Movie
        </button>
        <p>{apiResponse}</p>
      </header>
    </div>
  );

  function RandomMovie() {
    fetch("http://localhost:9000/randomMovie")
      .then(res => res.text())
      .then(response => {
        setApiResponse(response);
      })
  }
}



export default App;