import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './stuyflow_logo.png';
import './Nav.css';

const links = [
    { name: "Home", link: "/" },
    { name: "Board", link: "/board" },
    { name: "Contact", link: "/contact" },
    { name: "Photos", link: "/photos" },
    { name: "Resources", link: "/resources" },
    { name: "Videos", link: "/videos" }
];

class Nav extends Component {
    render() {
        return (
            <div className="navbar">
                <div>
                    <img
                        className="logo"
                        src={logo}
                        alt="StuyFlow Logo"
                    />
                </div>
                {links.map((link, k) => {
                    return (
                        <Link to={link.link} key={k}>
                            <span className="navlinks">
                                {link.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        );
    }
}

export default Nav;
