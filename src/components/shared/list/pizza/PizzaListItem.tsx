import React from "react";

import { Pizza } from "models/Pizza";

import "./PizzaListItem.scss";

/**
 * Contract for controlling the pizza list item props.
 */
export interface IPizzaItemProps {
	pizza: Pizza;
}

/**
 * Displays the pizza item.
 *
 * @param param0
 * @returns
 */
export function PizzaListItem({ pizza }: IPizzaItemProps): JSX.Element {
	// TODO: Implement the lazy image loading
	// const pizzaPictureResolved = useMemo(() => {
	//     const pizzaPicture = require(`./${pizza.picturePath}`)
	//     return pizzaPicture ?? ""
	// }, [pizza.picturePath]);

	return (
		<li className="pizzaListItem">
			<div className="sideImage">
				<img alt={`${pizza.description}`} src={pizza.picturePath} />
			</div>
			<div className="content">
				<h2>{pizza.name}</h2>
				<p>{pizza.description}</p>
				<p>{pizza.price}</p>
			</div>
		</li>
	);
}
