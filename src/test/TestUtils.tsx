import dayjs from "dayjs/esm";
import { expect, vi } from "vitest";
import customParseFormat from "dayjs/esm/plugin/customParseFormat";
import timezone from "dayjs/esm/plugin/timezone";
import utc from "dayjs/esm/plugin/utc";

dayjs.extend(customParseFormat);
dayjs.extend(timezone);
dayjs.extend(utc);

export function SetDeviceTimeZone(tz_setting:string) {
    // sanity check mocking timezone
    dayjs.extend(utc);
    dayjs.extend(timezone);
    vi.stubEnv("TZ",tz_setting);
    expect(dayjs.tz.guess()).toBe(tz_setting);
}
