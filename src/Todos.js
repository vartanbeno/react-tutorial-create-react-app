import React from 'react';

const Todos = (props) => {

    const { todos } = props;

    const listOfTodos = todos.map(todo => {
        return (
            <li key={ todo.id }>{ todo.content }</li>
        )
    })

    return (
        <div className="todos-list">
            <ul>
                { listOfTodos }
            </ul>
        </div>
    )

}

export default Todos;
