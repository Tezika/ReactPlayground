import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

//Stateless component(It doesn't have own state)
const InstructorItem = props => {
  return (
    <li key={props.key}>
        <h3>{props.name}</h3>
        <h4>Hobbies: {props.hobbies.join(",")}</h4>
      </li>
  );
};

InstructorItem.propTypes = {
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    obbies: PropTypes.arrayOf(PropTypes.string)
};


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
    );

    const copyInsts = this.state.instructors.map((inst, i) => {
      if (i === instIndex) {
        const hobbies = [...inst.hobbies];
        hobbies.splice(hobbyIndex, 1);
        return { ...inst, hobbies };
      }
      return inst;
    });

    this.setState({
      instructors: copyInsts
    });
  }
}

export default App;
