import React, { Component } from 'react';
import './Resources.css';

class EquipmentBox extends Component {
	render() {
		return (
            <div>
                <div style={{color: "white"}}>
                    {this.props.name} <br/>
                    {this.props.desc}
                </div>
            </div>
		);
	}
}

export default EquipmentBox;
