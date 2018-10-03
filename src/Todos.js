import React from 'react';
import './Todos.css';

const Todos = (props) => {

    const { todos, deleteTodo } = props;

    const listOfTodos = todos.map(todo => {
        return (
            <div className="tags has-addons" key={ todo.id }>
                <div className="tag is-link">{ todo.content }</div>
                <div className="tag is-delete" onClick={ () => deleteTodo(todo.id) }></div>
            </div>
        )
    })

    return (
        <div className="todos-list">
            <div className="control">
                { listOfTodos }
            </div>
        </div>
    )

}

export default Todos;
