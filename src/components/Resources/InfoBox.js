import React, { Component } from 'react';
import './Resources.css';

class InfoBox extends Component {
	render() {
		return (
            <div>
                <div>
                    <h2 class="header">{this.props.header}</h2>
                    <p class="desc">{this.props.desc}</p>
                </div>
            </div>
		);
	}
}

export default InfoBox;
