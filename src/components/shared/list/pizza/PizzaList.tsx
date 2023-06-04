import React from "react";

import { Pizza } from "models/Pizza";
import { PizzaListItem } from "./PizzaListItem";

import "./PizzaList.scss";

/**
 * Contract for controlling the pizza list props.
 */
export interface IPizzaListProps {
	pizzas: Pizza[];
}

/**
 * Displays the pizza list.
 *
 * @param param0
 * @returns
 */
function PizzaList({ pizzas }): JSX.Element {
	if (!pizzas || pizzas.length === 0) {
		return <p>No pizzas available at the moment.</p>;
	}

	return (
		<ul className="pizzaList">
			{pizzas.map((pizza: Pizza) => (
				<PizzaListItem key={pizza.id} pizza={pizza} />
			))}
		</ul>
	);
}

export default PizzaList;
