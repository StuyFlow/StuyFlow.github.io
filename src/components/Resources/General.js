import React, { Component } from 'react';
import EquipmentBox from './EquipmentBox.js';
import './Resources.css';

const stores = [
	{ name: "ExtremeGlow", desc: "Cool" },
	{ name: "ExtremeGlow2", desc: "Cool2" }
];

class General extends Component {
	render() {
		return (
			<div>
				<p className="section-name">General</p>
				{stores.map(store => (
					<EquipmentBox name={store.name} desc={store.desc}/>
				))}
			</div>
		);
	}
}

export default General;
