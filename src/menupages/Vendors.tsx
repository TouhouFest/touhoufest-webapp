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
import { CircledBullets, artistalleymap, vendorsmap, torinoplazamap, placeholder, MakeGoheiHeader, MakeGenericCard, MakeLocationBadge} from '../Utils';

import idolmatsuri from "./../images/artistalley/idolmatsuri.png";

import lyricalive from "./../images/artistalley/lyricalive.jpg";
import mystia from "./../images/artistalley/mystia.jpg";

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
import bsideevents from "./../images/artistalley/bsideevents.jpg";
import pythonkid from "./../images/artistalley/pythonkid.jpg";
import pocarisweat from "./../images/artistalley/pocarisweat.jpg";
import sekaidolproductions from "./../images/artistalley/sekaidolproductions.jpg";

import animarketplace from "./../images/artistalley/animarketplace.jpg";
import risostudioarts from "./../images/artistalley/risostudioarts.jpg";

import noetic from "./../images/gamingfolder/noetic.jpg";
import tboddy from "./../images/gamingfolder/tboddy.jpg";
import fireland from "./../images/gamingfolder/fireland.jpg";
import danmaku from "./../images/danmaku.jpg";
import drawpaint from "./../images/drawpaint.jpg";
import danmakumaze from "./../images/gamingfolder/danmakumaze.png";
import arcade from "./../images/gamingfolder/arcade.jpg";



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
{"name": "Akai Ryusei/Tokyo Active NEETS", "image": akairyusei, "location": "V14", "website": "https://neets.tokyo/", "role": "Guest"},
];
vendors.sort((a,b) => a["location"].localeCompare(b["location"]));

let plazatables = [
{"name": "Kusoya / Yasoku", "image": kusoyayaoku1, "location": "FB01", "website": "https://yasoku.us/", "role": "Festival Booth"},
{"name": "Lemon-Crème", "image": lemoncreme, "location": "FB02", "website": "https://www.etsy.com/shop/LemonCremeStudios", "role": "Festival Booth"},
{"name": "Seraphim Complex", "image": serapim, "location": "FB03", "website": "https://seraphimcomplex.com/", "role": "Festival Booth"},
{"name": "Kou's Collectibles", "image": placeholder, "location": "FB04", "website": "", "role": "Festival Booth"},
{"name": "Pythonkid", "image": pythonkid, "location": "FB05", "website": "https://pythonkid.com/", "role": "Festival Booth"},
{"name": "Animal Confectionery", "image": placeholder, "location": "FB06", "website": "", "role": "Festival Booth"},
{"name": "Youkai Mountain", "image": youkaimountain, "location": "FB07", "website": "https://x.com/YoukaiMountain", "role": "Festival Booth"},
{"name": "Pocari Sweat", "image": pocarisweat, "location": "FB08", "website": "https://trypocari.com/", "role": "Festival Booth"},
{"name": "Maid Academy", "image": maidacademy, "location": "FB09 & FB10", "website": "https://linktr.ee/maidacademy", "role": "Vendor"},
{"name": "Sekaidol Productions", "image": sekaidolproductions, "location": "FB11", "website": "https://sekaidolproductions.com/", "role": "Vendor"},
];
plazatables.sort((a,b) => a["location"].localeCompare(b["location"]));

let communitytables = [
{"name": "AniMarketplace/AMP", "image": animarketplace, "location": "FT1", "website": "https://www.animarketplace.org/", "role": ""},
{"name": "LA Idol Matsuri", "image": idolmatsuri, "location": "FT2", "website": "https://www.la-idolmatsuri.org/", "role": ""},
{"name": "B-Side Events", "image": bsideevents, "location": "FT3", "website": "https://www.instagram.com/events_bside/", "role": ""},
{"name": "Riso Studio Arts", "image": risostudioarts, "location": "FT4", "website": "https://risostudioarts.com/", "role": ""},
{"name": "PixelSundae", "image": placeholder, "location": "FT5", "website": "", "role": ""},
{"name": "Touhou Game Dev", "image": placeholder, "location": "FT6", "website": "", "role": ""},
{"name": "Sheepeydarkness", "image": placeholder, "location": "FT7", "website": "", "role": ""},
{"name": "Idle Rage", "image": placeholder, "location": "FT8", "website": "", "role": ""},
];
communitytables.sort((a,b) => a["location"].localeCompare(b["location"]));

let fangametables = [
{"name": "Mystery Parfait", "image": danmaku, "location": "FG1", "website": "https://danmaku.party", "role": ""},
{"name": "Ice Fall Creative", "image": danmakumaze, "location": "FG2", "website": "https://store.steampowered.com/app/2927320/Touhou_Danmaku_Maze/", "role": ""},
{"name": "Fire Land", "image": fireland, "location": "FG3", "website": "https://store.steampowered.com/app/2927320/Touhou_Danmaku_Maze/", "role": ""},
{"name": "Noetic Nightjar Studios", "image": noetic, "location": "FG4", "website": "http://noeticnightjar.com/", "role": ""},
{"name": "peace research", "image": placeholder, "location": "FG5", "website": "", "role": ""},
{"name": "Touhou M-1 Grand Prix", "image": grandprix, "location": "FG6", "website": "https://www.youtube.com/channel/UC1uFa3v2uibwxWnI_hrD9fA", "role": ""},
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
            "title": "Hakurei Shrine Tables"
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
        <p className="my-3"><MakeLocationBadge location="Entry Plaza"/></p>
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

        <MakeGoheiHeader content="Hakurei Shrine Tables" fragment_id='shrinetables'/>

        <h4>Booth Map</h4>
        <p>Pinch to focus in/zoom on the map as needed. Participant locations are denoted by the alphanumeric code next to them. Participants in this sections are spread out over several different locations and will be indicated accordingly.</p>
        <Row className="justify-content-center">
            <Col xs={12} lg={10} className="text-center">
                <GlobalTransformWrapper src={torinoplazamap} caption="Map of Vendors at Torino Plaza" />
            </Col>
        </Row>
        <h4>Fan Community Tables</h4>
        <p className="my-3"><MakeLocationBadge location="Entry Foyer (Ken Miller Rec Center)"/></p>
        <Row xs={2} md={4} lg={5} className="g-3 justify-content-center">
            {communitytables.map((artist, i) => <>
             <Col>
                <MakeGenericCard smaller_subtitle={`Booth ${artist["location"]}`} title={artist["name"]} picture={artist["image"]} links={
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

       <h4 className="mt-3">Torino Plaza Vendors</h4>
        <p className="my-3"><MakeLocationBadge location="Torino Plaza"/></p>
        <Row xs={2} md={4} lg={5} className="g-3 justify-content-center">
            {plazatables.map((artist, i) => <>
             <Col>
                <MakeGenericCard smaller_subtitle={`Booth ${artist["location"]}`} title={artist["name"]} picture={artist["image"]} links={
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

       <h4 className="mt-3">Fan Game Vendors</h4>
        <p className="my-3"><MakeLocationBadge location="Assembly Hall"/></p>
        <Row xs={2} md={4} lg={5} className="g-3 justify-content-center">
            {fangametables.map((artist, i) => <>
             <Col>
                <MakeGenericCard smaller_subtitle={`Booth ${artist["location"]}`} title={artist["name"]} picture={artist["image"]} links={
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


    
    </>),
}