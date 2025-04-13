import Offcanvas from 'react-bootstrap/Offcanvas';
import Bookmark from './Bookmark';
import Markdown from 'marked-react';
import {App} from '@capacitor/app';
import { useEffect, useState } from 'react';
import IssueNotifications from './IssueNotifications';
import dayjs from "dayjs/esm/index.js";
import customParseFormat from "dayjs/esm/plugin/customParseFormat";
import timezone from "dayjs/esm/plugin/timezone";
import utc from "dayjs/esm/plugin/utc";

dayjs.extend(customParseFormat);
dayjs.extend(timezone);
dayjs.extend(utc);

function EventDescription({show_var, hide_fxn, event_package, evt_print}: {show_var:boolean, hide_fxn:Function, event_package:any, evt_print:JSX.Element}) {

  const [notifyModalOpen, setNotifyModalOpen] = useState(false);

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
        <Offcanvas.Title className="align-middle">Event Description <Bookmark index={event_package["uniqueID"]} /> <IssueNotifications index={event_package["uniqueID"]} title={event_package["title"]} start_ts={dayjs(event_package["combinedStart"])}/></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {output}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default EventDescription;