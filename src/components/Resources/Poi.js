import React, { Component } from 'react';
import EquipmentBox from './EquipmentBox.js';
import InfoBox from './InfoBox.js';
import YoutubeBox from './YoutubeBox.js';
import './Resources.css';


const description = [
	{ header: "Poi", desc: "In short, poi are things on strings. Usually, they are attached to LEDs or glowsticks and are spun to make light patterns." },
	{ header: "Youtube Channels", desc: "Here are some Youtube channels we recommend for learning how to manipulate poi:"}
]

const youtube = [
	{name: "Drexfactor Poi", img: "poi/drexfactor.jpg", link: "https://www.youtube.com/user/TaoAvatar20"},
	{name: "Playpoi", img: "poi/playpoi.jpg", link: "https://www.youtube.com/user/meenik"}
]

const equipment = [
	{ name: (<> <a rel="noopener noreferrer" className="item-name" href="https://flowtoys.com/podpoi-with-capsule-handles" target="_blank">Podpoi v2 with Capsule Handles ($264.95)</a></>), desc: ["Uses capsule 2.0 lights", "Good for gunslinging, stalls, and tosses", "Most expensive poi that StuyFlow commonly uses", "Made of silicone, hurts less on impact than glowsticks", "Uses smithy cord, a braided polyester rope"], img: "poi/podpoi_handles.jpg", link: "https://flowtoys.com/podpoi-with-capsule-handles" },
	{ name: (<> <a rel="noopener noreferrer" className="item-name" href="https://flowtoys.com/podpoi" target="_blank">Podpoi v2 ($134.95)</a></>), desc: ["Same as Podpoi v2 with Capsule Handles, but handles are knobs"], img: "poi/podpoi.jpg", link: "https://flowtoys.com/podpoi" },
	{ name: (<> <a rel="noopener noreferrer" className="item-name" href="https://flowtoys.com/crystal-poi-lite" target="_blank">Crystal Poi ($64.95)</a></>), desc: ["Uses flowlight-fs lights", "Similar feel to glowsticks, but are heavier", "Less durable than podpoi", "Generally less used within StuyFlow", "Shells are made of polyethylene", "Uses j-lace, a supple polyester ribbon"], img: "poi/crystal.jpg", link: "https://flowtoys.com/crystal-poi-lite" }
]

class Poi extends Component {
	render() {
		return (
			<div>
				{description.map(list => (
					<InfoBox
						key={list.header}
						header={list.header}
						desc={list.desc}
					/>
				))}


				<center>
					<div className="youtube-channels">
						{youtube.map(channel => (
							<YoutubeBox
								key={channel.name}
								name={channel.name}
								img={channel.img}
								link={channel.link}
							/>
						))}
					</div>
				</center>
				
				<h2 className="equipment-header">Equipment</h2>
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

export default Poi;
