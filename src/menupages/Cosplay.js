/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import pinewindgarden from './../images/pinewindgarden.jpg';
import cosplaybanner from './../images/cosplaybanner.jpg';
import assemblyhall from "./../images/assemblyhall.jpg";
import medukitty from "./../images/medukitty.jpg";
import violetreverie from "./../images/violetreverie.jpg";
import cosplayrepair from "./../images/cosplayrepair.jpg";
import entryplaza from "./../images/entryplaza.jpg";
import { Accordion, Card, Figure, Image } from 'react-bootstrap';
import { faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { CircledBullets } from '../Utils';

export const cosplayPage = {
    "header": (<><FontAwesomeIcon icon={faCameraRetro} fixedWidth></FontAwesomeIcon> Cosplay</>),
    "fluidImage": (<Image src={cosplaybanner} fluid />),
    "body": (<>
        <h4>Location(s)</h4>
        <p>Photoshoots will take place at the <b>Pine Wind Garden</b> (<CircledBullets argument="15"/>), a beautiful Japanese-style garden ripe with photogenic spots. Cosplay Contest-related events will take place at the <b>Assembly Hall</b> (<CircledBullets argument="13"/>). Cosplay booths and repair is located at the <b>Entry Plaza</b> (<CircledBullets argument="5"/>), connected to the Torino Festival Plaza (<CircledBullets argument="7"/>).</p>
        <Figure>
            <Figure.Image src={pinewindgarden} fluid rounded />
            <Figure.Caption>Pine Wind Garden</Figure.Caption>
        </Figure>
        <Figure>
            <Figure.Image src={assemblyhall} fluid rounded></Figure.Image>
            <Figure.Caption>Assembly Hall (furniture may be adjusted depending on the event)</Figure.Caption>
        </Figure>
        <Figure>
            <Figure.Image src={entryplaza} fluid rounded></Figure.Image>
            <Figure.Caption>Entry Plaza</Figure.Caption>
        </Figure>
        <h4>Cosplay Meetups/Photoshoots</h4>
        <p>Photoshoots for select mainline Touhou games will be organized by our talented Cosplay Ambassadors. They are listed below as follows:</p>
        <Card className="th10">
            <Card.Body className="text-center">
                <Card.Title>The Faithful Gods</Card.Title>
                <Card.Subtitle>Touhou 10 MoF</Card.Subtitle>
                <Card.Text>Saturday, 11:30 AM - 12:30 PM</Card.Text>
            </Card.Body>
        </Card>
        <Card className="mt-2 th06">
            <Card.Body className="text-center">
                <Card.Title>The Devil's Mansion</Card.Title>
                <Card.Subtitle>Touhou 6 EoSD</Card.Subtitle>
                <Card.Text>Saturday, 12:30 PM - 1:00 PM</Card.Text>
            </Card.Body>
        </Card>
        <Card className="mt-2 th07">
            <Card.Body className="text-center">
                <Card.Title>Netherworld</Card.Title>
                <Card.Subtitle>Touhou 7 PCB</Card.Subtitle>
                <Card.Text>Saturday, 1:30 PM - 2:00 PM</Card.Text>
            </Card.Body>
        </Card>
        <Card className="mt-2 th15">
            <Card.Body className="text-center">
                <Card.Title>Go to hell!!</Card.Title>
                <Card.Subtitle>Touhou 15 LoLK</Card.Subtitle>
                <Card.Text>Saturday, 2:00 PM - 2:30 PM</Card.Text>
            </Card.Body>
        </Card>
        <Card className="mt-2 pc98">
            <Card.Body className="text-center">
                <Card.Title>PC-98 Games</Card.Title>
                <Card.Subtitle>Games From Touhou 1 ~ 5</Card.Subtitle>
                <Card.Text>Sunday, 10:30 AM - 11:00 AM</Card.Text>
            </Card.Body>
        </Card>
        <Card className="mt-2 th08">
            <Card.Body className="text-center">
                <Card.Title>Lunar Landing in the Bamboo Forest</Card.Title>
                <Card.Subtitle>Touhou 8 IN</Card.Subtitle>
                <Card.Text>Sunday, 11:00 AM - 12:00 PM</Card.Text>
            </Card.Body>
        </Card>
        <Card className="mt-2 fight">
            <Card.Body className="text-center">
                <Card.Title>Fighting Games</Card.Title>
                <Card.Subtitle>Most *.5 Touhou Games</Card.Subtitle>
                <Card.Text>Sunday, 12:00 PM - 1:00 PM</Card.Text>
            </Card.Body>
        </Card>

        <h4 className="mt-2">Cosplay Repair</h4>
        <p>Did your cosplay unexpectedly explode into a million billion pieces? Jitters' cosplay repair stand may be able to help you. Look for the below banner in the Entry Plaza.</p>
        <Figure>
            <Figure.Image src={cosplayrepair} fluid rounded />
            <Figure.Caption>Cosplay Repair Banner</Figure.Caption>
        </Figure>
        <h4>Cosplay Contest</h4>
        <h5>Itinerary</h5>
        <ol>
            <li><b>Pre-Judging</b>: 3:00 PM - 4:00 PM</li>
            <ol type="a">
                <li>Particpants in the <em>Craftsmanship</em> Category need to attend this event</li>
            </ol>
            <li><b>Seating</b>: 4:30 PM - 5:00 PM</li>
            <li><b>Cosplay Contest</b>: 5:00 PM - 6:00 PM</li>
        </ol>
        <h5>Categories</h5>
        <p>There are three components within the Cosplay Contest:</p>
        <Card className="pink-one">
            <Card.Body>
                <Card.Title className="text-center">Craftmanship</Card.Title>
                <Card.Text>The Craftsmanship category will be judged based on how well you’ve made your costume. If you’re proud of your sewing, foamwork, or any other techniques you used to put your costume together, this category is for you! You’ll have time before the contest to meet with the judges so they can see your work up close and ask any questions. During the contest, you’ll walk across the stage and strike some cool poses in front of the audience!</Card.Text>
            </Card.Body>
        </Card>
        <Card className="mt-2 red-one">
            <Card.Body>
                <Card.Title className="text-center">Performance</Card.Title>
                <Card.Text>If you love to entertain, then consider entering the Performance category! You don’t have to have a self-made costume to perform, rather you’ll be judged on how well you’re able to capture the audience. This can be through a skit, dance, or anything else you can think of. You can be as comedic or dramatic as you’d like, so get creative!</Card.Text>
            </Card.Body>
        </Card>
        <Card className="mt-2 purple-one">
            <Card.Body>
                <Card.Title className="text-center">Exhibition</Card.Title>
                <Card.Text>The Exhibition category is for anyone that wants a chance to walk across the stage, but doesn’t want to compete. This is just for fun, so there are no limits to whether you’ve made your costume yourself or not.</Card.Text>
            </Card.Body>
        </Card>

        <h5 className="mt-2">Awards & Prizes</h5>
        <p>Please note that the Exhibition Category is not eligible for awards.</p>
        <Card>
            <Card.Body className="text-center gold-bg">
                <Card.Title>Best Craftsmanship</Card.Title>
                <Card.Subtitle>2 Free TouhouFest 2025 Badges</Card.Subtitle>
            </Card.Body>
        </Card>
        <Card className="mt-2">
            <Card.Body className="text-center silver-bg">
                <Card.Title>Runner-up Craftsmanship</Card.Title>
                <Card.Subtitle>1 Free TouhouFest 2025 Badge</Card.Subtitle>
            </Card.Body>
        </Card>
        <Card className="mt-2">
            <Card.Body className="text-center gold-bg">
                <Card.Title>Best Performance</Card.Title>
                <Card.Subtitle>2 Free TouhouFest 2025 Badges</Card.Subtitle>
            </Card.Body>
        </Card>
        <Card className="mt-2">
            <Card.Body className="text-center silver-bg">
                <Card.Title>Runner-up Performance</Card.Title>
                <Card.Subtitle>1 Free TouhouFest 2025 Badge</Card.Subtitle>
            </Card.Body>
        </Card>
        <Card className="mt-2">
            <Card.Body className="text-center gold-bg">
                <Card.Title>Judge's Choice (Per-Judge)</Card.Title>
                <Card.Subtitle>Prizes up to Judge Discretion</Card.Subtitle>
            </Card.Body>
        </Card>
        <h5 className="mt-2">About the Judges</h5>

        <Card>
            <Card.Img variant="top" src={medukitty} />
            <Card.Body>
                <Card.Title>Medukitty</Card.Title>
                <Card.Text>I'm MeduKitty, a long time cosplayer and Touhou enthusiast who's thrilled to combine her two greatest passions!  I've been cosplaying from Touhou since 2018, and my favorite thing is making my costumes from scratch with as many details as I can fit into them.  I love our community so much and I can't wait to participate in TouhouFest with you all! </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
                <Card.Link href="https://www.instagram.com/medukitty_/" target="_blank"><FontAwesomeIcon icon={faInstagram} /> Instagram</Card.Link>
                <Card.Link href="https://www.tiktok.com/@medukitty" target="_blank"><FontAwesomeIcon icon={faTiktok} /> TikTok</Card.Link>
                <Card.Link href="https://twitter.com/medukitty" target="_blank"><FontAwesomeIcon icon={faXTwitter} /> Twitter</Card.Link>
            </Card.Footer>
        </Card>

        <Card className="mt-2">
            <Card.Img variant="top" src={violetreverie} />
            <Card.Body>
                <Card.Title>Violet Reverie</Card.Title>
                <Card.Text>Hello nice to meet you! I'm Violet Reverie. My main goal is to empower the Worldwide Touhou Cosplay community, so I created the Touhou Cosplay Guild Discord Server to bring everyone together and provide learning resources. My other goal, over the course of the 17+ Touhou Cosplays I've made, is to pull the characters from Gensokyo and bring them to life through use of Design and Material to express their role, origin, and ability in my costumes.</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
                <Card.Link href="https://www.instagram.com/violet_reverie_cos/" target="_blank"><FontAwesomeIcon icon={faInstagram} /> Instagram</Card.Link>
                <Card.Link href="https://twitter.com/CuLightSource" target="_blank"><FontAwesomeIcon icon={faXTwitter} /> Twitter</Card.Link>
            </Card.Footer>
        </Card>

        <h5 className="mt-2">Rules</h5>
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
                        <li>Audio must be submitted and approved by staff before the contest. You will be contacted if any changes need to be made. The deadline for submitting audio is April 19th, with no further revisions accepted past April 24th.</li>
                        <li>Performances are limited to 2.5 minutes in length. Any performance that goes over this limit will not be accepted.</li>
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

    </>),
}