import { IService } from "interfaces";

/**
 * Tipifies the shape of the response object provided by the /activity microservice.
 */
interface IBoredActivity {
	activity: string;
	accessibility: number;
	type: string;
}

/**
 * Contract for shaping the Activities microservice of BoredAPI.
 */
interface IBoredAPIActivities {
	get: () => Promise<IBoredActivity>;
}

/**
 * Contract for the shape of the BoredAPI service itself.
 */
interface IBoredAPIService extends IService {
	activities: IBoredAPIActivities;
}

const getURL = () => "https://www.boredapi.com/api";

/**
 * Service which implements the contract of the BoredAPI services,
 * including the Microservice of /activity.
 */
class BoredAPIService implements IBoredAPIService {
	baseURL = getURL();
	activities = null;
	key = "bored-api-service";

	constructor() {
		this.activities = {
			get: async function () {
				const jsonResult = await fetch(`${getURL()}/activity`, {
					method: "GET"
				}).then((response) => {
					return response.json();
				});

				const result: IBoredActivity = JSON.parse(jsonResult);

				debugger;

				return result;
			}
		};
	}
}

export {
	IBoredActivity,
	IBoredAPIActivities,
	IBoredAPIService,
	BoredAPIService
};
