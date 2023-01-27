import Chair1 from "./assets/images/Chairs/Chair 1.png";
import Chair2 from "./assets/images/Chairs/Chair 2.png";
import Chair3 from "./assets/images/Chairs/Chair 3.png";
import Chair4 from "./assets/images/Chairs/Chair 4.png";
import Table1 from "./assets/images/Tables/Table1.png";
import Table2 from "./assets/images/Tables/Table2.png";
import Table3 from "./assets/images/Tables/Table3.png";
import Table4 from "./assets/images/Tables/Table4.png";
import Sofa1 from "./assets/images/sofa/sofa1.png";
import Sofa2 from "./assets/images/sofa/sofa2.png";
import Sofa3 from "./assets/images/sofa/sofa3.png";
import Sofa4 from "./assets/images/sofa/sofa4.png";
import Lamp1 from "./assets/images/lamps/lamp1.png";
import Lamp2 from "./assets/images/lamps/lamp2.png";
import Lamp3 from "./assets/images/lamps/lamp3.png";
import Lamp4 from "./assets/images/lamps/lamp4.png";

/**
 * @type {{rating: number, image: any, category: string, name: string, price: string}}[]
 */
export const chairList = [
	{
		category: "Chair",
		rating: 4,
		image: Chair1,
		name: "Sakaris ArmChair",
		price: 400,
	},
	{
		category: "Chair",
		rating: 5,
		image: Chair2,
		name: "Blaise Chair",
		price: 500,
	},
	{
		category: "Chair",
		rating: 4,
		image: Chair3,
		name: "Felicia ArmChair",
		price: 400,
	},
	{
		category: "Chair",
		rating: 4,
		image: Chair4,
		name: "Quillox ArmChair",
		price: 400,
	},
];

export const tableList = [
	{
		category: "Table",
		rating: 3,
		image: Table1,
		name: "Remoire Table",
		price: 466.49,
	},
	{
		category: "Table",
		rating: 5,
		image: Table2,
		name: "Dekour Mahogany Table",
		price: 900,
	},
	{
		category: "Table",
		rating: 4,
		image: Table3,
		name: "Armani Table",
		price: 400,
	},
	{
		category: "Table",
		rating: 2,
		image: Table4,
		name: "Anjay Table",
		price: 200,
	},
];

export const sofaList = [
	{
		category: "Sofa",
		rating: 4,
		image: Sofa1,
		name: "Sakaris Sofa",
		price: 400,
	},
	{
		category: "Sofa",
		rating: 5,
		image: Sofa2,
		name: "Blaise Sofa",
		price: 500,
	},
	{
		category: "Chair",
		rating: 2,
		image: Sofa3,
		name: "Anjay Sofa",
		price: 400,
	},
	{
		category: "Chair",
		rating: 4,
		image: Sofa4,
		name: "Armani Sofa",
		price: 349.99,
	},
];

export const lampList = [
	{
		category: "Lamp",
		rating: 3,
		image: Lamp1,
		name: "Remoire Lamp",
		price: 416,
	},
	{
		category: "Lamp",
		rating: 5,
		image: Lamp2,
		name: "Light Lamp",
		price: 600,
	},
	{
		category: "Lamp",
		rating: 4,
		image: Lamp3,
		name: "Armani Lamp",
		price: 400,
	},
	{
		category: "Lamp",
		rating: 2,
		image: Lamp4,
		name: "Anjay Lamp",
		price: 300,
	},
];
