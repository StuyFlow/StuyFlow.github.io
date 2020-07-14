import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './stuyflow_logo.png';
import './Nav.css';

const links = [
    { name: "Home", link: "/" },
    { name: "Board", link: "/board" },
    { name: "Photos", link: "/photos" },
    { name: "Videos", link: "/videos" },
    { name: "Resources", link: "/resources" },
    { name: "Contact", link: "/contact" },
];

class Nav extends Component {
    componentDidMount() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    componentDidUpdate() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    render() {
        const { pathname } = this.props.location;
        return (
            <div className='navbar'>
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
                            className={`navlink ${link.link === pathname ? 'navlink-active' : ''} ${pathname === "/" ? 'homepage-navlink' : ''}`}
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
