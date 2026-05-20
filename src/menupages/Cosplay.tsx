/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCameraRetro, faHatWizard, faLocationDot, faPersonBurst } from '@fortawesome/free-solid-svg-icons';
import {pinewindgarden, assemblyhall, entryplaza, WarningAlert, toyota, MakeGenericCard, MakeGoheiHeader, MakeLocationBadge } from "../Utils";
import { Accordion, Card, Figure, Image, Row, Col, ListGroup, Nav, Modal, Table } from 'react-bootstrap';
import { faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { CircledBullets } from '../Utils';

// const cosplaybanner = require('./../images/cosplaybanner.jpg');
import cosplaybanner from "./../images/cosplaybanner.jpg";
import medukitty from "./../images/medukitty.jpg";
import cosplayrepair from "./../images/cosplayrepair.jpg";
import uniphants from "./../images/uniphants.jpg";
import pumpking from "./../images/pumpking.jpg";
import mysticallala from "./../images/mysticallala.jpg";
import { faClock } from '@fortawesome/free-regular-svg-icons';

import cosplaymeetupscover from "./../images/cosplay_meetups_cover.jpg";
import otherphotoshootscover from "./../images/otherphotoshoots_banner.jpg";
import cosplayworkshop from "./../images/cosplayworkshop.jpg";
import cosplaycontest from "./../images/cosplaycontest.jpg";

import cosplaymeetups from "./cosplaymeetups.json";
import EventDescription from './../EventDescription';
import { useState } from 'react';
import Markdown from 'marked-react';

function CosplayMeetupListing({type, includeFriday=false, includeLocation=false, includeDaySelect=true, subtitleString, renderModal=true}: {type:string, includeFriday?:boolean, includeDaySelect?:boolean, includeLocation?:boolean, subtitleString:string, renderModal?:boolean}) {
    
        const [showEventDescription, setShowEventDescription] = useState(false);
        const [eventDetails, setEventDetails] = useState({});
        const [activeDay, setActiveDay] = useState("Saturday");

        const handleEventOnHide = () => setShowEventDescription(false);

        function handleEventOnClick(index:number) {
            let evt = cosplaymeetups[index];
            setEventDetails(evt);
            setShowEventDescription(true);
        }

        function ReturnCosplayHeader({meetup}: {meetup:any}) {
            return <>
                <h5 className="mb-1">{meetup["event_title"]}</h5>
                <p className={includeLocation ? "mb-0" : "mb-1"}><FontAwesomeIcon icon={faClock} fixedWidth/> <b>{meetup["event_day"]} | {meetup["event_start_time"]} - {meetup["event_end_time"]}</b></p>
                {includeLocation && <p className="mb-1"><FontAwesomeIcon icon={faLocationDot} fixedWidth/> <b>{meetup["event_room"]}</b></p>}
                <b className="mb-0"><FontAwesomeIcon icon={faPersonBurst} fixedWidth/> {subtitleString}</b>
                <p className="mb-1">{meetup["event_subtitle"]}</p>
            </>;
        }

        
        return <>

        {renderModal && 
          <Modal show={showEventDescription} onHide={handleEventOnHide} centered scrollable>
              <Modal.Header closeButton>
                  <Modal.Title className="align-middle"></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <ReturnCosplayHeader meetup={eventDetails}/>

                  <hr />

                  <Markdown>{eventDetails["event_description"]}</Markdown>
              </Modal.Body>
          </Modal>
        }
       
        <Row className="justify-content-center">
            <Col xs={12} lg={8}>
                <ListGroup className='mb-3 thfest-listgroup'>
                    {includeDaySelect && 
                        <ListGroup.Item className="p-0">
                            <Nav fill variant="pills" defaultActiveKey="sat">
                                {includeFriday && 
                                    <Nav.Item onClick={() => setActiveDay("Friday")}>
                                        <Nav.Link className="rounded-bottom-0 rounded-end-0 fw-bold" eventKey="fri">Fri</Nav.Link>
                                    </Nav.Item>
                                }
                                <Nav.Item onClick={() => setActiveDay("Saturday")}>
                                    <Nav.Link className="rounded-0 fw-bold" eventKey="sat">Sat</Nav.Link>
                                </Nav.Item>
                                <Nav.Item onClick={() => setActiveDay("Sunday")}>
                                    <Nav.Link className="rounded-start-0 rounded-bottom-0 fw-bold"eventKey="sun">Sun</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </ListGroup.Item>
                    }

                    {cosplaymeetups.map((meetup, idx) => {
                        return meetup["meetup_type"] === type && meetup["event_day"] === activeDay ? <>
                        <ListGroup.Item onClick={() => handleEventOnClick(idx)}>
                            <ReturnCosplayHeader meetup={meetup}/>
                            {
                              renderModal && <h5 className="fw-normal text-decoration-underline">See more info <FontAwesomeIcon icon={faAngleRight} fixedWidth/></h5>
                            }
                        </ListGroup.Item>
                        </> : <></>;
                    })}
                </ListGroup>
            </Col>
        </Row>
        </>;
}

export const cosplayPage = {
    "codename": "cosplay",
    "jumplinks": [
        {
        "title": "Cosplay Meetups",
        "fragment_id": "cosplaymeetups",
        },
        {
        "title": "Other Photoshoots",
        "fragment_id": "otherphotoshoots",
        },
        {
        "title": "Cosplay Workshop",
        "fragment_id": "cosplayworkshop"
        },
        {
        "title": "Cosplay Repair",
        "fragment_id": "cosplayrepair"
        },
        {
        "title": "Cosplay Contest",
        "fragment_id": "cosplaycontest"
        },
        {
        "title": "Cosplay Guests",
        "fragment_id": "cosplayguests"
        },
        {
        "title": "Cosplay Rules",
        "fragment_id": "cosplayrules"
        }
    ],
    "header": (<><FontAwesomeIcon icon={faHatWizard} fixedWidth></FontAwesomeIcon> Cosplay</>),
    "fluidImage": (<Image src={cosplaybanner} fluid />),
    "body": (<>
        <h4>Locations</h4>
        <ul>
            <li><b>Cosplay Meetups</b>: Pine Wind Garden (<CircledBullets argument="12"/> Cosplay Meetups)</li>
            <li><b>Cosplay Contest</b>: Torino Plaza (<CircledBullets argument="7"/> Main Stage)</li>
            <li><b>Cosplay Contest Pre-Judging</b>: Torino Plaza</li>
            <li><b>Cosplay Exhibition</b>: Assembly Hall (<CircledBullets argument='11'/> Cosplay Exhibition)</li>
            <li><b>Cosplay Workshops</b>: Children's Art Wing (<CircledBullets argument='13'/> Panels 1)</li>
            <li><b>Solo Photoshoots</b>: Drawing and Painting Studio (<CircledBullets argument='14'/> Panels 2)</li>
        </ul>
        {/* can be re-enabled by request
        <Row className="justify-content-center text-center">
            <Col xs={12} md={10} lg={8}>
                <Figure>
                    <Figure.Image src={pinewindgarden} fluid rounded />
                    <Figure.Caption>Pine Wind Garden</Figure.Caption>
                </Figure>
            </Col>
            <Col xs={12} md={10} lg={8}>
                <Figure>
                    <Figure.Image src={assemblyhall} fluid rounded></Figure.Image>
                    <Figure.Caption>Assembly Hall (furniture may be adjusted depending on the event)</Figure.Caption>
                </Figure>
            </Col>
            <Col xs={12} md={10} lg={8}>
                <Figure>
                    <Figure.Image src={toyota} fluid rounded></Figure.Image>
                    <Figure.Caption>Toyota Meeting Hall</Figure.Caption>
                </Figure>
            </Col>
        </Row>

        */}

        <MakeGoheiHeader content="Cosplay Meetups" fragment_id='cosplaymeetups'/>

        <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
                <Image src={cosplaymeetupscover} rounded fluid/>
            </Col>
        </Row>

        <div className="text-center my-4"><MakeLocationBadge location="Pine Wind Garden"/></div>

        <p>Cosplay Meetups for select mainline Touhou games &mdash; organized by our talented Cosplay Runners and Photographers &mdash; are listed below. To view a particular day's meetups, tap on the appropriate day in the selector. ("Fri", "Sat", "Sun")</p>

        <CosplayMeetupListing type="meetups" subtitleString='For characters from'/>
           
        <MakeGoheiHeader content="Other Photoshoots/Meetups" fragment_id="otherphotoshoots"/>

        <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
                <Image src={otherphotoshootscover} rounded fluid/>
            </Col>
        </Row>

        <Row className="justify-content-center gy-3 my-3">
            <Col xs="auto"><MakeLocationBadge location="Pine Wind Garden"/></Col>
            <Col xs="auto"><MakeLocationBadge location="Drawing & Painting Studio"/></Col>
        </Row>

        <p>Below are a few additional other photoshoots/meetups that may be of interest.</p>

        <CosplayMeetupListing type="other_photoshoots" includeFriday={true} subtitleString='Cosplay meetup features:' includeLocation={true}/>

        <MakeGoheiHeader content="Cosplay Workshop" fragment_id='cosplayworkshop'/>

        <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
                <Image src={cosplayworkshop} rounded fluid/>
            </Col>
        </Row>

        <div className="text-center my-4"><MakeLocationBadge location="Children's Art Wing"/></div>

        <p>TouhouFest is pleased to announce that it is hosting a set of cosplay workshops! For those interested in getting their cosplays to the best they can be, the below programming may be of interest:</p>

        <CosplayMeetupListing type="workshop" includeFriday={false} subtitleString='Workshop Features:' includeDaySelect={false} />

        <MakeGoheiHeader content="Cosplay Repair" fragment_id='cosplayrepair'/>

        <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
                <Image src={cosplayrepair} rounded fluid/>
            </Col>
        </Row>

        <div className="text-center my-4"><MakeLocationBadge location="Assembly Hall"/></div>

        <p>Did your cosplay unexpectedly explode into a million billion pieces? TouhouFest will have a dedicated Cosplay Repair stand available to assist. Hours and operations for Cosplay Repair are listed below:</p>

        <Row xs={1} md={2} lg={4} className="mt-3 justify-content-center">
          <Col>
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
                  <td>Not Open</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>10:00 AM - 5:00 PM</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>10:00 AM - 2:30 PM</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        <MakeGoheiHeader content="Cosplay Contest" fragment_id='cosplaycontest'/>

        <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
                <Image src={cosplaycontest} rounded fluid/>
            </Col>
        </Row>

        <div className="text-center my-4"><MakeLocationBadge location="Torino Plaza Stage"/></div>

        <h4>Itinerary</h4>

        <p>Summary of key events in Cosplay Contest:</p>

        <CosplayMeetupListing type="contest" includeDaySelect={false} subtitleString='Event note:' includeLocation={true} renderModal={false}/>

        <h4>Categories</h4>
        <p>There are three components within the Cosplay Contest:</p>
        <Row xs={1} md={3} className="justify-content-center gy-3">
            <Col>
                <Card className="pink-one">
                    <Card.Body>
                        <Card.Title className="text-center">Craftmanship</Card.Title>
                        <Card.Text>The Craftsmanship category will be judged based on how well you’ve made your costume. If you’re proud of your sewing, foamwork, or any other techniques you used to put your costume together, this category is for you! You’ll have time before the contest to meet with the judges so they can see your work up close and ask any questions. During the contest, you’ll walk across the stage and strike some cool poses in front of the audience!</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="red-one">
                    <Card.Body>
                        <Card.Title className="text-center">Performance</Card.Title>
                        <Card.Text>If you love to entertain, then consider entering the Performance category! You don’t have to have a self-made costume to perform, rather you’ll be judged on how well you’re able to capture the audience. This can be through a skit, dance, or anything else you can think of. You can be as comedic or dramatic as you’d like, so get creative!</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="purple-one">
                    <Card.Body>
                        <Card.Title className="text-center">Exhibition</Card.Title>
                        <Card.Text>The Exhibition category is for anyone that wants a chance to walk across the stage, but doesn’t want to compete. This is just for fun and is NOT eligible for prizes, so there are no limits to whether you’ve made your costume yourself or not. Anyone may participate in this category, including staff and guests. </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <h5 className="mt-3">Awards & Prizes</h5>
        <p>Please note that the Exhibition Category is not eligible for awards.</p>
        <Row xs={1} lg={3} className="gy-3 justify-content-center">
            <Col >
                <Card>
                    <Card.Body className="text-center gold-bg rounded">
                        <Card.Title>Best Craftsmanship</Card.Title>
                        <Card.Subtitle>Free TouhouFest 2026 Badge + Medal</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="">
                    <Card.Body className="text-center silver-bg rounded">
                        <Card.Title>Runner-up Best Craftsmanship</Card.Title>
                        <Card.Subtitle>Commemorative Medal</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="">
                    <Card.Body className="text-center gold-bg rounded">
                        <Card.Title>Best Performance</Card.Title>
                        <Card.Subtitle>Free TouhouFest 2026 Badge + Medal</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="">
                    <Card.Body className="text-center silver-bg rounded">
                        <Card.Title>Runner-up Best Performance</Card.Title>
                        <Card.Subtitle>Commemorative Medal</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="">
                    <Card.Body className="text-center gold-bg rounded">
                        <Card.Title>Judge's Choice (Per-Judge)</Card.Title>
                        <Card.Subtitle>Prizes up to Judge Discretion</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <h5 className="mt-3">About the Cosplay Contest Judges</h5>
        <Row xs={1} md={2} lg={4} className="gy-3">
            <Col>
                <Card>
                    <Card.Img variant="top" src={medukitty} />
                    <Card.Header className="text-center">Master of Ceremonies</Card.Header>
                    <Card.Body>
                        <Card.Title>Medukitty</Card.Title>
                        <Card.Subtitle className="mb-2">Cosplay Ambassador</Card.Subtitle>
                        <Card.Text>I'm MeduKitty, a long time cosplayer and Touhou enthusiast who's thrilled to combine her two greatest passions!  I've been cosplaying from Touhou since 2018, and my favorite thing is making my costumes from scratch with as many details as I can fit into them.  I love our community so much and I can't wait to participate in TouhouFest with you all! </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Card.Link href="https://www.instagram.com/medukitty_/" target="_blank"><FontAwesomeIcon icon={faInstagram} /> Instagram</Card.Link>
                        <Card.Link href="https://www.tiktok.com/@medukitty" target="_blank"><FontAwesomeIcon icon={faTiktok} /> TikTok</Card.Link>
                        <Card.Link href="https://twitter.com/medukitty" target="_blank"><FontAwesomeIcon icon={faXTwitter} /> Twitter</Card.Link>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={pumpking} />
                    <Card.Header className="text-center">Cosplay Judge</Card.Header>
                    <Card.Body>
                        <Card.Title>Pumpking</Card.Title>
                        <Card.Subtitle className="mb-2">Cosplay Ambassador</Card.Subtitle>
                        <Card.Text>Hi!! My name is Pumpking! I'm 24 years old (as of 2025) and got into Touhou in 2020 during Covid! I love to cosplay and especially pride myself in sharing cosplay designers and making shopping overseas more accessible for newcomers. I've started making my own stuff recently too. Thank you for having me!</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Card.Link href="https://www.instagram.com/sunnysiddedup/" target="_blank"><FontAwesomeIcon icon={faInstagram} /> Instagram</Card.Link>
                        <Card.Link href="https://x.com/Sunnysiddedup" target="_blank"><FontAwesomeIcon icon={faXTwitter} /> Twitter</Card.Link>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={mysticallala} />
                    <Card.Header className="text-center">Cosplay Judge</Card.Header>
                    <Card.Body>
                        <Card.Title>Mystical Lala</Card.Title>
                        <Card.Subtitle className="mb-2">Cosplay Ambassador</Card.Subtitle>
                        <Card.Text>Hi I'm Lala! I'm just a girl who cosplays the characters she loves! I've been cosplaying since 2012, and I make, buy, alter cosplays! I love cosplaying mainly Touhou girls but I do stuff from other series as well. If you have any questions I can try to help! Anyone can cosplay as long as they have fun!</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Card.Link href="https://www.instagram.com/mystical.lala/?hl=en" target="_blank"><FontAwesomeIcon icon={faInstagram} /> Instagram</Card.Link>
                        <Card.Link href="https://x.com/Mysticallala" target="_blank"><FontAwesomeIcon icon={faXTwitter} /> Twitter</Card.Link>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card className="">
                    <Card.Img variant="top" src={uniphants} />
                    <Card.Header className="text-center">Cosplay Guest Judge</Card.Header>
                    <Card.Body>
                        <Card.Title>Purple Uniphants</Card.Title>
                        <Card.Text>You can call me Uni! I've been cosplaying since 2011, and I ventured into Touhou shortly after. I have a handful of awards under my belt, but please don't be intimidated: I love seeing how we as cosplayers bring fiction to reality with our own styles and personalities. I owe all of my crafting knowledge to the internet, but I'm still not done learning!</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Card.Link href="https://www.instagram.com/purpleuniphants/" target="_blank"><FontAwesomeIcon icon={faInstagram} /> Instagram</Card.Link>
                        <Card.Link href="https://x.com/purpleuniphants" target="_blank"><FontAwesomeIcon icon={faXTwitter} /> Twitter</Card.Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
        <h5 className="mt-3">Rules</h5>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>General Rules</Accordion.Header>
                <Accordion.Body>
                    <p>These Rules apply to all three categories.</p>
                    <ul>
                        <li>Costumes must be from Touhou Project media; these include the games, lore, manga, CDs, etc. Original characters or those from other media are not eligible. Costumes based on fanworks or officially licensed media (i.e. Lost Word) are allowed. If entering the Craftsmanship Competition, sufficient reference images must be provided.</li>
                        <li>Costumes unable to fit through a standard door must be pre-approved.</li>
                        <li>Costumes that have restricted vision or hindered movement should indicate as such on their entry form.</li>
                        <li>One entry per attendee.</li>
                        <li>You may only enter in one category. For example, if you made your own cosplay but entered in Performance, we cannot award you for Craftsmanship and vice versa.</li>
                        <li>All entrants are expected to be on time to the main stage and walk the stage.</li>
                        <li>There is a limited number of spots for each category. Applications are accepted on a first-come, first-serve basis, so in-person applications will only be available if we still have space. Therefore, please consider applying online ahead of time! Performance entries will NOT be accepted in-person, as performances must be approved ahead of time.</li>
                        <li>TouhouFest staff and guests are ONLY eligible to participate in the Exhibition Category.</li>
                        <li>Be respectful of staff, the venue, and your fellow attendees. Follow the TouhouFest Convention Guidelines at all times.</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Craftsmanship Rules</Accordion.Header>
                <Accordion.Body>
                    <p>These Rules apply to only the Craftsmanship Category.</p>
                    <ul>
                        <li><b>At least half (50%) of your costume must be self-made.</b> Pieces not made by the entrant will be unable to be considered for judging.</li>
                        <li>Entrees must provide printed reference material of the character they’re cosplaying at the time of judging.</li>
                        <li>Printed work in progress photos of the costume are also strongly encouraged, but not required.</li>
                        <li>You must attend Pre-Judging before the show to be considered for an award. This is where the judges will meet with you for a few minutes to see your work up close and hear how you made your costume. When your entry is accepted, you will be contacted with more details on the time and location for Pre-Judging.</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Performance Rules</Accordion.Header>
                <Accordion.Body>
                    <p>These Rules apply to only the Performance Category.</p>
                    <ul>
                        <li>All audio, including dialogue, must be pre-recorded. There will be no mics available to use during performances.</li>
                        <li>Audio must be submitted and approved by staff before the contest. You will be contacted if any changes need to be made. The deadline for submitting audio is June 1st, with no further revisions accepted past June 6th.</li>
                        <li>Performances are limited to <b>2.5 minutes</b> in length. Any performance that goes over this limit will not be accepted.</li>
                        <li>Audio must be submitted as it is intended to be played. We can’t accommodate special requests to start and stop, or play multiple audio files. Please be kind to our sound team and make it as simple for them as possible!</li>
                        <li>You may have a maximum of five participants in your performance. Please be mindful of the size of the stage while planning.</li>
                        <li>Don’t throw anything into the audience.</li>
                        <li>All props must be easily cleared off of the stage at the end of the performance. This means that confetti, rose petals, glitter, or anything else messy is not allowed.</li>
                        <li>No pyrotechnics are allowed.</li>
                        <li>Stunts, combat, or any other potentially harmful actions are not allowed.</li>
                        <li>Do not jump off the stage or run into the audience during your performance.</li>
                        <li>The audience likes surprises, but the staff do not! Please do not make any last minute changes to your performance that’ll throw us off guard, especially if it violates any of these rules. </li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <h4>Cosplay Rules</h4>
        <p>TouhouFest celebrates the creativity of cosplayers and encourage everyone to cosplay whomever they wish regardless of size, gender, age, religion, shape, color, or even species. Cosplay is all about having fun and creativity!</p>
        <Accordion className="my-2">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Cosplay Guidelines</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li>No bare feet, some form of foot covering must be worn.</li>

                        <li>No hateful imagery should be included in cosplay for any reason. Cosplays must not be worn to agitate or intentionally offend other attendees.</li>

                        <ul>
                            <li>Examples include Nazi/SS imagery, KKK imagery, blackface, etc</li>
                        </ul>

                        <li>Costumes should not obstruct or impede the flow of traffic or entryway.</li>

                        <li>No excessively shedding props or costumes (Use of glitter, feathers, etc).</li>

                        <li>No blades or metal props. PVC and wood are fine!</li>

                        <li>Props must measure less than 6 feet in any arbitrary direction at rest. Expandable props and costumes can be extended temporarily for pictures or photoshoots, provided doing so does not interfere with traffic flow.</li>

                        <li>Costume and clothing should not expose the body in such a way as to be deemed indecent exposure. Private parts must be covered in an opaque material that will not slip or have gaps.</li>

                        <li>Males wearing tight-fitting costumes are required to wear a dance belt.</li>

                        <li>Costumes or props that offer extra mobility (i.e. skates, skateboards, in line skates, scooter, or bikes) can be used for display purposes only. They cannot be ridden around.</li>

                        <li>Vintage, historical, any non current uniform and any military or police-style costumes may be address at the convention’s discretion.</li>

                        <li>Any weapons props must be taken to a prop check to be checked and tagged.</li>

                    </ul>

                    <p>Attendees should understand and agree that, for their safety and the safety of everyone at TouhouFest, we have the absolute and immediate discretion and right to inspect your costumes, prop weapons, and any other items you bring to the Event. Because your safety and the safety of every attendee is of the utmost importance.</p>

                    <p>TouhouFest reserves the right to modify and/or update this policy at any time in their sole discretion and without prior notice.</p>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Props & Peace Bonding</Accordion.Header>
                <Accordion.Body>
                    <p>Prop weapons must be submitted to “Weapons Check” for Peace Bonding. TouhouFest has the sole discretion to approve prop weapons. Please visit us at one of our Weapons Check booths during the Event. TouhouFest Weapons Check booth locations shall be designated in the programs and on signs.</p>
                    <p>We may revoke your Peace Bond at any time in our sole discretion. Behavior which will warrant revocation of your Peace Bond includes:</p>
                    <ul>
                        <li>Brandishing an item in an inappropriate fashion, such as play-fighting or swinging the prop around</li>
                        <li>Causing complaints from other attendees of the Event</li>
                        <li>Tampering or altering of the Peace Bond</li>
                    </ul>
                    <h5>Prop Weapons</h5>
                    <p>Prop weapons are inoperable weapons that support the overall look of your costume or character. For example, plastic Airsoft guns, Nerf guns, water guns, dart guns, disc guns, pellet guns, and cap guns are prop weapons.</p>
                    <h5>Peace Bonding Rules</h5>
                    <p>If a prop weapon is, or was, at any time capable of firing anything, it must be rendered permanently inoperable in order to qualify for Peace Bonding. You can do this by, for example, permanently plugging the barrel with glue, caulk, or any non-removable substance and hot gluing all moving components of the prop in place. You must be able to prove that the prop weapon is permanently inoperable upon inspection.</p>
                    <p>In addition, to qualify for Peace Bonding, your prop weapon must meet the following criteria:</p>
                    <ul>
                        <li>All bladed props, prop firearms and prop knives cannot contain metal, have metal components, or have metal-based paints on them.</li>
                        <ul>
                            <li>Note: Lightsabers with metal hilts are allowed.</li>
                        </ul>
                        <li>Prop explosives or ammunition cannot be made out of metal.</li>
                        <li>All swords and bladed prop weapons must adhere to the following rules:</li>
                        <ul>
                            <li>They cannot be made out of metal</li>
                            <li>If your non-metal blade has a sharp edge or pointed tip, it must be anchored to a hard sheath for the duration of the Event</li>
                            <li>If you do not have a hard sheath, your non-metal blade must have a blunt edge and blunt tip</li>
                        </ul>
                        <li>All prop bows must be unstrung or have a low-tensile thread with no draw weight and be incapable of shooting.</li>
                        <li>All prop arrows must have blunt non-metal tips.</li>
                        <li>Metal chains are not permitted unless it is for cosplay and affixed to a piece of clothing and/or armor.</li>
                    </ul>
                    <p>If your prop weapon is a toy, look-alike, or imitation firearm, then federal regulations (<a href="https://www.ecfr.gov/current/title-15/subtitle-B/chapter-II/subchapter-H/part-272/section-272.3" rel="noreferrer">15 CFR § 272.3</a>) require that it either be translucent enough to, permit unmistakable observation of the device’s complete contents or must have at least one of the following:</p>
                    <ul>
                        <li>An Orange Solid Plug in Barrel: Have a blaze orange (Fed-Std-595B 12199) or orange color brighter than that specified by the federal standard color number solid plug permanently affixed to the muzzle end of the barrel as an integral part of the entire device and recessed no more than 6 millimeters from the muzzle end of the barrel; or</li>
                        <li>An Orange Barrel Marking: A blaze orange (Fed-Std-595B 12199) or orange color brighter than that specified by the federal standard color number, marking permanently affixed to the exterior surface of the barrel, covering the circumference of the barrel from the muzzle end for a depth of at least 6 millimeters; or</li>
                        <li>Entire Surface Coloration: Coloration of the entire exterior surface of the device in white, bright red, bright orange, bright yellow, bright green, bright blue, bright pink, or bright purple, either singly or as the predominant color in combination with other colors in any pattern.</li>
                    </ul>
                    <p>Please take care when outside or when transporting any form of firearm prop.</p>
                    <p>Regardless of how realistic the prop may look, ensure that it is completely hidden while traveling and be aware of your surroundings, attire, and the appearance of your props to bystanders when outside of TouhouFest. Do not assume a costume will reassure people that your prop is not a real weapon.</p>
                    <h5>Peace-Bonded Weapons at TouhouFest</h5>
                    <p>You may display your prop weapons only as costume pieces. Do not swing or brandish your prop weapon in any way that could be considered unsafe or threatening.</p>
                    <p>You may pose with a prop weapon in a brandishing manner, so long as no reasonable person would interpret it as anything but a pose for dramatic effect. TouhouFest staff or management may stop your posed brandishing in their sole discretion.</p>
                    <p>Please put your prop weapons away when leaving the Event site at night so that you don’t get the attention of local law enforcement. TouhouFest cannot be responsible for any actions taken by local law enforcement agencies, such as detaining and questioning you, if you decide to display or brandish your prop weapons at or outside of TouhouFest. </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
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
        </Accordion>

    </>),
}