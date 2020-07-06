import React, { Component } from 'react';
import './Resources.css';

class InfoBox extends Component {
	render() {
		return (
            <div>
                <div>
                    <p class="header">{this.props.header}</p>
                    <p class="desc">{this.props.desc}</p>
                </div>
            </div>
		);
	}
}

export default InfoBox;
