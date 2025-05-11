/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import { CircledBullets, artistalleymap, vendorsmap, torinoplazamap, gamingmap, WarningAlert } from '../Utils';
import touhoufest_map from "./../images/touhoufest_map.png";

import { GlobalTransformWrapper } from '../GlobalTransformWrapper';

function MapModals(){

    return (<>
        <WarningAlert>
            <p>The below items are still <b>outdated</b>:</p>
            <ul>
                <li>Gaming Hall Map</li>
            </ul>
        </WarningAlert>
        <p>Pinch to focus in/zoom on all maps as needed.</p>

        <h4>Main TouhouFest Map</h4>
        <Row>
            <Col xs={12} lg={6}>
                <GlobalTransformWrapper src={touhoufest_map} caption="Map of the main areas of TouhouFest"/>
            </Col>
            <Col xs={12} md={6} lg={3}>
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
                    <li><CircledBullets argument="4"/> Info Booth</li>
                </ul>

                <b>Toyota Meeting Hall</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="5"/> Artist Alley & Cosplay Booths</li>
                    <li><CircledBullets argument="B"/> Gaming Ops</li>
                    <li><CircledBullets argument="restroom"/> Restrooms</li>
                </ul>

                <b>Torino Plaza</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="6"/> Guest Booths</li>
                    <li><CircledBullets argument="7"/> Main Stage</li>
                    <li><CircledBullets argument="8"/> Official TouhouFest Artists</li>
                </ul>

                <b>Ken Miller Rec Center</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="9"/> Arcade Cabinets</li>
                </ul>

            </Col>
            <Col xs={12} md={6} lg={3}>

                <b>Entry Foyer</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="10"/> Community Booths</li>
                    <li><CircledBullets argument="A"/> Maid Academy Ops & Kitchen</li>
                    <li><CircledBullets argument="restroom"/> Restrooms</li>
                </ul>

                <b>Assembly Hall</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="11"/> Theatre (Main Events)</li>
                </ul>

                <b>Pine Wind Garden</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="12"/> Cosplay Meetups</li>
                </ul>

                <b>Children's Art Wing</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="13"/> Panels</li>
                    <li><CircledBullets argument="restroom"/> Restrooms</li>
                </ul>

                <b>Drawing & Painting Studio</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="14"/> Tabletop Gaming & Mystery Parafait</li>
                </ul>

                <b>Front Circular Drive</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="15"/> Food Trucks</li>
                    <li><CircledBullets argument="16"/> Prop Check</li>
                </ul>

                <b>Garden Rooms</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="C"/> Staff Ops</li>
                </ul>

                <p className="small"><FontAwesomeIcon icon={faCircleInfo} fixedWidth></FontAwesomeIcon> Any buildings/areas not explicitly listed above are <b>not</b> being used by TouhouFest, and should be considered off-limits.</p>

            </Col>
        </Row>

        <Row>
            <Col xs={12} lg={6}>
                <h4>Artist Alley Map</h4>
                <p>The entire below map is enclosed in the Toyota Meeting Hall. (<CircledBullets argument="5"/> Artist Alley & Cosplay Booths)</p>
                <GlobalTransformWrapper src={artistalleymap} caption="Map of Artist Alley"/>
            </Col>
            <Col xs={12} lg={6}>
                <h4>Vendors Map in Entry Plaza</h4>
                <p>The entire below map is enclosed in the Entry Plaza. Nearby locations are also labeled. Summary of listed booths in Entry Plaza:</p>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="3"/> Vendor Booths: Booths V01 ~ V08 and Booths V09 ~ V17</li>
                    <li><CircledBullets argument="4"/> Info Booth: Booths V09 & V10</li>
                </ul>
                <GlobalTransformWrapper src={vendorsmap} caption="Map of Vendors"/>
            </Col>
        </Row>
        <h5>Torino Plaza Map</h5>
        <p>The below map is enclosed within the Torino Plaza and also shows locations of nearby areas at the convention. Summary of areas included below:</p>
        <Row xs={1} md={2}>
            <Col>
                <b>Entry Plaza</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="3"/> Vendor Booths: Booths FB1 ~ FB10</li>
                    <li><CircledBullets argument="6"/> Guest Booths</li>
                    <li><CircledBullets argument="7"/> Main Stage</li>
                    <li><CircledBullets argument="8"/> Official Touhou Artists</li>
                </ul>

                <b>Ken Miller Rec Center</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="9"/> Arcade Cabinets</li>
                </ul>
            </Col>
            <Col>
                <b>Entry Foyer</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="10"/> Community Booths: Booths FT1 ~ FT8</li>
                    <li><CircledBullets argument="A"/> Maid Academy Ops & Kitchen</li>
                    <li><CircledBullets argument="restroom"/> Restrooms</li>
                </ul>

                <b>Assembly Hall</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="11"/> Theatre (Main Events)</li>
                </ul>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col xs={12} lg={8}>
                <GlobalTransformWrapper src={torinoplazamap} caption="Map of Vendors at Torino Plaza"/>
            </Col>
        </Row>

        <h4>Gaming Hall Map</h4>
        <p>The entire below map is enclosed in the George Nakano Theatre. (<CircledBullets argument="2"/> Gaming Hall)</p>
        <Row className="justify-content-center">
            <Col xs={12} md={10} lg={6}>
                <GlobalTransformWrapper src={gamingmap} caption="Map of Gaming at Toyota Hall"/>
            </Col>
        </Row>
    </>);
}

export const conCenterPage = {
    "header": (<><FontAwesomeIcon icon={faMapLocationDot} fixedWidth></FontAwesomeIcon> Convention Maps</>),
    "fluidImage": (<></>),
    "body": (<><MapModals></MapModals></>)
}