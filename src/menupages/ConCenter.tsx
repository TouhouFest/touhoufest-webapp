/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import { useState } from 'react';
import { CircledBullets, artistalleymap, vendorsmap, torinoplazamap, gamingmap } from '../Utils';
import touhoufest_map from "./../images/touhoufest_map.png";
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

export function GlobalTransformWrapper({src, caption}: {src:any, caption:string}) : JSX.Element {
    return (<>
        <Figure>
            <TransformWrapper>
                <TransformComponent>
                    <Figure.Image src={src} fluid rounded/>
                </TransformComponent>
            </TransformWrapper>
            <Figure.Caption>{caption}</Figure.Caption>
        </Figure>

    </>);
}

function MapModals(){

    return (<>
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
                    <li><CircledBullets argument="2"/> Artist Alley</li>
                </ul>

                <b>Entry Plaza</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="3"/> Vendors Booth</li>
                    <li><CircledBullets argument="5"/> Cosplay Booths & Cosplay Repair</li>
                    <li><CircledBullets argument="6"/> Info Booth | Lost and Found</li>
                </ul>

                <b>Garden Room B</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="4"/> Panels</li>
                </ul>

                <b>Pine Wind Garden</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="15"/> Cosplay Meetups</li>
                </ul>

                <b>Toyota Meeting Hall</b>
                <ul className="list-unstyled">
                    <li><span className="text-primary"><CircledBullets argument="9"/></span> Gaming Hall 1: Official Touhou Games</li>
                </ul>
            </Col>
            <Col xs={12} md={6} lg={3}>
                <b>Ken Miller Rec Center</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="10"/> Gaming Hall 2: Fan Games</li>
                    <li><CircledBullets argument="11"/> Music Booths</li>
                </ul>
                
                <b>Entry Foyer</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="12"/> Community Booths</li>
                </ul>

                <b>Assembly Hall</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="13"/> Assembly Hall</li>
                </ul>

                <b>Torino Plaza</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="7"/> Guest Booths</li>
                    <li><CircledBullets argument="8"/> Main Stage</li>
                </ul>

                <b>Front Circular Drive</b>
                <ul className="list-unstyled">
                    <li><CircledBullets argument="14"/> Food Trucks</li>
                </ul>

                <p className="small"><FontAwesomeIcon icon={faCircleInfo} fixedWidth></FontAwesomeIcon> James Armstrong Theatre (TCAC) and Dance Studios (TCAC) aren't being used by TouhouFest events.</p>

            </Col>
        </Row>

        <Row>
            <Col xs={12} lg={6}>
                <h4>Artist Alley Map</h4>
                <p>The entire below map is enclosed in the George Nakano Theatre. (<CircledBullets argument="2"/>)</p>
                <GlobalTransformWrapper src={artistalleymap} caption="Map of Artist Alley"/>
            </Col>
            <Col xs={12} lg={6}>
                <h4>Vendors Map</h4>
                <h5>Entry Plaza Map</h5>
                <p>The entire below map is enclosed in the Entry Plaza. (<CircledBullets argument="3"/>) Nearby locations are also labeled.</p>
                <GlobalTransformWrapper src={vendorsmap} caption="Map of Vendors"/>
            </Col>
        </Row>

 
        <p>Summary of listed booths in Entry Plaza:</p>
        <Row xs={1} md={3}>
            <Col>
                <p className="mb-1"><CircledBullets argument="6"/> Info Booth | Lost and Found</p>
                <ul>
                    <li><b>V1</b>: TouhouFest Info Booth</li>
                    <li><b>V2</b>: Info Booth/Weapons Check</li>
                </ul>
            </Col>
            <Col>
                <p className="mb-1"><CircledBullets argument="5"/> Cosplay Booths & Cosplay Repair</p>
                <ul>
                    <li><b>V3</b>: Cosplay Repair</li>
                    <li><b>V4</b>: Cosplay Ambassadors</li>
                    <li><b>V5</b>: Punderfull's Booth</li>
                </ul>
            </Col>
            <Col>
                <p className="mb-1"><CircledBullets argument="3"/> Vendors</p>
                <ul>
                    <li><b>V6 ~ V15</b>: Vendors</li>
                </ul>
            </Col>
        </Row>

        <h5>Torino Plaza Map</h5>
        <p>The below map is enclosed within the Torino Plaza (<CircledBullets argument="7"/> and <CircledBullets argument="8"/>) and also shows locations of nearby areas at the convention.</p>
        <Row>
            <Col xs={12} lg={8}>
                <GlobalTransformWrapper src={torinoplazamap} caption="Map of Vendors at Torino Plaza"/>
            </Col>
            <Col xs={12} lg={4}>
                <p>Summary of listed booths in Torino Plaza:</p>
                <ul>
                    <li><b>FT1 ~ FT8</b>: <CircledBullets argument="12"/> Community Booths</li>
                    <li><b>FG1 ~ FG7</b>: <CircledBullets argument="10"/> Fan Games</li>
                    <li><b>MC1 ~ MC4</b>: <CircledBullets argument="11"/> Music Booths</li>
                    <li><b>FB1 ~ FB3</b>: <CircledBullets argument="7"/> Guest Booths</li>
                    <li><b>FB4 ~ FB8</b>: Shrine Tables</li>
                </ul>
            </Col>
        </Row>

        <h4>Gaming Hall Map</h4>
        <p>The entire below map is enclosed in the Toyota Hall.</p>
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