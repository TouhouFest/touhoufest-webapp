import { beforeAll, describe, expect, test, vi } from "vitest";
import EventDescription from "../EventDescription";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SetDeviceTimeZone } from "./TestUtils";
import { DEFAULTNOTIFY } from "../Utils";
import { LocalNotifications } from "@capacitor/local-notifications";
import dayjs, { Dayjs } from "dayjs/esm";

describe('EventDescription', () => {

    // necessary to allow vitest fake timers to test properly with react-testing-library
    beforeAll(() => {
        const _jest = globalThis.jest;
    
        globalThis.jest = {
        ...globalThis.jest,
        advanceTimersByTime: vi.advanceTimersByTime.bind(vi)
        };
    
        return () => void (globalThis.jest = _jest);
    });


    test("notification fires properly from eventdescription header", async () => {
        
        SetDeviceTimeZone("America/New_York");
        vi.useFakeTimers();
        const mockedSystemTime = new Date(2025,2,3,12,30,0);
        vi.setSystemTime(mockedSystemTime);

        const getItemTest = vi.spyOn(Storage.prototype, "getItem").mockImplementation((input) => {
            if(input == DEFAULTNOTIFY) {return "15";}
            else {return null;}
        });
        const setItemTest = vi.spyOn(Storage.prototype, "setItem").mockImplementation((key, value) => {
            return null
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

        let start_time:Dayjs = dayjs("3/5/2025 13:00");
        let event_package:any = {title: "foobar", uniqueID:0, combinedStart: start_time.toISOString()};
        let testEventDescriptionPage = <EventDescription show_var={true} hide_fxn={vi.fn()} event_package={event_package} evt_print={<></>} />
        render(testEventDescriptionPage);

        let filterResult:HTMLElement[] = screen.getAllByRole("img", {hidden:true});
        expect(filterResult.length).equal(2);

        let expectedTime:Dayjs = start_time.subtract(15,'minute');
        let expectedTimeString:string = expectedTime.toISOString();
        let expectedTimeDate:Date = expectedTime.toDate();

        await userEvent.click(filterResult[1]);

        await waitFor(() => {
            expect(setItemTest).toBeCalledWith("NOTIFY-0",expectedTimeString);
            expect(LocalNotifications.schedule).toHaveBeenCalledWith({
                notifications: [
                    {
                        body: 'Your event "foobar" is starting soon.',
                        id: 0,
                        schedule: {
                            allowWhileIdle: true,
                            at: expectedTimeDate
                        },
                        title: "Event Starting Soon!"
                    }
                ]
            });
        }).then(() => {
            vi.useRealTimers();
        });
    });
});