import React, { Component } from 'react';
import './Resources.css';

class EquipmentBox extends Component {
	render() {
		return (
            <div className="item-box row">
                <div className="photo-div col-12 col-lg-6 col-xl-3">
                    <a rel="noopener noreferrer" href={this.props.link} target="_blank">
						<img
							className="item-image"
							src={require(`./imgs/${this.props.img}`)}
							alt={this.props.name}
						/>
					</a>
                </div>
                <div className="item-text col-11 col-lg-5 col-xl-8">
                    {this.props.name}
                    <ul className="item-description">
                    {this.props.desc.map((details, i) => (
                        <li key={i}><span className="item-description">{details}</span></li>
                    ))}
                    </ul>
                </div>
                <div className="item-side-image">
                    {this.props.sideimg}
                </div>
            </div>
		);
	}
}

export default EquipmentBox;
