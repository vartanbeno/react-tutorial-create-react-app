import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// NavLink can be used to add 'active' class to element when on that route
const Navbar = () => {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-menu">

                <div className="navbar-start">
                    <Link to="/" className="navbar-item">Home</Link>
                    <Link to="/about" className="navbar-item">About</Link>
                    <Link to="/contact" className="navbar-item">Contact</Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <div className="navbar-link">Stuff</div>
                        <div className="navbar-dropdown is-boxed">
                            <Link to="/ninjas" className="navbar-item">Ninjas</Link>
                            <Link to="/todos" className="navbar-item">Todos</Link>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;
