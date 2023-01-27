import React from "react";
import InfoCard from "./InfoCard";

export default function WhyChooseUs() {
	return (
		<div className="grid gap-8 grid-cols-12 py-20 items-center">
			<h3 className="heading col-span-12 lg:col-span-3 px-8 text-center lg:text-left">Why Choosing Us</h3>
			{ChooseUpCards.map((card) => (
				<InfoCard Header={card.header} text={card.text} className="col-span-12 md:col-span-6 lg:col-span-3" />
			))}
		</div>
	);
}

const ChooseUpCards = [
	{
		header: <h5 className="font-bold text-xl">Luxury Facilities</h5>,
		text: "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
	},
	{
		header: <h5 className="font-bold text-xl">Affordable Price</h5>,
		text: "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
	},
	{
		header: <h5 className="font-bold text-xl">Many Choices</h5>,
		text: "We provide many unique work space choices so that you can choose the workspace to your liking.",
	},
];
