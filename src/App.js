import React, { Component } from 'react';
import Ninjas from './components/ninja/Ninjas';
import AddNinja from './components/ninja/AddNinja';
import Todos from './components/todo/Todos';
import AddTodo from './components/todo/AddTodo';
import Navbar from './components/Navbar';

class App extends Component {

  state = {
    ninjas: [
      { id: 1, name: 'Vartan', age: 23, belt: 'black' },
      { id: 2, name: 'John', age: 30, belt: 'blue' },
      { id: 3, name: 'Jane', age: 25, belt: 'green' }
    ],
    todos: [
      { id: 1, content: 'do groceries' },
      { id: 2, content: 'go to gym' }
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

  componentDidMount() {
    console.log('Component mounted.');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated.');
    console.log(prevProps, prevState);
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="content">
          <h1 className="title is-1">My first React app!</h1>
          <p className="subtitle is-5">Welcome</p>
          <Ninjas ninjas={ this.state.ninjas } deleteNinja={ this.deleteNinja } />
          <AddNinja addNinja={ this.addNinja } />

          <hr/>

          <h1 className="title is-1">Todo list</h1>
          <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } />
          <AddTodo addTodo={ this.addTodo } />
        </div>
      </div>
    );
  }
}

export default App;
