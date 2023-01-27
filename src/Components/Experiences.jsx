import React from "react";
import ExperienceImage from "../assets/images/Experiences.png";
import InfoCard from "./InfoCard";

export default function Experiences() {
	return (
		<div className="py-8 md:py-24 w-full grid grid-cols-1 p-4 md:p-0 md:grid-cols-2 items-center">
			<div className="w-full">
				<img className="rounded-2xl md:rounded-l-none" src={ExperienceImage} alt="" />
			</div>
			<div className="p-12">
				<InfoCard
                textClass="text-lg"
					Header={
						<div className="flex flex-col gap-4">
							<p className="text-primary font-bold">EXPERIENCES</p>
							<h3 className="font-bold text-5xl ">we provide you the best experience</h3>
						</div>
					}
					text="You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials"
				/>
			</div>
		</div>
	);
}
