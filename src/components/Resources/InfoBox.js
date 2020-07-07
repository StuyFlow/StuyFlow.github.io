import React, { Component } from 'react';
import './Resources.css';

class InfoBox extends Component {
	render() {
		return (
            <div>
                <div>
                    <p className="header">{this.props.key}</p>
                    <p className="desc">{this.props.desc}</p>
                </div>
            </div>
		);
	}
}

export default InfoBox;
