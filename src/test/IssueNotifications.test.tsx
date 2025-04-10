import { getByRole, render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import {describe, expect, test, vi} from 'vitest';
import IssueNotifications from '../IssueNotifications';
import dayjs from "dayjs/esm/index.js";
import userEvent from '@testing-library/user-event';

import { LocalNotifications } from '@capacitor/local-notifications';
import { Toast } from '@capacitor/toast';
import { DEFAULTNOTIFY } from '../Utils';

describe("Notifications",() => {
   
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

    test('notifications schedule properly on timezone', async () => {
        let collectedValues:Record<string, string>[] = [];
        vi.useFakeTimers();
        const getItemTest = vi.spyOn(Storage.prototype, "getItem").mockImplementation((input) => {
            if(input == DEFAULTNOTIFY) {return "15";}
            else {return null;}
        });
        const setItemTest = vi.spyOn(Storage.prototype, "setItem").mockImplementation((key, value) => {
            collectedValues.push({key: key, value: value});
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

        let notification = <IssueNotifications index={1} title={"test event"} start_ts={dayjs("2025-03-21 16:00")}/>
        render(notification);
        await userEvent.click(screen.getByRole("img", {hidden:true}));

        await waitFor(() => {
            expect(collectedValues.length).equal(2);
            // expect(LocalNotifications.schedule).toHaveBeenCalled();
        }); /*.then(() => {
            vi.useRealTimers();
        }); */

    });
});

