import React, { Component } from 'react';
import './Resources.css';

class EquipmentBox extends Component {
	render() {
		return (
            <div>
                <div className="item-box">

                    <div>
                        <img className="item-image" src={this.props.img} />
                    </div>

                    <div className="item-text">
                        
                        <h3 className="item-name">{this.props.name}</h3>

                        <ul className="item-description">
                        {this.props.desc.map(details => (
                            <li>{details}</li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
		);
	}
}

export default EquipmentBox;