/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faSquareXTwitter, faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Image } from 'react-bootstrap';
import Ratio from 'react-bootstrap/Ratio';
import con_banner from '../con_banner.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Accordion } from 'react-bootstrap';

export const aboutConPage = {
  "header": (<><FontAwesomeIcon icon={faCircleInfo} fixedWidth></FontAwesomeIcon> About the Convention</>),
  "fluidImage": (<><Image src={con_banner} fluid /></>),
  "body": (
    <>
      <div className="text-center">
        <h3 className="display-6">Welcome to TouhouFest!</h3>
        <p className="lead">April 27th-28th, 2024</p>
      </div>
      <Row className="text-center">
        <Col><a href="https://discord.com/invite/touhoufest" target="_blank" rel="noreferrer" className="text-black"><h5><FontAwesomeIcon icon={faDiscord} fixedWidth></FontAwesomeIcon></h5></a></Col>
        <Col><a href="https://twitter.com/TouhouFest" target="_blank" rel="noreferrer" className="text-black"><h5><FontAwesomeIcon icon={faSquareXTwitter} fixedWidth></FontAwesomeIcon></h5></a></Col>
        <Col><a href="https://www.facebook.com/TouhouFest" target="_blank" rel="noreferrer" className="text-black"><h5><FontAwesomeIcon icon={faSquareFacebook} fixedWidth></FontAwesomeIcon></h5></a></Col>
        <Col><a href="https://www.instagram.com/touhoufest/" target="_blank" rel="noreferrer" className="text-black"><h5><FontAwesomeIcon icon={faInstagram} fixedWidth></FontAwesomeIcon></h5></a></Col>
        <Col><a href="https://www.touhoufest.org/" target="_blank" rel="noreferrer" className="text-black"><h5><FontAwesomeIcon icon={faGlobeAmericas} fixedWidth></FontAwesomeIcon></h5></a></Col>
      </Row>
      <div className="text-center mt-3">
        <h4>Torrance Cultural Arts Center</h4>
        <p>3330 Civic Center Dr, Torrance, CA 90503</p>

        <Ratio aspectRatio="16x9">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.9497761747903!2d-118.34651282403861!3d33.83940582893829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b52a55535501%3A0xbf414574f90a0717!2sTorrance%20Cultural%20Arts%20Center!5e0!3m2!1sen!2sus!4v1709492414671!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Con Center Google Maps"></iframe>
        </Ratio>
        <p class="small mb-0"><a href="https://www.google.com/maps?ll=33.839401,-118.343938&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=13781372703427135255" target="_blank" rel="noreferrer">Google Maps Link (if embed isn't working)</a></p>
      </div>
      <p className="mt-3 mb-0">
        A Touhou fan event being held on April 27-28th, 2024, at the Torrance Cultural Arts Center in Torrance, California. Touhou fans from across the country will gather to celebrate the coming season and enjoy all the Touhou community has to offer such as art, music, and more!
      </p>
      <Accordion className="mt-2">
      <Accordion.Item eventKey="0">
        <Accordion.Header>General Convention Guidelines</Accordion.Header>
        <Accordion.Body>
          <p>TouhouFest strives to be a fun, family friendly event to be enjoyed by Touhou fans of all ages and backgrounds. We ask that you keep swearing and any explicitly adult behavior to a minimum.</p>
          <ol>
            <li>Please be kind and courteous to others, including fellow attendees. We want you to enjoy the event, but remember others also wish to enjoy the event as well. Be aware of your behavior and how it affects your surroundings.</li>

            <li>Be respectful and courteous to TouhouFest Staff. Staff will try and assist when they can, but please remember that we are people as well as volunteers and not professionals.</li>

            <li>Remember that cosplayers are people too! Treat them with respect like you would any other person!</li>

            <li>Always make sure to ask for permission before taking any photographs of others (including cosplayers and cosplay ambassadors) at the convention.</li>

            <li>Please avoid any play-fighting with cosplay props.</li>

            <li>Please pick up after yourselves and try to maintain cleanliness. We hope to return to the venues, and keeping it in the same condition we arrived in will help greatly. </li>

            <li>Do not harass or agitate other attendees for any reason. Even if you think you’re being playful, it lessens the experience for everyone involved. Harassment of others, including staff, may be punishable. </li>

            <li>Suggestions and feedback are welcome, and TouhouFest encourages it. But please remember to go through the proper channels, such as the suggestion and feedback channel on discord, feedback form on website, or letting TouhouFest staff know.   </li>

            <li>Above all, please enjoy and have fun at our events! We look forward to seeing you there!</li>
          </ol>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  ),
}