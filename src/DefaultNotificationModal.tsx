import { Modal, Form, Button } from "react-bootstrap";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {DEFAULTNOTIFY} from "./Utils";

export default function DefaultNoficationModal({show, changeState, callBackNotify}: {show:boolean, changeState:Function, callBackNotify:Function}) {
    
    // state var for show dictated by App.tsx
    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let formdata = new FormData(e.currentTarget);
        let duration:string | null = formdata.get("timebefore") as string;
        let raw_setdefault:string | null = formdata.get("setdefault") as string;

        // case if checked
        if (raw_setdefault !== null) {
            localStorage.setItem(DEFAULTNOTIFY, duration);
        }

        // issue notification
        callBackNotify(+duration);
        changeState(false);
    }

    // prevent pressing Enter from prematurely submitting the form
    function disableEnter(e:React.KeyboardEvent) {
        if(e.key === "Enter"){
            e.preventDefault();
            return false;
        }
  }

    return (<>
        <Modal show={show} onHide={() => changeState(false)} centered>
            <Modal.Header closeButton >
                <Modal.Title>Notification Time</Modal.Title>    
            </Modal.Header> 
            <Modal.Body>
                <p>Please set a nofication time.</p>
                <p className="small"><FontAwesomeIcon icon={faInfoCircle}/> Exiting out of this modal without submitting will neither queue a notification nor modify any default notification preferences.</p>
                <Form onSubmit={handleSubmit} onKeyDown={disableEnter}>
                    <Form.Group className="mb-3">
                        <Form.Label>Time Before Event Start</Form.Label>
                        <Form.Select name="timebefore">
                            <option value="0">0 minutes</option>
                            <option value="5">5 minutes</option>
                            <option value="10">10 minutes</option>
                            <option value="15">15 minutes</option>
                            <option value="30">30 minutes</option>
                            <option value="60">1 hour</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check type={"checkbox"} label={"Use as default for all future events"} name="setdefault"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Modal.Body>
        </Modal> 
    </>);
}