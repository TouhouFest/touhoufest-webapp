import { PluginListenerHandle } from "@capacitor/core";
import { removeAllListeners } from "process";
import { vi } from "vitest";

vi.mock('@capacitor/app');

export const App = {
    async addListener(eventName: 'backButton', listenerFunc: (event: {canGoBack: boolean}) => void) : Promise<PluginListenerHandle> {
        return {remove: () => new Promise(resolve => resolve())};
    },

    async removeAllListeners() : Promise<void> {}
        // return new Promise<void>(resolve => resolve());
        // return new Promise(resolve => resolve());
    
}