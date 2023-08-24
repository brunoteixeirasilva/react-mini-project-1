/**
 * Contract for structuring the properties of the image provider.
 */
export interface IImageProvider {
	Main: {
		logo: string;
	};
	Login: {
		background: string;
	};
}

/**
 * Keeps a reference and the resolvers for all the images in the app.
 * It provides image based on their own implementation,
 * however, the solution is centralized.
 */
export const AppImageProvider: IImageProvider = {
	Main: { logo: "/img/logo192.png" },
	Login: { background: "/img/background/isaac-chou-7aQIAPdxFZQ-unsplash.jpg" }
};
