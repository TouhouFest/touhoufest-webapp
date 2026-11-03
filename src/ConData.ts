import dayjs from "dayjs/esm/index.js";
import timezone from "dayjs/esm/plugin/timezone";
import utc from "dayjs/esm/plugin/utc";
import { useEffect, useState } from "react";
import { CON_TIMEZONE } from "./Utils";
import bundledCosplayMeetupsJson from "./menupages/cosplaymeetups.json";

dayjs.extend(utc);
dayjs.extend(timezone);

export const CON_INFO_API_URL =
  import.meta.env.VITE_CON_INFO_API_URL ||
  "https://registration.touhoufest.org/con_info";
export const SCHEDULE_API_URL =
  import.meta.env.VITE_SCHEDULE_API_URL ||
  "https://registration.touhoufest.org/schedule/panels_json";

export const CON_INFO_CACHE_KEY = "TF_CON_INFO_CACHE";
export const SCHEDULE_CACHE_KEY = "TF_SCHEDULE_CACHE";

export const DEFAULT_EVENT_DATES = "June 20th - 21st, 2026";
export const DEFAULT_VENUE_NAME = "Torrance Cultural Arts Center";
export const DEFAULT_VENUE_ADDRESS = "3330 Civic Center Dr, Torrance, CA 90503";

export interface CosplayMeetupItem {
  event_title: string;
  event_subtitle: string;
  meetup_type: string;
  event_room: string;
  event_description: string;
  event_day: string;
  event_start_time: string;
  event_end_time: string;
  [key: string]: any;
}

export interface ConInfoPayload {
  event_name?: string;
  year?: number | string;
  organization_name?: string;
  event_timezone?: string;
  event_venue?: string;
  event_venue_address?: string;
  urls?: Record<string, string>;
  dates?: Record<string, string | null>;
  status?: Record<string, boolean>;
  badges?: Record<string, any>;
  vendor_types?: Array<{
    key: string;
    label: string;
    price: number;
    discounted_badges: number;
  }>;
  [key: string]: any;
}

const DEFAULT_CON_INFO: ConInfoPayload = {
  event_name: "TouhouFest",
  year: 2026,
  organization_name: "AMP Organization",
  event_timezone: "US/Pacific",
  event_venue: DEFAULT_VENUE_NAME,
  event_venue_address: DEFAULT_VENUE_ADDRESS,
  urls: {
    url_root: "https://registration.touhoufest.org",
    alt_schedule_url: "https://touhoufest.org/schedule",
    code_of_conduct_url: "https://touhoufest.org/about/guidelines",
    privacy_policy_url: "https://touhoufest.org/privacy-policy",
    contact_url: "https://touhoufest.org/about/contact",
    prereg_faq_url: "https://touhoufest.org/about/faq/#registration-faq",
    volunteer_perks_url: "https://touhoufest.org/volunteering",
    exhibitor_info_url: "https://touhoufest.org/exhibitors-info",
  },
  dates: {
    dates_display: DEFAULT_EVENT_DATES,
  },
  status: {
    at_the_con: false,
    post_con: false,
    hide_schedule: false,
    before_prereg_takedown: true,
    dealer_reg_open: true,
    panels_open: true,
  },
};

export function getBundledConInfo(): ConInfoPayload {
  return JSON.parse(JSON.stringify(DEFAULT_CON_INFO));
}

function normalizeConInfo(raw: Partial<ConInfoPayload>): ConInfoPayload {
  const bundled = getBundledConInfo();
  return {
    ...bundled,
    ...raw,
    urls: { ...(bundled.urls || {}), ...(raw.urls || {}) },
    dates: { ...(bundled.dates || {}), ...(raw.dates || {}) },
    status: { ...(bundled.status || {}), ...(raw.status || {}) },
  };
}

export function readCachedConInfo(): ConInfoPayload | null {
  try {
    const cached = localStorage.getItem(CON_INFO_CACHE_KEY);
    if (!cached) return null;
    const parsed = JSON.parse(cached);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      return normalizeConInfo(parsed);
    }
  } catch (e) {
    // ignore parse error
  }
  return null;
}

export function readCachedScheduleEvents(): any[] | null {
  try {
    const cached = localStorage.getItem(SCHEDULE_CACHE_KEY);
    if (!cached) return null;
    const parsed = JSON.parse(cached);
    const events = Array.isArray(parsed) ? parsed : parsed?.events;
    if (Array.isArray(events)) {
      return events;
    }
  } catch (e) {
    // ignore parse error
  }
  return null;
}

export async function fetchConInfo(
  url: string = CON_INFO_API_URL,
  maxAttempts = 4
): Promise<ConInfoPayload> {
  const isTest = import.meta.env.MODE === "test";
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data && typeof data === "object" && !Array.isArray(data)) {
        try {
          localStorage.setItem(CON_INFO_CACHE_KEY, JSON.stringify(data));
        } catch (e) {
          // ignore storage quota error
        }
        return normalizeConInfo(data);
      }
      throw new Error("Invalid response format");
    } catch (err) {
      if (attempt < maxAttempts - 1) {
        const delay = isTest
          ? 5
          : Math.min(30000, 500 * 2 ** attempt + Math.random() * 500);
        await new Promise((r) => setTimeout(r, delay));
      }
    }
  }
  const cached = readCachedConInfo();
  if (cached) return cached;
  return getBundledConInfo();
}

export async function fetchScheduleEvents(
  url: string = SCHEDULE_API_URL,
  maxAttempts = 4
): Promise<any[]> {
  const isTest = import.meta.env.MODE === "test";
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const events = Array.isArray(data) ? data : data?.events;
      if (Array.isArray(events)) {
        try {
          localStorage.setItem(SCHEDULE_CACHE_KEY, JSON.stringify(events));
        } catch (e) {
          // ignore storage quota error
        }
        return events;
      }
      throw new Error("Invalid response format");
    } catch (err) {
      if (attempt < maxAttempts - 1) {
        const delay = isTest
          ? 5
          : Math.min(30000, 500 * 2 ** attempt + Math.random() * 500);
        await new Promise((r) => setTimeout(r, delay));
      }
    }
  }
  const cached = readCachedScheduleEvents();
  if (cached) return cached;
  return [];
}

function ordinalSuffix(day: number): string {
  if (day >= 11 && day <= 13) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDateRange(
  startIso?: string | null,
  endIso?: string | null
): string | null {
  if (!startIso || !endIso) return null;
  const startMatch = /^(\d{4})-(\d{2})-(\d{2})/.exec(startIso);
  const endMatch = /^(\d{4})-(\d{2})-(\d{2})/.exec(endIso);
  if (!startMatch || !endMatch) return null;
  const year = Number(startMatch[1]);
  const startMonth = MONTH_NAMES[Number(startMatch[2]) - 1];
  const endMonth = MONTH_NAMES[Number(endMatch[2]) - 1];
  const startDay = Number(startMatch[3]);
  const endDay = Number(endMatch[3]);
  if (!startMonth || !endMonth) return null;
  if (startMonth === endMonth) {
    return `${startMonth} ${startDay}${ordinalSuffix(startDay)} - ${endDay}${ordinalSuffix(endDay)}, ${year}`;
  }
  return `${startMonth} ${startDay}${ordinalSuffix(startDay)} - ${endMonth} ${endDay}${ordinalSuffix(endDay)}, ${year}`;
}

export function resolveEventDates(conInfo?: ConInfoPayload | null): string {
  const formattedInfoRange = formatDateRange(
    conInfo?.dates?.epoch,
    conInfo?.dates?.eschaton
  );
  if (formattedInfoRange) return formattedInfoRange;

  if (
    typeof conInfo?.dates?.dates_display === "string" &&
    conInfo.dates.dates_display.trim()
  ) {
    return conInfo.dates.dates_display.trim();
  }

  return DEFAULT_EVENT_DATES;
}

function inferMeetupType(item: any): string | null {
  if (typeof item.meetup_type === "string" && item.meetup_type.trim()) {
    return item.meetup_type.trim();
  }
  const tracksAndContent = [
    ...(Array.isArray(item.tracks) ? item.tracks : []),
    ...(Array.isArray(item.content) ? item.content : []),
  ]
    .map((s) => String(s).toLowerCase())
    .join(" ");
  const name = String(item.name || item.event_title || "").toLowerCase();
  const room = String(item.location || item.event_room || "").toLowerCase();

  const isCosplay =
    tracksAndContent.includes("cosplay") ||
    name.includes("cosplay") ||
    name.includes("photoshoot") ||
    room.includes("pine wind garden");
  if (!isCosplay) return null;

  if (name.includes("contest") || name.includes("pre-judging")) {
    return "contest";
  }
  if (name.includes("workshop")) {
    return "workshop";
  }
  if (name.includes("solo photoshoot") || tracksAndContent.includes("other_photoshoots")) {
    return "other_photoshoots";
  }
  return "meetups";
}

export function resolveCosplayMeetups(
  scheduleEvents?: any[] | null
): CosplayMeetupItem[] {
  if (Array.isArray(scheduleEvents) && scheduleEvents.length > 0) {
    const mapped: CosplayMeetupItem[] = [];
    for (const item of scheduleEvents) {
      const meetupType = inferMeetupType(item);
      if (!meetupType) continue;

      let eventDay = item.event_day || "";
      let startTime = item.event_start_time || "";
      let endTime = item.event_end_time || "";
      if (item.start_unix != null && item.end_unix != null) {
        const startJs = dayjs.unix(Number(item.start_unix)).tz(CON_TIMEZONE);
        const endJs = dayjs.unix(Number(item.end_unix)).tz(CON_TIMEZONE);
        eventDay = eventDay || startJs.format("dddd");
        startTime = startTime || startJs.format("h:mm A");
        endTime = endTime || endJs.format("h:mm A");
      }

      mapped.push({
        event_title: String(item.event_title || item.name || ""),
        event_subtitle: String(
          item.event_subtitle ||
            (Array.isArray(item.panelists) && item.panelists.length > 0
              ? item.panelists.join(", ")
              : item.description || "")
        ),
        meetup_type: meetupType,
        event_room: String(item.event_room || item.location || "Pine Wind Garden"),
        event_description: String(
          item.event_description || item.description || ""
        ),
        event_day: String(eventDay || "Saturday"),
        event_start_time: String(startTime || ""),
        event_end_time: String(endTime || ""),
      });
    }
    if (mapped.length > 0) {
      return mapped;
    }
  }
  return bundledCosplayMeetupsJson as CosplayMeetupItem[];
}

export function useConData(options?: {
  conInfoUrl?: string;
  scheduleUrl?: string;
  maxAttempts?: number;
}) {
  const conInfoUrl = options?.conInfoUrl || CON_INFO_API_URL;
  const scheduleUrl = options?.scheduleUrl || SCHEDULE_API_URL;
  const maxAttempts = options?.maxAttempts ?? 4;

  const [conInfo, setConInfo] = useState<ConInfoPayload>(
    () => readCachedConInfo() || getBundledConInfo()
  );
  const [scheduleEvents, setScheduleEvents] = useState<any[]>(
    () => readCachedScheduleEvents() || []
  );
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const cachedInfo = readCachedConInfo();
    if (cachedInfo) {
      setConInfo(cachedInfo);
    }
    const cachedSchedule = readCachedScheduleEvents();
    if (cachedSchedule) {
      setScheduleEvents(cachedSchedule);
    }

    Promise.all([
      fetchConInfo(conInfoUrl, maxAttempts),
      fetchScheduleEvents(scheduleUrl, maxAttempts),
    ]).then(([liveInfo, liveSchedule]) => {
      if (!isMounted) return;
      setConInfo(liveInfo);
      setScheduleEvents(liveSchedule);
      setIsLoaded(true);
    });

    return () => {
      isMounted = false;
    };
  }, [conInfoUrl, scheduleUrl, maxAttempts]);

  return {
    conInfo,
    scheduleEvents,
    isLoaded,
    eventDates: resolveEventDates(conInfo),
    venueName: conInfo?.event_venue || DEFAULT_VENUE_NAME,
    venueAddress: conInfo?.event_venue_address || DEFAULT_VENUE_ADDRESS,
    cosplayMeetups: resolveCosplayMeetups(scheduleEvents),
  };
}
