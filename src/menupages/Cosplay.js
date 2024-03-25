/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import pinewindgarden from './../images/pinewindgarden.jpg';
import cosplaybanner from './../images/cosplaybanner.jpg';
import assemblyhall from "./../images/assemblyhall.png";
import { Accordion, Card, Figure, Image } from 'react-bootstrap';

export const cosplayPage= {
    "header": (<><FontAwesomeIcon icon={faCameraRetro} fixedWidth></FontAwesomeIcon> Cosplay</>),
    "fluidImage": (<Image src={cosplaybanner} fluid />),
    "body": (<>
        <h4>Location(s)</h4>
        <p>Photoshoots will take place at the <b>Pine Wind Garden</b>, a beautiful Japanese-style garden ripe with photogenic spots. Cosplay Contest-related events will take place at the <b>Assembly Hall</b>.</p>
        <Figure>
            <Figure.Image src={pinewindgarden} fluid rounded/>
            <Figure.Caption>Pine Wind Garden</Figure.Caption>
        </Figure>
        <p className="small"><FontAwesomeIcon icon={faInfoCircle} fixedWidth></FontAwesomeIcon> The Pine Wind Garden is detached from most of the other areas used by TouhouFest and is across via the Public Plaza.</p>
        <Figure>
            <Figure.Image src={assemblyhall} fluid rounded></Figure.Image>
            <Figure.Caption>Assembly Hall (furniture may be adjusted depending on the event)</Figure.Caption>
        </Figure>
        <h4>Cosplay Meetups</h4>
        <p>Photoshoots for most of the mainline Touhou games will be organized by our talented Cosplay Ambassadors -- for more details see the schedule.</p>
        <h4>Cosplay Contest</h4>
        <h5>Itinerary</h5>
        <ul>
            <li><b>Pre-Judging</b>: 3:00 PM - 4:00 PM</li>
            <ul>
                <li>Particpants in the <em>Craftsmanship</em> Category need to attend this event</li>
            </ul>
            <li><b>Seating</b>: 4:30 PM - 5:00 PM</li>
            <li><b>Cosplay Contest</b>: 5:00 PM - 6:00 PM</li>
        </ul>
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
                <Card.Subtitle>Prize TBD</Card.Subtitle>
            </Card.Body>
        </Card>
        <Card className="mt-2">
            <Card.Body className="text-center silver-bg">
                <Card.Title>Runner-up Craftsmanship</Card.Title>
                <Card.Subtitle>Prize TBD</Card.Subtitle>
            </Card.Body>
        </Card>
        <Card className="mt-2">
            <Card.Body className="text-center gold-bg">
                <Card.Title>Best Performance</Card.Title>
                <Card.Subtitle>Prize TBD</Card.Subtitle>
            </Card.Body>
        </Card>
        <Card className="mt-2">
            <Card.Body className="text-center silver-bg">
                <Card.Title>Runner-up Performance</Card.Title>
                <Card.Subtitle>Prize TBD</Card.Subtitle>
            </Card.Body>
        </Card>
        <Card className="mt-2">
            <Card.Body className="text-center gold-bg">
                <Card.Title>Judge's Choice (Per-Judge)</Card.Title>
                <Card.Subtitle>Prize TBD</Card.Subtitle>
            </Card.Body>
        </Card>
        <h5 className="mt-2">About the Judges</h5>
        <p>Todo</p> 
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