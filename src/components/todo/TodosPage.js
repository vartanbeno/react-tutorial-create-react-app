import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class TodosPage extends Component {

    state = {
        todos: [
            { id: 1, content: 'do groceries' },
            { id: 2, content: 'go to gym' }
        ]
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
                <h1 className="title is-1">Todo list</h1>
                <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } />
                <AddTodo addTodo={ this.addTodo } />
            </div>
        )
    }

}

export default TodosPage;
