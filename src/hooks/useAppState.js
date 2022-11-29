import { useMemo } from "react";
import { StateService } from "services/StateService";

/**
 * Constructs a hook-consumable detached application state.
 */
export function useAppState() {
    const appState = new StateService();
    const renderTime = new Date().getTime();

    return { _renderTime: renderTime, ...appState };
}
