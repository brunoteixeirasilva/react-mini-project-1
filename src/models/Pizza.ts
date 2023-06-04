import { PizzaSize } from "enums/PizzaSize";
import { IdentifiedObject } from "./IdentifiedObject";

/**
 * Contract for shaping the /pizza microservice.
 */
export class Pizza extends IdentifiedObject {
	name: string;
	description: string;
	price: number;
	size: PizzaSize;
	toppings: string[];
	picturePath: string;

	constructor() {
		super("");
	}
}
