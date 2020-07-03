import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const links = [
    { name: "Home", link: "/" },
    { name: "Board", link: "/board" },
    { name: "Contacts", link: "/contact" },
    { name: "Photos", link: "/photos" },
    { name: "Resources", link: "/resources" },
    { name: "Videos", link: "/videos" }
];

class Nav extends Component {
    render() {
        return (
            <div className="navbar">
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
