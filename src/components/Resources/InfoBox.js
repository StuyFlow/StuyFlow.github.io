import React, { Component } from 'react';
import './Resources.css';

class InfoBox extends Component {
	render() {
		return (
            <div>
                <div className="infobox">
                    <div className="header">{this.props.header}</div>
                    <div className="desc">{this.props.desc}</div>
                </div>
            </div>
		);
	}
}

export default InfoBox;
