import Offcanvas from 'react-bootstrap/Offcanvas';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function EventDescription({show_var, hide_fxn, event_package, evt_print}) {

  let output = (<></>);

  if (event_package !== {}){
    // NOTE: maybe add bookmarking option here?
    output = (
      <>
        {evt_print}
        <p className="eventDescription">{event_package["event_description"]}</p>
      </>
    );
  }

  return (
    <Offcanvas show={show_var} onHide={hide_fxn}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Event Description</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {output}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default EventDescription;