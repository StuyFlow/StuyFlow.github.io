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
            </div>
		);
	}
}

export default EquipmentBox;
