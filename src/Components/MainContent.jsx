import React from "react";
import { BiSearchAlt } from "react-icons/bi";

export default function MainContent() {
	return (
		<div className="flex items-center flex-col p-8">
			<h2 className="text-3xl md:text-6xl font-bold w-full lg:w-1/2 z-10 text-center text-white">
				Make your interior more minimalistic & modern
			</h2>
			<p className="text-white text-center mt-4 z-10">
				Turn your room with panto into a lot more minimalist and modern with ease and speed
			</p>
			<div className="relative w-full max-w-xs mt-6 rounded-3xl overflow-hidden">
                <div className="blur-sm bg-white/10 absolute h-full w-full"></div>
				<input placeholder="Search furniture" className="focus:border-0 active:border-0 z-10 focus:outline-none active:outline-none text-sm pl-4 pr-16 w-full py-3 shadow-xl rounded-[10px] bg-transparent blur-none text-white" />

				<button className="!px-3 !py-2 btn bg-primary rounded-full !absolute right-2 top-[6.5px]">
					<span>
						<BiSearchAlt className="text-white" />
					</span>
				</button>
			</div>
		</div>
	);
}
