import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const beforeHome = ["about", "board", "contact"];
const afterHome = ["photos", "resources", "videos"];

class Nav extends Component {
    render() {
        return (
            <div style={{display: "flex"}}>
                {beforeHome.map((link, k) => {
                    return (
                        <Link to={link} key={k}>
                            <span style={{textTransform: "capitalize"}}>
                                {link}
                            </span>
                        </Link>
                    );
                })}
                <Link to="">
                    <span>STUYFLOW</span>
                </Link>
                {afterHome.map((link, k) => {
                    return (
                        <Link to={link} key={k}>
                            <span style={{textTransform: "capitalize"}}>
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
