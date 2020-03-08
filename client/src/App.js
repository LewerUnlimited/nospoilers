import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GenreSearch from "./GenreSearch";

function App() {
  const [apiResponse, setApiResponse] = useState([]);

  return (
    <div className="App">
      <header>
        <img src='./nospoilerslogo.png' className="App-logo" alt="logo" />
        </header>
        <div class="container">
          <div>
            <p>
              Click below for a random movie!
            </p>
            <button type="button" class="btn btn-lg btn-primary" onClick={RandomMovie}>
              Random Movie
            </button>
            <p>{apiResponse}</p>
          </div>
        <p> Or narrow your search down with options below!</p>
        <div class="card">
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="genreDropDown">Genre </label>
                  <GenreSearch />
                <label for="ratingAbove">Rating Above:</label>
                  <select class="form-control">
                    <option value="null">Select an Option</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </select>
                <button type="button" class="btn btn-lg btn-primary" onClick="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>     
        </div>
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