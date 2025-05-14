/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faSquareXTwitter, faSquareFacebook, faInstagram, faBluesky } from '@fortawesome/free-brands-svg-icons';
import { Image, Accordion } from 'react-bootstrap';
import Ratio from 'react-bootstrap/Ratio';
import { con_banner, WarningAlert } from "../Utils";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import fullweekend from "./../images/badges/fullweekend.jpg";
import saturday from "./../images/badges/saturday.jpg";
import sunday from "./../images/badges/sunday.jpg";
import staff from "./../images/badges/staff.jpg";
import guest from "./../images/badges/guest.jpg";
import performer from "./../images/badges/performer.jpg";
import exhibitor from "./../images/badges/exhibitor.jpg";
import press from "./../images/badges/press.jpg";

// aboutConPage:Record<string, JSX.Element>
export const aboutConPage = { 
  "header": (<><FontAwesomeIcon icon={faCircleInfo} fixedWidth></FontAwesomeIcon> About TouhouFest</>),
  "fluidImage": (<><Image src={con_banner} fluid /></>),
  "body": (
    <>
      <div className="text-center">
        <h3 className="display-6">Welcome to TouhouFest!</h3>
        <p className="lead">June 14th - 15th, 2025</p>
      </div>
      <Row className="text-center">
        <Col><a href="https://discord.com/invite/touhoufest" target="_blank" rel="noreferrer" className="text-reset"><h5><FontAwesomeIcon icon={faDiscord} fixedWidth></FontAwesomeIcon></h5></a></Col>
        <Col><a href="https://twitter.com/TouhouFest" target="_blank" rel="noreferrer" className="text-reset"><h5><FontAwesomeIcon icon={faSquareXTwitter} fixedWidth></FontAwesomeIcon></h5></a></Col>
        <Col><a href="https://www.facebook.com/TouhouFest" target="_blank" rel="noreferrer" className="text-reset"><h5><FontAwesomeIcon icon={faSquareFacebook} fixedWidth></FontAwesomeIcon></h5></a></Col>
        <Col><a href="https://www.instagram.com/touhoufest/" target="_blank" rel="noreferrer" className="text-reset"><h5><FontAwesomeIcon icon={faInstagram} fixedWidth></FontAwesomeIcon></h5></a></Col>
        <Col><a href="https://www.touhoufest.org/" target="_blank" rel="noreferrer" className="text-reset"><h5><FontAwesomeIcon icon={faGlobeAmericas} fixedWidth></FontAwesomeIcon></h5></a></Col>
        <Col><a href="https://bsky.app/profile/touhoufest.org" target="_blank" rel="noreferrer" className="text-reset"><h5><FontAwesomeIcon icon={faBluesky} fixedWidth></FontAwesomeIcon></h5></a></Col>
      </Row>
      <div className="text-center mt-3">
        <h4>Torrance Cultural Arts Center</h4>
        <p>3330 Civic Center Dr, Torrance, CA 90503</p>

        <Ratio aspectRatio="16x9">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.9497761747903!2d-118.34651282403861!3d33.83940582893829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b52a55535501%3A0xbf414574f90a0717!2sTorrance%20Cultural%20Arts%20Center!5e0!3m2!1sen!2sus!4v1709492414671!5m2!1sen!2sus" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Con Center Google Maps"></iframe>
        </Ratio>
        <p className="small mb-0"><a href="https://www.google.com/maps?ll=33.839401,-118.343938&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=13781372703427135255" target="_blank" rel="noreferrer">Google Maps Link (if embed isn't working)</a></p>
      </div>
      <p className="mt-3">
        A Touhou fan event being held on June 14th - 15th, 2025, at the Torrance Cultural Arts Center in Torrance, California. Touhou fans from across the country will gather to celebrate the coming season and enjoy all the Touhou community has to offer such as art, music, and more!
      </p>

      <h4 className="mt-3">Operating Hours</h4>
      <p><b>General Con Hours</b></p>
      <ul>
          <li>Friday: N/A</li>
          <li>Saturday: 9:00 AM - 11:00 PM</li>
          <li>Sunday: 9:00 AM - 6:00 PM</li>
      </ul>
      <p><b>Registration</b></p>
      <ul>
          <li>Friday: 3:00 PM - 7:00 PM</li>
          <li>Saturday: 9:00 AM - 5:00 PM</li>
          <li>Sunday: 9:00 AM - 3:00 PM</li>
      </ul>
      <p><b>Artist's Alley/Vendors</b></p>
      <ul>
          <li>Friday: N/A</li>
          <li>Saturday: 9:00 AM - 6:00 PM</li>
          <li>Sunday: 9:00 AM - 5:30 PM</li>
      </ul>
      <p><b>Gaming*</b></p>
      <ul>
          <li>Friday: N/A</li>
          <li>Saturday: 9:30AM - 10:30 PM</li>
          <li>Sunday: 9:00 AM - 5:00 PM</li>
      </ul>
      <p className="small">*Note: Gaming may be either Freeplay or Tournament depending on the schedule</p>


      <h4 className="mb-3">Info & Policies</h4>
      <Accordion className="my-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>General Convention Guidelines</Accordion.Header>
          <Accordion.Body>
            <p>TouhouFest strives to be a fun, family friendly event to be enjoyed by Touhou fans of all ages and backgrounds. We ask that you keep swearing and any explicitly adult behavior to a minimum.</p>
            <ol>
              <li>Please be kind and courteous to others, including fellow attendees. We want you to enjoy the event, but remember others also wish to enjoy the event as well. Be aware of your behavior and how it affects your surroundings.</li>

              <li>Real weapons are not permitted. This includes but is not limited to firearms, swords, sharp knives, or blunt objects that can easily be used as a weapon. The definition of such a weapon is left to the discretion of TouhouFest security personnel. </li>

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
        <Accordion.Item eventKey="1">
          <Accordion.Header>Prohibited Items</Accordion.Header>
          <Accordion.Body>
            <p><b><em>No Real Weapons Are Allowed at TouhouFest!</em></b></p>
            <p>This includes firearms, knives, curios, relic antique firearms, any form of ammunition, any items designed or manufactured with the intent to cause death or serious bodily injury, whether carried openly or concealed, even if any such weapons are inoperable or unusable and irrespective of whether you are licensed to possess such weapons. Items that may otherwise be legal for you to own or carry are not welcome at TouhouFest if they violate this Prop / Replica Weapons Policy.</p>
            <p>The following items are not permitted at TouhouFest:</p>
            <ul>
                <li>All Metal Weapons</li>
                <li>Firearms, Ammunition, Rifles, Shotguns, Handguns, Blowguns, Tasers, Laser Pointers, Laser-Aiming Devices or similar Laser Devices</li>
                <li>Explosives, Incendiary Devices, Chemical Weapons, and Pepper Spray / Mace</li>
                <li>Knives, Live Blades/Swords (including Katana and other Martial Arts Style Swords), Daggers, Sword Canes, Switchblades, Bali-Song (Butterfly Knife), Axes, Kunai, Ice Skates, and Hatchets</li>
                <li>Metal Pole Arms, Wooden/Metal Bats, Paddles, Stilts, Golf Clubs, and Vuvuzelas</li>
                <li>Archery and Hunting Bows, Arrows, Nunchucks, Brass Knuckles, and Whips</li>
                <li>Any item designed or manufactured with the intent to cause death or serious bodily injury to any person or property, any item that is illegal in the State of California, or any item that appears, in TouhouFest’s sole discretion, to be dangerous or which would pose or place others at risk or harm, immediate or otherwise.</li>
            </ul>
            <p>(Note: some venues prohibit other items e.g. glass bottles, food, alcohol, and e-cigarettes. Please check with the venue before bringing such items.)</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Everday Items</Accordion.Header>
          <Accordion.Body>
            <p>Items that people normally carry such as umbrellas or walking sticks/canes are permitted within TouhouFest and subject to inspection upon entry.</p>
            <ul>
              <li>Lightweight plastic or foam bats, paddles, and clubs are permitted.</li>
              <li>Roller skates/blades, skateboards, scooters, go-karts, hoverboards, etc. are not permitted within the Event area.</li>
              <li>RC Cars, Wagons, powered vehicles designed for children are permitted, in the event. The operators of these are responsible for any damage to the area and or other individuals.</li>
              <li>Ice Skates are not allowed, even with skate guards attached.</li>
              <li>Power tools are not permitted e.g. chainsaws, drills, or hedge trimmers.</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Lost and Found</Accordion.Header>
          <Accordion.Body>
            <p>If you see an item that does not belong to you, we encourage you to return the item to our Staff Ops room.  We will do our best to catalogue said item(s) and endeavor to return said item(s) to the rightful owner(s).  Anything with significant personal value (eg: a wallet) will requirement identification upon retrieval.  In addition, anyone that has lost an item at TouhouFest may check in with Staff Ops during event hours.  </p>
            <p>Any items that end up in our Lost & Found are retained for a period of 30 days from the end of the convention. Any items confirmed to be in our possession will be shipped back at the owner’s expense, or arrangements can be made for items to be picked up, delivered to the next TouhouFest and held in Staff Ops. After the period of 30 days has expired, all unclaimed/unconfirmed items in our possession will be cleared out with no guarantees on holding thereafter.</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h4>TouhouFest 2025 Convention Badges</h4>
      <Row xs={2} md={3} lg={4} className="justify-content-center g-3">
        <Col><Image src={fullweekend} rounded fluid/></Col>
        <Col><Image src={saturday} rounded fluid/></Col>
        <Col><Image src={sunday} rounded fluid/></Col>
        <Col><Image src={staff} rounded fluid/></Col>
        <Col><Image src={guest} rounded fluid/></Col>
        <Col><Image src={performer} rounded fluid/></Col>
        <Col><Image src={exhibitor} rounded fluid/></Col>
        <Col><Image src={press} rounded fluid/></Col>
      </Row>
    </>
  ),
}