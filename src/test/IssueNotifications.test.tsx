import { getByRole, render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import {describe, expect, test, vi} from 'vitest';
import IssueNotifications from '../IssueNotifications';
import dayjs from "dayjs/esm/index.js";
import userEvent from '@testing-library/user-event';

import { LocalNotifications } from '@capacitor/local-notifications';
import { Toast } from '@capacitor/toast';

describe("Notifications",() => {
    
    const checkPermissions = vi.spyOn(LocalNotifications, "checkPermissions");

    test('stupid simple notifications', () => {
        let notification = <IssueNotifications index={1} title={"test event"} start_ts={dayjs()}/>
        render(notification);
        expect(screen.getByRole("img", {hidden: true})).toBeDefined();

    });

    test('toast fired on permissions check', async () => {

        Toast.show = vi.fn().mockReturnValue(undefined);

        let notification = <IssueNotifications index={1} title={"test event"} start_ts={dayjs().add(7,'day')}/>
        render(notification);
        await userEvent.click(screen.getByRole("img", {hidden:true}));

        await waitFor(() => {
            expect(Toast.show).lastCalledWith({
          text:"Notifications permissions were denied!",
          position:"center"
        });
        });
    })
});

