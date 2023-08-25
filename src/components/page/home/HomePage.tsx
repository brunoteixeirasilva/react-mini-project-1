import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useAppState } from "hooks/useAppState";
import { Selectors } from "redux/selectors/userProfileSelectors";

import { AppMenu } from "components/shared/menu/AppMenu";
// import PizzaList from "components/shared/list/pizza/PizzaList";

import "./HomePage.scss";
import { useTranslate } from "hooks/i18n";

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
	const username = useSelector(Selectors.selectUserProfileName); // Selector pattern
	// const name = useMemo(() => data?.profile?.name ?? "", [service]);

	const userWelcomeText = useTranslate("page.home.welcome", { username });
	const loadingText = useTranslate("global.loading");

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
		<div className="homepage">
			{!!username ? (
				<>
					<h3>{userWelcomeText}</h3>
					<section className="homepage__directoryMenu">
						<AppMenu />
					</section>
				</>
			) : (
				"Loading"
			)}
		</div>
	);
}

export { HomePage };
