import { ShowOptions } from "@capacitor/toast";
import { vi } from "vitest";

vi.mock('@capacitor/toast');
export const Toast = {
    async show(options: ShowOptions) : Promise<void> {},
}