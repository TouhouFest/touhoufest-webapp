/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import toyota from "./../images/toyota.jpg";
import gaming from "./../images/gaming.jpg";
import { Figure, Image } from 'react-bootstrap';

export const gamingPage = {
    "header": (<><FontAwesomeIcon icon={faGamepad} fixedWidth></FontAwesomeIcon> Gaming</>),
    "fluidImage": (<Image src={gaming} fluid/>),
    "body": (<>
        <h4>Location</h4>
        <p>All gaming-related events will be taking place in the <b>Toyota Meeting Hall</b>, located to the right of the main vendors area.</p>
        <Figure>
            <Figure.Image src={toyota} fluid rounded></Figure.Image>
            <Figure.Caption>Toyota Meeting Hall</Figure.Caption>
        </Figure>

        <h4 className="mt-2">Free Play</h4> 
        <p>All Touhou mainline games, fighting games, and spinoffs will be playable at various times throughout the con, as marked by events labelled as "Free Play". Assistance is graciously provided by <a href ="https://twitter.com/TouhouRoadShou" target="_blank" rel="noreferrer"><b>Touhou Road Shou</b></a> and <a href ="https://twitter.com/Youkaiverse" target="_blank" rel="noreferrer"><b>Youkaiverse</b></a>; we thank them for their assistance this year.</p>
        <h4>Tournaments</h4>
        <p>Tournaments are being arranged for the following games:</p>
        <ul>
            <li>Touhou 12.3 Hisoutensoku</li>
            <li>Touhou 19 Unfinished Dream of All Living Ghost</li>
            <li>Touhou Rivals Workshop</li>
            <li>Touhou Fractured Transience</li>
            <li>Touhou 15.5 Antimony of Common Flowers</li>
        </ul>
        <p>Those interested may visit <a href ="https://www.start.gg/tournament/touhoufest-2024/details" target="_blank" rel="noreferrer">TouhouFest's start.gg page.</a></p>
    </>)
}