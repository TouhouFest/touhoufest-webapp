/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Dropdown, Form } from 'react-bootstrap';
import { CircledBullets, artistalleymap, vendorsmap, torinoplazamap, gamingmap, WarningAlert, MakeLocationBadge } from '../Utils';
import touhoufest_map from "./../images/touhoufest_map.png";

import { GlobalTransformWrapper } from '../GlobalTransformWrapper';
import { useState } from 'react';

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
    "header": (<><FontAwesomeIcon icon={faMapLocationDot} fixedWidth></FontAwesomeIcon> Convention Maps</>),
    "fluidImage": (<></>),
    "body": (<><MapModals></MapModals></>)
}