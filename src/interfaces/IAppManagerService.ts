/**
 * Contract for AppManagerService implementation to
 * follow a documented structure.
 *
 * To be able to:
 * * Set application's title at the header tag.
 * * Show a modal message.
 * * Hide a modal message.
 */
export interface IAppManagerService {
	/**
	 * Sets the Browser (navigator) top bar title based on title in the header tag of the page.
	 */
	setAppTitle: (title: string) => Promise<void> | void;
	/**
	 * Shows a modal message.
	 */
	showMessage: (message: string) => Promise<void> | void;
	/**
	 * Hides a modal message.
	 */
	hideMessage: () => Promise<void> | void;
}
