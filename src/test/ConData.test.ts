import React from "react";
import { describe, expect, test, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import {
  CON_INFO_CACHE_KEY,
  SCHEDULE_CACHE_KEY,
  DEFAULT_EVENT_DATES,
  fetchConInfo,
  fetchScheduleEvents,
  getBundledConInfo,
  resolveCosplayMeetups,
  resolveEventDates,
  useConData,
} from "../ConData";
import { aboutConPage } from "../menupages/AboutCon";
import { cosplayPage } from "../menupages/Cosplay";

describe("Ubersystem live convention metadata & schedule sync", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
    if (typeof globalThis.ResizeObserver === "undefined") {
      globalThis.ResizeObserver = class ResizeObserver {
        observe() {}
        unobserve() {}
        disconnect() {}
      } as any;
    }
  });

  test("getBundledConInfo returns default fallback metadata", () => {
    const bundled = getBundledConInfo();
    expect(bundled.event_name).toBe("TouhouFest");
    expect(bundled.event_venue).toBe("Torrance Cultural Arts Center");
  });

  test("fetchConInfo and fetchScheduleEvents fetch live from Ubersystem and write to localStorage cache", async () => {
    const liveConInfo = {
      event_name: "TouhouFest",
      year: 2027,
      event_venue: "Torrance Cultural Arts Center",
      dates: {
        epoch: "2027-06-19T09:00:00-07:00",
        eschaton: "2027-06-20T18:00:00-07:00",
      },
    };
    const liveSchedule = [
      {
        id: "evt-1",
        name: "Scarlet Devil Photoshoot",
        location: "Pine Wind Garden",
        start_unix: 1813438800,
        end_unix: 1813441500,
        description: "TH6 Characters",
        tracks: ["Cosplay"],
      },
    ];

    global.fetch = vi.fn().mockImplementation(async (url: string) => {
      if (url.includes("con_info")) {
        return {
          ok: true,
          status: 200,
          json: async () => liveConInfo,
        };
      }
      return {
        ok: true,
        status: 200,
        json: async () => liveSchedule,
      };
    });

    const infoResult = await fetchConInfo();
    const scheduleResult = await fetchScheduleEvents();

    expect(infoResult.year).toBe(2027);
    expect(resolveEventDates(infoResult)).toBe("June 19th - 20th, 2027");
    expect(scheduleResult.length).toBe(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      CON_INFO_CACHE_KEY,
      JSON.stringify(liveConInfo)
    );
    expect(localStorage.setItem).toHaveBeenCalledWith(
      SCHEDULE_CACHE_KEY,
      JSON.stringify(liveSchedule)
    );
  });

  test("fetchConInfo and fetchScheduleEvents retry with exponential backoff on transient HTTP failure", async () => {
    let infoAttempts = 0;
    let scheduleAttempts = 0;

    global.fetch = vi.fn().mockImplementation(async (url: string) => {
      if (url.includes("con_info")) {
        infoAttempts++;
        if (infoAttempts < 3) {
          return { ok: false, status: 503 };
        }
        return {
          ok: true,
          status: 200,
          json: async () => ({ year: 2027, event_name: "TouhouFest Retried" }),
        };
      }
      scheduleAttempts++;
      if (scheduleAttempts < 3) {
        return { ok: false, status: 502 };
      }
      return {
        ok: true,
        status: 200,
        json: async () => [{ id: "1", name: "Cosplay Photoshoot", tracks: ["Cosplay"] }],
      };
    });

    const info = await fetchConInfo("https://registration.touhoufest.org/con_info", 4);
    const schedule = await fetchScheduleEvents(
      "https://registration.touhoufest.org/schedule/panels_json",
      4
    );

    expect(infoAttempts).toBe(3);
    expect(scheduleAttempts).toBe(3);
    expect(info.event_name).toBe("TouhouFest Retried");
    expect(schedule.length).toBe(1);
  });

  test("falls back to localStorage cache when network is offline", async () => {
    const cachedInfo = {
      event_name: "Cached TouhouFest",
      year: 2027,
      dates: {
        epoch: "2027-06-19",
        eschaton: "2027-06-20",
      },
    };
    const cachedSchedule = [
      {
        event_title: "Cached Scarlet Devil Photoshoot",
        event_subtitle: "TH6 Characters",
        meetup_type: "meetups",
        event_room: "Pine Wind Garden",
        event_description: "Cached meetup description",
        event_day: "Saturday",
        event_start_time: "1:00 PM",
        event_end_time: "1:45 PM",
      },
    ];

    (localStorage.getItem as any).mockImplementation((key: string) => {
      if (key === CON_INFO_CACHE_KEY) return JSON.stringify(cachedInfo);
      if (key === SCHEDULE_CACHE_KEY) return JSON.stringify(cachedSchedule);
      return null;
    });
    global.fetch = vi.fn().mockRejectedValue(new Error("Network offline"));

    const info = await fetchConInfo("https://registration.touhoufest.org/con_info", 2);
    const schedule = await fetchScheduleEvents(
      "https://registration.touhoufest.org/schedule/panels_json",
      2
    );

    expect(info.event_name).toBe("Cached TouhouFest");
    expect(resolveEventDates(info)).toBe("June 19th - 20th, 2027");
    expect(resolveCosplayMeetups(schedule)[0].event_title).toBe(
      "Cached Scarlet Devil Photoshoot"
    );
  });

  test("falls back to defaults when offline and localStorage cache is empty", async () => {
    (localStorage.getItem as any).mockReturnValue(null);
    global.fetch = vi.fn().mockRejectedValue(new Error("Offline and uncached"));

    const info = await fetchConInfo("https://registration.touhoufest.org/con_info", 2);
    const schedule = await fetchScheduleEvents(
      "https://registration.touhoufest.org/schedule/panels_json",
      2
    );

    expect(resolveEventDates(info)).toBe(DEFAULT_EVENT_DATES);
    expect(resolveCosplayMeetups(schedule).length).toBeGreaterThan(10);
    expect(info.event_name).toBe(getBundledConInfo().event_name);
  });

  test("AboutCon and Cosplay components render live Ubersystem data with fallback", async () => {
    (localStorage.getItem as any).mockReturnValue(null);
    global.fetch = vi.fn().mockImplementation(async (url: string) => {
      if (url.includes("con_info")) {
        return {
          ok: true,
          status: 200,
          json: async () => ({
            event_name: "TouhouFest",
            year: 2027,
            dates: {
              epoch: "2027-06-19",
              eschaton: "2027-06-20",
            },
          }),
        };
      }
      return {
        ok: true,
        status: 200,
        json: async () => [
          {
            event_title: "Synced Gensokyo Photoshoot",
            event_subtitle: "All Windows Games",
            meetup_type: "meetups",
            event_room: "Pine Wind Garden",
            event_description: "Live synced meetup",
            event_day: "Saturday",
            event_start_time: "2:00 PM",
            event_end_time: "2:45 PM",
          },
        ],
      };
    });

    const Wrapper = () =>
      React.createElement("div", null, aboutConPage.body, cosplayPage.body);

    render(React.createElement(Wrapper));

    await waitFor(() => {
      expect(
        screen.getAllByText(new RegExp("June 19th - 20th, 2027")).length
      ).toBeGreaterThan(0);
      expect(screen.getByText("Synced Gensokyo Photoshoot")).toBeDefined();
    });
  });

  test("useConData hook exposes Ubersystem metadata and fallback helpers", async () => {
    (localStorage.getItem as any).mockReturnValue(null);
    global.fetch = vi.fn().mockRejectedValue(new Error("Offline"));

    let latestHookResult: ReturnType<typeof useConData> | null = null;
    function HookProbe() {
      latestHookResult = useConData({ maxAttempts: 1 });
      return React.createElement("div", null, latestHookResult.eventDates);
    }

    render(React.createElement(HookProbe));

    await waitFor(() => {
      expect(latestHookResult?.isLoaded).toBe(true);
      expect(latestHookResult?.eventDates).toBe(DEFAULT_EVENT_DATES);
      expect(latestHookResult?.cosplayMeetups.length).toBeGreaterThan(10);
    });
  });
});
