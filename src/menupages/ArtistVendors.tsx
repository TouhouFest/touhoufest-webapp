/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYen, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { Figure, ListGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { CircledBullets, nakanotheatre, shihori, odyssey, tam, artistalleymap, vendorsmap, torinoplazamap, placeholder } from '../Utils';

import artistalley from "./../images/artistalley.jpg";
import ace from "./../images/artistalley/ace.png";
import tama from "./../images/artistalley/tama.png";
import marlo from "./../images/artistalley/MARLOWEMEMO.jpg";
import rustyhermit from "./../images/artistalley/rustyhermit.jpg";
import asazei from "./../images/artistalley/asazei.jpg";
import kurehii from "./../images/artistalley/kurehii.jpg";
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
import essukaa from "./../images/artistalley/essukaa.webp";
import anazel from "./../images/artistalley/anazel.jpg";
import cookie from "./../images/artistalley/cookie.png";
import freezeex from "./../images/artistalley/freezeex.png";
import feeyaart from "./../images/artistalley/feeyaart.jpg";
import leminigensokyo from "./../images/artistalley/leminigensokyo.jpg";
import ruproject from "./../images/artistalley/2ruproject.png";
import grapevines from "./../images/artistalley/grapevines.png";
import brw from "./../images/artistalley/BRW.jpg";
import neosanctum from "./../images/artistalley/neosanctum.jpg";
import galaxianrecordings from "./../images/artistalley/galaxianrecordings.png";
import twinphoenix from "./../images/artistalley/TwinPhoenixInteractive.jpg";
import izakaya from "./../images/artistalley/izakaya.jpg";
import entryplaza from "./../images/entryplaza.jpg";
import cynicalfries from "./../images/artistalley/cynicalfries.png";
import lyricalive from "./../images/artistalley/lyricalive.png";
import maidacademy from "./../images/artistalley/maidacademy.webp";
import popumai from "./../images/artistalley/popumai.webp";
import loveboxf from "./../images/artistalley/loveboxf.jpg";
import crescentia from "./../images/artistalley/crescentia.jpg";
import youkaimountain from "./../images/artistalley/youkaimountain.jpg";
import lemoncreme from "./../images/artistalley/lemoncreme.webp";
import underworldizakaya from "./../images/artistalley/underworldizakaya.jpg";
import andrewfm from "./../images/artistalley/andrewfm.png";
import animelosangeles from "./../images/artistalley/animelosangeles.jpg";
import bowersmuseum from "./../images/artistalley/bowersmuseum.jpg";
import gensokyoradio from "./../images/artistalley/gensokyoradio.jpg";
import idolmatsuri from "./../images/artistalley/idolmatsuri.png";
import rosecityanifest from "./../images/artistalley/rosecityanifest.jpg";
import roninexpo from "./../images/artistalley/roninexpo.png";
import kotori from "./../images/artistalley/kotori.jpg";

let artistlist = [
    {
        "name": "Tama Tama Shop",
        "image": tama,
        "location": "Booth A3",
        "website": "",
        "description": ""
    },
    {
        "name": <>MARLO&shy;WE&shy;MEMO</>,
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
        "name": <>Colorful&shy;kitten Art</>,
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
        "name": <>Meiki/sir&shy;master&shy;knight</>,
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
        "name": <>Gruvys&shy;Gudies</>,
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
        "name": "2RU Project",
        "image": ruproject,
        "location": "Booth A7",
        "website": "",
        "description": ""
    },
    {
        "name": "Le MIni Gensokyo",
        "image": leminigensokyo,
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
        "image": grapevines,
        "location": "Booth F5",
        "website": "",
        "description": ""
    },
    {
        "name":  <>Idunrllyknow / Guru&shy;Guru&shy;Maru</>,
        "image": gurugurumaru,
        "location": "Booth D6",
        "website": "https://twitter.com/GuruGuruMaru_",
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
        "image": brw,
        "location": "Booth D5",
        "website": "",
        "description": ""
    },
    {
        "name": "Feeya Art",
        "image": feeyaart,
        "location": "Booth F3",
        "website": "https://feeyaart.carrd.co/",
        "description": ""
    },
    {
        "name": "cynicalfries / blaidmiracle",
        "image": cynicalfries,
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
        "role": "Artist",
        "website": "https://siliconcat.tumblr.com/tagged/my%20art",
        "description": "",
        "location": "Booth V15"
    },
    {
        "name": "Art With Fred",
        "image": fred,
        "role": "Artist",
        "website": "https://www.tiktok.com/@artwfred",
        "description": "",
        "location": "Booth V12"
    },
    {
        "name": "Artist Collaboration Experience (ACE)",
        "image": ace,
        "role": "Artist",
        "website": "https://www.artcollabexp.com/",
        "description": "VENDOR",
        "location": "Booth V10"
    },
    {
        "name": "Lyrica Live",
        "image": lyricalive,
        "role": "Music",
        "website": "https://lyricalive.carrd.co/",
        "description": "VENDOR",
        "location": "Booth V09"
    },
    {
        "name": "Dichroic Purpillion",
        "image": izakaya,
        "role": "Game Dev",
        "website": "https://store.steampowered.com/search/?developer=%E4%BA%8C%E8%89%B2%E5%B9%BD%E7%B4%AB%E8%9D%B6",
        "description": "VENDOR",
        "location": "Booth V08"
    },
    {
        "name": "Pop Umai",
        "image": popumai,
        "role": "Vendor",
        "website": "https://www.popumai.com/",
        "description": "",
        "location": "Booth V14"
    },
    {
        "name": "loveboxf",
        "image": loveboxf,
        "role": "Artist",
        "website":"https://www.pixiv.net/en/users/28004345",
        "description":"",
        "location":"Booth V13"
    },
    {
        "name": "Maid Academy Cafe",
        "image": maidacademy,
        "role": "Vendor",
        "website": "https://linktr.ee/maidacademy",
        "description": "",
        "location": "Booth V07"
    },
    {
        "name": "Kotori's Shop / Showcas3",
        "image": kotori,
        "role": "Merch",
        "website": "https://www.instagram.com/kotoris_shop_by_y/",
        "description": "",
        "location": "Booth V11"
    }
];
vendors.sort((a,b) => a["location"].localeCompare(b["location"]));

let fanmusicgames = [
    {
        "name": "Neo Sanctum",
        "image": neosanctum,
        "role": "Fan Music",
        "website": "https://neo-sanctum.com/home",
        "description": "VENDOR",
        "location": "Booth MC2"
    },
    {
        "name": "Galaxian Recordings",
        "image": galaxianrecordings,
        "role": "Fan Music",
        "website": "https://galaxianrecordings.bandcamp.com/",
        "description": "VENDOR",
        "location": "Booth MC3"
    },
    {
        "name": "Twin Phoenix Interactive",
        "image": twinphoenix,
        "role": "Fangames",
        "website": "https://twinphoenixinteractive.com/",
        "description": "VENDOR",
        "location": "Booth FG1"
    },
    {
        "name": "Fire Land",
        "image": placeholder,
        "role": "Fangames",
        "website": "",
        "description": "",
        "location": "Booth FG2"
    },
    {
        "name": "crescentia",
        "image": crescentia,
        "role": "Fan Music",
        "website": "https://soundcloud.com/crescentia",
        "description": "",
        "location": "Booth MC1"
    },
    {
        "name": "NekoMofu Jinja",
        "image": placeholder,
        "website": "",
        "description": "",
        "location": "Booth MC4",
        "role": "Fan Music"
    },
    {
        "name": "AndrewFM",
        "image": andrewfm,
        "website": "https://eggzero.tumblr.com/",
        "location": "Booth FG3",
        "role": "Fangames"   
    },
    {
        "name": "Touhou Game Dev",
        "image": placeholder,
        "website": "",
        "location": "Booth FG4 ~ FG7",
        "role": "Fangames"
    }
];
fanmusicgames.sort((a,b) => a["location"].localeCompare(b["location"]));

let plazatables = [
    {
        "name": "Shihori",
        "image": shihori,
        "role": "Guest",
        "website": "https://linktr.ee/shihorimusic",
        "location": "Booth FB1"
    },
    {
        "name": "Odyssey",
        "image": odyssey,
        "role": "Guest",
        "website": "https://linktr.ee/odysseyeurobeat",
        "location": "Booth FB2"
    },
    {
        "name": "TAMUSIC",
        "image": tam,
        "role": "Guest",
        "website": "https://twitter.com/tamusic",
        "location": "Booth FB3"
    },
    {
        "name": "Goen Kizuna / Youkai Mountain",
        "role": "Festival Booth",
        "image": youkaimountain,
        "website": "https://twitter.com/YoukaiMountain",
        "location": "Booth FB6"
    },
    {
        "name": "Lemon-Crème Studios",
        "role": "Festival Booth",
        "image": lemoncreme,
        "website": "https://www.etsy.com/shop/LemonCremeStudios",
        "location": "Booth FB7"
    },
    {
        "name": "Touhou Hobby Society",
        "role": "Festival Booth",
        "image": placeholder,
        "website": "",
        "location": "Booth FB8"
    },
    {
        "name": "Maid Academy Cafe",
        "image": maidacademy,
        "role": "Vendor",
        "website": "https://linktr.ee/maidacademy",
        "description": "",
        "location": "Booth FB5"
    },
    {
        "name": "Underworld Izakaya",
        "image": underworldizakaya,
        "role": "Festival Booth",
        "website": "https://twitter.com/MystiaTorrance",
        "description": "",
        "location": "Booth FB4"
    }
];
plazatables.sort((a,b) => a["location"].localeCompare(b["location"]));

let communitytables = [
    {
        "name": "Anime Los Angeles",
        "image": animelosangeles,
        "website": "https://animelosangeles.org/",
        "location": "Booth FT1"
    },
    {
        "name": "Bowers Museum",
        "image": bowersmuseum,
        "website": "https://www.bowers.org/",
        "location": "Booth FT2",
    },
    {
        "name": "Gensokyo Radio",
        "image": gensokyoradio,
        "website": "https://gensokyoradio.net/",
        "location": "Booth FT3"
    },
    {
        "name": "LA Idol Matsuri",
        "image": idolmatsuri,
        "website": "https://www.eventbrite.com/e/la-idol-matsuri-2024-tickets-785669607947",
        "location": "Booth FT4"
    },
    {
        "name": "Touhou: ONTJ",
        "image": placeholder,
        "website": "",
        "location": "Booth FT5"
    },
    {
        "name": "Rose City AniFest",
        "image": rosecityanifest,
        "website": "https://www.instagram.com/rosecityanifest/?hl=en",
        "location": "Booth FT6"
    },
    {
        "name": "Ronin-Expo",
        "image": roninexpo,
        "website": "https://www.ronin-expo.org/",
        "location": "Booth FT7"
    },

];
communitytables.sort((a,b) => a["location"].localeCompare(b["location"]));

let official_artists = [
    {
        "name": <>Cloudie/Cookie&shy;tanuki&shy;art</>,
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

function ArtistAlleyMapModal(){
    const [showMap, setShowMap] = useState(false);

    return (<>
        <Figure onClick={() => setShowMap(true)}>
            <Figure.Image src={artistalleymap} rounded fluid/>
            <Figure.Caption>Map of Artist Alley</Figure.Caption>
        </Figure>

        <Modal show={showMap} size="lg" onHide={() => setShowMap(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Artist Alley Booth Map</Modal.Title>
            </Modal.Header>
            <Modal.Body className="align-items-center px-0">
                <Image src={artistalleymap} fluid/>
            </Modal.Body>
        </Modal>

    </>);
}

function VendorsMapModal() {
    const [showVendors, setShowVendors] = useState(false);
    return (<>
        <Figure>
            <Figure.Image src={vendorsmap} fluid rounded onClick={() => setShowVendors(true)}/>
            <Figure.Caption>Map of Vendors</Figure.Caption>
        </Figure>

        <Modal show={showVendors} size="lg" onHide={() => setShowVendors(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Map of Vendors</Modal.Title>
            </Modal.Header>
            <Modal.Body className="align-items-center px-0">
                <Image src={vendorsmap} fluid className="mx-auto d-block"/>
            </Modal.Body>
        </Modal>

    </>);
}

function ShrineMapModal() {
    const [showTorinoMap, setShowTorinoMap] = useState(false);
    return (<>
        <Figure>
            <Figure.Image src={torinoplazamap} fluid rounded onClick={() => setShowTorinoMap(true)}/>
            <Figure.Caption>Map of Vendors at Torino Plaza</Figure.Caption>
        </Figure>

        <Modal show={showTorinoMap} size="lg" onHide={() => setShowTorinoMap(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Map of Vendors at Torino Plaza</Modal.Title>
            </Modal.Header>
            <Modal.Body className="align-items-center px-0">
                <Image src={torinoplazamap} fluid className="mx-auto d-block"/>
            </Modal.Body>
        </Modal>
    </>);
}

export const artistVendorsPage = {
    "header": (<><FontAwesomeIcon icon={faYen} fixedWidth></FontAwesomeIcon> Artist Alley & Vendors</>),
    "fluidImage": (<Image src={artistalley} fluid />),
    "body": (<>
        <h4>Location</h4>
        <p>Artist Alley will be held at the <b>George Nakano Theatre</b>, (<CircledBullets argument="2"/>) behind registration and to the right of the Entry Plaza. Vendor Booths will be at the <b>Entry Plaza</b> (<CircledBullets argument="3"/>) in front of the Pine Wind Garden.</p>
        <Figure>
            <Figure.Image src={nakanotheatre} fluid rounded />
            <Figure.Caption>George Nakano Theatre</Figure.Caption>
        </Figure>
        <Figure>
            <Figure.Image src={entryplaza} fluid rounded></Figure.Image>
            <Figure.Caption>Entry Plaza</Figure.Caption>
        </Figure>


        <h4>Artist Alley</h4>

        <h5>Artist Alley Booth Map</h5>
        <p>Tap to focus in/zoom on the map as needed. Artist locations are denoted by the alphanumeric code next to them. (e.g. CLOUDIE corresponds to D1)</p>
        <ArtistAlleyMapModal />

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
        <h5>Vendors Booth Map</h5>
        <p>Tap to focus in/zoom on the map as needed. Artist locations are denoted by the alphanumeric code next to them.</p>
        <VendorsMapModal />

        <h5>Non-Vendors Booths</h5>
        <p>These booths aren't actually vendors booths but due to their close proximity to the rest of the vendors are also listed here:</p>
        <ul>
            <li><b>Booth V1</b>: TouhouFest Info Booth</li>
            <li><b>Booth V2</b>: Info Booth/Weapons Check</li>
            <li><b>Booth V3</b>: Cosplay Repair</li>
            <li><b>Booth V4</b>: Cosplay Ambassadors</li>
            <li><b>Booth V5</b>: Punderfull's Booth</li>
        </ul>
        <h5>List of Vendors</h5>
        <p>The majority of the entries listed below are in vendors (denoted "Booth VXX").</p>
        <Row xs={2} className="g-3 justify-content-center">
            {vendors.map((artist, i) => <>
             <Col>
                <Card>
                    <Card.Header className="small text-center">{artist["role"]}</Card.Header>
                    <Card.Img src={artist["image"]} className="rounded-0"></Card.Img>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center">{artist["name"]}</ListGroup.Item>
                        {/* TODO: add vendor locations + map once they become available */}
                        <ListGroup.Item className="text-center small">{artist["location"]}</ListGroup.Item>
                    </ListGroup>
                    {artist["website"] !== "" ? <Card.Footer className="text-center small"><a href={artist["website"]} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> Link</a></Card.Footer> : <></>}
                </Card>
            </Col>
            </>)}
       </Row>

       <h4 className="mt-2">Music, Fangame, & Shrine Tables</h4>
       <h5>Booth Map</h5>
        <p>Tap to focus in/zoom on the map as needed. Participant locations are denoted by the alphanumeric code next to them. Participants in this sections are spread out over several different locations and will be indicated accordingly.</p>
        <ShrineMapModal />
       <h5>List of Participants</h5>
        <h6>Entry Foyer (Community Tables)</h6>
        <Row xs={2} className="g-3 justify-content-center">
            {communitytables.map((artist, i) => <>
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
       <h6 className="mt-2">Ken Miller Rec Center (Fangame & Music Tables)</h6>
        <Row xs={2} className="g-3 justify-content-center">
            {fanmusicgames.map((artist, i) => <>
             <Col>
                <Card>
                    <Card.Header className="small text-center">{artist["role"]}</Card.Header>
                    <Card.Img src={artist["image"]} className="rounded-0"></Card.Img>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center">{artist["name"]}</ListGroup.Item>
                        {/* TODO: add vendor locations + map once they become available */}
                        <ListGroup.Item className="text-center small">{artist["location"]}</ListGroup.Item>
                    </ListGroup>
                    {artist["website"] !== "" ? <Card.Footer className="text-center small"><a href={artist["website"]} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> Link</a></Card.Footer> : <></>}
                </Card>
            </Col>
            </>)}
       </Row>
       <h6 className="mt-3">Torino Plaza (Shrine Booths)</h6>
        <Row xs={2} className="g-3 justify-content-center">
            {plazatables.map((artist, i) => <>
             <Col>
                <Card>
                    <Card.Header className="small text-center">{artist["role"]}</Card.Header>
                    <Card.Img src={artist["image"]} className="rounded-0"></Card.Img>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center">{artist["name"]}</ListGroup.Item>
                        {/* TODO: add vendor locations + map once they become available */}
                        <ListGroup.Item className="text-center small">{artist["location"]}</ListGroup.Item>
                    </ListGroup>
                    {artist["website"] !== "" ? <Card.Footer className="text-center small"><a href={artist["website"]} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> Link</a></Card.Footer> : <></>}
                </Card>
            </Col>
            </>)}
       </Row>


    </>),
}