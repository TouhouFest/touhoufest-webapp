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

        <p className="text-center">{event_package["daytext"]}</p>
        <hr />
        {/* {evt_print} */}
        <h3>{event_package["event_title"]}</h3>
        <hr />
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