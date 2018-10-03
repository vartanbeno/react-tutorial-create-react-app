import React, { Component } from 'react';

class AddTodo extends Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div className="control">
                <form onSubmit={ this.handleSubmit } autoComplete="off">
                    <div className="field">
                        <input className="input" type="text" placeholder="Enter todo" onChange={ this.handleChange } value={ this.state.content } required />
                    </div>
                    <button className="button is-link" type="submit">Add</button>
                </form>
            </div>
        )
    }

}

export default AddTodo;
