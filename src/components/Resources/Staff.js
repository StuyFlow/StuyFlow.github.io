import React, { Component } from 'react';
import EquipmentBox from './EquipmentBox.js';
import InfoBox from './InfoBox.js';
import YoutubeBox from './YoutubeBox.js';
import './Resources.css';

const description = [
	{
		header: "Staff",
		desc: "Staffs are sticks with weights or lights on the ends that are spun around to create light patterns."
	},
	{
		header: "Youtube Channels",
		desc: "Here are some Youtube channels we recommend for learning how to staff:"
	},
]

const youtube = [
	{
		name: "Drexfactor Poi (double staffing)",
		img: "poi/drexfactor.jpg",
		link: "https://www.youtube.com/watch?v=tqJoUgprXws&list=PLGRWu2f31dFWXowRJ4cpC7Zkf-3IRx-Xn"
	},
	{
		name: "Michelle Christa Smith",
		img: "staff/mcs.png",
		link: "https://www.youtube.com/user/militiachelle"
	},
]

const equipment = [
    {
		name: "Composite Sticks ($55.00)",
		desc: [
			"No lights",
			"Used as practice staffs",
			"Made with carbon fiber and has a center mark",
			"Custom grip with choices of 3 colors",
			"Shaft diameter 12mm or 15mm (12mm recommended)"
		],
		img: "staff/composite-stick.png",
		link: "https://flowtoys.com/composite-sticks"
	},
    {
		name: "Composite Isolation Baton: 2x capsule 2.0 ($174.95)",
		desc: [
			"Uses capsule 2.0 lights",
			"12mm carbon fiber shaft with holographic tape in 3 colors",
			"Best ones for performances",
			"Durable and bright",
			"Heavier than composite sticks"
		],
		img: "staff/composite-iso-baton.png",
		link: "https://flowtoys.com/composite-isolation-baton-2-capsule"
	},
    {
		name: "Double Staff - Flowlights ($150.00)",
		desc: [
			"Uses flowlights which aren't as durable as capsules",
			"1/2 inch shaft made from carbon fiber",
			"Originally used in performances",
			"Polycarbonate ends of the staff susceptible to shattering"
		],
		img: "staff/flowlights-staff.png",
		link: "https://ninjapyrate.com/double-staff-flowlights/"
	},
    {
		name: "Dragon Staff ($200.00)",
		desc: [
			"No lights, but can be lit on fire",
			"5 feet 6 inches long",
			"Spoke wicks at the end are removable",
			"Shaft made of aluminum, large and heavy",
			"Grip made of silicone which can chafe skin"
		],
		img: "staff/dragon-staff.png",
		link: "https://dark-monk.com/Equipment/Dragon-Staff"
	},
]

class Staff extends Component {
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

			</div>

		);
	}
}

export default Staff;
