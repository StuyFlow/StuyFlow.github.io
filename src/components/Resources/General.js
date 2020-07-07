import React, { Component } from 'react';
import EquipmentBox from './EquipmentBox.js';
import InfoBox from './InfoBox.js';
import './Resources.css';

const masterList = [
	{ header: "Master List of Flow Moves Spreadsheet", desc: (<> <a href="https://docs.google.com/spreadsheets/d/1SX_NGhIfmVFl4-BJUh9qQsWLR08Ov3D6Yl_rZIXnvNQ/edit#gid=109028202" target="_blank">A list of moves</a> for poi, staffs, whips, and other props. Each move is assigned a difficulty and most of them have links to tutorials.</>) },
	{ header: "Master List of Flow Moves Video", desc: "A video that goes with the master move list. There are timestamps to all the moves in the comments (thank you Alvin)." }
];

const equipment = [
	{ name: (<> <a className="item-name" href="https://www.extremeglow.com/store/p/68-6-Revolution-5-Minute-Lightsticks-10-pack.aspx" target="_blank">Extreme Glow 6 Revolution 5-Minute Lightsticks </a></>), desc: ["Super Bright", "Comes in packs of 10", "Variety of colors, but sometimes out of stock", "Lasts only 5 minutes", "Round and doesn't break that often", "Gets cheaper the more you buy"], img: "general/extreme_glow.jpg", link: "https://www.extremeglow.com/store/p/68-6-Revolution-5-Minute-Lightsticks-10-pack.aspx" },
	{ name: (<> <a className="item-name" href="https://glowproducts.com/us/ultra6inchglowsticks" target="_blank">Glow Products 6 Inch Glow Sticks </a> </>), desc: ["Some colors", "Hexagon glowsticks", "Last 5 minutes", "Breaks kinda easily so don't use as duds", "Expensive", "Etc..."], img: "general/glow_products.jpg", link: "https://glowproducts.com/us/ultra6inchglowsticks" }
];

class General extends Component {
	render() {
		return (
			<div>
				{masterList.map(list => (
					<InfoBox
						key={list.header}
						header={list.header} 
						desc={list.desc}
					/>
				))}

				<center><iframe className="video" width="100%" height="100%" src="https://www.youtube.com/embed/N4U-1Apvpd8" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></center>

				<h2 className="equipment-header">Glowstick Stores</h2>
				{equipment.map(item => (
					<EquipmentBox
						key={item.name}
						name={item.name}
						desc={item.desc}
						img={item.img}
						link={item.link}
					/>
				))}
			</div>
		);
	}
}

export default General;
