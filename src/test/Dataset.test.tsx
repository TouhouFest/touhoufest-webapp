import { beforeAll, describe, expect, test, vi } from "vitest";
import Dataset from "../Dataset";
import { render, screen, waitFor } from "@testing-library/react";
import Papa from 'papaparse';
import dayjs, { Dayjs } from "dayjs/esm";
import timezone from "dayjs/esm/plugin/timezone";
import utc from "dayjs/esm/plugin/utc";
import { DEFAULTNOTIFY, NATIVETIMETYPE, USEDEVICETZ } from "../Utils";
import { faBroom } from "@fortawesome/free-solid-svg-icons";
import { SetDeviceTimeZone } from "./TestUtils";
import { LocalNotifications } from "@capacitor/local-notifications";
import userEvent from "@testing-library/user-event";
import App from "../App";

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
export function GenerateMockPapa(mockup:any[]) {
    return vi.fn().mockImplementation(
        async (csvString, config) => {
            config["complete"]({data: mockup});
            return {
                data: ["foobar"]
            }
        }
    );
   
}

function mockGetItemImplementation(input:string, output:string | null) : string | null {
    if(input === NATIVETIMETYPE) {return output;}
    else {return null;}
}

describe("Dataset", () => {

    // necessary to allow vitest fake timers to test properly with react-testing-library
    beforeAll(() => {
        const _jest = globalThis.jest;
    
        globalThis.jest = {
        ...globalThis.jest,
        advanceTimersByTime: vi.advanceTimersByTime.bind(vi)
        };
    
        return () => void (globalThis.jest = _jest);
    });

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

        const getItemTest = vi.spyOn(Storage.prototype, "getItem").mockImplementation((input) => mockGetItemImplementation(input, USEDEVICETZ));
        // const getItemTest = vi.spyOn(Storage.prototype, "getItem").mockReturnValue(USEDEVICETZ);

        Papa.parse = GenerateMockPapa(mockup);
        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={faBroom} showEventDescription={false} setShowEventDescription={vi.fn()} />
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
        
        const getItemTest = vi.spyOn(Storage.prototype, "getItem").mockImplementation((input) => mockGetItemImplementation(input, USEDEVICETZ));

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
        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={faBroom} showEventDescription={false} setShowEventDescription={vi.fn()} />
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
        
        const getItemTest = vi.spyOn(Storage.prototype, "getItem").mockImplementation((input) => mockGetItemImplementation(input, USEDEVICETZ));

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
        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={faBroom} showEventDescription={false} setShowEventDescription={vi.fn()} />
        render(dataset);

        await waitFor(() => {
            expect(screen.getByText(`All, 9:35 PM - 10:30 PM`)).toBeDefined();
        });

        // possible sol'n? https://github.com/vitest-dev/vitest/issues/1575
    });

    test("show PST times in JST timezone", async () => {
        const getItemTest = vi.spyOn(Storage.prototype, "getItem").mockImplementation((input) => mockGetItemImplementation(input, null));
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
        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={faBroom} showEventDescription={false} setShowEventDescription={vi.fn()} />
        render(dataset);

        // expectation: time should print PST times because flag set to show in con timezone
        await waitFor(() => {
            expect(getItemTest).toHaveBeenCalledWith(NATIVETIMETYPE);
            expect(screen.getAllByText(`Sunday, March 2`).length).greaterThan(0);
            expect(screen.getByText(`All, 7:35 PM - 8:30 PM`)).toBeDefined();
        });
    });

    test("times with different tz-aware dates show on device mode", async () => {
        const getItemTest = vi.spyOn(Storage.prototype, "getItem").mockImplementation((input) => mockGetItemImplementation(input, USEDEVICETZ));
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
        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={faBroom} showEventDescription={false} setShowEventDescription={vi.fn()} />
        render(dataset);

        // expectation: time should print PST times because flag set to show in con timezone
        await waitFor(() => {
            expect(getItemTest).toHaveBeenCalledWith(NATIVETIMETYPE);
            expect(screen.getAllByText(`Monday, March 3`).length).greaterThan(0);
        });
    });

    test("overlapping long events edge case", async () => {
        // sanity check mocking timezone
        dayjs.extend(utc);
        dayjs.extend(timezone);
        vi.stubEnv("TZ","America/Los_Angeles");
        expect(dayjs.tz.guess()).toBe("America/Los_Angeles");
        Papa.parse = GenerateMockPapa([
            {
                "event_title":"test event 0",
                "event_description": "test description 0",
                "event_room": "All",
                "event_start_day": "3/2/25",
                "event_start_time": "19:35",
                "event_end_day": "3/2/25",
                "event_end_time": "20:30",
                "event_type": "Convention",
                "event_age_limit": ""
            },
            {
                "event_title":"test event 1",
                "event_description": "test description 1",
                "event_room": "All",
                "event_start_day": "3/2/25",
                "event_start_time": "19:45",
                "event_end_day": "4/27/25",
                "event_end_time": "9:00",
                "event_type": "Convention",
                "event_age_limit": ""
            },
            {
                "event_title":"test event 2",
                "event_description": "test description 2",
                "event_room": "All",
                "event_start_day": "4/27/25",
                "event_start_time": "11:00",
                "event_end_day": "4/27/25",
                "event_end_time": "11:30",
                "event_type": "Convention",
                "event_age_limit": ""
            },
            {
                "event_title":"test event 3",
                "event_description": "test description 3",
                "event_room": "All",
                "event_start_day": "4/28/25",
                "event_start_time": "14:30",
                "event_end_day": "4/28/25",
                "event_end_time": "15:30",
                "event_type": "Convention",
                "event_age_limit": ""
            },
        ]); 

        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={faBroom} showEventDescription={false} setShowEventDescription={vi.fn()} />
        render(dataset);

        // expectation: time should print PST times because flag set to show in con timezone
        await waitFor(() => {
            expect(screen.queryAllByText(`Sunday, April 27`).length).greaterThan(0);
        });


    });

    test("notification components update if user sets notification inside event description", async () => {
        SetDeviceTimeZone("America/New_York");
        vi.useFakeTimers();
        const mockedSystemTime = new Date(2025,1,3,12,30,0);
        vi.setSystemTime(mockedSystemTime);

        const getItemTest = vi.spyOn(Storage.prototype, "getItem").mockImplementation((input) => {
            if(input === DEFAULTNOTIFY) {return "15";}
            else {return null;}
        });
        const setItemTest = vi.spyOn(Storage.prototype, "setItem").mockImplementation((key, value) => {
            return null;
        });
        LocalNotifications.checkPermissions = vi.fn().mockImplementation(
            async () => {
                return {display: 'granted'}
            }
        );
        LocalNotifications.schedule = vi.fn().mockImplementation(async () => {
            return {notifications: []}
        });
        LocalNotifications.addListener = vi.fn().mockImplementation(async () => {
            return {remove: null}
        });

        Papa.parse = GenerateMockPapa([
            {
                "event_title":"test event 0",
                "event_description": "test description 0",
                "event_room": "All",
                "event_start_day": "3/2/25",
                "event_start_time": "19:35",
                "event_end_day": "3/2/25",
                "event_end_time": "20:30",
                "event_type": "Convention",
                "event_age_limit": ""
            },
        ]); 

        let app = <App menupagedata={[]} menuheader={<></>} />
        const {container} = render(app);

        let result:HTMLCollectionOf<Element> = container.getElementsByClassName("fa-bell");
        expect(result.length).equal(1);
        expect(result[0].getAttribute("data-prefix")).equal("far");

        await userEvent.click(screen.getByText("test event 0"));

        await waitFor(() => {
            expect(screen.getAllByText("test description 0").length).toBe(1);
            let allicons:HTMLElement[] = screen.getAllByRole("img", {hidden: true});
            allicons = allicons.filter((elem:HTMLElement) => {
                let cls:string = elem.getAttribute("class") || "";
                return cls.includes("fa-bell") && elem.getAttribute("data-prefix") === "far";
            });
            expect(allicons.length).toBe(2);

            userEvent.click(allicons[1]);
        })
        
        await waitFor(() => {
            screen.debug();
            expect(getItemTest).toHaveBeenCalledWith(DEFAULTNOTIFY);
            // expect(setItemTest).toHaveBeenCalledWith("NOTIFY-0");
            let allicons:HTMLElement[] = screen.getAllByRole("img", {hidden: true});
            allicons = allicons.filter((elem:HTMLElement) => {
                let cls:string = elem.getAttribute("class") || "";
                return cls.includes("fa-bell") && elem.getAttribute("data-prefix") === "fas";
            });
            expect(allicons.length).toBe(2);
        });

        // let filterResult:HTMLElement[] = screen.getAllByRole("img", {hidden:true});
        // expect(filterResult[0].classList).toHaveClass("foobar");
        // await expect.element(filterResult[0])


        /*
        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={faBroom} showEventDescription={mockShowEventDescription} setShowEventDescription={MockSetShowEventDescription} />
        render(dataset);

        let filterResult:HTMLElement[] = screen.getAllByRole("img", {hidden:true});
        expect(filterResult.length).equal(2);

        await userEvent.click(screen.getByText("Convention"));

        await waitFor(() => {
            screen.debug();
            let expandedFilterResults:HTMLElement[] = screen.getAllByRole("img", {hidden: true});
            expect(screen.getByText("test description 0")).toBeTruthy();
            expect(screen.findAllByText("test description 0")).length.greaterThan(0);
            expect(expandedFilterResults.length).equal(4);
        }).then(() => {
            vi.useRealTimers();
        });

        */

    });

})