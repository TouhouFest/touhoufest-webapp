/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYen, faExclamationCircle, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { Accordion, Alert, Figure, ListGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import placeholder from "./../images/placeholder.jpg"
import kenmiller from "./../images/kenmiller.webp";
import artistalley from "./../images/artistalley.jpg";
import ace from "./../images/artistalley/ace.png";
import tama from "./../images/artistalley/tama.png";
import marlo from "./../images/artistalley/MARLOWEMEMO.png";
import rustyhermit from "./../images/artistalley/rustyhermit.jpg";
import asazei from "./../images/artistalley/asazei.png";
import kurehii from "./../images/artistalley/kurehii.png";
import haiyun from "./../images/artistalley/haiyun.png";
import ckitten from "./../images/artistalley/ckitten.jpg";
import codyyuki from "./../images/artistalley/codyyuki.png";
import nono from "./../images/artistalley/nono.jpg";
import gurugurumaru from "./../images/artistalley/gurugurumaru.png";
import { Image } from 'react-bootstrap';

let artistlist = [
    {
        "name": "Artist Collaboration Experience (ACE)",
        "image": ace,
        "location": "Artist Location",
        "website": "https://www.artcollabexp.com/",
        "description": "VENDOR"
    },
    {
        "name": "Tama Tama Shop",
        "image": tama,
        "location": "Booth A3",
        "website": "",
        "description": ""
    },
    {
        "name": "MARLOWEMEMO",
        "image": marlo,
        "location": "Booth F1",
        "website": "https://marlowememo.carrd.co/",
        "description": ""
    },
    {
        "name": "Rusty Hermit",
        "image": rustyhermit,
        "location": "Booth C1",
        "website": "",
        "description": ""
    },
    {
        "name": "Asazei Illustration",
        "image": asazei,
        "location": "Booth F2",
        "website": "https://twitter.com/ASAZEi_art",
        "description": ""
    },
    {
        "name": "Kurehii",
        "image": kurehii,
        "location": "Booth F4",
        "website": "https://twitter.com/kureihii",
        "description": ""
    },
    {
        "name": "HaiYun",
        "image": haiyun,
        "location": "Booth D7",
        "website": "https://haiyun.moe/",
        "description": ""
    },
    {
        "name": "Colorfulkitten Art",
        "image": ckitten,
        "location": "Booth B1",
        "website": "https://twitter.com/ckitten_cosplay",
        "description": ""
    },
    {
        "name": "CodyYuki",
        "image": codyyuki,
        "location": "Booth B3",
        "website": "",
        "description": ""
    },
    {
        "name": "nono",
        "image": nono,
        "location": "Booth A5",
        "website": "",
        "description": ""
    },
    {
        "name": "GuruGuruMaru",
        "image": gurugurumaru,
        "location": "UNKNOWN",
        "website": "",
        "description": ""
    },
    {
        "name": "nono",
        "image": null,
        "location": "",
        "website": "",
        "description": ""
    },


];

export const artistVendorsPage = {
    "header": (<><FontAwesomeIcon icon={faYen} fixedWidth></FontAwesomeIcon> Artist Alley & Vendors</>),
    "fluidImage": (<Image src={artistalley} fluid />),
    "body": (<>
        <h4>Location</h4>
        <p>Artist Alley and Vendors will be held at the <b>Ken Miller Recreation Center</b>, the center of the main TouhouFest area.</p>
        <Figure>
            <Figure.Image src={kenmiller} fluid rounded />
            <Figure.Caption>Ken Miller Recreation Center</Figure.Caption>
        </Figure>

        <h4 className="mt-2">Artist Alley</h4>

        <Alert variant="warning"><FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon> This section is a placeholder until it can be populated with actual artists</Alert>
        <Row xs={2} className="g-3">
            {artistlist.map((artist, i) => <>
             <Col>
                <Card>
                    <Card.Img variant="top" src={artist["image"]}></Card.Img>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center">{artist["name"]}</ListGroup.Item>
                        <ListGroup.Item className="text-center small">{artist["location"]}</ListGroup.Item>
                    </ListGroup>
                    {artist["website"] !== "" ? <Card.Footer className="text-center small"><a href={artist["website"]} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> Artist Link</a></Card.Footer> : <></>}
                </Card>
            </Col>
            </>)}
      </Row>

        <h4 className="mt-2">Vendors</h4>
        <Alert variant="warning"><FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon> This section is a placeholder until it can be populated with actual vendors</Alert>
        <Row xs={2} className="g-3">
            <Col>
                <Card>
                    <Card.Img variant="top" src={placeholder}></Card.Img>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center">Vendor Name</ListGroup.Item>
                        <ListGroup.Item className="text-center">Vendor Location</ListGroup.Item>
                    </ListGroup>
                    <Card.Footer className="text-center"><a href="https://en.touhouwiki.net/wiki/Marisa_Kirisame" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> External Link</a></Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={placeholder}></Card.Img>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center">Vendor Name</ListGroup.Item>
                        <ListGroup.Item className="text-center">Vendor Location</ListGroup.Item>
                    </ListGroup>
                    <Card.Footer className="text-center"><a href="https://en.touhouwiki.net/wiki/Marisa_Kirisame" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> External Link</a></Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={placeholder}></Card.Img>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center">Vendor Name</ListGroup.Item>
                        <ListGroup.Item className="text-center">Vendor Location</ListGroup.Item>
                    </ListGroup>
                    <Card.Footer className="text-center"><a href="https://en.touhouwiki.net/wiki/Marisa_Kirisame" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> External Link</a></Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={placeholder}></Card.Img>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center">Vendor Name</ListGroup.Item>
                        <ListGroup.Item className="text-center">Vendor Location</ListGroup.Item>
                    </ListGroup>
                    <Card.Footer className="text-center"><a href="https://en.touhouwiki.net/wiki/Marisa_Kirisame" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> External Link</a></Card.Footer>
                </Card>
            </Col>
        </Row>

    </>),
}