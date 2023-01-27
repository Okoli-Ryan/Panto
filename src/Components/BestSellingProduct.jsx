import React, { useState } from "react";
import { Segmented } from "antd";
import { AiFillStar, AiFillPlusCircle } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { chairList, lampList, sofaList, tableList } from "../constants";
import { BsArrowRight } from "react-icons/bs"

const options = ["Chair", "Table", "Sofa", "Lamp"];

export default function BestSellingProduct() {
	const [value, setValue] = useState(options[0]);

	return (
		<div className="py-8 flex items-center flex-col bg-[#F7F7F7]">
			<h3 className=" mx-auto heading text-center">Best Selling Product</h3>
			<div className=" mx-auto mt-8">
				<Segmented
					onChange={setValue}
					className="rounded-3xl"
					size="large"
					options={options}
				/>
			</div>
			<div className="mt-16 grid grid-cols-12 gap-8 w-full">
				<AnimatePresence>
					<FurnitureList category={value} />
				</AnimatePresence>
			</div>
				<div className="mt-8 w-full flex justify-center">
					<span className="text-primary flex gap-2 items-center mx-auto text-lg cursor-pointer">
						<p>View all</p>
						<BsArrowRight className="text-primary" />
					</span>
				</div>
		</div>
	);
}

function FurnitureList({ category }) {
	let list = chairList;

	if (category === options[1]) list = tableList;
	if (category === options[2]) list = sofaList;
	if (category === options[3]) list = lampList;

	return (
		<>
			{list.map((furniture, i) => (
				<FurnitureCard key={furniture.name} {...furniture} index={i} />
			))}
		</>
	);
}

function FurnitureCard({ rating, image, category, name, price, index }) {
	return (
		<motion.div
			variants={variant}
			initial="initial"
			exit="exit"
			animate="show"
			transition={{ damping: 90, delay: index * 0.1, duration: 0.5 }}
			className="flex flex-1 flex-col col-span-12 md:col-span-6 lg:col-span-3 w-full group rounded-2xl ">
			<div className="w-full px-8 pb-12 bg-[#FAFAFA] flex justify-center relative">
				<img
					src={image}
					alt=""
					className="cursor-pointer z-20 w-[20vw] h-[20vw] relative object-contain group-hover:-translate-y-4 group-hover:scale-110 transition-all duration-200"
				/>
				<div className="absolute inset-0 w-full h-full overflow-hidden z-10">
					<span className=" bg-primary/5 w-full h-full absolute group-hover:translate-x-[50%] translate-x-[150%] -skew-x-[25deg] z-10 transition-all duration-300 group-hover:scale-125"></span>
				</div>
			</div>
			<div className="p-4 bg-white rounded-b-2xl">
				<p className=" text-[#8E8E8E]">{category}</p>
				<p className="text-accent font-bold text-lg transition-all duration-200 group-hover:text-primary">
					{name}
				</p>
				<div className="flex space-x-1">
					{[...Array(rating).keys()].map((el) => (
						<AiFillStar key={el} className="text-[#F6B76F]" />
					))}
					{[...Array(5 - rating).keys()].map((el) => (
						<AiFillStar key={el} className="text-[#F6B76F]/40" />
					))}
				</div>

				<div className="mt-8 flex justify-between items-center">
					<div className="flex gap-1">
						<p className="text-sm text-accent font-bold">$</p>
						<p className="text-accent font-bold text-lg">{price}</p>
					</div>
					<AiFillPlusCircle
						size={36}
						className="text-accent group-hover:scale-110 group-hover:rotate-180 transition-all duration-200 group-hover:text-primary"
					/>
				</div>
			</div>
		</motion.div>
	);
}

const variant = {
	exit: {
		opacity: 0,
		y: -100,
	},
	show: {
		opacity: 1,
		y: 0,
	},
	initial: {
		opacity: 0,
		y: 100,
	},
};
