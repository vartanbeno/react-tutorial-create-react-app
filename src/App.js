import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome</p>
        <Ninjas name="Vartan" age="23" belt="black" />
        <Ninjas name="John" age="30" belt="blue" />
      </div>
    );
  }
}

export default App;
