/**
 * Tipifies the shape of the response object provided by the /activity microservice.
 */
interface IBoredActivity {
	activity: string;
	accessibility: number;
	type: string;
	participants: number;
	price: number;
	link: string;
	key: string;
}

export { IBoredActivity };
