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
import { Figure, Image } from 'react-bootstrap';

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
        <p>TouhouFest is hosting a cosplay contest for those brave enough. Prizes are as follows:</p>
        <ul>
            <li>1st: $100 Amazon Gift Card, two free TouhouFest 2025 badges</li>
            <li>2nd: $75 Amazon Gift Card, one free TouhouFest 2025 badge</li>
            <li>3rd: $50 Amazon Gift Card, one free TouhouFest 2025 badge</li>
        </ul>
    </>),
}