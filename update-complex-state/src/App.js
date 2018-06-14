import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [{
        name: 'Tim',
        hobbies: ['sailing', 'react']
      }, {
        name: 'Matt',
        hobbies: ['math', 'd3']
      }, {
        name: 'Colt',
        hobbies: ['css', 'hiking']
      }, {
        name: 'Elie',
        hobbies: ['music', 'es2015']
      }]
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.removeRandHobby();
  }

  render() {
    const instructors = this.state.instructors.map((instructor, index) => {
      return (
        <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(",")}</h4>
      </li>
      );
    });
    return (
      <div className="App">
      <ul>
        {instructors}
      </ul>
      </div>
    );
  }

  removeRandHobby() {
    console.log('Remove a hobby now');
    const instIndex = Math.floor(
      Math.random() *
      this.state.instructors.length
    );
    
    const hobbyIndex = Math.floor(
      Math.random() *
      this.state.instructors[instIndex].length
    )
    
    const copyInsts = this.state.instructors.map((inst, i) => {
      if (i === instIndex) {
        const hobbies = [...inst.hobbies];
        hobbies.splice(hobbyIndex, 1);
        return {...inst, hobbies };
      }
      return inst;
    });
    
    this.setState({
      instructors: copyInsts
    });
  }

  getArrayRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }
}

export default App;
