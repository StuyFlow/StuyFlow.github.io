import React, { Component } from 'react';
import General from './General.js';
import Poi from './Poi.js';
import Staff from './Staff.js';
import Whips from './Whips.js';
import Others from './Others.js';

import './Resources.css';

const sections = {
    "General": General,
    "Poi": Poi,
    "Staff": Staff,
    "Whips": Whips,
    "Others": Others,
};


class Resources extends Component {
    constructor(props) {
        super(props);
        this.state = {
            section: "General",
        }
    }

    changeSection = section => {
        this.setState({ section: section })
    }

    render() {
        const SectionComponent = sections[this.state.section]; // Needs to be capitalized
        return (
            <div className="page">
                <div className="pageHeader">Resources</div>
                <div style={{display: "flex", fontFamily:"Gugi"}}>
                    {Object.keys(sections).map(section => (
                        <div
                            style={{color: "white", margin: "10px"}}
                            onClick={() => this.changeSection(section)}
                        >
                            {section}
                        </div>
                    ))}
                </div>
                <div style={{fontSize: "30px", color: "white"}}>
                    <SectionComponent />
                </div>
            </div>
        );
    }
}

export default Resources;
