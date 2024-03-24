/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYen, faExclamationCircle, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { Alert, Figure, ListGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
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
import kuriarty from "./../images/artistalley/kuriarty.jpg";
import fred from "./../images/artistalley/fred.png";
import grillboss from "./../images/artistalley/grillboss.jpg";
import birnam from "./../images/artistalley/birnam.jpg";
import agi from "./../images/artistalley/agi.png";
import meiki from "./../images/artistalley/meiki.jpg";
import pumplin from "./../images/artistalley/pumpking.jpg";
import siliconcat from "./../images/artistalley/siliconcat.png";
import gruvysgudies from "./../images/artistalley/gruvysgudies.jpg";
import xiaobbinc from "./../images/artistalley/xiaobb.avif";
import placeholder from "./../images/placeholder.png";
import essukaa from "./../images/artistalley/essukaa.webp";
import anazel from "./../images/artistalley/anazel.jpg";
import cookie from "./../images/artistalley/cookie.png";
import freezeex from "./../images/artistalley/freezeex.png";
import { Image } from 'react-bootstrap';

let artistlist = [
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
        "name": "Asazei + lunartsky",
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
        "description": "CONFLICT: Booth B3 on map, Booth A8 on excel sheet"
    },
    {
        "name": "Nonomoe Inc",
        "image": placeholder,
        "location": "Booth A5",
        "website": "",
        "description": ""
    },
    {
        "name": "Kuri Arty",
        "image": kuriarty,
        "location": "Booth A4",
        "website": "https://twitter.com/kuriarty?lang=en",
        "description": ""
    },
    {
        "name": "Grillboss Co.",
        "image": grillboss,
        "location": "Booth D4",
        "website": "",
        "description": ""
    },
    {
        "name": "Birnam Hall",
        "image": birnam,
        "location": "Booth D3",
        "website": "https://www.instagram.com/birnamhall/",
        "description": ""
    },
    {
        "name": "Velpiphants",
        "image": agi,
        "location": "Booth A1",
        "website": "https://twitter.com/purpleuniphants",
        "description": ""
    },
    {
        "name": "Meiki/sirmasterknight",
        "image": meiki,
        "location": "Booth C5",
        "website": "https://www.instagram.com/sirmasterknight/",
        "description": "MAY be the same as sirmasterknight?"
    },
    {
        "name": "Pumplin Group",
        "image": pumplin,
        "location": "Booth C3",
        "website": "https://twitter.com/Sunnysiddedup",
        "description": ""
    },
    {
        "name": "GruvysGudies",
        "image": gruvysgudies,
        "location": "Booth B2",
        "website": "https://www.etsy.com/shop/GruvysGudies",
        "description": ""
    },
    {
        "name": "Xiaobb inc",
        "image": xiaobbinc,
        "location": "Booth C6",
        "website": "https://www.etsy.com/shop/Xiaobbinc",
        "description": ""
    },
    {
        "name": "Ah, Wakaranai",
        "image": placeholder,
        "location": "Booth A2",
        "website": "",
        "description": ""
    },
    {
        "name": "Gudnite edg3lord",
        "image": placeholder,
        "location": "Booth A7",
        "website": "",
        "description": ""
    },
    {
        "name": "Le MIni Gensokyo",
        "image": placeholder,
        "location": "Booth E2",
        "website": "https://www.teepublic.com/user/archanciel",
        "description": ""
    },
    {
        "name": "Essukaa",
        "image": essukaa,
        "location": "Booth B4",
        "website": "https://essukaa.shop/",
        "description": ""
    },
    {
        "name": "Anazel",
        "image": anazel,
        "location": "Booth E1",
        "website": "https://www.instagram.com/anazel_art/?hl=en",
        "description": ""
    },
    {
        "name": "Grapevines",
        "image": placeholder,
        "location": "Booth F5",
        "website": "",
        "description": ""
    },
    {
        "name": "Idunrllyknow",
        "image": placeholder,
        "location": "Booth D6",
        "website": "",
        "description": ""
    },
    {
        "name": "Brokencrown Art",
        "image": placeholder,
        "location": "Booth A8",
        "website": "",
        "description": ""
    },
    {
        "name": "BRW",
        "image": placeholder,
        "location": "Booth D5",
        "website": "",
        "description": ""
    },
    {
        "name": "Feeya Art",
        "image": placeholder,
        "location": "Booth F3",
        "website": "",
        "description": ""
    },
    {
        "name": "cynicalfries / blaidmiracle",
        "image": placeholder,
        "location": "Booth C2",
        "website": "",
        "description": ""
    },
    {
        "name": "notnoe",
        "image": nono,
        "location": "Booth C4",
        "website": "https://twitter.com/notnoe_",
        "description": "inscribed as nono on the website"
    },

];
artistlist.sort((a,b) => a["location"].localeCompare(b["location"]));

let vendors = [
    {
        "name": "Siliconcat",
        "image": siliconcat,
        "location": "UNKNOWN",
        "website": "https://www.etsy.com/shop/Siliconcat",
        "description": ""
    },
    {
        "name": "Art With Fred",
        "image": fred,
        "location": "UNKNOWN",
        "website": "",
        "description": ""
    },
    {
        "name": "GuruGuruMaru",
        "image": gurugurumaru,
        "location": "UNKNOWN",
        "website": "https://twitter.com/GuruGuruMaru_",
        "description": ""
    },
    {
        "name": "Artist Collaboration Experience (ACE)",
        "image": ace,
        "location": "UNKNOWN",
        "website": "https://www.artcollabexp.com/",
        "description": "VENDOR"
    },

];

let official_artists = [
    {
        "name": "Cloudie/Cookietanukiart",
        "image": cookie,
        "location": "Booth D1",
        "website": "https://linktr.ee/cookietanuki",
        "description": ""
    },
    {
        "name": "FREEZE-EX",
        "image": freezeex,
        "location": "Booth D2",
        "website": "https://icecute.squarespace.com/",
        "description": ""
    }
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

        <h4>Artist Alley</h4>

        <h5>Official Artists</h5>

        <Row xs={2} className="g-3 justify-content-center">
            {official_artists.map((artist, i) => <>
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

        <h5 className="mt-2">All Other Artists</h5>

        <Row xs={2} className="g-3 justify-content-center">
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
        <Row xs={2} className="g-3">
            {vendors.map((artist, i) => <>
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

    </>),
}