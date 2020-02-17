import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [apiResponse, setApiResponse] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src='./nospoilerslogo.png' className="App-logo" alt="logo" />
        <p>
          Click below for a random movieeeeee!
        </p>
        <button type="button" class="btn btn-lg btn-primary" onClick={RandomMovie}>
          Random Movie
        </button>
        <p>{apiResponse}</p>
        <p> Or narrow your search down with options below!</p>
          <form>

          </form>
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