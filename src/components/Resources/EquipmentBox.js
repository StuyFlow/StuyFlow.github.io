import React, { Component } from 'react';
import './Resources.css';

class EquipmentBox extends Component {
	render() {
		return (
            <div>
                <div className="item-box">

                    <div>
                        <a href={this.props.link} target="_blank"> <img className="item-image" src={require(`./imgs/${this.props.img}`)} /> </a>
                    </div>

                    <div className="item-text">

                        <h3 className="item-name">{this.props.key}</h3>

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
