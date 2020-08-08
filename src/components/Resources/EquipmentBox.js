import React, { Component } from 'react';
import './Resources.css';

class EquipmentBox extends Component {
	render() {
		return (
            <div className="item-box row">
                <div className="photo-div col-12 col-lg-4 col-xl-3">
                    <a rel="noopener noreferrer" href={this.props.link} target="_blank">
						<img
							className="item-image"
							src={require(`./imgs/${this.props.img}`)}
							alt={this.props.name}
						/>
					</a>
                </div>
                <div className="item-text col-12 col-lg-7 col-xl-8">
                    {this.props.name}
                    <div className="item-description">
                    {this.props.desc.map((details, i) => (
                        <div key={i}>
							<span style={{marginRight: "10px", fontSize: '0.8em'}}>
								❉
							</span>
							{details}
						</div>
                    ))}
                    </div>
                </div>
                <div className="item-side-image">
                    {this.props.sideimg}
                </div>
            </div>
		);
	}
}

export default EquipmentBox;
