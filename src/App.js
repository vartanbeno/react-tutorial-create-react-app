import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {

  state = {
    ninjas: [
      { id: 1, name: 'Vartan', age: 23, belt: 'black' },
      { id: 2, name: 'John', age: 30, belt: 'blue' },
      { id: 3, name: 'Jane', age: 25, belt: 'green' }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome</p>
        <Ninjas ninjas={ this.state.ninjas } />
        <AddNinja />
      </div>
    );
  }
}

export default App;
