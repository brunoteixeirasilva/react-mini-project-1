export function useStyles() {
	return {
		header: {
			display: "flex",
			flexFlow: "row nowrap",
			// border: "1px solid black",
			padding: "10px 15px",
			background: "#CCC",
			boxShadow: "3px 0px 15px #AAA"
		},
		appTitle: {
			flex: "0 0 auto",
			fontWeight: 500,
			textDecoration: "none",
			color: "black"
		},
		navButtons: {
			flex: "0 0 auto",
			marginLeft: "auto"
		},
		navButtonUnit: {
			marginLeft: 8
		}
	};
}
