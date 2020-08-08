import React, { Component } from 'react';
import './Resources.css';

class InfoBox extends Component {
	render() {
		return (
            <div>
                <div className="infobox-text">
                    <p className="header infobox-header">{this.props.header}</p>
                    <p className="desc infobox-desc">{this.props.desc}</p>
                </div>
            </div>
		);
	}
}

export default InfoBox;
