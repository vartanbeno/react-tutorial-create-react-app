import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }
    
    render() {

        const { posts } = this.state;
        const listOfPosts = posts.length ? (
            posts.map(post => {
                return (
                    <article className="message-is-dark" key={ post.id }>
                        <div className="message-header">
                            <Link to={ '/' + post.id }><p>{ post.title }</p></Link>
                        </div>
                        <div className="message-body">
                            { post.body }
                        </div>
                    </article>
                )
            })
        ) : (
            <p className="has-text-centered">There are no posts yet.</p>
        )

        return (
            <div className="container">
                <h4 className="title is-1">Home</h4>
                { listOfPosts }
            </div>
        )
    }

}

export default Home;
