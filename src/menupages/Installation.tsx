/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faDownload, faEllipsisVertical, faExclamationCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faChrome, faApple, faFirefoxBrowser } from '@fortawesome/free-brands-svg-icons';
import { Image } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
const androidchrome01 = require("./../images/installation/androidchrome01.jpg");
const androidchrome02 = require("./../images/installation/androidchrome02.jpg");
const androidchrome03 = require("./../images/installation/androidchrome03.jpg");
const androidfirefox01 = require("./../images/installation/androidfirefox01.jpg");
const androidfirefox02 = require("./../images/installation/androidfirefox02.jpg");
const androidfirefox03 = require("./../images/installation/androidfirefox03.jpg");
const ios = require("./../images/installation/ios.webp");

export const installationPage = {
  "header": (<><FontAwesomeIcon icon={faDownload} fixedWidth></FontAwesomeIcon> Installation Options</>),
  "fluidImage": (<></>),
  "body": (
    <>
      <p>For those wishing to use this schedule in a downloaded offline fashion, a number of options exist depending on your platform.</p>
      <h4>Progressive Web Apps</h4>
      <p>Depending on your phone's operating system, you may be able to download this website onto your home screen as a semi-standalone application right from your browser. The below instructions may be helpful:</p>
      <p className="small"><FontAwesomeIcon icon={faInfoCircle}/> If you encounter issues with the website or downloaded app, it may help to either re-fresh or re-install it.</p>
      <h5><FontAwesomeIcon icon={faAndroid}/> Android</h5>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header><FontAwesomeIcon icon={faChrome} className="me-1"/> Google Chrome</Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>Tap the <FontAwesomeIcon icon={faEllipsisVertical}/> button to bring up additional options; it should reside on the upper right portion of your window</li>
              <Image src={androidchrome01} rounded fluid className="my-2"/>
              <li>Tap the option named <b>Install app</b></li>
              <Image src={androidchrome02} rounded fluid className="my-2"/>
              <li>The below prompt (or something similar) should appear. Tap the <b>Install</b> button</li>
              <Image src={androidchrome03} rounded fluid className="my-2"/>
              <li>At this point, the TouhouFest icon should appear on your phone's home screen. Tap it and it will open and function just like a regular app</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><FontAwesomeIcon icon={faFirefoxBrowser} className="me-1"/> Firefox</Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>Tap the <FontAwesomeIcon icon={faEllipsisVertical}/> button to bring up additional options; it should reside on the upper right portion of your window</li>
              <Image src={androidfirefox01} rounded fluid className="my-2"/>
              <li>Tap the option named <b>Install</b></li>
              <Image src={androidfirefox02} rounded fluid className="my-2"/>
              <li>The below prompt (or something similar) should appear. Tap the <b>Add</b> button</li>
              <Image src={androidfirefox03} rounded fluid className="my-2"/>
              <li>At this point, the TouhouFest icon should appear on your phone's home screen. Tap it and it will open and function just like a regular app</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <h5><FontAwesomeIcon icon={faApple} className="mt-2"/> Apple</h5>
      <p className="small"><FontAwesomeIcon icon={faExclamationCircle}/> Progressive Web Apps on iOS can only be installed on <b>Safari</b> at this time due to OS limitations</p>
      <Image src={ios} fluid rounded className="mb-2"/>
      <ol>
        <li>Tap the <FontAwesomeIcon icon={faArrowUpFromBracket}/> (approximation) Share button </li>
        <li>Within the prompted menu, tap the <b>Add to Home Screen</b> option</li>
        <li>Another prompt will appear to customize the schedule's appearance. Tap the <b>Add button</b></li>
        <li>At this point, the TouhouFest icon should appear on your phone's home screen. Tap it and it will open and function just like a regular app</li>
      </ol>
   </>
  ),
}