import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import Bookmark from './Bookmark';
import Markdown from 'marked-react';
import {App} from '@capacitor/app';
import { useEffect } from 'react';

function EventDescription({show_var, hide_fxn, event_package, evt_print}: {show_var:boolean, hide_fxn:Function, event_package:any, evt_print:JSX.Element}) {

  let output = (<></>);

  function handleHide() {
    App.removeAllListeners().then(() => {
      hide_fxn();
    });
  }

  useEffect(() => {
      if(show_var === true) {
          App.removeAllListeners().then(() => {
            App.addListener('backButton', () => {
              handleHide();
            });
          });
      }
  }, [show_var]);

  if (Object.keys(event_package).length !== 0){
    output = (
      <>
        <h3><b>{event_package["event_title"]}</b></h3>
        <ul className="list-unstyled">
          <li><b>{event_package["daytext"]} | {evt_print}</b></li>
          <li><b>{event_package["event_room"]}</b></li>
        </ul>
        {/* TODO: add event types here following the new UI spec */}

        <Markdown>{event_package["event_description"]}</Markdown>
      </>
    );
  }

  return (
    <Modal show={show_var} onHide={handleHide} centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title className="align-middle">Event Details <Bookmark index={event_package["uniqueID"]}></Bookmark></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {output}
      </Modal.Body>
    </Modal>
  );
}

export default EventDescription;