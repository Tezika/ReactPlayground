import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class InstructorItem extends Component {
    static propTypes = {
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      hobbies: PropTypes.arrayOf(PropTypes.string)
    }
    
    render(){
      return (
        <li key={this.props.key}>
        <h3>{this.props.name}</h3>
        <h4>Hobbies: {this.props.hobbies.join(",")}</h4>
      </li>
      );
    }
}

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
         <InstructorItem 
            key={index}
            name={instructor.name}
            hobbies={instructor.hobbies}
         />
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
