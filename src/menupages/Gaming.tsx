/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faDice, faExclamationCircle, faGamepad, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Alert, Card, Figure, Image } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { CircledBullets, gamingmap, nakanotheatre, kenmiller, MakeLocationBadge, MakeGoheiHeader, MakeGenericCard } from '../Utils';
import { Row, Col } from 'react-bootstrap';
import {GlobalTransformWrapper} from './../GlobalTransformWrapper';

import gaming from "./../images/gaming.jpg";

import noetic from "./../images/gamingfolder/noetic.jpg";
import tboddy from "./../images/gamingfolder/tboddy.jpg";
import fireland from "./../images/gamingfolder/fireland.jpg";
import danmaku from "./../images/danmaku.jpg";
import drawpaint from "./../images/drawpaint.jpg";
import danmakumaze from "./../images/gamingfolder/danmakumaze.png";
import arcade from "./../images/gamingfolder/arcade.jpg";

export const gamingPage = {
    "codename": "gaming",
    "jumplinks": [
        {
            "fragment_id": "#tabletop",
            "title": "Tabletop Gaming"
        },
        {
            "fragment_id": "#freeplay",
            "title": "Freeplay"
        },
        {
            "fragment_id": "#fangames",
            "title": "Fan Games"
        },
        {
            "fragment_id": "#arcades",
            "title": "Arcade Cabinets"
        },
        {
            "fragment_id": "#tournaments",
            "title": "Tournaments"
        },
    ],
    "header": (<><FontAwesomeIcon icon={faGamepad} fixedWidth></FontAwesomeIcon> Gaming</>),
    "fluidImage": (<Image src={gaming} fluid/>),
    "body": (<>
        <p>Gaming events for <em>official</em> Touhou games will take place in the <b>George Nakano Theatre</b>, (<CircledBullets argument="2"/> Gaming Hall) located to the right of the Entry Plaza. Arcades are located at the <b>Ken Miller Rec Center</b> (<CircledBullets argument="9"/> Arcade Cabinets) next to the Torino Festival Plaza. Tabletop Gaming is located in the <b>Drawing & Painting Studio</b> (<CircledBullets argument="14"/> Tabletop Gaming & Mystery Parafait) at the tail end of the Pine Wind Garden.</p>
        {/*
        <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
                <Figure>
                    <Figure.Image src={nakanotheatre} fluid rounded></Figure.Image>
                    <Figure.Caption>George Nakano Theatre</Figure.Caption>
                </Figure>
            </Col>
            <Col xs={12} md={10} lg={8} className="text-center">
                <Figure>
                    <Figure.Image src={kenmiller} fluid rounded/>
                    <Figure.Caption>Ken Miller Recreation Center</Figure.Caption>
                </Figure>
            </Col>
            <Col xs={12} sm={10} lg={8} className="text-center">
                <Figure>
                    <Figure.Image src={drawpaint} fluid rounded/>
                    <Figure.Caption>Drawing & Painting Studio</Figure.Caption>
                </Figure>
            </Col>
        </Row>

        */}

        <h4>Gaming Hall Map</h4>
        <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8} className="text-center">
                <GlobalTransformWrapper src={gamingmap} caption="Map of Gaming at Toyota Hall"/>
            </Col>
        </Row>

        <div className="text-center mt-2 mb-3"><MakeLocationBadge location="Toyota Hall"/></div>

        <MakeGoheiHeader content="Tabletop Gaming" fragment_id='tabletop'/>
        
        <p>TouhouFest is pleased to offer a dedicated section for tabletop gaming this year! Inside the <b>Assembly Hall</b> (<CircledBullets argument="11"/> Tabletop Gaming) tables are available for free-play and for "<a href="https://danmaku.party/" target="_blank" rel="noreferrer">Danmaku!!</a>", the hit Touhou-themed tabletop card game. Feel free to stop by for some engaging tabletop gaming!</p>
        <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6} className="text-center">
                {/* <Alert variant="success"><FontAwesomeIcon icon={faDice}/> Mystery Parafait will be selling Danmaku's biggest expansion yet, <b> Traditional Festival of Paradise</b> for the first time at TouhouFest!</Alert> */}

                <Image src={danmaku} rounded fluid/>
            </Col>
        </Row>

        <h5 className="fw-normal mt-3"><a className="text-decoration-none text-reset" href="https://danmaku.party" target="_blank">Visit Danmaku!!'s Website <FontAwesomeIcon icon={faAngleRight} fixedWidth/></a></h5>

        <MakeGoheiHeader content="Free Play" fragment_id='freeplay'/>

        <p>Touhou mainline games, fighting games, spinoffs, and select fangames will be playable at various times throughout the con, as marked by events labelled as "Free Play". Assistance is graciously provided by <a href ="https://twitter.com/Youkaiverse" target="_blank" rel="noreferrer"><b>Youkaiverse</b></a>; we thank them for their assistance this year.</p>

        <MakeGoheiHeader content="Fangames" fragment_id='fangames'/>

        <p>The below fangame devs will be available and will have playable demos at the Game Hall:</p>

        <Row xs={1} md={3} className="gy-3 justify-content-center">
            <Col>
                <MakeGenericCard subtitle='Ice Fall Creative' title='Touhou Danmaku Maze' picture={danmakumaze} links={[
                    {
                        "link": "https://store.steampowered.com/app/2927320/Touhou_Danmaku_Maze/",
                        "title": "Dev Link"
                    }
                ]}/>
            </Col>
            <Col>
                <MakeGenericCard subtitle='Noetic Nightjar Studio' title='Touhou ~ Dreams of a Sunflower' picture={noetic} links={[
                    {
                        "link": "http://noeticnightjar.com",
                        "title": "Dev Link"
                    }
                ]}/>
            </Col>
            <Col>
                <MakeGenericCard subtitle='tboddy' title='Burning Spirit' picture={tboddy} links={[
                    {
                        "link": "http://tboddy.itch.io",
                        "title": "Dev Link"
                    }
                ]}/>
            </Col>
            <Col>
                <MakeGenericCard subtitle='Fire Land' title='Touhou Lensed Night Sky, Kaseigai' picture={fireland} links={[
                    {
                        "link": "https://store.steampowered.com/app/1825250/Touhou_Lensed_Night_Sky_Kaseigai/",
                        "title": "Dev Link"
                    }
                ]}/>
            </Col>
        </Row>

        <MakeGoheiHeader content="Arcade Cabinets" fragment_id='arcades'/>

        <Row className="justify-content-center my-3">
            <Col xs={12} md={8} lg={6}>
                <Image src={arcade} rounded fluid/>
            </Col>
        </Row>

        <p>A variety of different arcade cabinets and rhythm games will be available to play throughout TouhouFest. Below is a selection of some of the offerings:</p>

        <Row className="justify-content-center g-2">
            {["Dance Dance Revolution", "Trouble Witches", "Tetris Grand Master 3"].map((game) => <Col xs="auto">
                <Card className="px-3 py-2">
                    <p className="mb-1 text-center"><FontAwesomeIcon icon={faGamepad}/></p>
                    <p className="mb-0">{game}</p>
                </Card>
            </Col>)}
        </Row>

        <h4 className="mt-2">Tournaments</h4>
        <p>Tournaments are being arranged for the below games. Tournament rules for each game are attached below which lead to start.gg.</p>
        <ul>
            <li><a target="_blank" rel="noreferrer" href="https://www.start.gg/tournament/touhoufest-2025/event/touhou-12-3-hisoutensoku-soku-2/overview/rules">Touhou 12.3 Hisoutensoku</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.start.gg/tournament/touhoufest-2025/event/touhou-19-udoalg-balance-patch-1-10c/overview/rules">Touhou 19 Unfinished Dream of All Living Ghost</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.start.gg/tournament/touhoufest-2025/event/touhou-rivals-workshop-1v1/overview/rules">Touhou Rivals Workshop</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.start.gg/tournament/touhoufest-2025/event/touhou-fractured-transience/overview/rules">Touhou Fractured Transience</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.start.gg/tournament/touhoufest-2025/event/touhou-15-5-aocf/overview/rules">Touhou 15.5 Antimony of Common Flowers</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.start.gg/tournament/touhoufest-2025/event/touhou-9-pofv-rework-patch">Touhou 9 PoFV (Rework Patch)</a></li>
        </ul>
        <p>Those interested may visit <a href ="https://www.start.gg/tournament/touhoufest-2025/details" target="_blank" rel="noreferrer">TouhouFest's start.gg page for more information.</a></p>
        <p className="small"><FontAwesomeIcon icon={faExclamationCircle} /> Sign-ups for gaming tournaments at TouhouFest will close/already has closed on June 12th, 2025.</p>

        <h5>Prizes</h5>
        <Row xs={1} md={2}>
            <Col>
                <Card className="rounded gold-bg">
                    <Card.Body className="text-center">
                        <Card.Title>First Place (Per Each Bracket)</Card.Title>
                        <Card.Subtitle>Free TouhouFest 2025 Badge</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="rounded silver-bg">
                    <Card.Body className="text-center">
                        <Card.Title>Second Place (Per Each Bracket)</Card.Title>
                        <Card.Subtitle>Select Touhou-Themed Merch Giveaways</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
        </Row>


        <h5 className="mt-2">Wave Info</h5>
        <p>Gaming tournaments will be organized in "Waves" where specific games will compete based on their particular rules. Below is a listing of each wave, their included games, as well as their respective pools on start.gg.</p>

        <Row xs={1} md={2} className="justify-content-center gy-3">
            <Col>
                <Card>
                    <Card.Body className="text-center day-indicator">
                        <Card.Title className="mb-0">Wave A</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2025/event/touhou-9-pofv-rework-patch/brackets/1786277/2643746" target="_blank">Touhou 9 PoFV (Rework Patch)</Card.Link></ListGroup.Item>
                        <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2025/event/touhou-rivals-workshop-1v1/brackets/1786271/2862655" target="_blank">Touhou Rivals Workshop</Card.Link></ListGroup.Item>
                    </ListGroup>

                </Card>
            </Col>
            <Col>
                <Card className="">
                    <Card.Body className="text-center day-indicator">
                        <Card.Title className="mb-0">Wave B</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2025/event/touhou-12-3-hisoutensoku-soku-2/brackets/1786268/2643734" target="_blank">Touhou 12.3 Hisoutensoku (Soku 2)</Card.Link></ListGroup.Item>
                        <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2025/event/touhou-rivals-workshop-1v1/brackets/1786271/2643738" target="_blank">Touhou Rivals Workshop</Card.Link></ListGroup.Item>
                    </ListGroup>

                </Card>
            </Col>
            <Col>
                <Card className="">
                    <Card.Body className="text-center day-indicator">
                        <Card.Title className="mb-0">Wave C</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2025/event/touhou-9-pofv-rework-patch/brackets/1786277/2862657" target="_blank">Touhou 9 PoFV (Rework Patch)</Card.Link></ListGroup.Item>
                        <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2025/event/touhou-12-3-hisoutensoku-soku-2/brackets/1786268/2643735" target="_blank">Touhou 12.3 Hisoutensoku (Soku 2)</Card.Link></ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col>
                <Card className="">
                    <Card.Body className="text-center day-indicator">
                        <Card.Title className="mb-0">Wave D</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2025/event/touhou-9-pofv-rework-patch/brackets/1949467/2862661" target="_blank">Touhou 9 PoFV (Rework Patch) Finals</Card.Link></ListGroup.Item>
                        <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2025/event/touhou-rivals-workshop-1v1/brackets/1949466/2862658" target="_blank">Touhou Rivals Workshop Finals</Card.Link></ListGroup.Item>
                        <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2025/event/touhou-12-3-hisoutensoku-soku-2" target="_blank">Touhou 12.3 Hisoutensoku (Soku 2) Finals</Card.Link></ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col>
                <Card className="">
                    <Card.Body className="text-center day-indicator">
                        <Card.Title className="mb-0">Wave E</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2025/event/touhou-15-5-aocf" target="_blank">Touhou 15.5 AoCF [Full Bracket]</Card.Link></ListGroup.Item>
                    </ListGroup>

                </Card>
            </Col>
            <Col>
                <Card className="">
                    <Card.Body className="text-center day-indicator">
                        <Card.Title className="mb-0">Wave F</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2025/event/touhou-19-udoalg-balance-patch-1-10c" target="_blank">Touhou 19 UDoALG (Balance Patch 1.10c) [Full Bracket]</Card.Link></ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col>
                <Card className="">
                    <Card.Body className="text-center day-indicator">
                        <Card.Title className="mb-0">Wave G</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center"><Card.Link href="https://www.start.gg/tournament/touhoufest-2025/event/touhou-fractured-transience" target="_blank">Touhou Fractured Transience [Full Bracket]</Card.Link></ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>)
}