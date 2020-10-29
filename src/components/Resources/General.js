import React, { Component } from 'react';
import EquipmentBox from './EquipmentBox.js';
import InfoBox from './InfoBox.js';
import './Resources.css';

const masterList = [
	{ header: "Master List of Flow Moves Website", desc: (<> <a rel="noopener noreferrer" className="resource-link" href="https://stuyflow.github.io/flow-masterlist" target="_blank">A website</a> for learning poi, staffs, whips, and other props. Each move is assigned a difficulty and most of them have links to tutorials!</>) },
	{ header: "Master List of Flow Moves Video", desc: "A video that goes with the master move list. There are timestamps to all the moves in the comments (thank you Alvin)." }
];

const equipment = [
	{ name: (<> <a rel="noopener noreferrer" className="item-name" href="https://www.extremeglow.com/store/p/68-6-Revolution-5-Minute-Lightsticks-10-pack.aspx" target="_blank">Extreme Glow 6 Revolution 5-Minute Lightsticks ($8.49 - $10.99)</a></>), desc: ["Bright glowsticks that come in packs of 10", "Comes in red, orange, yellow, green, blue, purple, aqua, and white",  "Rounded glowsticks made with slightly flexible plastic", "Most common glowstick that StuyFlow uses"], img: "general/extreme_glow.jpg", link: "https://www.extremeglow.com/store/p/68-6-Revolution-5-Minute-Lightsticks-10-pack.aspx" },
	{ name: (<> <a rel="noopener noreferrer" className="item-name" href="https://glowproducts.com/us/ultra6inchglowsticks" target="_blank">Glow Products 6 Inch Glow Sticks ($6.30 - $7.10)</a> </>), desc: ["Glowsticks that come in packs of 10", "Comes in red, orange, yellow, green, blue, pink, aqua, and white", "Hexagonal glowsticks made with hard plastic", "Can leak, dispose after cracking", "Less frequently used by StuyFlow"], img: "general/glow_products.jpg", link: "https://glowproducts.com/us/ultra6inchglowsticks" },
	{ name: (<> <a rel="noopener noreferrer" className="item-name" href="https://flowtoys.com/capsule-light" target="_blank">Capsule Light 2.0 ($48.00) </a> </>), desc : ["64 custom modes with full color spectrum", "Extremely bright", "Accelerometer response", "Wireless control (syncing)", "Save your favorites", "USB rechargable and updateable", "Lifetime warranty"], img: "general/capsule.jpg", link: "https://flowtoys.com/capsule-light"},
	{ name: (<> <a rel="noopener noreferrer" className="item-name" href="https://flowtoys.com/flowlightfs" target="_blank">Flowlight-FS ($24.95) </a> </>), desc: ["30 custom modes", "Bright", "Save your favorites", "Battery powered (rechargable battery)", "Fragile without casing", "Lifetime warranty"], img: "general/flowlight.jpg", link: "https://flowtoys.com/flowlightfs"}
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

				<div className="resource-video-div">
					<iframe
						title="Master List Video"
						className="video"
						src="https://www.youtube.com/embed/N4U-1Apvpd8"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreens
					/>
				</div>

				<p className="equipment-header">Equipment</p>

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
