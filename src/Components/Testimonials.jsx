import React from "react";
import Testimonial1 from "../assets/images/Testimonial1.png";
import Testimonial2 from "../assets/images/Testimonial2.png";
import Testimonial3 from "../assets/images/Testimonial3.png";
import Client1 from "../assets/images/Client1.png";
import Client2 from "../assets/images/Client2.png";
import Client3 from "../assets/images/Client3.png";
import { AiFillStar } from "react-icons/ai";

export default function Testimonials() {
	return (
		<div className="py-8 md:py-24 flex items-center flex-col">
			<p className="text-primary font-bold">TESTIMONIALS</p>

			<h2 className="heading mt-4">Our Client Reviews</h2>
			<div className="mt-12 grid md:grid-cols-3 grid-cols-1 gap-8">
				{TestimonialList.map((testimonial) => (
					<TestimonialBubble {...testimonial} />
				))}
			</div>
		</div>
	);
}

const TestimonialBubble = ({ text, name, occupation, image, rating, clientImage }) => {
	return (
		<div className="h-auto w-full group overflow-hidden rounded-2xl relative">
			<div className="absolute bottom-2 w-full flex justify-between z-10 p-4">
				<div className="absolute w-16 h-10 bg-white rounded-t-3xl -top-6 -translate-x-[50%] left-[50%] z-20 flex justify-center items-center">
					<div className="w-12 h-12 bg-white rounded-full relative top-2">
						<img
							src={clientImage}
							alt=""
							className="w-full h-full bg-contain"
						/>
					</div>
					{/* <div className="z-20 absolute -left-8 w-8 h-8 bg-white invisible bottom-0 rounded-full"></div>
                    <div className="z-30 absolute -left-4 w-4 h-4 bg-red-400 bottom-0"></div>
                    <div className="z-20 absolute -right-8 w-8 h-8 bg-white invisible bottom-0 rounded-full"></div>
                    <div className="z-30 absolute -right-4 w-4 h-4 bg-red-400 bottom-0"></div> */}
				</div>
				<div className="flex flex-col bg-white rounded-2xl items-center p-4">
					<p className="text-accent font-bold text-lg">{name}</p>
					<p className=" text-[#8E8E8E] text-sm">{occupation}</p>
					<p className="text-textPrimary text-center mt-6">"{text}"</p>
					<div className="flex space-x-1 mt-4">
						{[...Array(rating).keys()].map((el) => (
							<AiFillStar key={el} className="text-[#F6B76F]" />
						))}
						{[...Array(5 - rating).keys()].map((el) => (
							<AiFillStar key={el} className="text-[#F6B76F]/40" />
						))}
					</div>
				</div>
			</div>
			<img
				src={image}
				className="object-contain group-hover:scale-105 transition-transform duration-200"
				alt=""
			/>
		</div>
	);
};

const TestimonialList = [
	{
		text: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
		name: "Bang Upin",
		occupation: "Pedagang Asongan",
		rating: 3,
		clientImage: Client1,
		image: Testimonial1,
	},
	{
		text: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
		name: "Bang Upin",
		occupation: "Pedagang Asongan",
		rating: 3,
		clientImage: Client2,
		image: Testimonial2,
	},
	{
		text: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
		name: "Bang Upin",
		occupation: "Pedagang Asongan",
		rating: 3,
		clientImage: Client3,
		image: Testimonial3,
	},
];
