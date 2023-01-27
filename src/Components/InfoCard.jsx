import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function InfoCard({ Header, text, className, textClass }) {
	return (
		<div className={`flex flex-col gap-4 ${className}`}>
			{Header}
			<p className={`text-textPrimary ${textClass}`}>{text}</p>
			<span className="text-primary flex gap-2 items-center">
				<p>More Info</p>
				<BsArrowRight className="text-primary" />
			</span>
		</div>
	);
}
