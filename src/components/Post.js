import React, { Component } from 'react';

class Post extends Component {

    state = {
        id: null
    }

    componentDidMount() {
        this.setState({
            id: this.props.match.params.post_id
        })
    }

    render() {
        return (
            <div className="container">
                <p>{ this.state.id }</p>
            </div>
        )
    }

}

export default Post;
