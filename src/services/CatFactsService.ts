/**
 * Tipifies the shape of the response object provided by the /activity microservice.
 */
interface ICatFactItem {
	activity: string;
	accessibility: number;
	type: string;
}

/**
 * Contract for shaping the Activities microservice of BoredAPI.
 */
interface ICatFacts {
	get: () => Promise<ICatFactItem>;
}

/**
 * Contract for the shape of the BoredAPI service itself.
 */
interface ICatFactsService {
	facts: ICatFacts;
}

/**
 * Service which implements the contract of the BoredAPI services,
 * including the Microservice of /activity.
 */
class CatFactsService implements ICatFactsService {
	baseURL = "https://catfact.ninja";
	facts = null;

	constructor() {
		this.facts = {
			get: async function () {
				const result = await fetch(`${this.baseURL}/facts`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						"Cache-Control": "no-cache"
					}
				}).then((response) => {
					debugger;
					return response.json();
				});

				debugger;

				return result;
			}
		};
	}
}

export { ICatFactItem, ICatFacts, ICatFactsService, CatFactsService };
