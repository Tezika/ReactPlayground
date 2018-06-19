import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import CardBoard from './components/cardBoard';
import Helper from './globalHelper';

class App extends Component {
  constructor(props) {
    super(props);

    const cards = this.generateCards();

    this.state = { cards };
    this.previousCard = null;

    this.handleClicked = this.handleClicked.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleClicked(id) {
    //retrive card
    let card = this.state.cards.find((c) => (id === c.id));

    //if card is hidden now
    if (this.previousCard === null) {
      //open the card and record the previous card
      card.state = 1;
      this.previousCard = card;
      const cards = this.state.cards.map((c, i) => (
        c.id === card.id ? card : c
      ));
      this.setState({ cards });
    }
    else {
      let stateCard = null;
      //open the card and check the state
      if (card.color === this.previousCard.color) {
        card.state = 1;
        stateCard = card;
      }
      else {
        this.previousCard.state = 0;
        stateCard = this.previousCard;
      }
      const cards = this.state.cards.map((c, i) => (
        c.id === stateCard.id ? stateCard : c
      ));
      this.setState({ cards });
      this.previousCard = null;
    }
  }

  handleNewGame() {
    this.setState({
      cards: this.generateCards()
    });
  }

  render() {
    return (
      <div className="App">
      <Nav onNewGame={this.handleNewGame}/>
      <CardBoard cards={this.state.cards} onClick={this.handleClicked} />
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
        state: 0,
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
