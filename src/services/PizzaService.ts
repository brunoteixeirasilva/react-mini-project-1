// Class for services, like requesting pizza data from the server.
// Pizza data can be:
// - a list of pizzas
// - a single pizza
// - a list of toppings
// - a single topping
// - a list of pizza toppings
// - a single pizza topping
// - a list of pizza sizes
// - a single pizza size
// - a list of orders

import { HttpMethod, PizzaSize } from "enums";
import { Pizza } from "models/Pizza";

interface IPizzaState {
	pizzas: Pizza[];
	pizza?: Pizza;
	toppings?: string[];
	topping?: string;
	pizzaToppings?: string[];
	pizzaTopping?: string;
	orders?: string[];
}

/**
 * Mock data for testing purposes of the service /pizza microservice.
 */
const mockData: IPizzaState = {
	pizzas: [
		{
			id: "1",
			name: "Pepperoni",
			description: "A classic pizza with pepperoni and cheese.",
			price: 10.99,
			size: PizzaSize.Large,
			toppings: ["Pepperoni", "Cheese"],
			picturePath: "/img/pizza/pepperoni-1.png"
		},
		{
			id: "2",
			name: "Hawaiian",
			description: "A classic pizza with ham and pineapple.",
			price: 10.99,
			size: PizzaSize.Large,
			toppings: ["Ham", "Pineapple"],
			picturePath: "/img/pizza/hawaiian-1.png"
		},
		{
			id: "3",
			name: "Meat Lovers",
			description: "A classic pizza with pepperoni, sausage, and ham.",
			price: 10.99,
			size: PizzaSize.Large,
			toppings: ["Pepperoni", "Sausage", "Ham"],
			picturePath: "/img/pizza/meat-lovers-1.png"
		},
		{
			id: "4",
			name: "Veggie",
			description: "A classic pizza with peppers, onions, and mushrooms.",
			price: 10.99,
			size: PizzaSize.Large,
			toppings: ["Peppers", "Onions", "Mushrooms"],
			picturePath: "/img/pizza/veggie-1.png"
		}
	],
	pizza: null,
	toppings: [
		"Pepperoni",
		"Cheese",
		"Ham",
		"Pineapple",
		"Sausage",
		"Peppers",
		"Onions",
		"Mushrooms"
	],
	topping: null,
	pizzaToppings: null,
	pizzaTopping: null,
	orders: null
};

/**
 * Configuration object for the /pizza module microservice.
 */
const config = {
	baseUrl: "https://localhost:5001",
	apiUrl: "api",
	getApiUrl: () => `${config.baseUrl}/${config.apiUrl}`,
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Cache-Control": "no-cache"
	}
};

/**
 * Contract for the Pizza Service.
 */
interface IPizzaService {
	getPizzas: () => Promise<Pizza[]>;
	getPizza: (id: number) => Promise<Pizza>;
	getToppings: () => Promise<string[]>;
	getTopping: (id: number) => Promise<string>;
	getPizzaToppings: () => Promise<string[]>;
	getPizzaTopping: (id: number) => Promise<string>;
	getPizzaSizes: () => Promise<string[]>;
	getPizzaSize: (id: number) => Promise<string>;
	getOrders: () => Promise<string[]>;
}

/**
 * Pizza helper service, which is responsible for requesting data from the /pizza microservice.
 * This service is a singleton.
 */
class PizzaService implements IPizzaService {
	serviceUrl: string;

	constructor() {
		this.serviceUrl = config.getApiUrl();
	}

	/**
	 * Requests data using the fetch API.
	 *
	 * @param requestMethod
	 * @param url
	 * @returns
	 */
	async request(
		requestMethod = HttpMethod.GET,
		url: string = undefined
	): Promise<any> {
		return fetch(
			`${config.apiUrl}/${this.serviceUrl}${
				!url ? "" : url.startsWith("/") ? url : `/${url}`
			}`,
			{
				method: requestMethod,
				headers: config.headers
			}
		).then((response) => {
			return response.json();
		});
	}

	async getPizzas(): Promise<Pizza[]> {
		const result = mockData.pizzas;
		// 	const result = await this.request(
		// 	HttpMethod.GET,
		// 	`${this.serviceUrl}/all`
		// );

		return result;
	}

	async getPizza(id: number): Promise<Pizza> {
		const result = await this.request(
			HttpMethod.GET,
			`${this.serviceUrl}/${id}`
		);

		return result;
	}

	async getToppings(): Promise<string[]> {
		const result = await this.request(
			HttpMethod.GET,
			`${this.serviceUrl}/toppings`
		);

		return result;
	}

	async getTopping(id: number): Promise<string> {
		const result = await this.request(
			HttpMethod.GET,
			`${this.serviceUrl}/toppings/${id}`
		);

		return result;
	}

	async getPizzaToppings(): Promise<string[]> {
		const result = await this.request(
			HttpMethod.GET,
			`${this.serviceUrl}/pizza-toppings`
		);

		return result;
	}

	async getPizzaTopping(id: number): Promise<string> {
		const result = await this.request(
			HttpMethod.GET,
			`${this.serviceUrl}/pizza-toppings/${id}`
		);

		return result;
	}

	async getPizzaSizes(): Promise<string[]> {
		const result = await this.request(
			HttpMethod.GET,
			`${this.serviceUrl}/pizza-sizes`
		);

		return result;
	}

	async getPizzaSize(id: number): Promise<string> {
		const result = await this.request(
			HttpMethod.GET,
			`${this.serviceUrl}/pizza-sizes/${id}`
		);

		return result;
	}

	async getOrders(): Promise<string[]> {
		const result = await this.request(
			HttpMethod.GET,
			`${this.serviceUrl}/orders`
		);

		return result;
	}
}

export { mockData, config, IPizzaState, IPizzaService, PizzaService };
