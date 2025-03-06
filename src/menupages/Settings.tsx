/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Form, Button } from 'react-bootstrap';

export const settingsPage = {
    "header": (<><FontAwesomeIcon icon={faGear} fixedWidth></FontAwesomeIcon> Settings/FAQ</>),
    "fluidImage": (<></>),
    "body": (<>
        <h4>Event Notifications</h4>
        <p className="small"><FontAwesomeIcon icon={faTriangleExclamation} className="small"/> Due to platform limitations, event notifications may exhibit a minor degree of inconsistency. (e.g. They may only make an appearance on your mobile device's notifications bar without vibrating or having an auditory cue)</p>
    </>),
}