import { getByRole, render, screen } from '@testing-library/react';
import App from '../App';
import {describe, expect, test, vi} from 'vitest';
import IssueNotifications from '../IssueNotifications';
import dayjs from "dayjs/esm/index.js";
import userEvent from '@testing-library/user-event';

import { LocalNotifications } from '@capacitor/local-notifications';
import { Toast } from '@capacitor/toast';

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

    test('toast fired on permissions check', async () => {

        const showToast = vi.spyOn(Toast, "show");
        let notification = <IssueNotifications index={1} title={"test event"} start_ts={dayjs().add(7,'day')}/>
        render(notification);
        await userEvent.click(screen.getByRole("img", {hidden:true}));

        expect(showToast).toHaveBeenCalled();
        // todo: check for permissions check conducted
        
    })
});

