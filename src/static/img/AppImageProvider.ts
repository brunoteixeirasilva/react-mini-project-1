/**
 * Contract for structuring the properties of the image metadata.
 */
export interface IImageMetadata {
	src: string;
}

/**
 * Contract for structuring the properties of the image metadata, including
 * keeping the information of its author.
 */
export interface IProtectedImageMetadata extends IImageMetadata {
	author: string;
	authorLink: string;
}

/**
 * Contract for structuring the properties of the image provider.
 */
export interface IImageProvider {
	Main: {
		logo: IImageMetadata;
	};
	Login: {
		background: IProtectedImageMetadata;
	};
}

/**
 * Keeps a reference and the resolvers for all the images in the app.
 * It provides image based on their own implementation,
 * however, the solution is centralized.
 */
export const AppImageProvider: IImageProvider = {
	Main: { logo: { src: "/img/logo192.png" } },
	Login: {
		background: {
			author: "Nathan Farrish",
			authorLink:
				"https://unsplash.com/es/fotos/ydyvTNi5Rdg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
			src: "/img/background/nathan-farrish-ydyvTNi5Rdg-unsplash.jpg"
		}
	}
};
