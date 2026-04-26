import { describe, expect, test, vi } from "vitest";
import EventDescription from "../EventDescription";
import { render, screen, waitFor } from "@testing-library/react";

describe("EventDescription", () => {
    test("day of week is rendered", async () => {
        let eventdesc = <EventDescription show_var={true} hide_fxn={vi.fn()} event_package={{"daytext": "Friday, June 13", "uniqueID": 0}} evt_print={[<>foobar</>,<>foobar</>]}/>

        render(eventdesc);

        await waitFor(() => {
            expect(screen.queryAllByText(/Friday, June 13/)).length.greaterThan(0);
        });
    }); 
});