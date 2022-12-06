import { store } from "App";
import { useState } from "react";
import { StateService } from "services/StateService";

const appState = new StateService(store);

/**
 * Constructs a hook-consumable detached application state.
 */
export function useAppState() {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    return { ...appState, isLoading, setIsLoading, isLoaded, setIsLoaded };
}
