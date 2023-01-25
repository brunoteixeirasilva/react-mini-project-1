/**
 * Tipifies the shape of the response object provided by the /activity microservice.
 */
interface ICatFactResponse {
	data: any[];
}

/**
 * Contract for shaping the Activities microservice of BoredAPI.
 */
interface ICatFacts {
	get: () => Promise<ICatFactResponse>;
}

/**
 * Contract for the shape of the BoredAPI service itself.
 */
interface ICatFactsService {
	facts: ICatFacts;
}

const getURL = () => "https://catfact.ninja";

/**
 * Service which implements the contract of the BoredAPI services,
 * including the Microservice of /activity.
 */
class CatFactsService implements ICatFactsService {
	baseURL = getURL();
	facts: null | ICatFacts = null;

	constructor() {
		this.facts = {
			get: async (): Promise<ICatFactResponse> => {
				const result = await fetch(`${getURL()}/facts`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						"Cache-Control": "no-cache"
					}
				}).then((response) => {
					return response.json();
				});

				return result;
			}
		};
	}
}

export { ICatFactResponse, ICatFacts, ICatFactsService, CatFactsService };
