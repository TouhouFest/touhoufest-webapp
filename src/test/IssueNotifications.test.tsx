import { getByRole, render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import {beforeAll, describe, expect, test, vi} from 'vitest';
import IssueNotifications from '../IssueNotifications';
import dayjs from "dayjs/esm/index.js";
import userEvent from '@testing-library/user-event';
import timezone from "dayjs/esm/plugin/timezone";
import utc from "dayjs/esm/plugin/utc";

import { LocalNotifications } from '@capacitor/local-notifications';
import { Toast } from '@capacitor/toast';
import { CON_TIMEZONE, DEFAULTNOTIFY } from '../Utils';
import Papa from 'papaparse';
import { GenerateMockPapa } from './Dataset.test';
import Dataset from '../Dataset';
import { faBroom } from '@fortawesome/free-solid-svg-icons';
import { mock } from 'node:test';

describe("Notifications",() => {

    function mock_get_pending() {
        LocalNotifications.getPending = vi.fn().mockImplementation(async () => {
            return {notifications: []};
        });
    }

    // necessary to allow vitest fake timers to test properly with react-testing-library
    beforeAll(() => {
        const _jest = globalThis.jest;
    
        globalThis.jest = {
        ...globalThis.jest,
        advanceTimersByTime: vi.advanceTimersByTime.bind(vi)
        };
    
        return () => void (globalThis.jest = _jest);
    });

    test('stupid simple notifications', () => {
        mock_get_pending();
        let notification = <IssueNotifications index={1} title={"test event"} start_ts={dayjs()}/>
        render(notification);
        expect(screen.getByRole("img", {hidden: true})).toBeDefined();

    });

    test('failure toast fired on permissions denied', async () => {
        mock_get_pending();
        Toast.show = vi.fn().mockReturnValue(undefined);
        LocalNotifications.checkPermissions = vi.fn().mockImplementation(
            async () => {
                return {display: 'denied'}
            }
        );
        LocalNotifications.requestPermissions = vi.fn().mockImplementation(
            async() => {
                return {display:'denied'}
            }
        );

        let notification = <IssueNotifications index={1} title={"test event"} start_ts={dayjs().add(7,'day')}/>
        render(notification);
        await userEvent.click(screen.getByRole("img", {hidden:true}));

        await waitFor(() => {
            expect(LocalNotifications.checkPermissions).toBeCalled();
            expect(LocalNotifications.requestPermissions).toBeCalled();
            expect(Toast.show).lastCalledWith({
                text:"Notifications permissions were denied!",
                position:"center"
            });

        });
    });

    test('default notification modal appears when not set', async () => {
        mock_get_pending();
        LocalNotifications.checkPermissions = vi.fn().mockImplementation(
            async () => {
                return {display: 'prompt'}
            }
        );
        LocalNotifications.requestPermissions = vi.fn().mockImplementation(
            async() => {
                return {display:'granted'}
            }
        );

        let notification = <IssueNotifications index={1} title={"test event"} start_ts={dayjs().add(7,'day')}/>
        render(notification);
        await userEvent.click(screen.getByRole("img", {hidden:true}));

        await waitFor(() => {
            expect(screen.getByRole("dialog")).toBeDefined();
        });
    });

    test('isolated proper time selection', async () => {
        mock_get_pending();
        // sanity check mocking timezone
        dayjs.extend(utc);
        dayjs.extend(timezone);
        vi.stubEnv("TZ","America/Los_Angeles");
        expect(dayjs.tz.guess()).toBe("America/Los_Angeles");

        vi.useFakeTimers();

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

        const mockedSystemTime = new Date(2025,2,3,12,30,0);
        vi.setSystemTime(mockedSystemTime);

        let timeObject:dayjs.Dayjs = dayjs("3/21/25 16:00");

        let notification = <IssueNotifications index={1} title={"test event"} start_ts={timeObject}/>
        render(notification);
        let expectedTimeString:string = timeObject.subtract(15,'m').toISOString();
        let expectedTimeDate:Date = timeObject.subtract(15,'m').toDate();
        await userEvent.click(screen.getByRole("img", {hidden:true}));

        await waitFor(() => {
            expect(setItemTest).toHaveBeenCalledWith("NOTIFY-1", expectedTimeString);
            expect(LocalNotifications.schedule).toHaveBeenCalledWith({
                notifications: [{
                    title: "Event Starting Soon!",
                    body: 'Your event "test event" is starting soon.',
                    id: 1,
                    schedule: {
                        allowWhileIdle: true,
                        at: expectedTimeDate
                    }

                }]
            });
        }).then(() => {
            vi.useRealTimers();
        });

    });

    test("notifications schedule such that they correspond properly in device time", async () => {
        mock_get_pending();
        let mockup:any[] = [
            {
                "event_title":"test event 0",
                "event_description": "test description 0",
                "event_room": "All",
                "event_start_day": "3/21/25",
                "event_start_time": "19:35",
                "event_end_day": "4/6/25",
                "event_end_time": "20:30",
                "event_type": "Convention",
                "event_age_limit": ""
            },
        ];
        Papa.parse = GenerateMockPapa(mockup);
        vi.useFakeTimers();

        // sanity check mocking timezone
        dayjs.extend(utc);
        dayjs.extend(timezone);
        vi.stubEnv("TZ","America/New_York");
        expect(dayjs.tz.guess()).toBe("America/New_York");

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

        let dataset = <Dataset mode="home" param_fxn={vi.fn()} appliedFilters={vi.fn()} changeDays={vi.fn()} oppositeTheme={faBroom} showEventDescription={false} setShowEventDescription={vi.fn()} />
        render(dataset);

        await userEvent.click(screen.getAllByRole("img", {hidden:true})[1]);

        // major insight: localnotification times need to be scheduled that they'll be accurate
        // if casted to DEVICE TIMEZONE
        let expectedTime:dayjs.Dayjs = dayjs("3/21/25 22:20");
        let expectedTimeString:string = expectedTime.toISOString();
        let expectedTimeDate:Date = expectedTime.toDate();

        await waitFor(() => {
            expect(LocalNotifications.checkPermissions).toHaveBeenCalled();
            expect(setItemTest).toHaveBeenCalledWith("NOTIFY-0",expectedTimeString);
            expect(LocalNotifications.schedule).toHaveBeenCalledWith({
                notifications: [
                    {
                        body: 'Your event "test event 0" is starting soon.',
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


