import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './stuyflow_logo.png';
import './Nav.css';

import { useLocation } from 'react-router-dom';

const links = [
    { name: "Home", link: "/" },
    { name: "Board", link: "/board" },
    { name: "Contact", link: "/contact" },
    { name: "Photos", link: "/photos" },
    { name: "Resources", link: "/resources" },
    { name: "Videos", link: "/videos" }
];

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { pathname } = this.props.location;
        return (
            <div className="navbar">
                <div>
                    <img
                        className="logo"
                        src={logo}
                        alt="StuyFlow Logo"
                    />
                </div>
                <div className="link-div">
                {links.map((link, k) => {

                    return (
                        <div
                            className={`navlink ${link.link === pathname && 'navlink-active'}`}
                            key={k}
                        >
                            <Link to={link.link}>
                                {link.name}
                            </Link>
                        </div>
                    );
                })}
                </div>
            </div>
        );
    }
}

export default Nav;
