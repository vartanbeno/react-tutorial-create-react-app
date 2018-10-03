import React from 'react';
import './Ninjas.css';

const Ninjas = (props) => {
    const { ninjas, deleteNinja } = props;

    const listOfNinjas = ninjas.map(ninja => {
        return ninja.age > 24 ? (
            <div className="ninja" key={ ninja.id }>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
                <button className="button is-info" onClick={ () => { deleteNinja(ninja.id) } }>Delete Ninja</button>
            </div>
        ) : null;
    })

    return (
        <div className="ninja-list">
            { listOfNinjas }
        </div>
    );
}

export default Ninjas;
