import React, { Component } from 'react';
import githubLogo from './GitHub-Mark-Light-64px.png';
import reactLogo from './React-Logo.png';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="github">
                    <img
                        src={githubLogo}
                        className="github-logo"
                        alt="Github Link"
                    />
                </div>
                <div className="made-with">
                    Made With
                    <img
                        src={reactLogo}
                        className="react-logo"
                        alt="React Logo"
                    />
                </div>
                <div className="created-by">
                    Created By: Jason Lin, Aaron Hsu, Alice Ni, Alvin Chung,
                    Isabelle Lam, Jasmine Xiao, and Steve Wang
                </div>
            </div>
        );
    }
}

export default Footer;
