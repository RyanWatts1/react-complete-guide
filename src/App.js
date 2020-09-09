import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Sheila", age: 28 },
      { name: "Ryan", age: 29 },
      { name: "Deeder", age: 26 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Rhaegar", age: 24 },
        { name: "Doodous", age: 7 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Ryan", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Deeder", age: 26 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "White",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Welcome login below</p>
        <button style={style} onClick={() => this.switchNameHandler("STOOKI!")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Darkstar!")}
          changed={this.nameChangeHandler}
        >
          My Hobbies: Pillaging the city Side
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
