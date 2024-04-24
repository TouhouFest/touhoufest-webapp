/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEarthAmericas, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faTwitch, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {torinoplaza, pinewindgarden, assemblyhall, odyssey, shihori, tam } from "../Utils";
import { Image } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import { CircledBullets } from '../Utils';
import { ListGroup } from 'react-bootstrap';

const punderfullll = require("./../images/punderfullll.png");
const a_one = require("./../images/a-one.png");
const guestbanner = require("./../images/guestbanner.jpg");
const ryuko = require("./../images/artistalley/ryuko.jpg");
const bakkun = require("./../images/artistalley/bakkun.jpg");
const suzubrah = require("./../images/artistalley/suzubrah.jpg");
const coobie = require("./../images/artistalley/coobie.jpg");
const renko = require("./../images/renko.jpg");

let djs = [
    {
        "name": "Ryuko Pegasasu",
        "image": ryuko,
        "website": "https://twitter.com/RyukoPegasasu",
        "description": "",
        "location": "Saturday"
    },
    {
        "name": "Bakkun",
        "image": bakkun,
        "website": "https://twitter.com/master_bacon",
        "location": "Saturday & Sunday"
    },
    {
        "name": "Suzubrah",
        "image": suzubrah,
        "location": "Saturday",
        "website": "https://twitter.com/suzubrah?lang=en"
    },
    {
        "name": "Coobie",
        "image": coobie,
        "location": "Sunday",
        "website": "https://twitter.com/ultimatecoobie?lang=en"
    }

];

export const guestsPage = {
    "header": (<><FontAwesomeIcon icon={faCircleUser} fixedWidth></FontAwesomeIcon> Guests & DJs</>),
    "fluidImage": (<Image src={guestbanner} fluid />),
    "body": (<>
        <h4>Location(s)</h4>
        <p>Events for the following guests will occur at the following locations:</p>
        <ul>
            <li><b>A-ONE</b>: Assembly Hall (<CircledBullets argument="13"/>)</li>
            <li><b>TAMUSIC</b>: Torino Plaza (<CircledBullets argument="8"/>)</li>
            <li><b>Punderfull</b>: Pine Wind Garden (<CircledBullets argument="15"/>)</li>
        </ul>
        <Figure>
            <Figure.Image src={assemblyhall} fluid rounded></Figure.Image>
            <Figure.Caption>Assembly Hall (furniture may be adjusted depending on the event)</Figure.Caption>
        </Figure>
        <Figure>
            <Figure.Image src={torinoplaza} fluid rounded></Figure.Image>
            <Figure.Caption>Torino Plaza</Figure.Caption>
        </Figure>
        <Figure>
            <Figure.Image src={pinewindgarden} fluid rounded></Figure.Image>
            <Figure.Caption>Pine Wind Garden</Figure.Caption>
        </Figure>
        <h4>About The Guests</h4>
        <Row xs={1} md={1} lg={1} className="g-4">
           <Col>
                <Card>
                    <Card.Img variant="top" src={a_one}></Card.Img>
                    <Card.Body>
                        <Card.Title>A-One Records</Card.Title>
                        <Card.Text>Get ready to SCREAM OUT as A-One Records, the doujin circle behind TOHO EUROBEAT album series, joins us from overseas as our final guest for TouhouFest this year!</Card.Text>
                        <Card.Text>Founded by Yassie and ELEMENTAS in 2008, A-One Records has since then become a household name in the Touhou remix and Eurobeat scenes alike, producing the TOHO EUROBEAT, SUPER EURO SMASH and EUROBEAT ATTACK!! album series.</Card.Text>
                        <Card.Text>This year, A-ONE Records will be performing a live concert starring ELEMENTAS, Rute and Aki, truly an experience that must be seen to be believed!</Card.Text>
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
            <Col>
                <Card>
                    <Card.Img variant="top" src={renko}></Card.Img>
                    <Card.Body>
                        <Card.Title>Renko</Card.Title>
                        <Card.Subtitle>*Yes, the FELT Renko</Card.Subtitle>
                        <Card.Text>Renko is a formerly Tokyo-based vocalist and lyricist from California who has been a part of many different Touhou arrange and original music circles. She is the founder of and vocalist and lyricist for ORANGE★JAM, as well as the English lyricist for FELT. </Card.Text>
                        <Card.Text>Inspired by the creative nature, music, characters, and stories of Touhou Project, Renko started her own Touhou arrange music circle, ORANGE★JAM, at Winter Comiket 81 (2011), which began as one of the first native English, international Touhou arrange circles, collaborating as a circle and individual with many different international and Japanese composers, artists, and circles alike, such as A-One, SuganoMusic, IOSYS, Frozen Starfall, and Machikado-Mapoze, which led to works in beatmania IIDX, DANCE aROUND, and DANCERUSH STARDOM.</Card.Text>
                        <Card.Text>Joining FELT as their main English lyricist since "Blue Drop" at Summer Comiket 80 (2011), she continued writing English lyrics, such as "One More Time", "Can't Look Away", "Goodbye", and "Puppet in the Dark", for FELT until their disbandment at Winter Comiket 99 (2021). </Card.Text>
                        <Card.Text>In her spare time, aside from streaming various video games and kareoke regularly on Twitch twice a week, she practices archery and spoilers her corgi.</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center small">
                        <Card.Link href="https://renko.studio/" target="_blank"><FontAwesomeIcon icon={faGlobeAmericas}/> Portfolio</Card.Link>
                        <Card.Link href="https://www.twitch.tv/renkomatic" target="_blank"><FontAwesomeIcon icon={faTwitch}/> Twitch</Card.Link>
                        <Card.Link href="https://twitter.com/Renko_" target="_blank"><FontAwesomeIcon icon={faXTwitter}/> Twitter</Card.Link>
                    </Card.Footer>
                </Card>
            </Col>
           <Col>
                <Card>
                    <Card.Img variant="top" src={tam}></Card.Img>
                    <Card.Body>
                        <Card.Title>TAMusic</Card.Title>
                        <Card.Text>TAMusic wowed the attendees of last year's TouhouFest with his appearance! Please welcome him back for TouhouFest 2024!</Card.Text>
                        <Card.Text>Music circle TAMUSIC is run by its head musician TAM and is the world's most prolific and largest Doujin music circle. He is capable of improvising any song he has listened to, and composes music that plays with 30 different types of instruments. Currently the world's first publisher of Touhou Ensou Douga (東方演奏動画).</Card.Text>
                        <Card.Text>Since 2004, his Youtube channel has reached 120k subscribers, 60 million replays, and he has released 192 Touhou doujin music CDs, produced over 2000 rearrange music tracks, and traveled across the world and performed in 20 different locations across Asia, North America, and Europe.</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center small"><a href="https://twitter.com/tamusic" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon> Twitter</a></Card.Footer>
                </Card>
            </Col>
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
        </Row>

        <h4 className="mt-2">DJs</h4>
        <p>Throughout the convention the below talented individuals will be providing background music in the Torino Festival Plaza. Feel free to stop by and listen if able!</p>

        <Row xs={2} className="g-3 justify-content-center">
            {djs.map((artist, i) => <>
             <Col>
                <Card>
                    <Card.Img variant="top" src={artist["image"]}></Card.Img>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center">{artist["name"]}</ListGroup.Item>
                        <ListGroup.Item className="text-center small">{artist["location"]}</ListGroup.Item>
                    </ListGroup>
                    {artist["website"] !== "" ? <Card.Footer className="text-center small"><a href={artist["website"]} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> DJ Link</a></Card.Footer> : <></>}
                </Card>
            </Col>
            </>)}
        </Row>
    </>),
}