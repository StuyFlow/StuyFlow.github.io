import React, { Component } from 'react';
import EquipmentBox from './EquipmentBox.js';
import InfoBox from './InfoBox.js';
import './Resources.css';

const masterList = [
	{ header: "Master List of Flow Moves Spreadsheet", desc: (<> <a href="https://docs.google.com/spreadsheets/d/1SX_NGhIfmVFl4-BJUh9qQsWLR08Ov3D6Yl_rZIXnvNQ/edit#gid=109028202" target="_blank">A list of moves</a> for poi, staffs, whips, and other props. Each move is assigned a difficulty and most of them have links to tutorials.</>) },
	{ header: "Master List of Flow Moves Video", desc: "A video that goes with the master move list. There are timestamps to all the moves in the comments (thank you Alvin)." }
];

const equipment = [
	{ name: (<> <a className="item-name" href="https://www.extremeglow.com/store/p/68-6-Revolution-5-Minute-Lightsticks-10-pack.aspx" target="_blank">Extreme Glow 6 Revolution 5-Minute Lightsticks </a></>), desc: ["Bright glowsticks that come in packs of 10", "Comes in red, orange, yellow, green, blue, purple, aqua, and white",  "Rounded glowsticks made with slightly flexible plastic", "Most common glowstick that StuyFlow uses"], img: "general/extreme_glow.jpg", link: "https://www.extremeglow.com/store/p/68-6-Revolution-5-Minute-Lightsticks-10-pack.aspx", sideimg: (<img className="item-side-image" src={require(`./imgs/general/brightness_chart.jpg`)}/>)},
	{ name: (<> <a className="item-name" href="https://glowproducts.com/us/ultra6inchglowsticks" target="_blank">Glow Products 6 Inch Glow Sticks </a> </>), desc: ["Glowsticks that come in packs of 10", "Comes in red, orange, yellow, green, blue, pink, aqua, and white", "Hexagonal glowsticks made with hard plastic", "Can leak, dispose after cracking", "Less frequently used by StuyFlow"], img: "general/glow_products.jpg", link: "https://glowproducts.com/us/ultra6inchglowsticks" }
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
						sideimg={item.sideimg}
					/>
				))}
			</div>
		);
	}
}

export default General;
