/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYen, faEarthAmericas, faPalette } from '@fortawesome/free-solid-svg-icons';
import { Figure, ListGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import { CircledBullets, artistalleymap, vendorsmap, torinoplazamap, placeholder, MakeGoheiHeader, MakeGenericCard} from '../Utils';

import artistalley from "./../images/artistalley.jpg";

import { neosanctum, maidacademy, suzukann, toyota, torinoplaza } from "./../Utils";

import { GlobalTransformWrapper } from '../GlobalTransformWrapper';
import { RenderHours } from './AboutCon';

import { newartistalleylist } from './artistimports';

export const artistVendorsPage = {
    "codename": "artistsvendors",
    "jumplinks": [
        {
        "title": "Artist Alley Listing",
        "fragment_id": "artistalleylisting",
        },
    ],
    "header": (<><FontAwesomeIcon icon={faPalette} fixedWidth></FontAwesomeIcon> Artist Alley</>),
    "fluidImage": (<Image src={artistalley} fluid />),
    "body": (<>
        <p>Artist Alley will be held at the <b>Toyota Meeting Hall</b>, (<CircledBullets argument="5"/> Artist Alley) next to the Torino Festival Plaza.</p>
        {/*
        <Row xs={1} md={2}>
            <Col>
                <Figure>
                    <Figure.Image src={toyota} fluid rounded />
                    <Figure.Caption>Toyota Meeting Hall</Figure.Caption>
                </Figure>
            </Col>
            <Col>
                <Figure>
                    <Figure.Image src={torinoplaza} fluid rounded></Figure.Image>
                    <Figure.Caption>Torino Festival Plaza</Figure.Caption>
                </Figure>
            </Col>
        </Row>

        */}

        <h4 className="mt-3">Artist Alley Booth Map</h4>
        <p>Pinch to focus in/zoom on the map as needed. Artist locations are denoted by the alphanumeric code next to them. (e.g. Gatekeep.us corresponds to A1)</p>
        <Row className="justify-content-center">
            <Col xs={12} lg={8}>
                <GlobalTransformWrapper src={artistalleymap} caption="Map of Artist Alley"/>
            </Col>
        </Row>

        <RenderHours title="Artist Alley/Vendors"/>

        <MakeGoheiHeader content="Artist Alley Listing" fragment_id='artistalleylisting'/>

        <Row xs={2} md={4} lg={5} className="g-3 justify-content-center">
            {newartistalleylist.map((artist, i) => {
                return <>
                    <Col>
                        
                        <MakeGenericCard smaller_subtitle={`Booth ${artist["location"]}`} title={artist["name"]} picture={artist["image"]} links={
                            artist["website"] !== undefined ? [
                                {
                                    "link": artist["website"],
                                    "title": "Artist Link"
                                }
                            ] : []
                        }/>

                    </Col>
            </>;
            })}
        </Row>


    </>),
}