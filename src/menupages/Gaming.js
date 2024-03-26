/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faGamepad } from '@fortawesome/free-solid-svg-icons';
import toyota from "./../images/toyota.jpg";
import kenmiller from "./../images/kenmiller.webp";
import gaming from "./../images/gaming.jpg";
import fracturedtransience from "./../images/gaming/fracturedtransience.jpg";
import { Card, Figure, Image } from 'react-bootstrap';
import { faSteam } from '@fortawesome/free-brands-svg-icons';

export const gamingPage = {
    "header": (<><FontAwesomeIcon icon={faGamepad} fixedWidth></FontAwesomeIcon> Gaming</>),
    "fluidImage": (<Image src={gaming} fluid/>),
    "body": (<>
        <h4>Location(s)</h4>
        <p>Gaming events for <em>official</em> Touhou games will take place in the <b>Toyota Meeting Hall</b>, located to the right of the Torino Festival Plaza. Gaming events for Touhou <em>fangames</em> will take place at the <b>Ken Miller Rec Center</b>, to the left of the Torino Festival Plaza.</p>
        <Figure>
            <Figure.Image src={toyota} fluid rounded></Figure.Image>
            <Figure.Caption>Toyota Meeting Hall</Figure.Caption>
        </Figure>
        <Figure>
            <Figure.Image src={kenmiller} fluid rounded/>
            <Figure.Caption>Ken Miller Recreation Center</Figure.Caption>
        </Figure>

        <h4>Free Play</h4> 
        <p>Touhou mainline games, fighting games, spinoffs, and select fangames will be playable at various times throughout the con, as marked by events labelled as "Free Play". Assistance is graciously provided by <a href ="https://twitter.com/Youkaiverse" target="_blank" rel="noreferrer"><b>Youkaiverse</b></a>; we thank them for their assistance this year. Below is a sampling of the fangames on the docket:</p>

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
        <p className="small"><FontAwesomeIcon icon={faExclamationCircle} /> Sign-ups for gaming tournaments at TouhouFest already closed on April 25th, 2024.</p>

        <h5>Wave Info</h5>
        <p>Gaming tournaments will be organized in "Waves" where specific games will compete based on their particular rules. Below is a listing of each wave, their included games, as well as their respective pools on start.gg.</p>
    </>)
}