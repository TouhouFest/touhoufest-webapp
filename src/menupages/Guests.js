/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import punderfullll from "./../images/punderfullll.png";
import odyssey from "./../images/odyssey.jpg";
import shihori from "./../images/shihori.jpg";
import tam from "./../images/TAM.JPG";
import cloudie from "./../images/cloudie.jpg";
import freeze from "./../images/freeze.jpg";
import a_one from "./../images/a-one.png";
import guestbanner from "./../images/guestbanner.jpg";
import torinoplaza from "./../images/torinoplaza.jpg";
import pinewindgarden from "./../images/pinewindgarden.jpg";
import { Alert, Image } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';

export const guestsPage = {
    "header": (<><FontAwesomeIcon icon={faCircleUser} fixedWidth></FontAwesomeIcon> Guests & Official Artists</>),
    "fluidImage": (<Image src={guestbanner} fluid />),
    "body": (<>
        <h4>Location(s)</h4>
        <p>Events for the following guests will occur at the following locations:</p>
        <ul>
            <li><b>A-ONE/Odyssey/Shihori</b>: Assembly Hall</li>
            <li><b>TAMUSIC</b>: Torino Plaza</li>
            <li><b>Punderfull</b>: Pine Wind Garden</li>
        </ul>
        <Alert>TODO: add picture for assembly hall once it's provided</Alert>
        <Figure>
            <Figure.Image src={torinoplaza} fluid rounded></Figure.Image>
            <Figure.Caption>Torino Plaza</Figure.Caption>
        </Figure>
        <Figure>
            <Figure.Image src={pinewindgarden} fluid rounded></Figure.Image>
            <Figure.Caption>Pine Wind Garden</Figure.Caption>
        </Figure>
        <h4>Guests</h4>
        <Row xs={1} md={1} lg={1} className="g-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src={a_one}></Card.Img>
                    <Card.Body>
                        <Card.Title>A-ONE RECORDS</Card.Title>
                        <Card.Text>Get ready to SCREAM OUT as A-One Records, the doujin circle behind TOHO EUROBEAT album series, joins us from overseas as our final guest for TouhouFest this year!</Card.Text>
                        <Card.Text>Founded by Yassie and ELEMENTAS in 2008, A-One Records has since then become a household name in the Touhou remix and Eurobeat scenes alike, producing the TOHO EUROBEAT, SUPER EURO SMASH and EUROBEAT ATTACK!! album series.</Card.Text>
                        <Card.Text>This year, A-ONE Records will be performing a live concert starring ELEMENTAS, Rute and Aki, truly an experience that must be seen to be believed!</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center"><a href="https://twitter.com/A_One_JP" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon> Twitter</a></Card.Footer>
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
                    <Card.Footer className="text-center"><a href="https://linktr.ee/shihorimusic" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> Linktree</a></Card.Footer>
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
                    <Card.Footer className="text-center"><a href="https://linktr.ee/odysseyeurobeat" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> Linktree</a></Card.Footer>
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
                    <Card.Footer className="text-center"><a href="https://twitter.com/tamusic" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon> Twitter</a></Card.Footer>
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
                    <Card.Footer className="text-center"><a href="https://linktr.ee/punderfullll" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> Linktree</a></Card.Footer>
                </Card>
            </Col>
        </Row>
        <h4 className="mt-3">Official Artists</h4>
        <Row xs={1} md={1} lg={1} className="g-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src={cloudie}></Card.Img>
                    <Card.Body>
                        <Card.Title>Cookietanukiart</Card.Title>
                            <Card.Text>Happy to meet you! I'm Cloudie, a 20 year old (as of 2021) self-taught artist who loves creating content for my interests. I love Touhou Project and all of its characters, and as such I've used my artwork and platforms to express my love for the series with the community.  Aside from fanart I also create my own original art and occasionally cosplay. I look forward to meeting everyone at TouhouFest in 2023!</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center"><a href="https://linktr.ee/cookietanuki" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> Linktree</a></Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={freeze}></Card.Img>
                    <Card.Body>
                        <Card.Title>Freeze-Ex</Card.Title>
                            <Card.Text>My name is Freeze-Ex.</Card.Text>
                            <Card.Text>I am an Illustrator born in Hong Kong, lives in Boston. Currently traveling around different anime conventions and gaming tournaments selling my artwork, strive to inspire other people. Part-time streamer and art instructor who has been a long-time Touhou fan since 2008. I have published multiple Touhou doujinshi, was an art director and illustrator of doujin music circle Touhou Boston, and participated in working on Touhou Scroll Project and Danmaku!! tabletop game.</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center"><a href="https://icecute.squarespace.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> Website</a></Card.Footer>
                </Card>
            </Col>
        </Row>
 
    </>),
}