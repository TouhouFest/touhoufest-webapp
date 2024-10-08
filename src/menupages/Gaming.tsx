/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faGamepad } from '@fortawesome/free-solid-svg-icons';
// import toyota from "./../images/toyota.jpg";
// import kenmiller from "./../images/kenmiller.webp";
import { toyota, kenmiller } from "../Utils.js";
import { Card, Figure, Image } from 'react-bootstrap';
import { faItchIo, faSteam } from '@fortawesome/free-brands-svg-icons';
import { ListGroup } from 'react-bootstrap';
import { CircledBullets, gamingmap } from '../Utils';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

const gaming = require("./../images/gaming.jpg");
const fracturedtransience = require("./../images/gaming/fracturedtransience.jpg");
const gensouskydrift = require("./../images/gaming/gensouskydrift.jpg");
const skyarena = require("./../images/gaming/skyarena.jpg");
const retrospective = require("./../images/gaming/retrospective.png");
const showcase = require("./../images/gaming/showcase.png");

function GamingModal() {
    const [showGamingMap, setShowGamingMap] = useState(false);
    return (<>
      <Figure>
            <Figure.Image src={gamingmap} fluid rounded onClick={() => setShowGamingMap(true)}/>
            <Figure.Caption>Map of Gaming at Toyota Hall</Figure.Caption>
        </Figure>
        <Modal show={showGamingMap} size="lg" onHide={() => setShowGamingMap(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Map of Gaming at Toyota Hall</Modal.Title>
            </Modal.Header>
            <Modal.Body className="align-items-center px-0">
                <Image src={gamingmap} fluid className="mx-auto d-block"/>
            </Modal.Body>
        </Modal>
    </>);
}

export const gamingPage = {
    "header": (<><FontAwesomeIcon icon={faGamepad} fixedWidth></FontAwesomeIcon> Gaming</>),
    "fluidImage": (<Image src={gaming} fluid/>),
    "body": (<>
        <h4>Location(s)</h4>
        <p>Gaming events for <em>official</em> Touhou games will take place in the <b>Toyota Meeting Hall</b>, (<span className="text-primary"><CircledBullets argument="9"/></span>) located to the right of the Torino Festival Plaza. Gaming events for Touhou <em>fangames</em> will take place at the <b>Ken Miller Rec Center</b>, (<CircledBullets argument="10"/>) to the left of the Torino Festival Plaza.</p>
        <Figure>
            <Figure.Image src={toyota} fluid rounded></Figure.Image>
            <Figure.Caption>Toyota Meeting Hall</Figure.Caption>
        </Figure>
        <Figure>
            <Figure.Image src={kenmiller} fluid rounded/>
            <Figure.Caption>Ken Miller Recreation Center</Figure.Caption>
        </Figure>

        <h5>Gaming Hall Map</h5>
        <p>The entire below map is enclosed in the Toyota Hall.</p>
        <GamingModal />

        <h4>Free Play</h4> 
        <p>Touhou mainline games, fighting games, spinoffs, and select fangames will be playable at various times throughout the con, as marked by events labelled as "Free Play". Assistance is graciously provided by <a href ="https://twitter.com/Youkaiverse" target="_blank" rel="noreferrer"><b>Youkaiverse</b></a>; we thank them for their assistance this year.</p>

        <h5>Fangames</h5> 
        <p>Below is a sampling of the fangames on the docket:</p>

        <Card>
            <Card.Img src={fracturedtransience} variant="top"/>
            <Card.Body className="text-center">
                <Card.Subtitle>Touhou Fractured Transience</Card.Subtitle>
                <Card.Text className="small">Fighting Game</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
                <Card.Link className="small" href="https://store.steampowered.com/app/2290860/Touhou_Fractured_Transience/" target="_blank"><FontAwesomeIcon icon={faSteam}/> Steam (Early Access!)</Card.Link>
            </Card.Footer>
        </Card>

        <Card className="mt-2">
            <Card.Img src={gensouskydrift} variant="top"/>
            <Card.Body className="text-center">
                <Card.Subtitle>GENSOU Skydrift</Card.Subtitle>
                <Card.Text className="small">Racing Game</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
                <Card.Link className="small" href="https://store.steampowered.com/app/1065260/GENSOU_Skydrift/" target="_blank"><FontAwesomeIcon icon={faSteam}/> Steam</Card.Link>
            </Card.Footer>
        </Card>

        <Card className="mt-2">
            <Card.Img src={skyarena} variant="top"/>
            <Card.Body className="text-center">
                <Card.Subtitle>TOUHOU SKY ARENA MATSURI CLIMAX</Card.Subtitle>
                <Card.Text className="small">3D Danmaku Game</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
                <Card.Link className="small" href="https://store.steampowered.com/app/1086860/TOUHOU_SKY_ARENA_MATSURI_CLIMAX/" target="_blank"><FontAwesomeIcon icon={faSteam}/> Steam</Card.Link>
            </Card.Footer>
        </Card>

        <h5 className="mt-2">Touhou Game Dev Fangames</h5>
        <p>The below itch.io collections -- composed of fangames made by a variety of aspiring developers -- will also be featured at TouhouFest and are for the most part playable.</p>

        <Card className="mt-2">
            <Card.Img src={retrospective} variant="top"/>
            <Card.Body className="text-center">
                <Card.Subtitle>Touhou Retrospective Collection (2024)</Card.Subtitle>
            </Card.Body>
            <Card.Footer className="text-center">
                <Card.Link className="small" href="https://itch.io/c/4310537/touhou-retrospective-collection-2024" target="_blank"><FontAwesomeIcon icon={faItchIo}/> Itch.io Link</Card.Link>
            </Card.Footer>
        </Card>

        <Card className="mt-2">
            <Card.Img src={showcase} variant="top"/>
            <Card.Body className="text-center">
                <Card.Subtitle>Jam 13 "TouhouFest" Showcase Games</Card.Subtitle>
            </Card.Body>
            <Card.Footer className="text-center">
                <Card.Link className="small" href="https://itch.io/c/4310520/jam-13-touhoufest-showcase-games" target="_blank"><FontAwesomeIcon icon={faItchIo}/> Itch.io Link</Card.Link>
            </Card.Footer>
        </Card>

        <h4 className="mt-2">Tournaments</h4>
        <p>Tournaments are being arranged for the following games:</p>
        <ul>
            <li>Touhou 12.3 Hisoutensoku</li>
            <li>Touhou 19 Unfinished Dream of All Living Ghost</li>
            <li>Touhou Rivals Workshop</li>
            <li>Touhou Fractured Transience</li>
            <li>Touhou 15.5 Antimony of Common Flowers</li>
        </ul>
        <p>Those interested may visit <a href ="https://www.start.gg/tournament/touhoufest-2024/details" target="_blank" rel="noreferrer">TouhouFest's start.gg page for more information.</a></p>
        <p className="small"><FontAwesomeIcon icon={faExclamationCircle} /> Sign-ups for gaming tournaments at TouhouFest will close/already has closed on April 25th, 2024.</p>

        <h5>Prizes</h5>
        <Card>
            <Card.Body className="text-center gold-bg">
                <Card.Title>First Place (Per Each Bracket)</Card.Title>
                <Card.Subtitle>Free TouhouFest 2025 Badge</Card.Subtitle>
            </Card.Body>
        </Card>

        <Card className="mt-2">
            <Card.Body className="text-center silver-bg">
                <Card.Title>Second Place (Per Each Bracket)</Card.Title>
                <Card.Subtitle>Select Touhou-Themed Merch Giveaways</Card.Subtitle>
            </Card.Body>
        </Card>

        <h5 className="mt-2">Wave Info</h5>
        <p>Gaming tournaments will be organized in "Waves" where specific games will compete based on their particular rules. Below is a listing of each wave, their included games, as well as their respective pools on start.gg.</p>

        <Card>
            <Card.Body className="text-center day-indicator">
                <Card.Title className="mb-0">Wave A</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2024/event/touhou-19-udoalg/brackets/1488492/2247283" target="_blank">Touhou 19</Card.Link></ListGroup.Item>
            </ListGroup>

        </Card>
        <Card className="mt-2">
            <Card.Body className="text-center day-indicator">
                <Card.Title className="mb-0">Wave B</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2024/event/touhou-19-udoalg/brackets/1488492/2296293" target="_blank">Touhou 19</Card.Link></ListGroup.Item>
                <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2024/event/touhou-12-3-hisoutensoku/brackets/1389325/2109926" target="_blank">Touhou Hisoutensoku</Card.Link></ListGroup.Item>
            </ListGroup>

        </Card>

        <Card className="mt-2">
            <Card.Body className="text-center day-indicator">
                <Card.Title className="mb-0">Wave C</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2024/event/touhou-12-3-hisoutensoku/brackets/1389325/2109927" target="_blank">Touhou Hisoutensoku</Card.Link></ListGroup.Item>
                <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2024/event/touhou-rivals-workshop-1v1/brackets/1389330/2109933" target="_blank">Touhou Rivals Workshop</Card.Link></ListGroup.Item>
            </ListGroup>
        </Card>

        <Card className="mt-2">
            <Card.Body className="text-center day-indicator">
                <Card.Title className="mb-0">Wave D</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2024/event/touhou-12-3-hisoutensoku/brackets/1389326/2109928" target="_blank">Touhou Hisoutensoku</Card.Link></ListGroup.Item>
            </ListGroup>
        </Card>

        <Card className="mt-2">
            <Card.Body className="text-center day-indicator">
                <Card.Title className="mb-0">Wave E</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2024/event/touhou-15-5-aocf/brackets/1389327/2109929" target="_blank">Touhou 15.5 AoCF</Card.Link></ListGroup.Item>
            </ListGroup>

        </Card>

        <Card className="mt-2">
            <Card.Body className="text-center day-indicator">
                <Card.Title className="mb-0">Wave F</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2024/event/touhou-fractured-transience-early-build-bracket/brackets?filter=%7B%22phaseId%22%3A1520894%2C%22perPage%22%3A2%7D" target="_blank">Touhou Fractured Transience</Card.Link></ListGroup.Item>
                <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2024/event/touhou-19-udoalg/brackets/1525803/2296294" target="_blank">Touhou 19</Card.Link></ListGroup.Item>
            </ListGroup>
        </Card>

        <Card className="mt-2">
            <Card.Body className="text-center day-indicator">
                <Card.Title className="mb-0">Wave G</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2024/event/touhou-fractured-transience-early-build-bracket/brackets/1525804/2296296" target="_blank">Touhou Fractured Transience</Card.Link></ListGroup.Item>
            </ListGroup>
        </Card>



    </>)
}