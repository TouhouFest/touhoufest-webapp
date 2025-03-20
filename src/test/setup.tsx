import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

/*
import { PermissionStatus } from "@capacitor/local-notifications"
import { vi } from "vitest"

vi.mock('@capacitor/local-notifications');

export const LocalNotifications = {
    async checkPermissions(): Promise<PermissionStatus>{
        return {display:'denied'};
    }
}


*/

vi.mock('@capacitor/local-notifications');
vi.mock('@capacitor/toast');