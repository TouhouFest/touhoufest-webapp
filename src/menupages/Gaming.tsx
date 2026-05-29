/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowUpRightFromSquare, faDice, faExclamationCircle, faExternalLinkSquare, faExternalLinkSquareAlt, faGamepad, faGlobe, faMedal } from '@fortawesome/free-solid-svg-icons';
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

let tourneylisting = [
    {
        "title": "Touhou 9 PoFV",
        "link": "https://www.start.gg/tournament/touhoufest-2026/event/touhou-9-pofv"
    },
    {
        "title": "Touhou 12.3 Soku",
        "link": "https://www.start.gg/tournament/touhoufest-2026/event/touhou-12-3-hisoutensoku-soku-2"
    },
    {
        "title": "Touhou Rivals Workshop",
        "link": "https://www.start.gg/tournament/touhoufest-2026/event/touhou-rivals-workshop-1v1",
    },
    {
        "title": "Touhou 15.5 AoCF",
        "link": "https://www.start.gg/tournament/touhoufest-2026/event/touhou-15-5-aocf"
    },
    {
        "title": "Touhou 19 UDoALG",
        "link": "https://www.start.gg/tournament/touhoufest-2026/event/touhou-19-udoalg-balance-patch-1-10c"
    },
    {
        "title": "Touhou Fractured Transience",
        "link": "https://www.start.gg/tournament/touhoufest-2026/event/touhou-fractured-transience"
    }
];

let wavelisting = [
    {
        "event": "Wave A",
        "links": [
            {
                "title": "Touhou 12.3 Soku Pool 1",
                "link": "https://www.start.gg/tournament/touhoufest-2026/event/touhou-12-3-hisoutensoku-soku-2/brackets/2240811/3249110",
            },
            {
                "title": "Touhou 9 PoFV Pool 1",
                "link": "https://www.start.gg/tournament/touhoufest-2026/event/touhou-9-pofv/brackets/2240818/3249118",
            }

        ]
    },
    {
        "event": "Wave B",
        "links": [
            {
                "title": "Touhou Rivals Pool 1",
                "link": "https://www.start.gg/tournament/touhoufest-2026/event/touhou-rivals-workshop-1v1/brackets/2240814/3249113",
            },
            {
                "title": "Touhou 9 PoFV Pool 2",
                "link": "https://www.start.gg/tournament/touhoufest-2026/event/touhou-9-pofv/brackets/2240818/3249119",
            }

        ]
    },
    {
        "event": "Wave C",
        "links": [
            {
                "title": "Touhou Rivals Pool 2",
                "link": "https://www.start.gg/tournament/touhoufest-2026/event/touhou-rivals-workshop-1v1/brackets/2240814/3249114",
            },
            {
                "title": "Touhou 12.3 Soku Pool 2",
                "link": "https://www.start.gg/tournament/touhoufest-2026/event/touhou-12-3-hisoutensoku-soku-2/brackets/2240811/3249109",
            }
        ]
    },
    {
        "event": "Top 4 PoFV",
        "links": [
            {
                "title": "Touhou 9 PoFV Top 4",
                "link": "https://www.start.gg/tournament/touhoufest-2026/event/touhou-9-pofv/brackets/2240819/3249120",
            },
        ]
    },
    {
        "event": "Top 4 Rivals",
        "links": [
            {
                "title": "Touhou Rivals Top 4",
                "link": "https://www.start.gg/tournament/touhoufest-2026/event/touhou-rivals-workshop-1v1/brackets/2240815/3249115",
            },
        ]
    },
    {
        "event": "Top 4 Soku",
        "links": [
            {
                "title": "Touhou 12.3 Soku Top 4",
                "link": "https://www.start.gg/tournament/touhoufest-2026/event/touhou-12-3-hisoutensoku-soku-2/brackets/2240812/3249111",
            },
        ]
    },
    {
        "event": "AoCF Full Bracket",
        "links": [
            {
                "title": "Touhou AoCF Full Bracket",
                "link": "https://www.start.gg/tournament/touhoufest-2026/event/touhou-15-5-aocf/brackets/2240813/3249112",
            },
        ]
    },
    {
        "event": "UDoALG Full Bracket",
        "links": [
            {
                "title": "Touhou 19 UDoALG Full Bracket",
                "link": "https://www.start.gg/tournament/touhoufest-2026/event/touhou-19-udoalg-balance-patch-1-10c/brackets/2240816/3249116",
            },
        ]
    },
    {
        "event": "Fractured Transience Full Bracket",
        "links": [
            {
                "title": "Touhou Fractured Transience Full Bracket",
                "link": "https://www.start.gg/tournament/touhoufest-2026/event/touhou-fractured-transience/brackets/2240817/3249117",
            },
        ]
    },




];

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
        <h4>Locations</h4>
        <ul>
            <li><b>Free Play</b>: George Nakano Theatre (<CircledBullets argument="2"/> Gaming Hall)</li>
            <li><b>Tournaments</b>: George Nakano Theatre: (<CircledBullets argument="2"/> Gaming Hall)</li>
            <li><b>Arcades</b>: George Nakano Theatre: (<CircledBullets argument="2"/> Gaming Hall)</li>
            <li><b>Fangames</b>: Assembly Hall (<CircledBullets argument="11"/> Cosplay Exhibition, Fan Games)</li>
            <li><b>Tabletop & Danmaku!!</b>: (<CircledBullets argument="11"/> Tabletop)</li>
        </ul>
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
                <GlobalTransformWrapper src={gamingmap} caption="Map of Gaming at George Nakano Theatre"/>
            </Col>
        </Row>

        <div className="text-center mt-2 mb-3"><MakeLocationBadge location="George Nakano Theatre"/></div>

        <MakeGoheiHeader content="Tabletop Gaming" fragment_id='tabletop'/>
        
        <div className="text-center mt-3 mb-3"><MakeLocationBadge location="Assembly Hall"/></div>

        <p>TouhouFest is pleased to offer a dedicated section for tabletop gaming this year! Inside the <b>Assembly Hall</b> (<CircledBullets argument="11"/> Tabletop Gaming) tables are available for free-play and for "<a href="https://danmaku.party/" target="_blank" rel="noreferrer">Danmaku!!</a>", the hit Touhou-themed tabletop card game. Feel free to stop by for some engaging tabletop gaming!</p>
        <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6} className="text-center">
                {/* <Alert variant="success"><FontAwesomeIcon icon={faDice}/> Mystery Parafait will be selling Danmaku's biggest expansion yet, <b> Traditional Festival of Paradise</b> for the first time at TouhouFest!</Alert> */}

                <Image src={danmaku} rounded fluid/>
            </Col>
        </Row>

        <h5 className="fw-normal mt-3 text-center"><a className="text-decoration-none text-reset" href="https://danmaku.party" target="_blank">Visit Danmaku!!'s Website <FontAwesomeIcon icon={faAngleRight} fixedWidth/></a></h5>

        <MakeGoheiHeader content="Free Play" fragment_id='freeplay'/>

        <div className="text-center mt-3 mb-3"><MakeLocationBadge location="George Nakano Theatre"/></div>

        <p>Touhou mainline games, fighting games, spinoffs, and select fangames will be playable at various times throughout the con, as marked by events labelled as "Free Play". Assistance is graciously provided by <a href ="https://twitter.com/Youkaiverse" target="_blank" rel="noreferrer"><b>Youkaiverse</b></a>; we thank them for their assistance this year.</p>

        <MakeGoheiHeader content="Fangames" fragment_id='fangames'/>

        <div className="text-center mt-3 mb-3"><MakeLocationBadge location="Assembly Hall"/></div>

        <p>The below fangame devs will be available and will have playable demos!</p>

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

        <div className="text-center mt-3 mb-3"><MakeLocationBadge location="George Nakano Theatre"/></div>

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

        <MakeGoheiHeader content="Tournaments" fragment_id='tournaments'/>

        <div className="text-center mt-3 mb-3"><MakeLocationBadge location="George Nakano Theatre"/></div>

        <p>Tournaments are being arranged for the below games. Tournament rules for each game are attached below which lead to start.gg. For more info visit the convention-wide <a href ="https://www.start.gg/tournament/touhoufest-2025/details" target="_blank" rel="noreferrer">start.gg page.</a></p>

        <Row className="justify-content-center g-2 mb-3">
            {tourneylisting.map((tourney) => <Col xs={6} md={6} lg={4}>
                <a href={tourney["link"]} target="_blank" rel="noreferrer">
                    <Card className="px-3 py-2 text-center h-100">
                        <p className="mb-1 text-center"><FontAwesomeIcon icon={faGamepad}/></p>
                        <p className="mb-0">{tourney["title"]}</p>
                    </Card>
                </a>
            </Col>)}
        </Row>

        <hr />

        <Row className="justify-content-center mb-3">
            <Col xs={12} md={10} lg={8}>
                <Card>
                    <Card.Body>
                        <p className="mb-1"><FontAwesomeIcon icon={faGamepad}/> <b>NEW!</b></p>
                        <p className="mb-0">At-con registration for TouhouFest gaming tournaments is returning this year! If you wish to take advantage of this, please visit Gaming at the Toyota Hall.</p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <h4>Prizes</h4>
        <p>Prizes will be given to the 1st and 2nd placed competitors for each tournament bracket.</p>
        <Row xs={1} md={2} className="justify-content-center">
            <Col>
                <Card>
                    <Card.Body>
                        <Row className="align-items-center mb-3 g-3">
                          <Col xs="auto">
                            <FontAwesomeIcon icon={faMedal} size="2x"/>
                          </Col>
                          <Col>
                            <Card.Title className="mb-0"><h4 className="mb-0">First Place (Per Each Bracket)</h4></Card.Title>
                          </Col>
                        </Row>
                        <Card.Subtitle className="fw-bold mb-2">Free TouhouFest 2026 Badge + Medal</Card.Subtitle>

                        <hr />

                        <Row className="align-items-center mb-3 g-3">
                          <Col xs="auto">
                            <FontAwesomeIcon icon={faMedal} size="2x"/>
                          </Col>
                          <Col>
                            <Card.Title className="mb-0"><h4 className="mb-0">Second Place (Per Each Bracket)</h4></Card.Title>
                          </Col>
                        </Row>
                        <Card.Subtitle className="fw-bold mb-2">Select Touhou-Themed Merch Giveaways</Card.Subtitle>

                    </Card.Body>
                </Card>
 
            </Col>
        </Row>


        <h4 className="mt-2">Wave Info</h4>
        <p>Gaming tournaments will be organized in "Waves" where specific games will compete based on their particular rules. Below is a listing of each wave, their included games, as well as their respective pools on start.gg.</p>

        <Row xs={1} md={2} className="justify-content-center gy-3">
            {wavelisting.map((wave) => <Col>
                <Card className="h-100">
                    <Card.Header className="fw-bold">{wave["event"]}</Card.Header>
                    <Card.Body>
                        {wave["links"].map((link) => <>
                            <a href={link["link"]} target="blank" rel="noreferrer"><h5>{link["title"]} <FontAwesomeIcon icon={faArrowUpRightFromSquare} fixedWidth/></h5> </a>
                        </>)}
                    </Card.Body>
                </Card>
            </Col>)}
        </Row>
    </>)
}