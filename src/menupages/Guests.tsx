/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faCompactDisc, faEarthAmericas, faGlobeAmericas, faShop } from '@fortawesome/free-solid-svg-icons';
import { faTwitch, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {torinoplaza, pinewindgarden, assemblyhall, odyssey, shihori, tam, placeholder, maidacademy, WarningAlert } from "../Utils";
import { Alert, Image } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import { CircledBullets } from '../Utils';
import { ListGroup } from 'react-bootstrap';

import punderfullll from "./../images/punderfullll.jpg";
// const punderfullll = require("./../images/punderfullll.jpg");
import a_one from "./../images/a-one.png";
import guestbanner from "./../images/guestbanner.jpg";
import ryuko from "./../images/artistalley/ryuko.jpg";
import bakkun from "./../images/artistalley/bakkun.jpg";
import suzubrah from "./../images/artistalley/suzubrah.jpg";
import coobie from "./../images/artistalley/coobie.jpg";
import renko from "./../images/renko.jpg";
import miko from "./../images/miko.jpg";
import hojo from "./../images/hojo.jpg";
import afterglow from "./../images/artistalley/afterglow.jpg";
import yona from "./../images/artistalley/yona.jpg";
import corpsdancecrew from "./../images/artistalley/corpsdancecrew.jpg";
import oyamada from "./../images/oyamada.jpg";
import { neosanctum,suzukann } from '../Utils';

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
    "header": (<><FontAwesomeIcon icon={faCircleUser} fixedWidth></FontAwesomeIcon> Guests & DJs</>),
    "fluidImage": (<Image src={guestbanner} fluid />),
    "body": (<>
        <h4>Location(s)</h4>
        <p>Events for the following guests will occur at the following locations:</p>
        <ul>
            <li><b>Shihori, A-ONE, & Miko</b>: Assembly Hall (<CircledBullets argument="11"/> Theatre (Main Events))</li>
            <li><b>TAMUSIC & Miko</b>: Torino Plaza (<CircledBullets argument="7"/> Main Stage)</li>
        </ul>
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
        <h4>About The Guests</h4>
        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
           <Col>
                <Card>
                    <Card.Img variant="top" src={a_one}></Card.Img>
                    <Card.Body>
                        <Card.Title>A-One Records</Card.Title>
                        <Card.Text>Get ready to SCREAM OUT as A-One Records, the doujin circle behind TOHO EUROBEAT album series, joins us from overseas as our final guest for TouhouFest this year!</Card.Text>
                        <Card.Text>Founded by Yassie and ELEMENTAS in 2008, A-One Records has since then become a household name in the Touhou remix and Eurobeat scenes alike, producing the TOHO EUROBEAT, SUPER EURO SMASH and EUROBEAT ATTACK!! album series.</Card.Text>
                        <Card.Text>This year, A-ONE Records will be performing a live concert starring ELEMENTAS, Rute and Aki, truly an experience that must be seen to be believed!</Card.Text>
                        <Alert variant="success">
                            <Card.Text><FontAwesomeIcon icon={faCompactDisc}/> A-One will be selling their newest release "<b><a href = "https://www.youtube.com/watch?v=YglkdN6NqfA" target="_blank" rel="noreferrer">TOHO EUROBEAT VOL. 25</a></b>" in-person at TouhouFest!</Card.Text>
                        </Alert>
                    </Card.Body>
                    <Card.Footer className="text-center small"><a href="https://twitter.com/A_One_JP" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon> Twitter</a></Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={shihori}></Card.Img>
                    <Card.Body>
                        <Card.Title>Shihori</Card.Title>
                            <Card.Text>SHIHORI is an international J-pop singer and songwriter based in LA who composes and performs solo work, as well as music for film, TV, anime, and games. </Card.Text>
                            <Card.Text>She's best known for the theme songs of League of Legends, Omega Strikers, and her featured songs in franchises like PUBG and beatmania IIDX. </Card.Text>
                            <Card.Text>She's also known for being one of the first doujin industry singers for Touhou Project as a former member of "SOUND HOLIC" and "A-One". </Card.Text>
                            <Card.Text>After many of her releases have made the Oricon Chart in Japan with 13 of her hits having attained Gold Disc Certification, in 2018 she moved to the U.S.</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center small"><a href="https://linktr.ee/shihorimusic" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> Linktree</a></Card.Footer>
                </Card>
            </Col>
            { /*
            <Col>
                <Card>
                    <Card.Img variant="top" src={odyssey}></Card.Img>
                    <Card.Body>
                        <Card.Title>Odyssey Eurobeat</Card.Title>
                            <Card.Text>Odyssey Eurobeat captivated last year's TouhouFest crowd at the stage, and she will be returning once again for Touhoufest 2024!</Card.Text>
                            <Card.Text>Odyssey, (aka "Stebbins" on A-One Records' Toho Eurobeat series) has been making iconic eurobeat remixes of ZUN's music work with SUGANO MUSIC to her own releases such as On The Moon and Our Desires, she has captured the attention of Touhou fans and eurobeat fans the world over with energetic riffs and blitzing beats. </Card.Text>
                            <Card.Text>Her live performances deliver just as much energy and are not to be missed!</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center small"><a href="https://linktr.ee/odysseyeurobeat" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> Linktree</a></Card.Footer>
                </Card>
            </Col>
            */ }
            { /*
            <Col>
                <Card>
                    <Card.Img variant="top" src={renko}></Card.Img>
                    <Card.Body>
                        <Card.Title>Renko</Card.Title>
                        <Card.Subtitle>*Yes, the FELT Renko</Card.Subtitle>
                        <Card.Text>Renko is a formerly Tokyo-based vocalist and lyricist, from California who has been a part of many different Touhou arrange and original music circles. She is the founder, vocalist, and lyricist for ORANGE★JAM, as well as the English lyricist for FELT.</Card.Text>

                        <Card.Text>Inspired by the creative nature, music, characters, and stories of Touhou Project, Renko started her own Touhou arrange music circle, ORANGE★JAM, at Comiket 81 (2011), one of the first native English, international Touhou arrange circles, and joined FELT as their main English lyricist from "Blue Drop" at Comiket 80 (2011), working with Maurits "Zen" Cornelis, Vivienne, and NAGI☆ until FELT's disbandment at Comiket 99 (2021).</Card.Text>

                        <Card.Text>Since then, she has continued to collaborate with various international and Japanese composers, artists, and circles, such as A-One, SuganoMusic, IOSYS, Frozen Starfall, Machikado-Mapoze, and SOUND HOLIC, which led to works in beatmania IIDX, DANCE aROUND, DANCERUSH STARDOM, and Arcaea. </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center small">
                        <Card.Link href="https://renko.studio/" target="_blank"><FontAwesomeIcon icon={faGlobeAmericas}/> Portfolio</Card.Link>
                        <Card.Link href="https://www.twitch.tv/renkomatic" target="_blank"><FontAwesomeIcon icon={faTwitch}/> Twitch</Card.Link>
                        <Card.Link href="https://twitter.com/Renko_" target="_blank"><FontAwesomeIcon icon={faXTwitter}/> Twitter</Card.Link>
                    </Card.Footer>
                </Card>
            </Col>
            */}
            <Col>
                <Card>
                    <Card.Img variant="top" src={tam}></Card.Img>
                    <Card.Body>
                        <Card.Title>TAMusic</Card.Title>
                        <Card.Text>TAMusic wowed the attendees of last year's TouhouFest with his appearance! Please welcome him back for TouhouFest 2024!</Card.Text>
                        <Card.Text>Music circle TAMUSIC is run by its head musician TAM and is the world's most prolific and largest Doujin music circle. He is capable of improvising any song he has listened to, and composes music that plays with 30 different types of instruments. Currently the world's first publisher of Touhou Ensou Douga (東方演奏動画).</Card.Text>
                        <Card.Text>Since 2004, his Youtube channel has reached 120k subscribers, 60 million replays, and he has released 192 Touhou doujin music CDs, produced over 2000 rearrange music tracks, and traveled across the world and performed in 20 different locations across Asia, North America, and Europe.</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center small">
                        <Card.Link href="https://twitter.com/tamusic" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon> Twitter</Card.Link>
                        <Card.Link href="https://www.youtube.com/user/violinpiano2" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube}/> YouTube</Card.Link>
                    </Card.Footer>
                </Card>
            </Col>
            {/*
            <Col>
                <Card>
                    <Card.Img variant="top" src={punderfullll}></Card.Img>
                    <Card.Body>
                        <Card.Title>Punderfullll</Card.Title>
                            <Card.Text>I'm Punderful! I'm a Canadian cosplayer and streamer! I started cosplaying in 2006 and it has been a huge passion and hobby of mine ever since. I discovered Touhou Project in 2009 and started to cosplay from it in 2013. Touhou is one of my favorite game series and has been a huge part of my life. I currently stream on Twitch 5 days a week, and have been challenging myself to beat Touhou games  with a Pop'n Music controller!</Card.Text>
                            <Card.Text>I'm so happy and thankful to be invited back again for next year. I cannot wait to see everyone again at Touhoufest 2024!</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center small"><a href="https://linktr.ee/punderfullll" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> Linktree</a></Card.Footer>
                </Card>
            </Col>
            */}
            <Col>
                <Card>
                    <Card.Img variant="top" src={miko}></Card.Img>
                    <Card.Body>
                        <Card.Title>Miko</Card.Title>
                        <Card.Text>From August 2004, working as a freelance vocalist and voice provider. From May 2022, the special tourism ambassador for Choshi City, Chiba Prefecture,Japan.</Card.Text>
                        <Card.Text>miko-san's name became widely known as music circle "IOSYS"'s Touhou arrangements such as "<a href="https://www.youtube.com/watch?v=1pDM6fQUfJs" target="_blank" rel="noreferrer">Marisa Stole Something Precious</a>", "<a href="https://www.youtube.com/watch?v=5wFDWP5JwSM" target="_blank" rel="noreferrer">Cirno's Perfect Math Class</a>," and "<a href="https://www.youtube.com/watch?v=rl7ppuXMfC8" target="_blank" rel="noreferrer">Scarlet Police Ghetto Patrol 24 Hours</a>" became popular on video sites.</Card.Text>
                        <Card.Text>Since then, she has been active as a vocalist in a wide range of fields, both commercial and doujin, singing songs for major companies' web commercials, game music, game character image songs, and TV program theme songs. She also has a wide range of activities outside of singing, such as appearing in visual videos, voice acting, radio personality, and stage performances.</Card.Text>
                        <Card.Text>Her main occupation is systems engineering!</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center small"><a href="https://x.com/mikonyu" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon> Twitter</a></Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={hojo}></Card.Img>
                    <Card.Body>
                        <Card.Title>Hojo-san</Card.Title>
                        <Card.Text>Greetings, we are the Hakurei Shrine Reitaisai, a Touhou-only event focused on Touhou Project and its fandom. Hosted by the Hakurei Shrine Office, our event is hosted twice each year, in Spring and Fall, at Tokyo Big Sight. Please come and visit us for the biggest gathering of Touhou fans!</Card.Text>
                   </Card.Body>
                    <Card.Footer className="text-center small">
                        <Card.Link href="https://x.com/HakureijinjyaS" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon> Twitter</Card.Link>
                        <Card.Link href = "https://reitaisai.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGlobeAmericas}/>Reitaisai Link</Card.Link>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={suzukann}></Card.Img>
                    <Card.Body>
                        <Card.Title>Suzukannn</Card.Title>
                        <Card.Subtitle className="mb-2">Pen Name: Suzuka Kyouda</Card.Subtitle>
                        <Card.Text>Suzukannn is a dedicated and very talented illustrator who draws a litany of Touhou artworks and fanworks. Her work has been featured as part of collaborations with a variety of big Touhou names such as BeatMARIO, <a href = "https://www.youtube.com/watch?v=jWvuUeUyyKU" target="_blank" rel="noreferrer">Shinra-Bansho</a>, and Reitaisai!</Card.Text>
                   </Card.Body>
                    <Card.Footer className="text-center small">
                        <Card.Link href="https://x.com/suzukannn" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon> Twitter</Card.Link>
                        <Card.Link href="https://suzukannn.booth.pm/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faShop}></FontAwesomeIcon> Booth.pm</Card.Link>
                    </Card.Footer>
                </Card>
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