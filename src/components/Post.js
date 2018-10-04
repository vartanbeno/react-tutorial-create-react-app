import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {

    state = {
        post: null
    }

    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(res => {
            this.setState({
                post: res.data
            })
        })
    }

    render() {

        const post = this.state.post ? (
            <div className="post">
                <h1 className="has-text-centered">{ this.state.post.title }</h1>
                <p>{ this.state.post.body }</p>
            </div>
        ) : (
            <p className="has-text-centered">Post does not exist.</p>
        )

        return (
            <div className="container">
                { post }
            </div>
        )

    }

}

export default Post;
