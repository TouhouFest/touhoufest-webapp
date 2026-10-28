import { describe, expect, test, vi } from "vitest";
import Dataset from "../Dataset";
import { render, screen, waitFor } from "@testing-library/react";
import Papa from 'papaparse';
import dayjs, { Dayjs } from "dayjs/esm";
import timezone from "dayjs/esm/plugin/timezone";
import utc from "dayjs/esm/plugin/utc";
import { COOKIE_NAME, cookies, NATIVETIMETYPE, USEDEVICETZ } from "../Utils";
import { faBroom } from "@fortawesome/free-solid-svg-icons";

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


// mock fetch response for test cases
function GenerateMockPapa(mockup: any[]) {
  const items = mockup.map((item, idx) => ({
    id: item.id || `mock-id-${idx}`,
    ...item,
  }));
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    json: async () => items,
  });
  return vi.fn();
}

let mockCacheData: string | null = null;

function mockGetItemImplementation(
  input: string,
  output: string | null
): string | null {
  if (input === NATIVETIMETYPE) {
    return output;
  }
  if (input === "TF_SCHEDULE_CACHE") {
    return mockCacheData;
  }
  return null;
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

        const getItemTest = localStorage.getItem.mockImplementation((input) => mockGetItemImplementation(input, USEDEVICETZ));
        // const getItemTest = vi.spyOn(Storage.prototype, "getItem").mockReturnValue(USEDEVICETZ);

        Papa.parse = GenerateMockPapa(mockup);
        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={faBroom} showEventDescription={false} setShowEventDescription={vi.fn()} selectedDay="All Days"/>
        render(dataset);
        await waitFor(() => {
            // todo: adjust output of papa.parse to maybe call complete function?
            expect(screen.getByText(new RegExp("Toyota Hall"))).toBeDefined();
            expect(screen.getByText(new RegExp("3/2 10:35 PM - 4/26 11:30 PM"))).toBeDefined();
            expect(screen.getByText(new RegExp("All"))).toBeDefined();
            expect(screen.getByText(new RegExp("3/2 10:35 PM - 4/6 11:30 PM"))).toBeDefined();
        });
    });

    test("events show PST time when in PST timezone", async () => {
        // sanity check mocking timezone
        dayjs.extend(utc);
        dayjs.extend(timezone);
        vi.stubEnv("TZ","America/Los_Angeles");
        expect(dayjs.tz.guess()).toBe("America/Los_Angeles");
        
        const getItemTest = localStorage.getItem.mockImplementation((input) => mockGetItemImplementation(input, USEDEVICETZ));

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
        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={faBroom} showEventDescription={false} setShowEventDescription={vi.fn()} selectedDay="All Days"/>
        render(dataset);

        // expectation: time should print exactly
        await waitFor(() => {
            expect(screen.getByText(new RegExp(`7:35 PM - 8:30 PM`))).toBeDefined();
            expect(screen.getByText(new RegExp(`All`))).toBeDefined();
        });

        // possible sol'n? https://github.com/vitest-dev/vitest/issues/1575
    });

    test("events show CST time when flag set to device tz", async () => {
        // sanity check mocking timezone
        dayjs.extend(utc);
        dayjs.extend(timezone);
        vi.stubEnv("TZ","America/Chicago");
        expect(dayjs.tz.guess()).toBe("America/Chicago");
        
        const getItemTest = localStorage.getItem.mockImplementation((input) => mockGetItemImplementation(input, USEDEVICETZ));

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
        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={faBroom} showEventDescription={false} setShowEventDescription={vi.fn()} selectedDay="All Days"/>
        render(dataset);

        await waitFor(() => {
            expect(screen.getByText(new RegExp(`All`))).toBeDefined();
            expect(screen.getByText(new RegExp(`9:35 PM - 10:30 PM`))).toBeDefined();
        });

        // possible sol'n? https://github.com/vitest-dev/vitest/issues/1575
    });

    test("show PST times in JST timezone", async () => {
        const getItemTest = localStorage.getItem.mockImplementation((input) => mockGetItemImplementation(input, null));
        // const getItemTest = (vi.spyOn(Storage.prototype, "getItem")).mockImplementation((input) => mockGetItemImplementation(input, null));
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
        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={faBroom} showEventDescription={false} setShowEventDescription={vi.fn()} selectedDay="All Days"/>
        render(dataset);

        // expectation: time should print PST times because flag set to show in con timezone
        await waitFor(() => {
            expect(getItemTest).toHaveBeenCalledWith(NATIVETIMETYPE);
            expect(screen.getAllByText(`Sunday, March 2`).length).greaterThan(0);
            expect(screen.getByText(new RegExp(`All`))).toBeDefined();
            expect(screen.getByText(new RegExp(`7:35 PM - 8:30 PM`))).toBeDefined();
        });
    });

    test("times with different tz-aware dates show on device mode", async () => {
        const getItemTest = localStorage.getItem.mockImplementation((input) => mockGetItemImplementation(input, USEDEVICETZ));
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
        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={faBroom} showEventDescription={false} setShowEventDescription={vi.fn()} selectedDay="All Days"/>
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

        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={faBroom} showEventDescription={false} setShowEventDescription={vi.fn()} selectedDay="All Days"/>
        render(dataset);

        // expectation: time should print PST times because flag set to show in con timezone
        await waitFor(() => {
            expect(screen.queryAllByText(`Sunday, April 27`).length).greaterThan(0);
        });
    });

    test("handle events with empty description", async () => {
        // follow a similar model if scenario arises where event_title needs to be null
        Papa.parse = GenerateMockPapa([
            {
                "event_title":"test event 0",
                "event_description": null,
                "event_room": "All",
                "event_start_day": "3/2/25",
                "event_start_time": "19:35",
                "event_end_day": "3/2/25",
                "event_end_time": "20:30",
                "event_type": "Convention",
                "event_age_limit": ""
            },
       ]); 

        let dataset = <Dataset mode="filter" param_fxn={vi.fn()} appliedFilters={{"search_query":"test", "event_types":[], "room_list":[]}} changeDays={vi.fn()} oppositeTheme={faBroom} showEventDescription={false} setShowEventDescription={vi.fn()} selectedDay="All Days"/>
        render(dataset);

        // expectation: time should print PST times because flag set to show in con timezone
        await waitFor(() => {
            expect(screen.getAllByText("test event 0").length).eq(1);
        });
    });

  test("transforms Ubersystem panels_json format", async () => {
    GenerateMockPapa([
      {
        name: "Touhou Music Trivia",
        location: "Panel Room 1",
        start_unix: 1740972900,
        end_unix: 1740976200,
        duration: 55,
        description: "Test your knowledge of Gensokyo music!",
        panelists: ["ZUN", "Marisa"],
        rating: "18+",
        content: ["Loud Audio"],
        tracks: ["Panel", "Music"],
      },
    ]);

    let dataset = (
      <Dataset
        mode="home"
        param_fxn={vi.fn()}
        appliedFilters={vi.fn()}
        changeDays={vi.fn()}
        oppositeTheme={faBroom}
        showEventDescription={false}
        setShowEventDescription={vi.fn()}
        selectedDay="All Days"
      />
    );
    render(dataset);

    await waitFor(() => {
      expect(screen.getByText("Touhou Music Trivia")).toBeDefined();
      expect(screen.getByText(new RegExp("Panel Room 1"))).toBeDefined();
      expect(screen.getByText("18+")).toBeDefined();
      expect(screen.getByText("Panel")).toBeDefined();
      expect(screen.getByText("Music")).toBeDefined();
      expect(screen.getByText("Loud Audio")).toBeDefined();
    });
  });

  test("loads from localStorage cache when fetch fails (offline)", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network offline"));
    mockCacheData = JSON.stringify([
      {
        id: "offline-1",
        name: "Cached Offline Event",
        location: "Shrine Room",
        start_unix: 1740972900,
        end_unix: 1740976200,
        tracks: ["Offline"],
        rating: "All Ages",
        content: [],
      },
    ]);

    let dataset = (
      <Dataset
        mode="home"
        param_fxn={vi.fn()}
        appliedFilters={vi.fn()}
        changeDays={vi.fn()}
        oppositeTheme={faBroom}
        showEventDescription={false}
        setShowEventDescription={vi.fn()}
        selectedDay="All Days"
      />
    );
    render(dataset);

    await waitFor(() => {
      expect(screen.getByText("Cached Offline Event")).toBeDefined();
      expect(screen.getByText(new RegExp("Shrine Room"))).toBeDefined();
    });
    mockCacheData = null;
  });

  test("retries fetch with backoff on failure and succeeds", async () => {
    let attempts = 0;
    global.fetch = vi.fn().mockImplementation(async () => {
      attempts++;
      if (attempts < 3) {
        return { ok: false, status: 503, statusText: "Unavailable" };
      }
      return {
        ok: true,
        status: 200,
        json: async () => [
          {
            id: "retry-1",
            name: "Retried Event",
            location: "Main Stage",
            start_unix: 1740972900,
            end_unix: 1740976200,
            tracks: ["Main"],
            rating: "All Ages",
            content: [],
          },
        ],
      };
    });

    let dataset = (
      <Dataset
        mode="home"
        param_fxn={vi.fn()}
        appliedFilters={vi.fn()}
        changeDays={vi.fn()}
        oppositeTheme={faBroom}
        showEventDescription={false}
        setShowEventDescription={vi.fn()}
        selectedDay="All Days"
      />
    );
    render(dataset);

    await waitFor(() => {
      expect(screen.getByText("Retried Event")).toBeDefined();
      expect(attempts).toBeGreaterThanOrEqual(3);
    });
  });

  test("supports stable event string IDs and filters by bookmarks", async () => {
    cookies.set(COOKIE_NAME, "uuid-event-2");
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => [
        {
          id: "uuid-event-1",
          name: "First Stable Event",
          location: "Room A",
          start_unix: 1740972900,
          end_unix: 1740976200,
          tracks: ["Track 1"],
          rating: "All Ages",
          content: [],
        },
        {
          id: "uuid-event-2",
          name: "Second Stable Event",
          location: "Room B",
          start_unix: 1740976500,
          end_unix: 1740979800,
          tracks: ["Track 2"],
          rating: "All Ages",
          content: [],
        },
      ],
    });

    let dataset = (
      <Dataset
        mode="bookmarks"
        param_fxn={vi.fn()}
        appliedFilters={vi.fn()}
        changeDays={vi.fn()}
        oppositeTheme={faBroom}
        showEventDescription={false}
        setShowEventDescription={vi.fn()}
        selectedDay="All Days"
      />
    );
    render(dataset);

    await waitFor(() => {
      expect(screen.getByText("Second Stable Event")).toBeDefined();
      expect(screen.queryByText("First Stable Event")).toBeNull();
    });

    cookies.remove(COOKIE_NAME);
  });
});