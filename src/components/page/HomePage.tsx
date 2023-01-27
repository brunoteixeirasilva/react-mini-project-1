import React, { useMemo, useContext, useState } from "react";
import { useSelector } from "react-redux";
import { store } from "App";

import { MiniContext, MiniContextConsumer } from "storage/context/index";
import { useAppState } from "hooks/useAppState";

import { Selectors } from "redux/selectors/userProfileSelectors";
import { APIController, IAPIController } from "components/api/APIController";

/**
 * Page Component: HomePage
 *
 * @returns JSX.Element
 */
function HomePage(): JSX.Element {
	// const service = new StateService();
	// Reads the user name from the detached state layer
	const timestamp: number = new Date().getTime();
	// Line below offers functionalities for input to be manipulated and re-populated
	// Uncomment for local state:
	// const [name, setName] = useState("");
	const service = useAppState();
	// const name = service.user.getName(); // Subscriber pattern
	const name = useSelector(Selectors.selectUserProfileName); // Selector pattern
	// const name = useMemo(() => data?.profile?.name ?? "", [service]);

	const apiList: IAPIController[] = [
		{
			key: service.catFacts.key,
			title: "API Service",
			onClick: callService,
			buttonText: "Call external service"
		},
		{
			key: "title-service",
			title: "Set Application Title Button",
			onClick: setApplicationTitle,
			buttonText: "Set App Title"
		},
		{
			key: "alert-service",
			title: "Alert Button",
			onClick: openAlert,
			buttonText: "Alert!"
		}
	];

	function setProfileName(event) {
		event.preventDefault();

		service.user.setName(event.target.value);
		// setTimestamp(new Date().getTime());
	}

	// Handles the click of the button and manipulates the detached state layer
	const handleClick = async (event) => {
		event.preventDefault();

		// If my name is an undesirable value, do not set values in the state layer
		if (!name || name === "") return;

		// Will call the name Setter within the User sub-service
		// service.User.setName(name);
		service.user.setName(name);
		// setTimestamp(new Date().getTime());
	};

	async function setApplicationTitle() {
		return await service.appManager.setAppTitle("Test title");
	}

	async function openAlert() {
		return await service.appManager.showMessage("Hi Team!");
	}

	async function callService() {
		try {
			const response = await service.catFacts.facts.get();

			console.log(response.data);

			alert("Data was logged in console successfully.");
		} catch (ex) {
			console.error(`Oops, an error occurred: ${ex}`);
		}
	}

	return (
		<div>
			{!!name ? (
				<>
					<h3>Home Page. Hello, {name ?? "Anon"}.</h3>
					<section>
						<input
							placeholder="Type a name..."
							value={name}
							onChange={setProfileName}
						/>
						<br />
						<div>Render Time: {timestamp}</div>
						<article
							style={{
								marginTop: "20px",
								display: "flex",
								flexFlow: "column nowrap",
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							{apiList.map((apiConfig) => {
								return (
									<APIController
										key={apiConfig.key}
										title={apiConfig.title}
										onClick={apiConfig.onClick}
										buttonText={apiConfig.buttonText}
									/>
								);
							})}
						</article>
					</section>
				</>
			) : (
				"Loading"
			)}
		</div>
	);
}

export { HomePage };
