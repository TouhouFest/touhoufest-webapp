import { PluginListenerHandle } from "@capacitor/core/types/definitions";
import { LocalNotificationSchema, PendingResult, PermissionStatus } from "@capacitor/local-notifications"
import { vi } from "vitest"

// vi.mock('@capacitor/local-notifications');

export const LocalNotifications = {
    async checkPermissions(): Promise<PermissionStatus>{
        return {display:'denied'};
    },

    async requestPermissions() : Promise<PermissionStatus> {
        return {display:'denied'};
    },

    async addListener(eventName: 'localNotificationReceived', listenerFunc: (notification: LocalNotificationSchema) => void) {
        return {remove: () => {}};
    },

    async getPending() : Promise<PendingResult> {
        return {notifications: []};
    }
}