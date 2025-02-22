import { Modal, Form, Button } from "react-bootstrap";

export default function DefaultNoficationModal({show, changeState}: {show:boolean, changeState:Function}) {
    
    // state var for show dictated by App.tsx
    function handleSubmit(e:React.FormEvent) {
        e.preventDefault();
    }

    // prevent pressing Enter from prematurely submitting the form
    function disableEnter(e:React.KeyboardEvent) {
        if(e.keyCode === 13){
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
                <p className="small">Exiting out of this modal without submitting will neither queue a notification nor modify any default notification preferences.</p>
                <Form onSubmit={handleSubmit} onKeyDown={disableEnter}>
                    <Form.Group className="mb-3">
                        <Form.Label>Time Before Event Start</Form.Label>
                        <Form.Select>
                            <option>None</option>
                            <option value="5">5 minutes</option>
                            <option value="10">10 minutes</option>
                            <option value="15">10 minutes</option>
                            <option value="30">30 minutes</option>
                            <option value="60">1 hour</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check type={"checkbox"} label={"Use as default for all future events"}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Modal.Body>
        </Modal> 
    </>);
}