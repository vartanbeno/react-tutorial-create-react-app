import React from 'react';

const Contact = (props) => {

    /**
     * Redirect to /about after 2 seconds
     */
    // setTimeout(() => {
    //     props.history.push('/about');
    // }, 2000);

    return (
        <div className="container">
            <h4 className="title is-1">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime quia voluptas quo corporis quae laudantium impedit qui praesentium unde quas enim iste illo consequuntur veritatis, nam quasi pariatur distinctio?</p>
        </div>
    )
}

export default Contact;
