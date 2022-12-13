import { useState } from "react";
import { appState } from "App";

/**
 * Constructs a hook-consumable detached application state.
 */
export function useAppState() {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    return { ...appState, isLoading, setIsLoading, isLoaded, setIsLoaded };
}
