import React from "react";

interface IAPIController {
	key: string;
	title: undefined | string;
	onClick: undefined | (() => void | Promise<void>);
	buttonText: undefined | string;
}

function APIController({
	key,
	title,
	onClick,
	buttonText
}: IAPIController): JSX.Element | null {
	return (
		<div
			key={key}
			style={{
				boxSizing: "border-box",
				border: "1px #2596be solid",
				marginBottom: "10px",
				paddingBottom: "10px",
				width: "35%",
				flex: "0 0 auto",
				borderRadius: "8px"
			}}
		>
			<h4>{title ?? "Title-not-defined"}</h4>
			<button
				onClick={
					onClick ??
					function () {
						alert("Error-Function-not-implemented");
					}
				}
			>
				{buttonText ?? "Text-not-defined"}
			</button>
		</div>
	);
}

export { IAPIController, APIController };
