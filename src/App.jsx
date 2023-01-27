import { Layout } from "antd";
import React from "react";
import HeroImage from "./assets/images/Hero.png";
import MainHeader from "./Components/MainHeader";
import MainContent from "./Components/MainContent";
import WhyChooseUs from "./Components/WhyChooseUs";
import BestSellingProduct from "./Components/BestSellingProduct";
import Experiences from "./Components/Experiences";
import Materials from "./Components/Materials";
import Testimonials from "./Components/Testimonials";
import MainFooter from "./Components/MainFooter";

const { Header, Content, Footer } = Layout;

export default function App() {
	return (
		<Layout className="w-full">
			<img
				src={HeroImage}
				alt="hero"
				className="w-screen h-screen absolute inset-0 object-cover "
			/>
			<div className="flex justify-center relative h-screen flex-col">
				<MainHeader />
				<Content className="mt-[20%] md:mt-[10%] !bg-transparent">
					<MainContent />
				</Content>
			</div>
			<div className="flex justify-center bg-white">
				<Content className="container">
					<WhyChooseUs />
				</Content>
			</div>
			<div className="flex justify-center bg-[#F7F7F7]">
				<Content className="container">
					<BestSellingProduct />
				</Content>
			</div>
			<Experiences />
			<Materials />
			<div className="flex justify-center bg-[#F7F7F7]">
				<Content className="container">
					<Testimonials />
				</Content>
			</div>
			<Footer>
				<MainFooter />
			</Footer>
		</Layout>
	);
}
