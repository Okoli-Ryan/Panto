import { Collapse, FloatButton, Layout } from "antd";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { MdShoppingBag } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const { Panel } = Collapse;

export default function MainHeader() {
	const [darkTheme, setDarkTheme] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const { scrollY } = useScroll();
	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 120) {
			setDarkTheme(true);
		} else {
			setDarkTheme(false);
		}
	});

	return (
		<div
			className={`flex justify-center transition-colors duration-150 fixed z-[100] top-0 w-full ${
				darkTheme ? "!bg-black" : "!bg-transparent"
			}`}>
			<Layout.Header className="container !bg-transparent relative">
				<div className="grid grid-cols-4 items-center h-full">
					<div className="col-span-1 flex items-center">
						<h3 className="font-bold text-white text-3xl">Panto</h3>
					</div>
					<div className="col-span-2 flex justify-between items-center h-full">
						{navLinks.map((link) => (
							<span className="cursor-pointer hidden md:flex space-x-2 items-center group hover:text-primary">
								<a
									href="#"
									className="text-white text-base font-medium group-hover:text-primary">
									{link.name}
								</a>
								{link.isDropdown && (
									<BsChevronDown className="text-white group-hover:text-primary" />
								)}
							</span>
						))}
					</div>
					<div className="col-span-1 flex justify-end items-center">
						<RxHamburgerMenu
							size={24}
							color="white"
							className="block md:hidden"
							onClick={() => setShowMenu((prev) => !prev)}
						/>
						<MdShoppingBag size={24} color="white" className="hidden md:block" />
					</div>
				</div>
			</Layout.Header>
			<AnimatePresence>
				{showMenu && (
					<motion.div
						initial={{ y: -250, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -250, opacity: 0 }}
						className="w-screen justify-center fixed top-16 flex gap-8 flex-col bg-black">
						<div className="container flex flex-col gap-4 p-4 ">
							{navLinks.map((link) => (
								<Link {...link} />
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<FloatButton
				className="block md:hidden"
				icon={<MdShoppingBag size={24} color="black" />}
			/>
		</div>
	);
}

const Link = ({ isDropdown, name, links }) => {
	if (isDropdown)
		return (
			<Collapse ghost accordion>
				<Panel
					showArrow={false}
					header={
						<span className="cursor-pointer flex space-x-2 items-center group hover:text-primary">
							<a
								href="#"
								className="text-white text-base font-medium group-hover:text-primary">
								{name}
							</a>
							<BsChevronDown className="text-white group-hover:text-primary" />
						</span>
					}>
					<div className="flex flex-col gap-4">
						{links.map((link) => (
							<span className="cursor-pointer flex space-x-2 items-center group hover:text-primary">
								<a
									href="#"
									className="text-white text-base font-medium group-hover:text-primary">
									{link}
								</a>
							</span>
						))}
					</div>
				</Panel>
			</Collapse>
		);

	return (
		<span className="cursor-pointer flex space-x-2 items-center group hover:text-primary">
			<span className="text-white text-base cursor-pointer font-medium group-hover:text-primary">
				{name}
			</span>
		</span>
	);
};

const navLinks = [
	{
		name: "Furniture",
		isDropdown: true,
		links: ["All", "Chairs", "Sofas", "tables"],
	},
	{
		name: "Shop",
	},
	{
		name: "About Us",
	},
	{
		name: "Contact",
	},
];
