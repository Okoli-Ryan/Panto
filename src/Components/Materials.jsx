import React from "react";
import Material1 from "../assets/images/Materials1.png";
import Material2 from "../assets/images/Materials2.png";
import Material3 from "../assets/images/Materials3.png";
import InfoCard from "./InfoCard";

export default function Materials() {
	return (
		<div className="md:grid grid-cols-1 md:grid-cols-2 py-8 md:py-24 items-center hidden">
			<div className="p-12">
            <InfoCard
                textClass="text-lg"
					Header={
						<div className="flex flex-col gap-4">
							<p className="text-primary font-bold">MATERIALS</p>
							<h3 className="font-bold text-5xl ">Very serious materials for making furniture</h3>
						</div>
					}
					text="Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price"
				/>
            </div>
			<div className="grid gap-8 grid-cols-3 grid-rows-8">
				<div className="materials1 materials hidden md:flex">
					<img src={Material1} alt="" />
				</div>
				<div className="materials2 materials  hidden md:flex">
					<img src={Material2} alt="" />
				</div>
				<div className="materials3 materials">
					<img src={Material3} alt="" />
				</div>
			</div>
		</div>
	);
}
