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

    changeSectionDropdown = section => {
        this.setState({section: section.target.value});
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

                <center>
                    <select className="pageSelector" onChange={this.changeSectionDropdown}>
                        <option key="General">
                            General
                        </option>

                        <option key="Poi">
                            Poi
                        </option>

                        <option key="Staff">
                            Staff
                        </option>

                        <option key="Whips">
                            Whips
                        </option>

                        <option key="Others">
                            Others
                        </option>
                    </select>
                </center>
                <div className="section-component">
                    <SectionComponent />
                </div>
            </div>
        );
    }
}

export default Resources;
