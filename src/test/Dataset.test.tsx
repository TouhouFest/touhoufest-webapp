import { describe, test, vi } from "vitest";
import Dataset from "../Dataset";
import { render, screen, waitFor } from "@testing-library/react";
import Papa from 'papaparse';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });


describe("Dataset", () => {
    test("cross-day events show proper times", async () => {
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
        Papa.parse = vi.fn().mockImplementation(
            async () => {
                return {
                    data: ["foobar"]
                }
            }
        );
        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={vi.fn()} showEventDescription={false} setShowEventDescription={vi.fn()} />
        render(dataset);
        await waitFor(() => {
            // todo: adjust output of papa.parse to maybe call complete function?
            screen.debug();
            console.log(Papa.parse.mock.calls);
        });
    });
})