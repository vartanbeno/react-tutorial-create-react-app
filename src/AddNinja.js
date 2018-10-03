import React, { Component } from 'react';

class AddNinja extends Component {

    state = {
        name: null,
        age: null,
        belt: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit } autoComplete="off">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={ this.handleChange } required />

                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" onChange={ this.handleChange } required />

                    <label htmlFor="belt">Belt:</label>
                    <input type="text" id="belt" onChange={ this.handleChange } required />

                    <input type="submit"/>
                </form>
            </div>
        )
    }

}

export default AddNinja;
