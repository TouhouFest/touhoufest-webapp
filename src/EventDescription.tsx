import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import Bookmark from './Bookmark';
import Markdown from 'marked-react';
import {App} from '@capacitor/app';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

function EventDescription({show_var, hide_fxn, event_package, evt_print}: {show_var:boolean, hide_fxn:Function, event_package:any, evt_print:JSX.Element[]}) {

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
        <ul className="list-unstyled mb-1">
          <li><b>{event_package["daytext"]} | {evt_print[0]}</b></li>
          <li><b>{event_package["event_room"]}</b></li>
        </ul>
        {evt_print[2]}

        <div className="mt-4">
          <Markdown>{event_package["event_description"]}</Markdown>
        </div>

        <hr />

        <Row className="text-center mt-5">
          <Col>
            <Bookmark index={event_package["uniqueID"]} icon_size="4x"></Bookmark>
            <p className="mt-3">Add to favorites</p>
          </Col>
          <Col>
            {evt_print[1]}
            <p className="mt-3">Set an alarm</p>
          </Col>

        </Row>
      </>
    );
  }

  return (
    <Offcanvas show={show_var} onHide={handleHide} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="align-middle"></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {output}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default EventDescription;