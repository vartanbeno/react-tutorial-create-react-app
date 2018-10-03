import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-menu">

                <div className="navbar-start">
                    <a href="/" className="navbar-item">Home</a>
                    <a href="/about" className="navbar-item">About</a>
                    <a href="/contact" className="navbar-item">Contact</a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Stuff</a>
                        <div className="navbar-dropdown is-boxed">
                            <a href="/ninjas" className="navbar-item">Ninjas</a>
                            <a href="/todos" className="navbar-item">Todos</a>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;
