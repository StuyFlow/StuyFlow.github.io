import React, { Component } from 'react';
import EquipmentBox from './EquipmentBox.js';
import InfoBox from './InfoBox.js';
import YoutubeBox from './YoutubeBox.js';
import './Resources.css';

const description = [
	{ header: "Other", desc: "This is the page for the less commonly used props in StuyFlow." },
	// { header: "Youtube Channels", desc: "Here are some Youtube channels we recommend for learning how to manipulate these props:"}
]

const youtube = [
	{name: "Drexfactor Poi", img: "poi/drexfactor.jpg", link: "https://www.youtube.com/user/TaoAvatar20"},
	{name: "Playpoi", img: "poi/playpoi.jpg", link: "https://www.youtube.com/user/meenik"},
	{name: "Timmehtek", img: "poi/timmehtek.jpg", link: "https://www.youtube.com/channel/UC5MA1jWFgbevB9fNhibHmOw"}
]

const equipment = [
	{ name: (<> <a rel="noopener noreferrer" className="item-name" href="https://moodhoops.com/shop/pixelwand/" target="_blank">Pixelwand ($129.00)</a></>), desc: ["Many different color modes", "Made of frosted polycarbonate"], img: "others/wand.jpg", link: "https://moodhoops.com/shop/pixelwand/" },
	{ name: (<> <a rel="noopener noreferrer" className="item-name" href="https://moodhoops.com/silk-fans/" target="_blank">Silk Fans ($45.00)</a></>), desc: ["Colorful, silk fans"], img: "others/veil_fan.jpg", link: "https://moodhoops.com/silk-fans/" },
	{ name: (<> <a rel="noopener noreferrer" className="item-name" href="https://amzn.to/3evciL9" target="_blank">AOMIDI Shoelaces 4 Pack ($9.99)</a></>), desc: ["Pack of 4 pairs of flat shoelaces", "Shoelaces used for stringing (Any pair of shoelaces work, but we recommend these)", "30 inches is recommended—they stretch to 32 inches"], img: "others/shoelaces.jpg", link: "https://amzn.to/3evciL9" }
]

class Others extends Component {
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


				{/* <center>
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
				</center> */}
				
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

export default Others;
