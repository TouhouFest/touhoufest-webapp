/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faCompactDisc, faEarthAmericas, faGlobe, faGlobeAmericas, faMusic, faShop } from '@fortawesome/free-solid-svg-icons';
import { faTwitch, faTwitter, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {torinoplaza, pinewindgarden, assemblyhall, odyssey, shihori, tam, placeholder, maidacademy, WarningAlert, MakeGoheiHeader, MakeLocationBadge, torinoplazamap, MakeGenericCard } from "../Utils";
import { Alert, Image } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import { CircledBullets } from '../Utils';
import { ListGroup } from 'react-bootstrap';

import a_one from "./../images/a-one.png";
import guestbanner from "./../images/guestbanner.jpg";
import bakkun from "./../images/artistalley/bakkun.jpg";
import miko from "./../images/miko.jpg";
import hojo from "./../images/hojo.jpg";
import afterglow from "./../images/artistalley/afterglow.jpg";
import yona from "./../images/artistalley/yona.jpg";
import maron from "./../images/maron.jpg";
import corpsdancecrew from "./../images/artistalley/corpsdancecrew.jpg";
import { neosanctum,suzukann } from '../Utils';
import { GlobalTransformWrapper } from '../GlobalTransformWrapper';

import beatmario from "./../images/beatmario.jpg";
import akairyusei from "./../images/akairyusei.jpg";
import yaboimatoi from "./../images/yaboimatoi.jpg";

let djs = [
    {
        "name": "AfterGlow",
        "image": afterglow,
        "website": "https://x.com/afterglowset",
        "description": "",
        "location": "Saturday"
    },
    {
        "name": "Bakkun",
        "image": bakkun,
        "website": "https://twitter.com/master_bacon",
        "location": "Saturday"
    },
    {
        "name": "Neo Sanctum",
        "image": neosanctum,
        "location": "Saturday",
        "website": "https://neo-sanctum.com/home"
    },
    {
        "name": "Maid Academy",
        "image": maidacademy,
        "location": "Sunday",
        "website": "https://linktr.ee/maidacademy"
    },
    {
        "name": "YONA",
        "image": yona,
        "location": "Saturday",
        "website": "https://x.com/itsjonasw"
    },
    {
        "name": "The Corps Dance Crew",
        "image": corpsdancecrew,
        "location": "Saturday",
        "website": "https://x.com/TheCorpsDC"
    }
];

export const guestsPage = {
    "codename": "guests",
    "jumplinks": [
        {
            "title": "Locations",
            "fragment_id": "locations"
        },
        {
            "title": "Guests",
            "fragment_id": "guests"
        },
        {
            "title": "DJs & Performers",
            "fragment_id": "performers"
        },
    ],
    "header": (<><FontAwesomeIcon icon={faMusic} fixedWidth></FontAwesomeIcon> Music & Guests</>),
    "fluidImage": (<Image src={guestbanner} fluid />),
    "body": (<>
        
        <MakeGoheiHeader content="Locations" fragment_id='locations'/>

        <p>You will find our guests at the following locations within Torino Plaza:</p>

        <Row className="justify-content-center mb-3 gy-3">
            <Col xs="auto"><MakeLocationBadge location="Torino Plaza"/></Col>
            <Col xs="auto"><MakeLocationBadge location="George Nakano Theatre"/></Col>
        </Row>

        <h4>Torino Plaza Map</h4>
        <Row className="justify-content-center">
            <Col xs={12} lg={10}>
                <GlobalTransformWrapper src={torinoplazamap} caption="Map of Torino Plaza"/>
            </Col>
        </Row>

        {/*
        <p>All Guests Booths are accessible also at the Torino Plaza. (<CircledBullets argument="6"/> Guest Booths)</p>
        <Row className="justify-content-center">
            <Col xs={12} className="text-center">
                <Figure className="">
                    <Figure.Image src={assemblyhall} fluid rounded></Figure.Image>
                    <Figure.Caption>Assembly Hall (furniture may be adjusted depending on the event)</Figure.Caption>
                </Figure>
            </Col>
            <Col xs={12} lg={8}>
                <Figure>
                    <Figure.Image src={torinoplaza} fluid rounded></Figure.Image>
                    <Figure.Caption>Torino Plaza</Figure.Caption>
                </Figure>
            </Col>
        </Row>

        */}

        <MakeGoheiHeader content="Guests" fragment_id='guests'/>

        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
           <Col>
                <MakeGenericCard title="Marion (IOSYS)" picture={maron} links={
                    [
                        {
                            "link": "https://x.com/maron47",
                            "title": <><FontAwesomeIcon icon={faTwitter}/> Twitter</>
                        }
                    ]
                }>
                    <p>Maron is a creator and DJ belonging to the creator collective IOSYS.</p>
                    <p>Active since joining IOSYS in 2016, he is known for composing and producing songs for top VTubers, including Hololive and NIJISANJI, as well a contributing music to various rhythm games and performing live mainly in Tokyo.</p>
                    <p>Drawing inspiration from the early days of NicoNicoDouga in the late 2000s, Maron’s signature style blends the essential DNA of otaku culture into infections denpa-inspired tracks. As a DJ, he is active in the A-POP club scene, recognized for his playful, themepark-esque sound direction and performances that captivate and overwhelm the floor with a world entirely of his own.</p>
                </MakeGenericCard>
            </Col>
            <Col>
                <MakeGenericCard title="beatMario (COOL&CREATE)" picture={beatmario} links={
                    [
                        {
                            "link": "https://cool-create.cc/",
                            "title": <><FontAwesomeIcon icon={faGlobe}/> Website</>
                        }
                    ]
                }>
                    <p>beatMARIO is an arranger, composer, and singer, and the leader of the doujin circle COOL&CREATE. Around 2001, he began participating in Comiket as a circle and started producing and distributing doujin arrangement CDs. </p>

                    <p>In 2006, he began performing live more actively starting with the Touhou live event “Flowering Night.” His notable performances include: Animelo Summer Live 2009 with the debut of “Help me, ERINNNNNN!!” , hit single “Ringo Karenka”, sung by his mother Junko Ozaki (2012), collaboration with Sachiko Kobayashi at Comic Market (2014, 2015) </p>

                    <p>In recent years, his music has also been frequently featured in rhythm games. In particular, the Touhou arrangement “Night of Nights” has ranked among the top-played songs in rhythm games from multiple companies.</p>
                </MakeGenericCard>
            </Col>
            <Col>
                <MakeGenericCard title="Akai Ryu-sei (Tokyo Active NEETs)" picture={akairyusei} links={
                    [
                        {
                            "link": "https://neets.tokyo/",
                            "title": <><FontAwesomeIcon icon={faGlobe}/> Website</>
                        }
                    ]
                }>

                    <p>Akai Ryusei is a Japan-based multi-creator who masters jazz, rock, and chiptune. With impressive piano technique and skillful self-production, he delivers worldwide a truly one-of-a kind sound born from game music roots. </p>

                    <p>紅維流星は、日本を拠点にジャズ、ロック、チップチューンを自在に操るマルチクリエイター。圧巻のピアノと高度なセルフプロデュースで、ゲーム音楽をルーツにした唯一無二のサウンドを世界へ届けている。</p>

                </MakeGenericCard>
            </Col>
        
            <Col>
                <MakeGenericCard title="YaboiMatoi" picture={yaboimatoi} links={
                    [
                        {
                            "link": "https://www.yaboimatoi.com/",
                            "title": <><FontAwesomeIcon icon={faGlobe}/> Website</>
                        }
                    ]
                }>

                    <p>YaboiMatoi (Fabian Fach) is a Polish-German guitarist, singer and producer creating metal covers of Touhou, Vocaloid, anime and meme songs. He's worked with fellow creators like RichaadEB, MTB and Jonathan Young.</p>

                    <p>Having two Touhou Metal albums (<a href="https://ffm.to/youkai-touhou" target="_blank" rel="noreferrer">Youkai</a> & <a href="https://ffm.to/lunatic-touhou">Lunatic</a>) and over 10 million YouTube views under his belt, YaboiMatoi is now bringing you your favorite Touhou songs live on stage.</p>
                </MakeGenericCard>
            </Col>
        </Row>

        <h4 className="mt-2">DJs/Performers</h4>
        <p>Throughout the convention the below talented individuals will be providing background music and/or smaller performances at the Torino Festival Plaza. Feel free to stop by and listen if able!</p>

        <Row xs={2} md={4} lg={6} className="g-3 justify-content-center">
            {djs.map((artist, i) => <>
             <Col>
                <Card>
                    <Card.Img variant="top" src={artist["image"]}></Card.Img>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center">{artist["name"]}</ListGroup.Item>
                        <ListGroup.Item className="text-center small">{artist["location"]}</ListGroup.Item>
                    </ListGroup>
                    {artist["website"] !== "" ? <Card.Footer className="text-center small"><a href={artist["website"]} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> Link</a></Card.Footer> : <></>}
                </Card>
            </Col>
            </>)}
        </Row>
    </>),
}