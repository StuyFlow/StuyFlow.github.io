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
        this.setState({ section: section });
    }

    render() {
        const SectionComponent = sections[this.state.section]; // Needs to be capitalized
        return (
            <div className="page">
                <div className="pageHeader">Resources</div>
                <div className="section-nav d-none d-lg-flex">
                    {Object.keys(sections).map(section => (
                        <div
                            key={section}
                            className={`section ${this.state.section === section ? 'section-active' : ''}`}
                            onClick={() => this.changeSection(section)}
                        >
                            {section}
                        </div>
                    ))}
                </div>

                <div className="section-nav mobile-dropdown d-flex d-lg-none">
                    <div className="selector">
                        <div className="label">Section:</div>
                        <select
                            className="dropdown"
                            onChange={e => this.setState({ section: e.target.value })}
                            value={this.state.section}
                        >
                            {Object.keys(sections).map(section => (
                                <option key={section}>
                                    {section}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="section-component">
                    <SectionComponent />
                </div>
            </div>
        );
    }
}

export default Resources;
