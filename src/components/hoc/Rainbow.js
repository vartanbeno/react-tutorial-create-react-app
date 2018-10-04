import React from 'react';

const Rainbow = (WrappedComponent) => {

    const colours = ['primary', 'info', 'link', 'success', 'warning', 'danger'];
    const randomColour = colours[Math.floor(Math.random() * colours.length)];
    const className = 'has-text-' + randomColour;

    return (props) => {
        return (
            <div className={ className }>
                <WrappedComponent { ...props } />
            </div>
        )
    }

}

export default Rainbow;
