import { useState } from "react";
import { appStateService } from "App";

/**
 * Constructs a hook-consumable detached application state.
 */
export function useAppState() {
	const [isLoading, setIsLoading] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	return {
		...appStateService,
		isLoading,
		setIsLoading,
		isLoaded,
		setIsLoaded
	};
}
