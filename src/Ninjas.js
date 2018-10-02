import React from 'react';

const Ninjas = (props) => {
    const { ninjas } = props;

    const listOfNinjas = ninjas.map(ninja => {
        return (
            <div className="ninja" key={ ninja.id }>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
            </div>
        )
    })

    return (
        <div className="ninja-list">
            { listOfNinjas }
        </div>
    );
}

export default Ninjas;
