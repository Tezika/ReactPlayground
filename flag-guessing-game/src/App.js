import React, { Component } from 'react';
import './App.css';

let countries = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //Fetch data and setup the countries' array.
    const countriesUrl = "https://restcountries.eu/rest/v2/all";
    fetch(countriesUrl)
      .then(response => response.json())
      .then(data => {
        data.map(country => countries.push({ name: country.name, flag: country.flag }))
        this.generateCountry();
      });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    if (this.state.selectedCountry === undefined) {
      return (
        <div>Loading...</div>
      );
    }
    else {
      return (
        <div className="App">
          <div className="flag-title">
            <h1>Guess Flag Game</h1>
          </div>
          <div className="flag-options">
            <form onSubmit={this.handleSubmit}>
                <input type="radio" id="flag_1" name="flag"></input>
                <label for="flag_1">US</label>
                
                <input type="radio" id="flag_2" name="flag"></input>
                <label for="flag_2">China</label>
                
                <input type="radio" id="flag_3" name="flag"></input>
                <label for="flag_3">Canada</label>
                
                <input type="radio" id="flag_4" name="flag"></input>
                <label for="flag_4">Japan</label>
                
                <input type="submit"></input>
            </form>
          </div>
          <div className="flag-img">
              <img src="https://restcountries.eu/data/afg.svg" alt="flag"></img>   
          </div>
        </div>
      );
    }
  }

  generateCountry() {
    const selectedCountry = countries[Math.floor(Math.random() * countries.length)];
    this.setState({ selectedCountry });
  }
}

export default App;
