import { IAppManagerService } from "interfaces";

/**
 * Implements the application mainstream service layer.
 * Shared services are microservices of this class.
 * For instance:
 * * Message modal behaviors.
 * * Application general behaviors.
 */
export class AppManagerService implements IAppManagerService {
	/**
	 * Sets the Browser (navigator) top bar title based on title in the header tag of the page.
	 */
	setAppTitle(title: string): Promise<void> {
		window.document.title = title;

		return;
	}
	/**
	 * Shows a modal message.
	 */
	showMessage(message: string): Promise<void> {
		// TODO: Implement the system modal component, then show it based on the state change.
		alert(message);

		return Promise.resolve();
	}
	/**
	 * Hides a modal message.
	 */
	hideMessage(): Promise<void> {
		// TODO: Implement the system modal component, then hide it based on the state change.
		return Promise.resolve();
	}
}
