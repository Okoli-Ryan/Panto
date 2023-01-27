import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function MainFooter() {
	return (
		<div className="bg-[#F7F7F7] grid grid-cols-1 md:grid-cols-5 gap-8 p-[5%] md:p-16">
			<div className="col-span-1 md:col-span-2">
				<h4 className="text-2xl font-bold">Panto</h4>
				<p className="mt-8 pr-12">
					The advantage of hiring a workspace with us is that givees you comfortable
					service and all-around facilities.
				</p>
			</div>
			{FooterLinks.map(({ heading, links }) => (
				<Link heading={heading} links={links} />
			))}
		</div>
	);
}

const Link = ({ heading, links }) => {
	return (
		<div className="flex flex-col gap-8 col-span-1">
			<div className=" text-primary">{heading}</div>
			{links.map(({ name, icon }) => (
				<div className="flex space-x-2 items-center">
					{icon}
					<span className="cursor-pointer">{name}</span>
				</div>
			))}
		</div>
	);
};

const FooterLinks = [
	{
		heading: "Services",
		links: [{ name: "Email Marketing" }, { name: "Campaigns" }, { name: "Branding" }],
	},
	{
		heading: "Furniture",
		links: [{ name: "Beds" }, { name: "Chairs" }, { name: "All" }],
	},
	{
		heading: "Follow Us",
		links: [
			{ name: "Facebook", icon: <FaFacebookF className="text-textPrimary" /> },
			{ name: "Twitter", icon: <FaTwitter className="text-textPrimary" /> },
			{ name: "Instagram", icon: <FaInstagram className="text-textPrimary" /> },
		],
	},
];
