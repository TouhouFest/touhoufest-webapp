/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import {MakeGenericCard, CircledBullets, torinoplaza, assemblyhall, kenmiller, pinewindgarden, toyota, entryplaza, nakanotheatre, jamesarmstrongtheater } from '../Utils';
import { Figure, Row, Col } from 'react-bootstrap';

import panelroom from "./../images/panelroom.jpg";
import con_banner from "./../con_banner.jpg";
import childrensartwing from "./../images/childrensartwing.jpg";
import drawpaint from "./../images/drawpaint.jpg";

let roomlist = [
    {
        "title": "George Nakano Theatre",
        "picture": nakanotheatre,
        "rooms": [
            <><CircledBullets argument="1"/> Registration</>,
            <><CircledBullets argument="2"/> Gaming Hall</>,
            <><CircledBullets argument="restroom"/> Restrooms</>
        ],
        "content": <p>The George Nakano Theatre is the right-most building of the convention. The following event spaces are located here:</p>
    },
    {
        "title": "Entry Plaza",
        "picture": entryplaza,
        "rooms": [
            <><CircledBullets argument="3"/> Vendor Booths</>,
            <><CircledBullets argument="4"/> Guest Booths</>
        ],
        "content": <p>The Entry Plaza is the the first major area of TouhouFest that you will encounter if you enter via the main entrance. The following event spaces are hosted here:</p>
    },
    {
        "title": "Toyota Hall",
        "picture": toyota,
        "rooms": [
            <><CircledBullets argument="5"/> Artist Alley & Cosplay Booths</>,
            <><CircledBullets argument="restroom"/> Restrooms</>
        ],
        "content": <p>The Toyota Meeting Hall is to the immediate left of the main entrance (facing towards it) and to the left of stage (facing away from it). The following event spaces are located here:</p>
    },
    {
        "title": "Torino Plaza",
        "picture": torinoplaza,
        "rooms": [
            <><CircledBullets argument="3"/> Vendor Booths</>,
            <><CircledBullets argument="6"/> Guest Booths</>,
            <><CircledBullets argument="7"/> Torino Plaza Stage</>,
            <><CircledBullets argument="8"/> Official TouhouFest Artists</>
        ],
        "content": <p>The Torino Plaza is the main congregation area of the con and is surrounded by the Assembly Hall, Entry Foyer, Ken Miller Rec Center, and the Toyota Hall. With the massive stage towards the rear, it should be easy to spot. The following event spaces are located here:</p>
    },
    {
        "title": "James Armstrong Theater",
        "picture": jamesarmstrongtheater,
        "rooms": [
            <><CircledBullets argument="9"/> James Armstrong Theater (Sat.)</>
        ],
        "content": <p>The Torino Plaza is the main congregation area of the con and is surrounded by the Assembly Hall, Entry Foyer, Ken Miller Rec Center, and the Toyota Hall. With the massive stage towards the rear, it should be easy to spot. The following event spaces are located here:</p>
    },
    {
        "title": "Entry Foyer (Ken Miller Rec Center)",
        "picture": kenmiller,
        "rooms": [
            <><CircledBullets argument="10"/> Community Booths</>,
            <><CircledBullets argument="restroom"/> Restrooms</>

        ],
        "content": <p>The Entry Foyer is the exterior of the Ken Miller Rec Center, namely the room with the alternate exit leading out of the convention. The following event spaces are located here:</p>
    },
    {
        "title": "Assembly Hall",
        "picture": assemblyhall,
        "rooms": [
            <><CircledBullets argument="11"/> Cosplay Exhibition, Fan Games</>
        ],
        "content": <p>The Assembly Hall is the left-most building of the convention center and is left from the main stage. The following event spaces are located here:</p>
    },
    {
        "title": "Pine Wind Garden",
        "picture": pinewindgarden,
        "rooms": [
            <><CircledBullets argument="12"/> Cosplay Meetups</>,
        ],
        "content": <p>The Pine Wind Garden is the rearmost space in the convention. With all the lush plants and decoration it should not be too hard to miss. The following event spaces are located here:</p>
    },
    {
        "title": "Children's Art Wing",
        "picture": nakanotheatre,
        "rooms": [
            <><CircledBullets argument="13"/> Panels 1</>,
            <><CircledBullets argument="restroom"/> Restrooms</>

        ],
        "content": <p>The Children's Art Wing is located just to the left of the Pine Wind Garden. The below event spaces are located here:</p>
    },
    {
        "title": "Drawing & Painting Studio",
        "picture": drawpaint,
        "rooms": [
            <><CircledBullets argument="14"/> Panels 2</>
        ],
        "content": <p>The Drawing and Painting Studio is the nothernmost area of the conventino, just behind the Pine Wind Garden and the Children's Art Wing. Events held here:</p>
    },
    {
        "title": "Front Circular Drive",
        "picture": con_banner,
        "rooms": [
            <><CircledBullets argument="15"/> Food Trucks</>,
            <><CircledBullets argument="16"/> Prop Check</>
        ],
        "content": <p>This is where the main entrance of the convention center is. It will have a sign that says "Torrance Cultural Arts Center". The following event spaces are located here:</p>
    }
]

export const mainLocationsPage= {
  "codename": "mainlocations",
  "header": (<><FontAwesomeIcon icon={faBuilding} fixedWidth></FontAwesomeIcon> Key Locations</>),
  "fluidImage": (<></>),
  "body": (
    <>
        <Row xs="1" md="2">
            {roomlist.map((room) => {return (
                <Col>
                    <MakeGenericCard title={room["title"]} picture={room["picture"]} rooms={room["rooms"]}>{room["content"]}</MakeGenericCard>     
                </Col>
            )})}
        </Row>
  </>
  ),
}