import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'borygo', age: 32 },
      { name: 'marko', age: 33 },
      { name: 'darko', age: 22 }
    ],
  }

  switchNameHandler = (newName) => {
    // console.log('kliknelo sie!');
    //tak nei robic --- this.state.persons[0].name = 'borygo'

    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: 'marko', age: 33 },
        { name: 'darko', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'borko', age: 32 },
        { name: event.target.value, age: 33 },
        { name: 'darko', age: 27 }
      ]
    } )
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>HI, IM A REACT APP</h1>
        <p>this is really workin</p>
        <button
        style={style}
        onClick={() => this.switchNameHandler('boryss')}>switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'borya!')}
          changed={this.nameChangedHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?') )
  }
}

export default App;
