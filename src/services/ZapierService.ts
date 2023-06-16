/**
 * Tipifies the shape of the response object provided by the /activity microservice.
 */
interface IZapierResponse {
	data: any[];
}

/**
 * Contract for shaping the Activities microservice of BoredAPI.
 */
interface IZapierData {
	get: () => Promise<IZapierResponse>;
	post: (data: any) => Promise<IZapierResponse>;
}

/**
 * Contract for the shape of the BoredAPI service itself.
 */
interface IZapierService {
	zapier: IZapierData;
}

const getURL = () => ({
	zapier: "https://hooks.zapier.com/hooks/catch/8805841/3hzfx29/"
});

/**
 * Service which implements the contract of the BoredAPI services,
 * including the Microservice of /activity.
 */
class ZapierService implements IZapierService {
	baseURL = getURL().zapier;
	zapier: null | IZapierData = null;

	constructor() {
		this.zapier = {
			get: async (): Promise<IZapierResponse> => {
				const result = await fetch(`${getURL()}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						"Cache-Control": "no-cache"
					}
				}).then((response) => {
					const r = response.json();
					alert(r);
					return r;
				});

				return result;
			},
			post: async (data: any): Promise<IZapierResponse> => {
				const result = await fetch(`${getURL()}`, {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						"Cache-Control": "no-cache"
					}
				}).then((response) => {
					const r = response.json();
					alert(r);
					return r;
				});

				return result;
			}
		};
	}
}

export { IZapierResponse, IZapierData, IZapierService, ZapierService };
