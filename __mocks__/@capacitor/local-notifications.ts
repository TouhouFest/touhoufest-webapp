import { PluginListenerHandle } from "@capacitor/core/types/definitions";
import { LocalNotificationSchema, PendingResult, PermissionStatus } from "@capacitor/local-notifications"
import { vi } from "vitest"

vi.mock('@capacitor/local-notifications');

export const LocalNotifications = {
    async checkPermissions(): Promise<{display: string|undefined}>{
        return {display:undefined};
    },

    async requestPermissions() : Promise<{display: string|undefined}> {
        return {display:undefined};
    },

    async addListener(eventName: 'localNotificationReceived', listenerFunc: (notification: LocalNotificationSchema) => void) {
        return {remove: () => {}};
    },

    async getPending() : Promise<PendingResult> {
        return {notifications: []};
    }
}