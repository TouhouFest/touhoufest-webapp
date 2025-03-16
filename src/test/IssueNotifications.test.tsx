import { getByRole, render, screen } from '@testing-library/react';
import App from '../App';
import {describe, expect, test, vi} from 'vitest';
import IssueNotifications from '../IssueNotifications';
import dayjs from "dayjs/esm/index.js";
import userEvent from '@testing-library/user-event';

import { LocalNotifications } from '@capacitor/local-notifications';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Notifications",() => {
    
    const checkPermissions = vi.spyOn(LocalNotifications, "checkPermissions");

    test('stupid simple notifications', () => {
        let notification = <IssueNotifications index={1} title={"test event"} start_ts={dayjs()}/>
        render(notification);
        expect(screen.getByRole("img", {hidden: true})).toBeDefined();

    });

    test('check permissions check', async () => {

        let notification = <IssueNotifications index={1} title={"test event"} start_ts={dayjs()}/>
        render(notification);
        await userEvent.click(screen.getByRole("img", {hidden:true}));

        // todo: check for permissions check conducted
        
    })
});

