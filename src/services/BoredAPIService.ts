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
interface IBoredAPIService {
	activities: IBoredAPIActivities;
}

/**
 * Service which implements the contract of the BoredAPI services,
 * including the Microservice of /activity.
 */
class BoredAPIService implements IBoredAPIService {
	baseURL = "";
	activities = null;

	constructor() {
		this.baseURL = "https://www.boredapi.com/api";
		this.activities = {
			get: async function () {
				const result: IBoredActivity = await fetch(
					`${this.baseURL}/activity`
				).then((response) => {
					return response.json();
				});

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
