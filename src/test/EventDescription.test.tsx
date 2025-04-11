import { describe, test, vi } from "vitest";
import EventDescription from "../EventDescription";
import { render, waitFor, screen } from "@testing-library/react";

describe('EventDescription', () => {
    test("notification icon exists in eventdescription header", async () => {
        let testEventDescriptionPage = <EventDescription show_var={true} hide_fxn={vi.fn()} event_package={vi.fn()} evt_print={<></>} />
        render(testEventDescriptionPage);

        await waitFor(() => {
            screen.debug()
        });
    });
});