import React, { Component } from 'react';
import './Resources.css';

class YoutubeBox extends Component {
	render() {
		return (
			<div className="youtube-box">
				<a rel="noopener noreferrer" href={this.props.link} target="_blank">
					<img 
						className="youtube-image" 
						src={require(`./imgs/${this.props.img}`)}
						alt={this.props.name}
					/>
					<p>{this.props.name}</p>
				</a>
			</div>
		);
	}
}

export default YoutubeBox;
