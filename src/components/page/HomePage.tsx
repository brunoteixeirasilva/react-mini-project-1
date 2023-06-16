import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useAppState } from "hooks/useAppState";

import { Selectors } from "redux/selectors/userProfileSelectors";
import PizzaList from "components/shared/list/pizza/PizzaList";

/**
 * Page Component: HomePage
 *
 * @returns JSX.Element
 */
function HomePage(): JSX.Element {
	// const service = new StateService();
	// Reads the user name from the detached state layer
	// Line below offers functionalities for input to be manipulated and re-populated
	// Uncomment for local state:
	// const [name, setName] = useState("");
	const service = useAppState();
	// const name = service.user.getName(); // Subscriber pattern
	const name = useSelector(Selectors.selectUserProfileName); // Selector pattern
	// const name = useMemo(() => data?.profile?.name ?? "", [service]);

	const [externalData, setExternalData] = useState([]);

	async function callService() {
		try {
			const response = await service.Pizza.getPizzas();

			setExternalData(response);

			await service.zapier.zapier.post(JSON.stringify(response));

			// console.log(response);

			// alert("Pizza data returns successfully. See console.");
		} catch (ex) {
			console.error(`Oops, an error occurred: ${ex}`);
		}
	}

	return (
		<div>
			{!!name ? (
				<>
					<h3>Pizza's - Página inicial. Hello, {name ?? "Anon"}.</h3>
					<section>
						<div>
							<button onClick={callService}>
								Consultar Sabores disponíveis
							</button>
						</div>
						{/* Display a list of the data entries found by the external API service */}
						{externalData ? (
							<PizzaList pizzas={externalData} />
						) : null}
					</section>
				</>
			) : (
				"Loading"
			)}
		</div>
	);
}

export { HomePage };
