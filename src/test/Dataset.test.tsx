import { describe, expect, test, vi } from "vitest";
import Dataset from "../Dataset";
import { render, screen, waitFor } from "@testing-library/react";
import Papa from 'papaparse';
import dayjs, { Dayjs } from "dayjs/esm";
import timezone from "dayjs/esm/plugin/timezone";
import utc from "dayjs/esm/plugin/utc";
import { NATIVETIMETYPE, USEDEVICETZ } from "../Utils";

// attempting to mock events.csv directly hasn't worked because Papa.parse will not properly parse the input
// HOWEVER, mocking the *result* of Papa.parse has been found to be a good enough workaround!
/*
vi.mock("/src/events.csv", async () => {
            let testevent_crossday:string = 
`event_title,event_description,event_room,event_start_day,event_start_time,event_end_day,event_end_time,event_type,event_age_limit
Pre-Reg Pick Up & Mixer/Social,Badge Pre-Reg Pick Up + a chance to meet and get to know fellow con-goers. (Note: pre-reg will be *outside* the Toyota Meeting Hall),Toyota Hall,3/2/25,19:35,4/26/25,20:30,Convention,
Doors Open (Saturday),TouhouFest's Saturday start time is 9:00AM.,All,3/2/25,19:45,4/27/25,9:00,Convention,
Opening Ceremonies,Welcome to TouhouFest! MikoTan and several others on TouhouFest staff will start things off with a few opening remarks.,Torino Plaza,4/27/25,11:00,4/27/25,11:30,Convention,`
            return {
                default: testevent_crossday
            };
        });
        */


// helper function to forcefully callback helper function inside complete() with supplied parameters
function GenerateMockPapa(mockup:any[]) {
    return vi.fn().mockImplementation(
        async (csvString, config) => {
            config["complete"]({data: mockup});
            return {
                data: ["foobar"]
            }
        }
    );
   
}

describe("Dataset", () => {
    test("cross-day events show proper times", async () => {
        // sanity check mocking timezone
        dayjs.extend(utc);
        dayjs.extend(timezone);
        vi.stubEnv("TZ","America/New_York");
        expect(dayjs.tz.guess()).toBe("America/New_York");

        let mockup:any[] = [
            {
                "event_title":"test event 0",
                "event_description": "test description 0",
                "event_room": "All",
                "event_start_day": "3/2/25",
                "event_start_time": "19:35",
                "event_end_day": "4/6/25",
                "event_end_time": "20:30",
                "event_type": "Convention",
                "event_age_limit": ""
            },
            {
                "event_title":"test event",
                "event_description": "test description",
                "event_room": "Toyota Hall",
                "event_start_day": "3/2/25",
                "event_start_time": "19:35",
                "event_end_day": "4/26/25",
                "event_end_time": "20:30",
                "event_type": "Convention",
                "event_age_limit": ""
            },
        ];

        const getItemTest = vi.spyOn(Storage.prototype, "getItem").mockReturnValue(USEDEVICETZ);

        Papa.parse = GenerateMockPapa(mockup);
        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={vi.fn()} showEventDescription={false} setShowEventDescription={vi.fn()} />
        render(dataset);
        await waitFor(() => {
            // todo: adjust output of papa.parse to maybe call complete function?
            expect(screen.getByText(`Toyota Hall, 3/2 10:35 PM - 4/26 11:30 PM`)).toBeDefined();
            expect(screen.getByText(`All, 3/2 10:35 PM - 4/6 11:30 PM`)).toBeDefined();
        });
    });

    test("events show PST time when in PST timezone", async () => {
        // sanity check mocking timezone
        dayjs.extend(utc);
        dayjs.extend(timezone);
        vi.stubEnv("TZ","America/Los_Angeles");
        expect(dayjs.tz.guess()).toBe("America/Los_Angeles");
        
        const getItemTest = vi.spyOn(Storage.prototype, "getItem").mockReturnValue(USEDEVICETZ);

        // load event
        Papa.parse = GenerateMockPapa([{
            "event_title":"test event 0",
            "event_description": "test description 0",
            "event_room": "All",
            "event_start_day": "3/2/25",
            "event_start_time": "19:35",
            "event_end_day": "3/2/25",
            "event_end_time": "20:30",
            "event_type": "Convention",
            "event_age_limit": ""
        }]); 
        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={vi.fn()} showEventDescription={false} setShowEventDescription={vi.fn()} />
        render(dataset);

        // expectation: time should print exactly
        await waitFor(() => {
            expect(screen.getByText(`All, 7:35 PM - 8:30 PM`)).toBeDefined();
        });

        // possible sol'n? https://github.com/vitest-dev/vitest/issues/1575
    });

    test("events show CST time when flag set to device tz", async () => {
        // sanity check mocking timezone
        dayjs.extend(utc);
        dayjs.extend(timezone);
        vi.stubEnv("TZ","America/Chicago");
        expect(dayjs.tz.guess()).toBe("America/Chicago");
        
        const getItemTest = vi.spyOn(Storage.prototype, "getItem").mockReturnValue(USEDEVICETZ);

        // load event
        Papa.parse = GenerateMockPapa([{
            "event_title":"test event 0",
            "event_description": "test description 0",
            "event_room": "All",
            "event_start_day": "3/2/25",
            "event_start_time": "19:35",
            "event_end_day": "3/2/25",
            "event_end_time": "20:30",
            "event_type": "Convention",
            "event_age_limit": ""
        }]); 
        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={vi.fn()} showEventDescription={false} setShowEventDescription={vi.fn()} />
        render(dataset);

        await waitFor(() => {
            expect(screen.getByText(`All, 9:35 PM - 10:30 PM`)).toBeDefined();
        });

        // possible sol'n? https://github.com/vitest-dev/vitest/issues/1575
    });

    test("show PST times in JST timezone", async () => {
        const getItemTest = vi.spyOn(Storage.prototype, "getItem").mockReturnValue(null);
        // sanity check mocking timezone
        dayjs.extend(utc);
        dayjs.extend(timezone);
        vi.stubEnv("TZ","Asia/Tokyo");
        expect(dayjs.tz.guess()).toBe("Asia/Tokyo");
        
        // load event
        Papa.parse = GenerateMockPapa([{
            "event_title":"test event 0",
            "event_description": "test description 0",
            "event_room": "All",
            "event_start_day": "3/2/25",
            "event_start_time": "19:35",
            "event_end_day": "3/2/25",
            "event_end_time": "20:30",
            "event_type": "Convention",
            "event_age_limit": ""
        }]); 
        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={vi.fn()} showEventDescription={false} setShowEventDescription={vi.fn()} />
        render(dataset);

        // expectation: time should print PST times because flag set to show in con timezone
        await waitFor(() => {
            expect(getItemTest).toHaveBeenCalledWith(NATIVETIMETYPE);
            expect(screen.getAllByText(`Sunday, March 2`).length).greaterThan(0);
            expect(screen.getByText(`All, 7:35 PM - 8:30 PM`)).toBeDefined();
        });
    });

    test("times with different tz-aware dates show on device mode", async () => {
        const getItemTest = vi.spyOn(Storage.prototype, "getItem").mockReturnValue(USEDEVICETZ);
        // sanity check mocking timezone
        dayjs.extend(utc);
        dayjs.extend(timezone);
        vi.stubEnv("TZ","Asia/Tokyo");
        expect(dayjs.tz.guess()).toBe("Asia/Tokyo");
        
        // load event
        Papa.parse = GenerateMockPapa([{
            "event_title":"test event 0",
            "event_description": "test description 0",
            "event_room": "All",
            "event_start_day": "3/2/25",
            "event_start_time": "19:35",
            "event_end_day": "3/2/25",
            "event_end_time": "20:30",
            "event_type": "Convention",
            "event_age_limit": ""
        }]); 
        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={vi.fn()} showEventDescription={false} setShowEventDescription={vi.fn()} />
        render(dataset);

        // expectation: time should print PST times because flag set to show in con timezone
        await waitFor(() => {
            expect(getItemTest).toHaveBeenCalledWith(NATIVETIMETYPE);
            expect(screen.getAllByText(`Monday, March 3`).length).greaterThan(0);
        });

    });

})