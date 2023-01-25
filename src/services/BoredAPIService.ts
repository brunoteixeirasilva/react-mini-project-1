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
				const blobResult = await fetch(`${this.baseURL}/activity`, {
					method: "GET"
				}).then((response) => {
					debugger;
					return response.blob();
				});

				debugger;

				const result: IBoredActivity = JSON.parse(
					await blobResult.text()
				);

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
