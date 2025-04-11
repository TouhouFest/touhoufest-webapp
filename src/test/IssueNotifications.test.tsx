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
import { DEFAULTNOTIFY } from '../Utils';

describe("Notifications",() => {
 
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
        let notification = <IssueNotifications index={1} title={"test event"} start_ts={dayjs()}/>
        render(notification);
        expect(screen.getByRole("img", {hidden: true})).toBeDefined();

    });

    test('failure toast fired on permissions denied', async () => {

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
            // expect(LocalNotifications.schedule).toHaveBeenCalled();
        }).then(() => {
            vi.useRealTimers();
        });

    });

    test("timezone-aware selection with dataset", async () => {

    });
});

