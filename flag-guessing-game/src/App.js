import React, { Component } from 'react';
import './App.css';

//The enum for game states
const GameState = {
  GAMING: 0,
  LOSE: 1,
  WIN: 2
};

let countries = [];
let flagOptions = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: undefined,
      selectedOption: "",
      gameState: GameState.GAMING
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  componentDidMount() {
    //Fetch data and setup the countries' array.
    const countriesUrl = "https://restcountries.eu/rest/v2/all";
    fetch(countriesUrl)
      .then(response => response.json())
      .then(data => {
        data.map(country => countries.push({ name: country.name, flag: country.flag }));
        this.reset();
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.gameState === GameState.GAMING) {
      this.state.selectedCountry.name === this.state.selectedOption ? this.setState({ gameState: GameState.WIN }):this.setState({ gameState: GameState.LOSE });
    }
    else {
      if(this.state.gameState === GameState.WIN){
          this.reset();
      }
      this.setState({ gameState: GameState.GAMING });
    
    }
  }

  handleOptionChange(e) {
    this.setState({
      selectedOption: e.target.value
    });
  }

  reset() {
    const selectedCountry = countries[Math.floor(Math.random() * countries.length)];
    this.genOptions(4, selectedCountry.name);
    this.setState({ selectedCountry });
  }

  render() {
    if (this.state.selectedCountry === undefined) {
      return (
        <div>Loading...</div>
      );
    }
    else {
      //generate the right content and mount them on the div.
      let btn = "";
      let content = undefined;
      if (this.state.gameState === GameState.GAMING) {
        btn = "guess";
        content = flagOptions.map(option => {
          return (
            <label>
             <input type="radio"
                    name="country"
                    onChange={this.handleOptionChange}    
                    value={option}>
             </input> 
          {option}
          </label>
          );
        });
      }
      else if (this.state.gameState === GameState.WIN) {
        btn = "next";
        content = (<label>Congratulation!You figured out the right answer!</label>);
      }
      else {
        btn = "retry";
        content = (<label>Oops! Your answer is wrong, please try it again!</label>);
      }
      return (
        <div className="App">
          <div className="flag-title">
            <h1>Guess Flag Game</h1>
          </div>
          <div className="flag-options">
            <form onSubmit={this.handleSubmit}>
            {content}
            <input type="submit" value={btn}></input>
            </form>
          </div>
          <div className="flag-img">
              <img src={this.state.selectedCountry.flag} alt={this.state.selectedCountry.name}></img>   
          </div>
        </div>
      );
    }
  }

  genOptions(num, answer) {
    flagOptions = [];
    flagOptions.push(answer);
    num--;
    while (num !== 0) {
      const ranCountry = countries[Math.floor(Math.random() * countries.length)];
      if (flagOptions.indexOf(ranCountry.name) !== -1) {
        continue;
      }
      flagOptions.push(ranCountry.name);
      num--;
    }
    this.shuffle(flagOptions);
  }

  /**
   * Shuffles array in place. ES6 version
   * @param {Array} a items An array containing the items.
   */
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}

export default App;
