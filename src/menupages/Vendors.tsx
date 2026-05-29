/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareParking, faStore } from '@fortawesome/free-solid-svg-icons';

import { faYen, faEarthAmericas, faPalette } from '@fortawesome/free-solid-svg-icons';
import { Figure, ListGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import { CircledBullets, artistalleymap, vendorsmap, torinoplazamap, placeholder, MakeGoheiHeader, MakeGenericCard} from '../Utils';

import artistalley from "./../images/artistalley.jpg";
import cookie from "./../images/artistalley/cookie.png";
import freezeex from "./../images/artistalley/freezeex.png";
import animelosangeles from "./../images/artistalley/animelosangeles.jpg";
import bowersmuseum from "./../images/artistalley/bowersmuseum.jpg";
import idolmatsuri from "./../images/artistalley/idolmatsuri.png";

import lyricalive from "./../images/artistalley/lyricalive.jpg";
import gurugurumaru from "./../images/artistalley/gurugurumaru.jpg";
import xiaobb from "./../images/artistalley/xiaobb.jpg";
import umaholics from "./../images/artistalley/umaholics.jpg";
import netcavy from "./../images/artistalley/netcavy.jpg";
import crescentia from "./../images/artistalley/crescentia.jpg";
import dreamingchimera from "./../images/artistalley/dreamingchimera.jpg";
import asazei from "./../images/artistalley/asazei.jpg";
import quowl from "./../images/artistalley/quowl.jpg";
import julianaegg from "./../images/artistalley/julianaegg.jpg";
import MARLOWEMEMO from "./../images/artistalley/MARLOWEMEMO.jpg";
import limpachu from "./../images/artistalley/limpachu.jpg";
import meiki from "./../images/artistalley/meiki.jpg";
import nekomofu from "./../images/artistalley/nekomofu.jpg";
import partyu from "./../images/artistalley/partyu.jpg";
import kurehii from "./../images/artistalley/kurehii.jpg";
import biscaybiscuits from "./../images/artistalley/biscaybiscuits.jpg";
import chennakitty from "./../images/artistalley/chennakitty.jpg";
import haiyun from "./../images/artistalley/haiyun.jpg";
import birnam from "./../images/artistalley/birnam.jpg";
import tama from "./../images/artistalley/tama.jpg";
import gruvysgudies from "./../images/artistalley/gruvysgudies.jpg";
import lazydaytee from "./../images/artistalley/lazydaytee.jpg";
import bapysociety from "./../images/artistalley/bapysociety.jpg";
import jellistuff from "./../images/artistalley/jellistuff.jpg";
import barksnarl from "./../images/artistalley/barksnarl.jpg";
import girutea from "./../images/artistalley/girutea.jpg";
import shrugclub from "./../images/artistalley/shrugclub.jpg";
import feeyaart from "./../images/artistalley/feeyaart.jpg";
import melty from "./../images/artistalley/melty.jpg";
import cynicalfries from "./../images/artistalley/cynicalfries.jpg";
import blaidmiracle from "./../images/artistalley/blaidmiracle.jpg";
import ahwakanarai from "./../images/artistalley/ahwakanarai.jpg";
import scaryyandere from "./../images/artistalley/scaryyandere.jpg";
import nono from "./../images/artistalley/nono.jpg";
import leminigensokyo from "./../images/artistalley/leminigensokyo.jpg";
import megapig from "./../images/artistalley/megapig.jpg"
import moguman from "./../images/artistalley/moguman.jpg";
import minimono from "./../images/artistalley/minimono.jpg";
import mystia from "./../images/artistalley/mystia.jpg";
import codyyuki from "./../images/artistalley/codyyuki.jpg";
import remirii from "./../images/artistalley/remirii.jpg";
import g8kp from "./../images/artistalley/g8kp.jpg";
import linnyuwu from "./../images/artistalley/linnyuwu.jpg";
import emby from "./../images/artistalley/emby.jpg";
import vampyland from "./../images/artistalley/vampyland.jpg";
import panchamon from "./../images/artistalley/panchamon.jpg";
import BRW from "./../images/artistalley/BRW.jpg";
import cssrart from "./../images/artistalley/cssrart.jpg";

import siliconcat from "./../images/artistalley/siliconcat.jpg";
import matcha from "./../images/artistalley/matcha.jpg";
import ace from "./../images/artistalley/ace.jpg";
import ideafactory from "./../images/artistalley/ideafactory.jpg";
import fmanime from "./../images/artistalley/fmanime.jpg";
import touhoufest from "./../images/artistalley/touhoufest.jpg";
import kinocreations from "./../images/artistalley/kinocreations.jpg";
import serapim from "./../images/artistalley/serapim.jpg";
import whimsicalarchive from "./../images/artistalley/whimsicalarchive.jpg";
import brainjuice from "./../images/artistalley/brainjuice.jpg";
import sunameridrill from "./../images/artistalley/sunameridrill.jpg";
import mintchokuma from "./../images/artistalley/mintchokuma.jpg";
import nekopaws from "./../images/artistalley/nekopaws.jpg";

import lemoncreme from "./../images/artistalley/lemoncreme.jpg";
import youkaimountain from "./../images/artistalley/youkaimountain.jpg";
import wudjadoo from "./../images/artistalley/wudjadoo.jpg";
import eggu from "./../images/artistalley/eggu.jpg";
import okamijy from "./../images/artistalley/okamijy.jpg";

import corpsdancecrew from "./../images/artistalley/corpsdancecrew.jpg";
import daveandbusters from "./../images/artistalley/daveandbusters.jpg";
import organizedtouhounetworking from "./../images/artistalley/organizedtouhounetworking.jpg";
import grandprix from "./../images/artistalley/grandprix.jpg";
import kusoyayaoku1 from "./../images/artistalley/kusoyayasoku1.jpg";
import kusoyayaoku2 from "./../images/artistalley/kusoyayasoku2.jpg";
import mangadejapanese from "./../images/artistalley/mangadejapanese.jpg";

import akibahobby from "./../images/artistalley/akibahobby.jpg";
import gensokyoodyssey from "./../images/artistalley/gensokyoodyssey.jpg";

import hobbysociety from "./../images/artistalley/hobbysociety.jpg";

import { neosanctum, maidacademy, suzukann, toyota, torinoplaza } from "./../Utils";

import { GlobalTransformWrapper } from '../GlobalTransformWrapper';
import { RenderHours } from './AboutCon';

import vendorsimage from "./../images/vendors.jpg";

import beatmario from "./../images/beatmario.jpg";
import akairyusei from "./../images/akairyusei.jpg";
import yaboimatoi from "./../images/yaboimatoi.jpg";
import kamizuki from "./../images/kamizuki.jpeg";
import djhalica from "./../images/djhalica.jpg";
import maron from "./../images/maron.jpg";

let vendors = [
{"name": "Siliconcat", "image": siliconcat, "location": "V01", "website": "https://linktr.ee/siliconcat", "role": "Artist"},
{"name": "Touhou Hobby Society", "image": hobbysociety, "location": "V02", "website": "https://www.ebay.com/usr/bluebraixen", "role": "Merch"},
{"name": "Artist Collaboration Experience", "image": ace, "location": "V03", "website": "https://www.artcollabexp.com/", "role": "Artist"},
{"name": "TouhouFest Official Booth", "image": touhoufest, "location": "V04", "website": "https://schedule.touhoufest.org", "role": "Info"},
{"name": <>Sunameri&shy;Drill</>, "image": sunameridrill, "location": "V10", "website": "https://www.instagram.com/sunameridrill/", "role": "Vendor"},
{"name": "Whimsical Artchive ", "image": whimsicalarchive, "location": "V12", "website": "https://whimsicalartchive.carrd.co/", "role": "Artist"},
{"name": "TouhouFest Cosplay Repair", "image": touhoufest, "location": "V09", "website": "http://localhost:5173/#/cosplay", "role": "Info"},
{"name": "Akiba Hobby", "image": akibahobby, "location": "V05", "website": "https://shop.akbh.jp/en", "role": "Sponsor"},
{"name": "Touhou Mystia's Izakaya", "image": mystia, "location": "V06", "website": "https://store.steampowered.com/app/1584090/Touhou_Mystias_Izakaya/", "role": "Vendor"},
{"name": "Lyrica Live", "image": lyricalive, "location": "V11", "website": "https://www.youtube.com/@lyrica-live", "role": "Vendor"},
{"name": "Gensokyo Odyssey", "image": gensokyoodyssey, "location": "V15", "website": "https://store.steampowered.com/app/1865670/Gensokyo_Odyssey/", "role": "Vendor"},
{"name": "BeatMARIO/COOL&CREATE", "image": beatmario, "location": "V07", "website": "https://www.youtube.com/channel/UClzpoRto1BJXaRGe9OkkGLQ", "role": "Guest"},
{"name": "Maron/IOSYS", "image": maron, "location": "V08", "website": "https://x.com/maron47", "role": "Guest"},
{"name": "YaboiMatoi", "image": yaboimatoi, "location": "V13", "website": "https://www.yaboimatoi.com/", "role": "Guest"},
{"name": "Akai Ryusei/Tokyo Active NEETS", "image": akairyusei, "location": "V15", "website": "https://neets.tokyo/", "role": "Guest"},
];
vendors.sort((a,b) => a["location"].localeCompare(b["location"]));

let plazatables = [
{"name": "Cloudie", "image": cookie, "location": "Booth FB01", "website": "https://linktr.ee/cookietanuki", "role": "Official Artist"},
//{"name": "Freeze", "image": freezeex, "location": "Booth FB02", "website": "https://icecute.squarespace.com/", "role": "Official Artist"},
{"name": "Lemon-Crème", "image": lemoncreme, "location": "Booth FB03", "website": "https://www.etsy.com/shop/LemonCremeStudios", "role": "Festival Booth"},
{"name": "Youkai Mountain", "image": youkaimountain, "location": "Booth FB04", "website": "https://x.com/YoukaiMountain", "role": "Festival Booth"},
{"name": "Kusoya / Yasoku", "image": kusoyayaoku1, "location": "Booth FB05", "website": "https://yasoku.us/", "role": "Festival Booth"},
{"name": "Kusoya / Yasoku", "image": kusoyayaoku2, "location": "Booth FB06", "website": "https://yasoku.us/", "role": "Festival Booth"},

{"name": "Wudjadoo", "image": wudjadoo, "location": "Booth FB07", "website": "https://wudjadoo.myshopify.com/", "role": "Festival Booth"},
{"name": "Touhou M-1 Grand Prix", "image": grandprix, "location": "Booth FB08", "website": "https://ko-fi.com/richardeffendi/shop", "role": "Vendor"},
{"name": "Maid Academy", "image": maidacademy, "location": "Booth FB09", "website": "https://linktr.ee/maidacademy", "role": "Vendor"},
{"name": "Manga de Japanese", "image": mangadejapanese, "location": "Booth FB10", "website": "https://manga-de.com", "role": "Festival Booth"},
];
plazatables.sort((a,b) => a["location"].localeCompare(b["location"]));

let communitytables = [
{"name": "The Corps Dance Crew", "image": corpsdancecrew, "location": "Booth FT1 ~ FT2", "website": "https://x.com/TheCorpsDC", "role": ""},
{"name": "Organized Touhou Networking in Japan", "image": organizedtouhounetworking, "location": "Booth FT3", "website": "https://discord.gg/4uGwZEXXBN", "role": ""},
// {"name": "Bowers Museum", "image": bowersmuseum, "location": "Booth FT5 (Saturday)", "website": "https://www.bowers.org/", "role": ""},
{"name": "Dave & Busters", "image": daveandbusters, "location": "Booth FT5 (Sunday)", "website": "https://www.daveandbusters.com/us/en/home", "role": ""},
{"name": "Anime Los Angeles", "image": animelosangeles, "location": "Booth FT6", "website": "https://animelosangeles.org/", "role": ""},
{"name": "LA Idol Matsuri", "image": idolmatsuri, "location": "Booth FT7", "website": "https://www.la-idolmatsuri.org/", "role": ""},
];
communitytables.sort((a,b) => a["location"].localeCompare(b["location"]));


export const vendorsPage= {
    "jumplinks": [
        {
            "fragment_id": "humanvillage",
            "title": "Human Village Vendors"
        },
        {
            "fragment_id": "shrinetables",
            "title": "Shrine & Community Tables"
        }
    ],
    "codename": "vendors",
    "header": (<><FontAwesomeIcon icon={faStore} fixedWidth></FontAwesomeIcon> Vendors</>),
    "fluidImage": (<Image src={vendorsimage} fluid />),
    "body": (<>
        <p>Vendor Booths (<CircledBullets argument="3"/> Vendor Booths) is split between the Entry Plaza and the Torino Festival Plaza. Jump to either section to see a detailed map and vendor listing for each area.</p>

        <RenderHours title="Artist Alley/Vendors"/>

        <MakeGoheiHeader content="Human Village Vendors" fragment_id='humanvillage'/>

        <h4>Vendors Booth Map</h4>
        <p>Pinch to focus in/zoom on the map as needed. Artist locations are denoted by the alphanumeric code next to them.</p>

        <Row className="mt-3 justify-content-center">
            <Col xs={12} md={8} className="text-center">
                <GlobalTransformWrapper src={vendorsmap} caption="Map of Vendors"/>
            </Col>
        </Row>

        <h4>List of Vendors</h4>
        <p>Entries listed below are in vendors (denoted "Booth VXX").</p>
        <Row xs={2} md={4} lg={5} className="g-3 justify-content-center">
            {vendors.map((artist, i) => <>
             <Col>
                <MakeGenericCard subtitle={artist["role"]} smaller_subtitle={`Booth ${artist["location"]}`} title={artist["name"]} picture={artist["image"]} links={
                    artist["website"] !== "" ? [
                        {
                            "link": artist["website"],
                            "title": "Vendor Link"
                        }
                    ] : []
                }/>
            </Col>
            </>)}
       </Row>

        <MakeGoheiHeader content="Shrine & Community Tables" fragment_id='shrinetables'/>

        <h4>Booth Map</h4>
        <p>Pinch to focus in/zoom on the map as needed. Participant locations are denoted by the alphanumeric code next to them. Participants in this sections are spread out over several different locations and will be indicated accordingly.</p>
        <Row className="justify-content-center">
            <Col xs={12} lg={10}>
                <GlobalTransformWrapper src={torinoplazamap} caption="Map of Vendors at Torino Plaza" />
            </Col>
        </Row>
        <h4>List of Participants</h4>
        <h5>Entry Foyer (Community Tables)</h5>
        <p>Some booths may be empty.</p>
        <Row xs={2} md={4} lg={5} className="g-3 justify-content-center">
            {communitytables.map((artist, i) => <>
             <Col>
                <Card>
                    <Card.Img variant="top" src={artist["image"]}></Card.Img>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center">{artist["name"]}</ListGroup.Item>
                        <ListGroup.Item className="text-center small">{artist["location"]}</ListGroup.Item>
                    </ListGroup>
                    {artist["website"] !== "" ? <Card.Footer className="text-center small"><a href={artist["website"]} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> Link</a></Card.Footer> : <></>}
                </Card>
            </Col>
            </>)}
        </Row>

       <h5 className="mt-3">Torino Plaza (Shrine Booths)</h5>
        <Row xs={2} md={4} lg={5} className="g-3 justify-content-center">
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