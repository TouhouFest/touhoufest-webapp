/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faDownload, faEllipsisVertical, faExclamationCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faChrome, faApple, faFirefoxBrowser, faGooglePlay, faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import { Image, Row, Col, Card, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import androidchrome01 from "./../images/installation/androidchrome01.jpg";
import androidchrome02 from "./../images/installation/androidchrome02.jpg";
import androidchrome03 from "./../images/installation/androidchrome03.jpg";
import androidfirefox01 from "./../images/installation/androidfirefox01.jpg";
import androidfirefox02 from "./../images/installation/androidfirefox02.jpg";
import androidfirefox03 from "./../images/installation/androidfirefox03.jpg";
import ios from "./../images/installation/ios.webp";

export const installationPage = {
  "codename": "installation",
  "header": (<><FontAwesomeIcon icon={faDownload} fixedWidth></FontAwesomeIcon> Installation Options</>),
  "fluidImage": (<></>),
  "body": (
    <>
      <p>For those wishing to use this schedule in a downloaded offline fashion, a number of options exist depending on your platform.</p>
      <h4>Mobile Apps</h4>
      <p>TouhouFest is pleased to offer this application as a mobile app straight from either Google Play or Apple's App Store! For those using either Android or iOS devices respectively, please select either of the below two links to be redirected to your respective app store.</p>
      <Row xs={1} md={3} lg={4} className="text-center justify-content-center g-2">
        <Col>
          <a href="https://play.google.com/store/apps/details?id=com.touhoufest.touhoufestwebapp&pli=1" target="_blank" rel="noreferrer"><Card>
            <Card.Body>
              <Card.Title className="mb-0"><FontAwesomeIcon icon={faGooglePlay}/> Google Play</Card.Title>
            </Card.Body>
          </Card></a>
        </Col>
        <Col>
          <a href="https://apps.apple.com/us/app/touhoufest/id6746074989" target="_blank" rel="noreferrer"><Card>
            <Card.Body>
              <Card.Title className="mb-0"><FontAwesomeIcon icon={faAppStoreIos}/> Apple App Store</Card.Title>
            </Card.Body>
          </Card></a>
        </Col>
      </Row>

      <h4 className="mt-3">Progressive Web Apps</h4>
      <p>Depending on your phone's operating system, you may be able to download this website onto your home screen as a semi-standalone application right from your browser. The below instructions may be helpful:</p>
      <p className="small"><FontAwesomeIcon icon={faInfoCircle}/> If you encounter issues with the website or downloaded app, it may help to re-fresh, re-open the tab, close and re-open the browser, and/or re-install it.</p>
      <h5><FontAwesomeIcon icon={faAndroid}/> Android</h5>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header><FontAwesomeIcon icon={faChrome} className="me-1"/> Google Chrome</Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>Tap the <FontAwesomeIcon icon={faEllipsisVertical}/> button to bring up additional options; it should reside on the upper right portion of your window</li>
              <li>Tap the option named <b>Install app</b></li>
              <li>The below prompt (or something similar) should appear. Tap the <b>Add to Home screen</b> button</li>
              <li>At this point, the TouhouFest icon should appear on your phone's home screen. Tap it and it will open and function just like a regular app</li>
            </ol>
            <Row className="justify-content-center">
              <Col xs={12} md={4} lg={3}>
                <Image src={androidchrome01} rounded fluid className="my-2"/>
              </Col>
              <Col xs={12} md={4} lg={3}>
                <Image src={androidchrome02} rounded fluid className="my-2"/>
              </Col>
              <Col xs={12} md={4} lg={3}>
                <Image src={androidchrome03} rounded fluid className="my-2"/>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><FontAwesomeIcon icon={faFirefoxBrowser} className="me-1"/> Firefox</Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>Tap the <FontAwesomeIcon icon={faEllipsisVertical}/> button to bring up additional options; it should reside on the upper right portion of your window</li>
              <li>Tap the option named <b>Add app to Home screen</b></li>
              <li>The below prompt (or something similar) should appear. Tap the <b>Add</b> button</li>
              <li>At this point, the TouhouFest icon should appear on your phone's home screen. Tap it and it will open and function just like a regular app</li>
            </ol>
            <Row className="justify-content-center">
              <Col xs={12} md={4} lg={3}>
                <Image src={androidfirefox01} rounded fluid className="my-2"/>
              </Col>
              <Col xs={12} md={4} lg={3}>
                <Image src={androidfirefox02} rounded fluid className="my-2"/>
              </Col>
              <Col xs={12} md={4} lg={3}>
                <Image src={androidfirefox03} rounded fluid className="my-2"/>
              </Col>
            </Row>
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