import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const beforeHome = ["home", "about", "board", "contact", "photos", "resources", "videos"];

class Nav extends Component {
    render() {
        return (
            <div className="navbar">
                {beforeHome.map((link, k) => {
                    if (link === "home") {
                        return (
                            <Link to={"/"} key={k}>
                                <span className="navlinks">
                                    {link}
                                </span>
                            </Link>
                        );
                    }
                    return (
                        <Link to={link} key={k}>
                            <span className="navlinks">
                                {link}
                            </span>
                        </Link>
                    );
                })}
            </div>
        );
    }
}

export default Nav;
