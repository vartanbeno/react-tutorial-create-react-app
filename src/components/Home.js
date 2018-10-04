import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Info from '../info.png';
import { connect } from 'react-redux';

class Home extends Component {

    render() {

        console.log(this.props);

        const { posts } = this.props;
        const listOfPosts = posts.length ? (
            posts.map(post => {
                return (
                    <article className="message-is-dark" key={ post.id }>
                        <div className="message-header">
                            <Link to={ '/' + post.id }><p>{ post.title }</p></Link>
                            <img className="image is-16x16" src={ Info } alt="info icon"/>
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

const mapStateToProps = (state) => {

    return {
        posts: state.posts
    }

}

export default connect(mapStateToProps)(Home);
