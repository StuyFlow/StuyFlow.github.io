import React, { Component } from 'react';
import EquipmentBox from './EquipmentBox.js';
import InfoBox from './InfoBox.js';
import YoutubeBox from './YoutubeBox.js';
import './Resources.css';

const videos = [
	{
		header: "Helpful Videos",
		desc: "Here are some videos regarding whip maintenance."
	},
];

const description = [
	{
		header: "Whips",
		desc: "Whips are flashlights that disperse light throughout a bunch of optical fibers to create light trails."
	},
	{
		header: "Youtube Channels",
		desc: "Here are some Youtube channels we recommend for learning how to whip:"
	},
]

const youtube = [
	{
		name: "LightWhipping Notebook",
		img: "whips/lightwhippingnotebook.jpg",
		link: "https://www.youtube.com/channel/UCTFFacZtI1pZhTeCIwAIMBg"
	},
	{
		name: "Dancing With Lightning",
		img: "whips/firecatflow.jpg",
		link: "https://www.youtube.com/c/DancingWithLightning/featured"
	},
	{
		name: "Flowmi",
		img: "whips/flowmi.jpg",
		link: "https://www.youtube.com/channel/UC9gSxUkfrvDSb2KPs1dQkMg"
	},
]

const equipment = [
	{
		name: "PixelWhip Rev4 ($80.00)",
		desc: [
			"Comes with 80 fibers",
			"Upgradable to 160 fibers via the Mega Fiberhead",
			"Contains 40 different preset color modes",
			"Comes with a foam rubber grip for easier handling and softer impacts",
			"The brightest of the whips"
		],
		img: "whips/pixelwhiprev4.jpg",
		link: "https://flowtoys.com/pixelwhip-r4"
	},
	{
		name: "Space Whip Remix ($79.99)",
		desc: [
			"Comes with 130 fibers",
			"Programmable, with 35 colors (3 per mode) and 18 custom light modes",
			"3 custom brightness levels, but never as bright as the PixelWhip Rev4",
			"Long handle, with the foam grip sold separately",
			"Not used within StuyFlow as of yet"
		],
		img: "whips/spacewhipremix.jpg",
		link: "https://glofx.com/product/space-whip-remix/"
	},
	{
		name: "RGB Critter ($124.00 or $140.00)",
		desc: [
			"Currently available for pre-order (ships in November)",
			"Comes with either 140 fibers or 220 fibers",
			"Programmable, with 33 colors (up to 24 per mode), 8 custom light modes, and custom speeds",
			"Sound and movement reactive",
			"No foam grip",
			"Chargable using a micro-USB cable"
		],
		img: "whips/rgbcritter.jpg",
		link: "https://antsonamelon.com/collections/critter-packages/products/orbit-bitwhip-package#section__product"
	},
	{
		name: "GloFX Flow Grease ($14.99)",
		desc: [
			"Silicone lubricant intended to prevent tangling of whip fibers and promote smoother gliding"
		],
		img: "whips/flowgrease.jpg",
		link: "https://glofx.com/product/glofx-flow-grease/"
	},
]

class Whips extends Component {
	render() {
		return (
			<div>
			<div>
				{description.map(list => (
					<InfoBox
						key={list.header}
						header={list.header}
						desc={list.desc}
					/>
				))}
				</div>

				<div className="youtube-channels row">
					{youtube.map(channel => (
						<YoutubeBox
							key={channel.name}
							name={channel.name}
							img={channel.img}
							link={channel.link}
						/>
					))}
				</div>

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
				{videos.map(list => (
					<InfoBox
						key={list.header}
						header={list.header}
						desc={list.desc}
					/>
				))}

				<iframe
					title="Whip Braiding"
					className="video"
					src="https://www.youtube.com/embed/stQYs9Dyp-E"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
				<iframe
					title="Whip Cleaning"
					className="video"
					src="https://www.youtube.com/embed/coEO3vLiaMk"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
				<iframe
					title="Whip Care"
					className="video"
					src="https://www.youtube.com/embed/Kz8ieRQJltg"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
		);
	}
}

export default Whips;
