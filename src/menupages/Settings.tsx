/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Form, Button } from 'react-bootstrap';
import { DEFAULTNOTIFY, NATIVETIMETYPE, USECONTZ, USEDEVICETZ } from '../Utils';
import { Toast } from '@capacitor/toast';

function DefaultNotificationSetting() {
  
    // note: react casts a warning that using the "selected" attribute is bad
    // intended functionality still operates, so this will hold until otherwise required
    function createValues() {
        let hasdefault:boolean = localStorage.getItem(DEFAULTNOTIFY) !== null;
        let output = [];
        output.push(<><option value="" selected={!hasdefault}>Select a Time</option></>);
        let defaultval:string|null = localStorage.getItem(DEFAULTNOTIFY);
        ["0","5","10","15","30","60"].map((elem) => {
            output.push(<option value={elem} selected={defaultval === elem}>{elem + " Minutes"}</option>);
        });
        return output;
    }

    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let formdata = new FormData(e.currentTarget);
        let duration:string | null = formdata.get("timebefore") as string;

        if(duration === "") {
            localStorage.removeItem(DEFAULTNOTIFY);
        }
        else {
            localStorage.setItem(DEFAULTNOTIFY, duration);
       }
        Toast.show({
            text: "Default notification time set",
            position: "center"
        });
    }

    // prevent pressing Enter from prematurely submitting the form
    function disableEnter(e:React.KeyboardEvent) {
        if(e.key === "Enter"){
            e.preventDefault();
            return false;
        }
    }

    return (<>
        <Form onSubmit={handleSubmit} onKeyDown={disableEnter}>
            <Form.Group className="mb-3">
                <Form.Label>Default Time Before Event Start</Form.Label>
                <Form.Select name="timebefore">
                    {createValues()}
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form> 
    </>);
}

function TimezoneSettings() {

    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("foobar");
        let formdata = new FormData(e.currentTarget);
        let usecontz:FormDataEntryValue | null = formdata.get("tzPrefs");
        let toastOutput:string = "";
        if (usecontz !== null) {
            localStorage.setItem(NATIVETIMETYPE, USEDEVICETZ);
            toastOutput = "Event times will display in device timezone";
        }
        else {
            localStorage.setItem(NATIVETIMETYPE, USECONTZ);
            toastOutput = "Event times will display in con timezone";
        }

        Toast.show({text: toastOutput, position:"center"})
    }

    return (<>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Check type="checkbox" label="Display Event Times in Device Time" name="tzPrefs" defaultChecked={localStorage.getItem(NATIVETIMETYPE) === USEDEVICETZ}/>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </>);
}

export const settingsPage = {
    "header": (<><FontAwesomeIcon icon={faGear} fixedWidth></FontAwesomeIcon> Settings/FAQ</>),
    "fluidImage": (<></>),
    "body": (<>
        <h4>Event Notifications</h4>
        <p className="small"><FontAwesomeIcon icon={faTriangleExclamation} className="small"/> Due to platform limitations, event notifications may exhibit a minor degree of inconsistency. (e.g. They may only make an appearance on your mobile device's notifications bar without vibrating or having an auditory cue)</p>
        <DefaultNotificationSetting />
        <h4 className="mt-3">Event Timezone Settings</h4>
        <p className="small"><FontAwesomeIcon icon={faTriangleExclamation} className="small"/> Event times will be displayed in the <b>convention's timezone (Pacific Standard Time)</b> unless otherwise indicated below:</p>
        <TimezoneSettings />
    </>),
}