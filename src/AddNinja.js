import React, { Component } from 'react';

class AddNinja extends Component {

    state = {
        name: '',
        age: '',
        belt: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
        this.setState({
            name: '',
            age: '',
            belt: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit } autoComplete="off">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={ this.handleChange } value={ this.state.name } required />

                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" onChange={ this.handleChange } value={ this.state.age } required />

                    <label htmlFor="belt">Belt:</label>
                    <input type="text" id="belt" onChange={ this.handleChange } value={ this.state.belt } required />

                    <button className="button is-success" type="submit">Add</button>
                </form>
            </div>
        )
    }

}

export default AddNinja;
