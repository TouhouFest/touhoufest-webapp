/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowUpRightFromSquare, faBroom, faCircleInfo, faEarthAmericas, faGlobeAmericas, faToriiGate } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faSquareXTwitter, faSquareFacebook, faInstagram, faBluesky } from '@fortawesome/free-brands-svg-icons';
import { Image, Accordion, Card, ListGroup, Button, Table } from 'react-bootstrap';
import Ratio from 'react-bootstrap/Ratio';
import { con_banner, getColorState, MakeGenericCard, MakeGoheiHeader, WarningAlert } from "../Utils";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import touhoufest from "./../images/touhoufest.jpg";
import touhoufest_dark from "./../images/touhoufest_dark.jpg";

import fullweekend from "./../images/badges/fullweekend.jpg";
import saturday from "./../images/badges/saturday.jpg";
import sunday from "./../images/badges/sunday.jpg";
import staff from "./../images/badges/staff.jpg";
import guest from "./../images/badges/guest.jpg";
import performer from "./../images/badges/performer.jpg";
import exhibitor from "./../images/badges/exhibitor.jpg";
import press from "./../images/badges/press.jpg";

import cookie from "./../images/artistalley/cookie.png";
import freezeex from "./../images/artistalley/freezeex.png";
import anazel from "./../images/artistalley/anazel.jpg";
import carnelscorner from "./../images/artistalley/carnelscorner.jpg";
import meltyuchuu from "./../images/artistalley/melty.jpg";
import ckitten from "./../images/artistalley/ckitten.jpg";

import checkin01 from "./../images/checkin/checkin01.png";
import checkin02 from "./../images/checkin/checkin02.png";

import hoshibako from "./../images/artistalley/hoshibako.jpg";

let official_artists = [
    {
        "name": <>HoskibakoWorks</>,
        "image": hoshibako,
        "location": "See Torino Plaza",
        "website": "https://hoshibako.thebase.in/",
        "description": ""
    }
]

let old_official_artists = [
    {
        "name": <>Cloudie&shy;/Cookie&shy;tanuki&shy;art</>,
        "image": cookie,
        "location": "See Torino Plaza",
        "website": "https://linktr.ee/cookietanuki",
        "description": ""
    },
    {
        "name": "FREEZE-EX",
        "image": freezeex,
        "location": "See Torino Plaza",
        "website": "https://icecute.squarespace.com/",
        "description": ""
    },
    {
        "name": "Anazel",
        "image": anazel,
        "location": "Not at TF",
        "website": "https://www.instagram.com/anazel_art/?hl=en",
        "description": ""
    },
    {
        "name": "CarnelsCorner",
        "image": carnelscorner,
        "location": "Not at TF",
        "website": "https://twitter.com/CarnelsCorner",
        "description": ""
    }

];

let past_artists = [
  {
      "name": "MeltyUchuu",
      "image": meltyuchuu,
      "location": "2024 Badge Artist",
      "website": "https://meltyuchuu.carrd.co/",
      "description": ""
  },
  {
      "name": <>Colorful&shy;Kitten</>,
      "image": ckitten,
      "location": "2023 Badge Artist",
      "website": "https://linktr.ee/colorfulkitten_cosplay",
      "description": ""
  }
];

let operating_hours = [
  {
    "title": "General Con",
    "friday": "3:00 PM - 8:00 PM",
    "saturday": "9:00 AM - 10:00 PM",
    "sunday": "8:00 AM - 6:00 PM",
    "remark": ""
  },
  {
    "title": "Registration",
    "friday": "3:00 PM - 7:00 PM",
    "saturday": "9:00 AM - 6:00 PM",
    "sunday": "9:00 AM - 4:00 PM",
    "remark": ""
  },
  {
    "title": "Artist Alley/Vendors",
    "friday": "Not Open",
    "saturday": "10:30 AM* - 6:00 PM",
    "sunday": "9:00 AM - 4:00 PM",
    "remark": "*Note: Some vendors may start selling as early as 9AM, but this is up to the individual vendor. You may reliably expect all vendors to start selling by 10AM."
  },
  {
    "title": "Gaming Hall*",
    "friday": "Not Open",
    "saturday": "9:00 AM - 9:00 PM",
    "sunday": "9:00 AM - 5:00 PM",
    "remark": "*Note: Gaming may be either Freeplay or Tournament depending on the schedule"
  },

];

export function RenderHours({title=""}: {title?:string}) {
  return <>
        <Row xs={1} md={2} lg={4} className="mt-3 justify-content-center">
        
        {operating_hours.map((section) => (title === "" || section["title"] === title) ? <Col>
          <h4>{section["title"]} Hours</h4>
          <Table className="w-auto mx-auto">
            <thead>
                <tr>
                  <th>Day</th>
                  <th>Times</th>
                </tr>
            </thead>  
            <tbody>
              <tr>
                <td>Friday</td>
                <td>{section["friday"]}</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>{section["saturday"]}</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>{section["sunday"]}</td>
              </tr>
            </tbody>
          </Table>
          {section["remark"] !== "" && <p className="small">{section["remark"]}</p>}
        </Col> : <></>) }
      </Row>

  </>;
}

// aboutConPage:Record<string, JSX.Element>
export const aboutConPage = { 
  "displayTitle": false,
  "codename": "about",
  "jumplinks": [
    {
      "title": "Instructions for Checking In",
      "fragment_id": "checkoutpage",
    },
    {
      "title": "Operating Hours",
      "fragment_id": "operating_hours",
    },
    {
      "title": "Info and Policies",
      "fragment_id": "info_policies"
    },
    {
      "title": "Official Artist",
      "fragment_id": "artist"
    },
    {
      "title": "Event Feedback Form",
      "fragment_id": "feedback"
    }
  ],
  "header": (<><FontAwesomeIcon icon={faCircleInfo} fixedWidth></FontAwesomeIcon> About TouhouFest</>),
  "fluidImage": (<><Image className="display-dark" src={touhoufest_dark} fluid /><Image className="display-light" src={touhoufest} fluid /></>),
  "body": (
    <>
      <div className="text-center">
        <h3 className="display-6">Welcome to TouhouFest!</h3>
        <p className="lead">June 20th - 21st, 2026</p>
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
        <Button className="submitbutton mt-3" href="https://www.google.com/maps?ll=33.839401,-118.343938&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=13781372703427135255" target="_blank" rel="noreferrer">View In Maps <FontAwesomeIcon icon={faAngleRight} fixedWidth/></Button>
      </div>
      <p className="mt-3">
        A Touhou Project-themed fan event being held on June 20st - 21st, 2026, at the Torrance Cultural Arts Center in Torrance, California. Touhou fans from across the country will gather to celebrate the coming season and enjoy all the Touhou community has to offer such as art, music, and more!
      </p>

      <MakeGoheiHeader content="Instructions for Checking In Using QR Code" fragment_id='checkoutpage'/>

      <p>TouhouFest tickets contain a <b> QR Code</b> for faster checkin. It should have been sent directly to your email address along with your ticket; but in case you don't have it handy, please follow these instructions to pull up your ticket's QR Code:</p>

      <ol start={1}>
        <h5><li>Enter the TouhouFest Checkoutpage portal</li></h5>
      </ol>

      <Row className="justify-content-center mb-3">
        <Col xs="auto" className="align-self-center">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
        </Col>
        <Col xs md="auto">
          <h5 className="fw-normal mb-0"><a href="https://touhoufest.checkoutpage.com/portal" target="_blank" rel="noreferrer" className="text-reset">Use this link to go to the TouhouFest Checkout Page portal</a></h5>
        </Col>
        <Col xs="auto" className="align-self-center">
          <FontAwesomeIcon icon={faAngleRight}/>
        </Col>
      </Row>

      <p>You should be greeted with a webpage containing the below content:</p>

      <Row className="justify-content-center my-3">
        <Col xs={12} md={8} lg={5}>
          <Image src={checkin01} fluid rounded/>
        </Col>
      </Row>

      <hr className="my-4"/>

      <ol start={2}>
        <h5><li>Enter your email address</li></h5>
      </ol>

      <p>Enter the email adress that was used to purchase your badge and click on the "Send login link" button.</p>

      <hr className="my-4"/>

      <ol start={3}>
        <h5><li>Check your email</li></h5>
      </ol>

      <p>A link will be sent to your email address. You'll want to open that link that'll lead to your purchase information. You should be greeted with a webpage containing the below content:</p>

      <Row className="justify-content-center my-3">
        <Col xs={12} md={8} lg={5}>
          <Image src={checkin02} fluid rounded/>
        </Col>
      </Row>

      <hr className="my-4"/>

      <ol start={4}>
        <h5><li>Click on "Event bookings", then "Download tickets"</li></h5>
      </ol>

      <p>This will lead you to your ticket PDF containing your QR code.</p>

      <hr className="my-4"/>

      <MakeGoheiHeader content="Operating Hours" fragment_id='operating_hours'/>

      <RenderHours />

      <MakeGoheiHeader content="Info & Policies" fragment_id='info_policies'/>

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

      {/* removed until requested by touhoufest staff
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

      */}

      <MakeGoheiHeader content="TouhouFest 2026 Official Artist" fragment_id='artist'/>

      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <MakeGenericCard title="Hoshibako Works" picture={hoshibako} links={
            [
              {
                "link": "https://hoshibako.thebase.in/",
                "title": "Artist Website"
              }
            ]
          }>
            <p>HoshibakoWorks is a fashion brand based in Japan specializing in clothing, hats, and accessories that capture the essence of a tiny universe nestled in a jewelry box overflowing with stardust. HoshibakoWorks has done several official collaborations with popular series, including Touhou Project, which will be available at TouhouFest.</p>
          </MakeGenericCard>
        </Col>
      </Row>

      <MakeGoheiHeader content="Feedback Form" fragment_id='feedback'/>

      <p>We’d love to hear your feedback! If you have any, please use the Google Forms link below:</p>

      <div className="text-center">
        <Button className="submitbutton" href="https://docs.google.com/forms/d/e/1FAIpQLSeQlHDqopPY3Aw9hGe2AfEcD897pmVBKNKgjpz9Hb3sFp9hiA/viewform?usp=dialog" target="_blank" rel="noreferrer">View form <FontAwesomeIcon icon={faAngleRight} fixedWidth/></Button>
      </div>

      {/*
      <h5 className="mt-3">Past Official TouhouFest Artists</h5>

      <Row xs={2} md={4} lg={6} className="g-3 justify-content-center">
          {past_artists.map((artist, i) => <>
          <Col>
              <Card>
                  <Card.Img variant="top" src={artist["image"]}></Card.Img>
                  <ListGroup className="list-group-flush">
                      <ListGroup.Item className="text-center">{artist["name"]}</ListGroup.Item>
                      <ListGroup.Item className="text-center small">{artist["location"]}</ListGroup.Item>
                  </ListGroup>
                  {artist["website"] !== "" ? <Card.Footer className="text-center small"><a href={artist["website"]} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> Artist Link</a></Card.Footer> : <></>}
              </Card>
          </Col>
          </>)}
      </Row>
      */}

    </>
  ),
}