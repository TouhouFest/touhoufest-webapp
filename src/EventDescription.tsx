import Offcanvas from 'react-bootstrap/Offcanvas';
import Bookmark from './Bookmark';
import Markdown from 'marked-react';

function EventDescription({show_var, hide_fxn, event_package, evt_print}) {

  let output = (<></>);

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
    <Offcanvas show={show_var} onHide={hide_fxn}>
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