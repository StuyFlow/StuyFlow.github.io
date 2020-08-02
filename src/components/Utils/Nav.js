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
    constructor(props) {
        super(props);
        this.state = {
            openMobileNav: false,
        };
    }

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
                <div onClick={this.props.changeTheme}>
                    <img
                        className="logo"
                        src={logo}
                        alt="StuyFlow Logo"
                    />
                </div>
                <div className="link-div d-none d-lg-flex">
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
                <div
                    className={`d-block d-lg-none
                                ${this.state.openMobileNav ? 'vert-hamburger' : 'hamburger'}
                                ${pathname === "/" ? 'homepage-hamburger' : ''}`}
                    onClick={() => {
                        this.setState({openMobileNav: !this.state.openMobileNav});
                    }}
                >
                    {[0,1,2].map(num => (
                        <div
                            key={num}
                            className={`${this.state.openMobileNav ? 'vert-rect' : 'rect'}`}
                        />
                    ))}
                </div>
                {   this.state.openMobileNav &&
                    <div className="mobile-link-div d-flex d-lg-none">
                        {links.map((link, k) => {
                            return (
                                <div
                                    className={`navlink ${link.link === pathname ? 'navlink-active' : ''}`}
                                    key={k}
                                >
                                    <Link to={link.link}>
                                        {link.name}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                }

            </div>
        );
    }
}

export default Nav;
