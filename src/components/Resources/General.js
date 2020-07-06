import React, { Component } from 'react';
import EquipmentBox from './EquipmentBox.js';
import InfoBox from './InfoBox.js';
import './Resources.css';

const stores = [
	{ name: "ExtremeGlow", desc: "Cool" },
	{ name: "ExtremeGlow2", desc: "Cool2" }
];

const masterList = [
	{ header: "Master List of Flow Moves Spreadsheet", desc: "A list of moves for poi, staffs, whips, and other props. Each move is assigned a difficulty and most of them have links to tutorials." },
	{ header: "Master List of Flow Moves Video", desc: "A video that goes with the master move list. There are timestamps to all the moves in the comments (thank you Alvin)." }
];

class General extends Component {
	render() {
		return (
			<div>
				{masterList.map(list => (
					<InfoBox header={list.header} desc={list.desc}/>
				))}

				<center><iframe className="video" width="100%" height="100%" src="https://www.youtube.com/embed/N4U-1Apvpd8" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

				{stores.map(store => (
					<EquipmentBox name={store.name} desc={store.desc}/>
				))}
			</div>
		);
	}
}

export default General;
