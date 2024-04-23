/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { CircledBullets, torinoplaza, assemblyhall, kenmiller, pinewindgarden, toyota, entryplaza, nakanotheatre } from '../Utils';
import { Figure } from 'react-bootstrap';

const panelroom = require("./../images/panelroom.png");
const con_banner = require("./../con_banner.png");

export const mainLocationsPage= {
  "header": (<><FontAwesomeIcon icon={faBuilding} fixedWidth></FontAwesomeIcon> Key Locations</>),
  "fluidImage": (<></>),
  "body": (
    <>
        <h4>George Nakano Theatre</h4>
        <p>The George Nakano Theatre is the right-most building of the convention. The following event spaces are located here:</p>
        <ul className="list-unstyled">
            <li><CircledBullets argument="1"/> Registration</li>
            <li><CircledBullets argument="2"/> Artist Alley</li>
        </ul>
        <Figure>
            <Figure.Image src={nakanotheatre} fluid rounded></Figure.Image>
            <Figure.Caption>George Nakano Theatre</Figure.Caption>
        </Figure>

        <h4>Entry Plaza</h4>
        <p>The Entry Plaza is the the first major area of TouhouFest that you will encounter if you enter via the main entrance. The following event spaces are hosted here:</p>
        <ul className="list-unstyled">
            <li><CircledBullets argument="3"/> Vendors Booth</li>
            <li><CircledBullets argument="5"/> Cosplay Booths & Cosplay Repair</li>
            <li><CircledBullets argument="6"/> Info Booth | Lost and Found</li>
        </ul>
        <Figure>
            <Figure.Image src={entryplaza} fluid rounded></Figure.Image>
            <Figure.Caption>Entry Plaza (when entering from the Nakano Theatre entrance)</Figure.Caption>
        </Figure>

        <h4>Garden Room B</h4>
        <p>Garden Room B is located towards the rear of the convention center, in front of the Pine Wind Garden and behind the Torino Plaza. The following event spaces are located here:</p>
        <ul className="list-unstyled">
            <li><CircledBullets argument="4"/> Panels</li>
        </ul>

        <Figure>
            <Figure.Image src={panelroom} fluid rounded></Figure.Image>
            <Figure.Caption>Garden Room B (furniture may be adjusted depending on the event)</Figure.Caption>
        </Figure>

        <h4>Pine Wind Garden</h4>
        <p>The Pine Wind Garden is the rearmost space in the convention. With all the lush plants and decoration it should not be too hard to miss. The following event spaces are located here:</p>
        <ul className="list-unstyled">
            <li><CircledBullets argument="15"/> Cosplay Meetups</li>
        </ul>
        <Figure>
            <Figure.Image src={pinewindgarden} fluid rounded/>
            <Figure.Caption>Pine Wind Garden</Figure.Caption>
        </Figure>

        <h4>Toyota Hall</h4>
        <p>The Toyota Meeting Hall is to the immediate left of the main entrance (facing towards it) and to the left of stage (facing away from it). The following event spaces are located here:</p>
        <ul className="list-unstyled">
            <li><span className="text-primary"><CircledBullets argument="9"/></span> Gaming Hall 1: Official Touhou Games</li>
        </ul>
        <Figure>
            <Figure.Image src={toyota} fluid rounded></Figure.Image>
            <Figure.Caption>Toyota Meeting Hall</Figure.Caption>
        </Figure>

        <h4>Ken Miller Rec Center</h4>
        <p>The Ken Miller Rec Center rooms are the ones directly facing the main stage. The following event spaces are located here:</p>
        <ul className="list-unstyled">
            <li><CircledBullets argument="10"/> Gaming Hall 2: Fan Games</li>
            <li><CircledBullets argument="11"/> Music Booths</li>
        </ul>
        <Figure>
            <Figure.Image src={kenmiller} fluid rounded/>
            <Figure.Caption>Ken Miller Recreation Center</Figure.Caption>
        </Figure>

        <h4>Entry Foyer</h4>
        <p>The Entry Foyer is the exterior of the Ken Miller Rec Center, namely the room with the alternate exit leading out of the convention. The following event spaces are located here:</p>
        <ul className="list-unstyled">
            <li><CircledBullets argument="12"/> Community Booths</li>
        </ul>

        <h4>Assembly Hall</h4>
        <p>The Assembly Hall is the left-most building of the convention center and is left from the main stage. The following event spaces are located here:</p>
        <ul className="list-unstyled">
            <li><CircledBullets argument="13"/> Assembly Hall</li>
        </ul>
        <Figure>
            <Figure.Image src={assemblyhall} fluid rounded></Figure.Image>
            <Figure.Caption>Assembly Hall (furniture may be adjusted depending on the event)</Figure.Caption>
        </Figure>

        <h4>Torino Plaza</h4>
        <p>The Torino Plaza is the main congregation area of the con and is surrounded by the Assembly Hall, Entry Foyer, Ken Miller Rec Center, and the Toyota Hall. With the massive stage towards the rear, it should be easy to spot. The following event spaces are located here:</p>
        <ul className="list-unstyled">
            <li><CircledBullets argument="7"/> Guest Booths</li>
            <li><CircledBullets argument="8"/> Main Stage</li>
        </ul>
        <Figure>
            <Figure.Image src={torinoplaza} fluid rounded></Figure.Image>
            <Figure.Caption>Torino Plaza</Figure.Caption>
        </Figure>

        <h4>Front Circular Drive</h4>
        <p>This is where the main entrance of the convention center is. It will have a sign that says "Torrance Cultural Arts Center". The following event spaces are located here:</p>
        <ul className="list-unstyled">
            <li><CircledBullets argument="14"/> Food Trucks</li>
        </ul>
        <Figure>
            <Figure.Image src={con_banner} fluid rounded/>
            <Figure.Caption>Front Circular Drive</Figure.Caption>
        </Figure>

   </>
  ),
}