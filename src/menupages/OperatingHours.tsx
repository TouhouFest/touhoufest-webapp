/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { Alert } from 'react-bootstrap';
import { WarningAlert } from '../Utils';

export const operatingHours= {
    "header": (<><FontAwesomeIcon icon={faClock} fixedWidth></FontAwesomeIcon> Operating Hours</>),
    "fluidImage": (<></>),
    "body": (<>
        <WarningAlert>
            <p>The following operating hours have <b>not</b> been confirmed yet:</p>
            <ul>
                <li>Registration</li>
                <li>Gaming</li>
            </ul>
        </WarningAlert>
        <p><b>General Con Hours</b></p>
        <ul>
            <li>Friday: N/A</li>
            <li>Saturday: 9:00 AM - 11:00 PM</li>
            <li>Sunday: 9:00 AM - 6:00 PM</li>
        </ul>
        <p><b>Registration</b></p>
        <ul>
            <li>Friday: 3:00 PM - 9:00 PM</li>
            <li>Saturday: 9:00 AM - 11:00 PM</li>
            <li>Sunday: 9:00 AM - 6:00 PM</li>
        </ul>
        <p><b>Artist's Alley/Vendors</b></p>
        <ul>
            <li>Friday: N/A</li>
            <li>Saturday: 9:00 AM - 6:00 PM</li>
            <li>Sunday: 9:00 AM - 5:30 PM</li>
        </ul>
        <p><b>Gaming*</b></p>
        <ul>
            <li>Friday: N/A</li>
            <li>Saturday: 9:30AM - 10:30 PM</li>
            <li>Sunday: 9:00 AM - 5:00 PM</li>
        </ul>
        <p className="small">*Note: Gaming may be either Freeplay or Tournament depending on the schedule</p>
    </>),
}