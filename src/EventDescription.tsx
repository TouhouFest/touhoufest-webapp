import Offcanvas from 'react-bootstrap/Offcanvas';
import Bookmark from './Bookmark';
import Markdown from 'marked-react';
import {App} from '@capacitor/app';
import { useEffect } from 'react';

function EventDescription({show_var, hide_fxn, event_package, evt_print}) {

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
        {evt_print}
        <hr />
        <Markdown>{event_package["event_description"]}</Markdown>
      </>
    );
  }

  return (
    <Offcanvas show={show_var} onHide={handleHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="align-middle">Event Description <Bookmark index={event_package["uniqueID"]}></Bookmark></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {output}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default EventDescription;