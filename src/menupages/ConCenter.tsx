/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Dropdown, Form } from 'react-bootstrap';
import { CircledBullets, artistalleymap, vendorsmap, torinoplazamap, gamingmap, WarningAlert, MakeLocationBadge, MakeGoheiHeader, nakanotheatre, entryplaza, toyota, torinoplaza, jamesarmstrongtheater, kenmiller, assemblyhall, pinewindgarden, MakeGenericCard } from '../Utils';
import touhoufest_map from "./../images/touhoufest_map.png";

import { GlobalTransformWrapper } from '../GlobalTransformWrapper';
import { useState } from 'react';

import panelroom from "./../images/panelroom.jpg";
import con_banner from "./../con_banner.jpg";
import childrensartwing from "./../images/childrensartwing.jpg";
import drawpaint from "./../images/drawpaint.jpg";



let map_select = [
    {
        "src": touhoufest_map,
        "caption": "Map of the main areas of TouhouFest",
        "content": (
            <Row>
            <Col xs={12} md={6}>
                <p>See below for convention spaces/buildings and map locations:</p>

                <b>George Nakano Theatre</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="1"/> Registration</li>
                    <li><CircledBullets argument="2"/> Gaming Hall</li>
                    <li><CircledBullets argument="restroom"/> Restrooms</li>
                </ul>

                <b>Entry Plaza & Torino Plaza</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="3"/> Vendor Booths</li>
                </ul>

                <b>Entry Plaza</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="4"/> Guest Booths</li>
                </ul>

                <b>Toyota Meeting Hall</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="5"/> Artist Alley</li>
                    <li><CircledBullets argument="restroom"/> Restrooms</li>
                </ul>

                <b>Torino Plaza</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="6"/> Food Court/Maid Cafe</li>
                    <li><CircledBullets argument="7"/> Torino Plaza Stage</li>
                    <li><CircledBullets argument="8"/> Official TouhouFest Artists</li>
                </ul>

                <b>James Armstrong Theater</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="9"/> James Armstrong Theater (Sat.)</li>
                </ul>

            </Col>
            <Col xs={12} md={6}>

                <b>Entry Foyer (Ken Miller Rec Center)</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="10"/> Community Booths</li>
                    <li><CircledBullets argument="restroom"/> Restrooms</li>
                </ul>

                <b>Assembly Hall</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="11"/> Cosplay Exhibition, Fan Games</li>
                </ul>

                <b>Pine Wind Garden</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="12"/> Cosplay Meetups</li>
                </ul>

                <b>Children's Art Wing</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="13"/> Panels 1</li>
                    <li><CircledBullets argument="restroom"/> Restrooms</li>
                </ul>

                <b>Drawing & Painting Studio</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="14"/> Panels 2</li>
                </ul>

                <b>Front Circular Drive</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="15"/> Food Trucks</li>
                    <li><CircledBullets argument="16"/> Prop Check</li>
                </ul>

                <p className="small"><FontAwesomeIcon icon={faCircleInfo} fixedWidth></FontAwesomeIcon> Any buildings/areas not explicitly listed above are <b>not</b> being used by TouhouFest, and should be considered off-limits.</p>

            </Col>

            </Row>
        ),
        "title": "Event",
        "location_name": "Torrance Cultural Arts Center"
    },
    {
        "src": artistalleymap,
        "caption": "Map of Artist Alley",
        "content": <p>The entire below map is enclosed in the Toyota Meeting Hall. (<CircledBullets argument="5"/> Artist Alley)</p>,
        "title": "Artist Alley",
        "location_name": "Toyota Meeting Hall"
    },
    {
        "src": vendorsmap,
        "caption": "Map of Vendors",
        "content": (<>
            <p>The entire below map is enclosed in the Entry Plaza. Nearby locations are also labeled. Summary of listed booths in Entry Plaza:</p>
            <ul className="list-unstyled">
                <li><CircledBullets argument="3"/> Vendor Booths: Booths V1 ~ V6, V9 ~ V12, V15</li>
                <li><CircledBullets argument="4"/> Guest Booths: Booths V7, V8, V13, V14</li>
            </ul>
        </>),
        "title": "Entry Plaza (Vendors)",
        "location_name": "Entry Plaza"
    },
    {
        "src": torinoplazamap,
        "caption": "Map of Vendors at Torino Plaza",
        "content": (<>
        <p>The below map is enclosed within the Torino Plaza and also shows locations of nearby areas at the convention. Summary of areas included below:</p>
        <Row xs={1} md={2}>
            <Col>
                <b>Entry Plaza</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="3"/> Vendor Booths: Booths FB1 ~ FB10</li>
                    <li><CircledBullets argument="6"/> Guest Booths</li>
                    <li><CircledBullets argument="7"/> Torino Plaza Stage</li>
                    <li><CircledBullets argument="8"/> Official TouhouFest Artists</li>
                </ul>

                <b>Ken Miller Rec Center</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="9"/> Arcade Cabinets</li>
                </ul>
            </Col>
            <Col>
                <b>Entry Foyer (Ken Miller Rec Center)</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="10"/> Community Booths: Booths FT1 ~ FT8</li>
                    <li><CircledBullets argument="restroom"/> Restrooms</li>
                </ul>

                <b>Assembly Hall</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="11"/> Cosplay Exhibition, Fan Games</li>
                </ul>
            </Col>
        </Row>

        </>),
        "title": "Torino Plaza (Vendors & Misc)",
        "location_name": "Torino Plaza"
    },
    {
        "src": gamingmap,
        "caption": "Map of Gaming at Toyota Hall",
        "content": <p>The entire below map is enclosed in the George Nakano Theatre. (<CircledBullets argument="2"/> Gaming Hall)</p>,
        "title": "Gaming Hall",
        "location_name": "Toyota Hall"
    }
];

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
];

function MapModals(){

    const [selectedMap, setSelectedMap] = useState(0);

    return (<>
        <p>Pinch to focus in/zoom on all maps as needed.</p>

        <p>View Map:</p>

        <Form.Select aria-label="map-select">
            {map_select.map((map, idx) => <option onClick={(e) => setSelectedMap(e.target.value)} value={idx}>{map["title"]}</option>)}
        </Form.Select>

        <h4 className="mt-3">{map_select[selectedMap]["title"]}</h4>
        <Row className="justify-content-center">
            <Col xs={12} md={10} className="text-center">
                <GlobalTransformWrapper src={map_select[selectedMap]["src"]} caption={map_select[selectedMap]["caption"]}/>
            </Col>
        </Row>

        <p className="text-center">{<MakeLocationBadge location={map_select[selectedMap]["location_name"]}/>}</p>

        <h4>Map Details</h4>

        {map_select[selectedMap]["content"]}
    </>);
}

export const conCenterPage = {
    "codename": "concenter",
    "header": (<><FontAwesomeIcon icon={faMapLocationDot} fixedWidth></FontAwesomeIcon> Event Maps</>),
    "fluidImage": (<></>),
    "body": (<>
        <MapModals />
        <MakeGoheiHeader content="Key Locations"/>
        <Row xs="1" md="2" className="mt-3">
            {roomlist.map((room) => {return (
                <Col>
                    <MakeGenericCard title={room["title"]} picture={room["picture"]} rooms={room["rooms"]}>{room["content"]}</MakeGenericCard>     
                </Col>
            )})}
        </Row>
    </>)
}