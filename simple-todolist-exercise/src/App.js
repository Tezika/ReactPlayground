import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputVal: '',
      todos:[]
    };
     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  
  handleInputChange(e){
     this.setState({inputVal: e.target.value});
  }
  
  handleOnSubmit(e){
    let todos = this.state.todos.slice();
    todos.push(this.state.inputVal);
    this.setState({todos, inputVal: ''});
    e.preventDefault();
  }
  
  render() {
    const todos = this.state.todos.map((todo,i) => (
        <li key={i}>
          {todo}
        </li>
    ));
    return (
      <div className="App">
          <h1>Simple Todo App</h1>
          <form onSubmit={this.handleOnSubmit}>
          <input type='text' value={this.state.inputVal} onChange={this.handleInputChange}></input>
          <input type="submit" value="Save" />
          <ol>
            {todos}
          </ol>
          </form>
      </div>
    );
  }
}

export default App;
