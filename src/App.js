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

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    })
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome</p>
        <Ninjas ninjas={ this.state.ninjas } deleteNinja={ this.deleteNinja } />
        <AddNinja addNinja={ this.addNinja } />
      </div>
    );
  }
}

export default App;
