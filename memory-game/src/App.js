import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import Helper from './globalHelper';
import Card from './components/card';

//The enum for cards' states
const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
};

class App extends Component {
  constructor(props) {
    super(props);
    const cards = this.generateCards();
    this.state = { cards, noClick: false };
    this.cacheCard = null;
    this.noClick = false;
    this.handleClick = this.handleClick.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleClick(id) {
    if (this.noClick) {
      return;
    }
    //retrive the card
    let card = this.state.cards.find((c) => (id === c.id));

    //the card's setup function.
    const updateCard = (card) => {
      const cards = this.state.cards.map((c, i) => (
        c.id === card.id ? card : c
      ));
      this.setState({ cards });
    };

    //if card is hidden now
    if (this.cacheCard === null) {
      //open the card and record the previous card
      card.state = CardState.SHOWING;
      this.cacheCard = card;
      updateCard(card);
    }
    else {
      //open the card and check whether if it's color match the previous card.
      if (card.color === this.cacheCard.color) {
        //Match
        card.state = CardState.MATCHING;
        this.cacheCard.state = CardState.MATCHING;
        updateCard(card);
        updateCard(this.cacheCard);
        this.cacheCard = null;
      }
      else {
        //Doesn't match
        card.state = CardState.SHOWING;
        updateCard(card);
        this.noClick = true;
        //Set up a time to hide the two cards after 1.3 seconds.
        setTimeout(() => {
          this.noClick = false;
          card.state = CardState.HIDING;
          this.cacheCard.state = CardState.HIDING;
          updateCard(card);
          updateCard(this.cacheCard);
          this.cacheCard = null;
        }, 1300);
      }
    }
  }

  handleNewGame() {
    this.setState({
      cards: this.generateCards()
    });
  }

  render() {
    const cards = this.state.cards.map((c, i) => {
      return <Card 
              key={c.id} 
              id={c.id}
              showing={c.state !== CardState.HIDING}
              color={c.color}
              onClick={this.handleClick}/>
    });
    return (
      <div className="App">
        <Nav onNewGame={this.handleNewGame}/>
        {cards}
      </div>
    );
  }

  generateCards() {
    //pickup couple of random colors from default props.
    let colors = Array.apply(null, Array(Math.floor(Helper.Num_Card / 2)))
      .map((c, i) => ({
        color: this.props.allColors[Math.floor(Math.random() * this.props.allColors.length)],
        counter: 2
      }));

    //randomly assign these colors to different cards and generate a card array.
    let cards = [];
    for (let i = 0; i < Helper.Num_Card; i++) {
      const randIdx = Math.floor(Math.random() * colors.length);
      let colorObj = colors[randIdx];
      colorObj.counter--;

      //Remove the unuseable color
      if (colorObj.counter === 0) {
        colors.splice(randIdx, 1);
      }

      cards.push({
        id: i,
        state: CardState.HIDING,
        color: colorObj.color
      });
    }
    return cards;
  }
}

App.defaultProps = {
  allColors: ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond",
    "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate",
    "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod",
    "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange",
    "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey",
    "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue",
    "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod",
    "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki",
    "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan",
    "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon",
    "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow",
    "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid",
    "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise",
    "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy",
    "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen",
    "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue",
    "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen",
    "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen",
    "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke",
    "Yellow", "YellowGreen"
  ]
};

export default App;
