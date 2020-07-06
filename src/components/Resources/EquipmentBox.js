import React, { Component } from 'react';
import './Resources.css';

class EquipmentBox extends Component {
	render() {
		return (
            <div>
                <div className="item-box">
                    <img src='./imgs/general/extreme_glow.jpg' />
                    {this.props.name} <br/>
                    {this.props.desc[0]}
                </div>
            </div>
		);
	}
}

export default EquipmentBox;
