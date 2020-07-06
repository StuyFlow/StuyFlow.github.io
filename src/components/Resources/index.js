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
                <div className="resource-bar">
                    {Object.keys(sections).map(section => (
                        <div className="resource-bar-items"
                             onClick={() => this.changeSection(section)}
                        >
                            {section}
                        </div>
                    ))}
                </div>

                <div className="section-component">
                    <SectionComponent />
                </div>
            </div>
        );
    }
}

export default Resources;
