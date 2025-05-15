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
import { CircledBullets, artistalleymap, vendorsmap, torinoplazamap, placeholder} from '../Utils';

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
import kotori from "./../images/artistalley/kotori.jpg";
import fmanime from "./../images/artistalley/fmanime.jpg";
import touhoufest from "./../images/artistalley/touhoufest.jpg";
import kinocreations from "./../images/artistalley/kinocreations.jpg";
import serapim from "./../images/artistalley/serapim.jpg";
import whimsicalarchive from "./../images/artistalley/whimsicalarchive.jpg";
import brainjuice from "./../images/artistalley/brainjuice.jpg";
import sunameridrill from "./../images/artistalley/sunameridrill.jpg";
import mintchokuma from "./../images/artistalley/mintchokuma.jpg";

import lemoncreme from "./../images/artistalley/lemoncreme.jpg";
import youkaimountain from "./../images/artistalley/youkaimountain.jpg";
import wudjadoo from "./../images/artistalley/wudjadoo.jpg";
import eggu from "./../images/artistalley/eggu.jpg";
import okamijy from "./../images/artistalley/okamijy.jpg";

import corpsdancecrew from "./../images/artistalley/corpsdancecrew.jpg";
import daveandbusters from "./../images/artistalley/daveandbusters.jpg";
import organizedtouhounetworking from "./../images/artistalley/organizedtouhounetworking.jpg";

import { neosanctum, maidacademy, suzukann, toyota, torinoplaza } from "./../Utils";

import { GlobalTransformWrapper } from '../GlobalTransformWrapper';

let artistlist = [
{"name": "Lyrica Live", "image": lyricalive, "location": "Booth A1", "website": "https://lyricalive.carrd.co/", "description": ""},
{"name": <>GuruGuru&shy;Maru</>, "image": gurugurumaru, "location": "Booth A2", "website": "https://x.com/GuruGuruMaru_?t=LpCCKsbKLTIa_WDah5Ehyw&s=09", "description": ""},
{"name": "Xiaobb inc", "image": xiaobb, "location": "Booth A3", "website": "www.instagram.com/xiaobbinc", "description": ""},
{"name": "Umaholics Anonymous", "image": umaholics, "location": "Booth A4", "website": "https://umaholics-anonymous.carrd.co/", "description": ""},
{"name": "Netcavy Records", "image": netcavy, "location": "Booth B1", "website": "https://netcavy.net/portfolio", "description": ""},
{"name": "Neo Sanctum", "image": neosanctum, "location": "Booth B2", "website": "https://x.com/NSanctum", "description": ""},
{"name": "11th hour", "image": crescentia, "location": "Booth B3", "website": "https://crescentia.bandcamp.com/album/touhou-orchestral-suite-grand-fantasy", "description": ""},
{"name": "Dreaming Chimera", "image": dreamingchimera, "location": "Booth B4", "website": "https://dreamingchimera.carrd.co/", "description": ""},
{"name": "ASAZEi", "image": asazei, "location": "Booth B5", "website": "https://x.com/ASAZEi_art", "description": ""},
{"name": <>Biscay&shy;Biscuits</>, "image": biscaybiscuits, "location": "Booth B6", "website": "https://www.instagram.com/themoondruid?igsh=NGVhN2U2NjQ0Yg==", "description": ""},
{"name": "Juliana Egg", "image": julianaegg, "location": "Booth C1", "website": "instagram.com/juliana_egg", "description": ""},

{"name": "NekoMofu Jinja", "image": nekomofu, "location": "Booth C2", "website": "https://www.instagram.com/schemanineko/", "description": ""},

{"name": "limpachi", "image": limpachu, "location": "Booth C3", "website": "https://twitter.com/limpachu", "description": ""},
{"name": <>Meiki</>, "image": meiki, "location": "Booth C4", "website": "https://sirmasterknight.carrd.co/", "description": ""},

{"name": <>MARLO&shy;WEMEMO</>, "image": MARLOWEMEMO, "location": "Booth C5", "website": "https://www.instagram.com/marlowememo/", "description": ""},

{"name": "Eggu (Grillboss Co.)", "image": eggu, "location": "Booth C6", "website": "https://egguv.carrd.co/", "description": ""},
{"name": "Okamijy (Grillboss Co.)", "image": okamijy, "location": "Booth C6", "website": "https://okamijy.carrd.co/", "description": ""},
{"name": "Partyu", "image": partyu, "location": "Booth D1", "website": "https://twitter.com/_partyu", "description": ""},
{"name": "Kureihii Art", "image": kurehii, "location": "Booth D2", "website": "https://www.instagram.com/kureihii/?hl=en", "description": ""},
{"name": "quowl", "image": quowl, "location": "Booth D3", "website": "https://quowl.carrd.co/", "description": ""},
{"name": "Panchamon", "image": panchamon, "location": "Booth D4", "website": "https://bsky.app/profile/panchamon.bsky.social", "description": ""},
{"name": "haiyun", "image": haiyun, "location": "Booth D5", "website": "https://www.instagram.com/haiyunee/", "description": ""},
{"name": "Birnam Hall", "image": birnam, "location": "Booth D6", "website": "https://www.instagram.com/birnamhall/", "description": ""},
{"name": "Tama Tama Shop", "image": tama, "location": "Booth E1", "website": "https://tamamagatama.carrd.co", "description": ""},
{"name": <>Gruvys&shy;Gudies</>, "image": gruvysgudies, "location": "Booth E2", "website": "https://www.instagram.com/gruvyboi/", "description": ""},
{"name": "LazyDayTee", "image": lazydaytee, "location": "Booth E3", "website": "instagram.com/LazyDayTee", "description": ""},
{"name": "BAPY Society", "image": bapysociety, "location": "Booth E4", "website": "https://bapysociety.carrd.co/#gallery", "description": ""},
{"name": "jellisstuf", "image": jellistuff, "location": "Booth E5", "website": "https://www.etsy.com/shop/JellisStuff", "description": ""},
{"name": "Bark Snarl", "image": barksnarl, "location": "Booth E6", "website": "https://barksnarl.myshopify.com/", "description": ""},
{"name": "Girutea", "image": girutea, "location": "Booth F1", "website": "https://girutea.storenvy.com/", "description": ""},
{"name": "Shrug Club", "image": shrugclub, "location": "Booth F2", "website": "https://x.com/shrugclub", "description": ""},
{"name": "Feeya Art", "image": feeyaart, "location": "Booth F3", "website": "https://x.com/feeyaowo", "description": ""},
{"name": "Melty Uchuu", "image": melty, "location": "Booth F4", "website": "https://meltyportfolio.carrd.co/", "description": ""},
{"name": "Sailin' Yumemi", "image": placeholder, "location": "Booth F5", "website": "https://space.bilibili.com/280431373?plat_id=1&share_from=space&share_medium=iphone&share_plat=ios&share_session_id=0E66CBF3-AF77-43D1-A2DA-40E600B42856&share_source=COPY&share_tag=s_i&spmid=main.space.0.0&timestamp=1721227907&unique_k=eX9r7Ab", "description": ""},
{"name": "cynicalfries", "image": cynicalfries, "location": "Booth F6", "website": "https://www.instagram.com/cynicalfries/?utm_source=qr", "description": ""},
{"name": "blaidmiracle", "image": blaidmiracle, "location": "Booth F6", "website": "https://www.pixiv.net/en/users/97844354/artworks", "description": ""},
{"name": "Suzukannn", "image": suzukann, "location": "Booth G1", "website": "https://x.com/suzukannn", "description": ""},
{"name": <>Ah'Wakara&shy;nai</>, "image": ahwakanarai, "location": "Booth G2", "website": "https://x.com/SWatanabe_yo", "description": ""},
{"name": "ScaryYandere", "image": scaryyandere, "location": "Booth G3", "website": "https://x.com/ScaryYandere", "description": ""},
{"name": "notnoe", "image": nono, "location": "Booth G4", "website": "https://x.com/notnoe_", "description": ""},
{"name": "Archanciel (LMG)", "image": leminigensokyo, "location": "Booth G5", "website": "https://www.facebook.com/LeMiniGensokyo/", "description": ""},
{"name": "Megapig9001", "image": megapig, "location": "Booth G6", "website": "https://www.youtube.com/c/Megapig9001", "description": ""},
{"name": "Moguman", "image": moguman, "location": "Booth G7", "website": "https://x.com/_MoguMan_/media", "description": ""},
{"name": "Minomino", "image": minimono, "location": "Booth G8", "website": "Instagram.com/minominoten", "description": ""},
{"name": "Dichroic Purpilion", "image": mystia, "location": "Booth H1", "website": "https://store.steampowered.com/app/1584090/Touhou_Mystias_Izakaya/", "description": ""},
{"name": "CodyYuki", "image": codyyuki, "location": "Booth H2", "website": "https://x.com/CodyYuki_", "description": ""},
{"name": "remirii", "image": remirii, "location": "Booth H3", "website": "https://remirii-portfolio.weebly.com/illustrations.html", "description": ""},
{"name": "G8KB", "image": g8kp, "location": "Booth H4", "website": "https://g8kp.carrd.co/#portfolio", "description": ""},
{"name": "LinnyUwU", "image": linnyuwu, "location": "Booth H5", "website": "https://x.com/LinnyUwU", "description": ""},
{"name": <>mintcho&shy;kuma</>, "image": mintchokuma, "location": "Booth H6", "website": "https://x.com/mintchokuma", "description": ""},
{"name": <>mcsquiddies</>, "image": emby, "location": "Booth H6", "website": "https://x.com/mcsquiddies", "description": ""},
{"name": "Vampy Land", "image": vampyland, "location": "Booth H7", "website": "https://vampy.land/portfolio", "description": ""},
{"name": "Chenna Kitty", "image": chennakitty, "location": "Booth H8", "website": "https://chennakitty.carrd.co/ ", "description": ""},
{"name": "BRW", "image": BRW, "location": "Booth H9", "website": "https://twitter.com/hnbryal", "description": ""},
{"name": "CSSRart", "image": cssrart, "location": "Booth H10", "website": "https://x.com/CssRart", "description": ""},
];
artistlist.sort((a,b) => a["location"].localeCompare(b["location"]));

let vendors = [
{"name": "Siliconcat", "image": siliconcat, "location": "V01", "website": "https://siliconcat.tumblr.com/tagged/my%20art", "role": "Artist"},
{"name": "Matcha", "image": matcha, "location": "V02", "website": "https://x.com/matchach?lang=en", "role": "Artist"},
{"name": "Artist Collaboration Experience", "image": ace, "location": "V03", "website": "https://www.artcollabexp.com/", "role": "Artist"},
{"name": "Touhou Hobby Society", "image": placeholder, "location": "V04", "website": "https://www.ebay.com/usr/bluebraixen", "role": "Merch"},
{"name": "Idea Factory Intl.", "image": ideafactory, "location": "V05 & V06", "website": "https://ifi.games/", "role": "Games"},
{"name": "Kotori's Shop by Y", "image": kotori, "location": "V07", "website": "https://www.instagram.com/kotoris_shop_by_y/", "role": "Merch"},
{"name": "FMAnime Shop", "image": fmanime, "location": "V08", "website": "https://www.fm-anime.com/", "role": "Cosplay"},
{"name": "TouhouFest Merch", "image": touhoufest, "location": "V09", "website": "https://www.touhoufest.org/store", "role": "Merch"},
{"name": "TouhouFest Info Booth", "image": touhoufest, "location": "V10", "website": "https://schedule.touhoufest.org", "role": "Info"},
{"name": <>Kino&shy;Kreations</>, "image": kinocreations, "location": "V11 & V12", "website": "https://kinokreations.myshopify.com/", "role": "Artist"},
{"name": "Seraphim Complex", "image": serapim, "location": "V13", "website": "https://seraphimcomplex.com/", "role": "Merch"},
{"name": "Whimsical Artchive ", "image": whimsicalarchive, "location": "V14", "website": "https://whimsicalartchive.carrd.co/", "role": "Artist"},
{"name": "Stuffy Rabbit", "image": placeholder, "location": "V15", "website": "https://ruddyg851.myportfolio.com", "role": "Vendor"},
{"name": "Brainjuice Art", "image": brainjuice, "location": "V16", "website": "https://www.brainjuiceart.com/", "role": "Artist"},
{"name": <>Sunameri&shy;Drill</>, "image": sunameridrill, "location": "V17", "website": "https://www.instagram.com/sunameridrill/", "role": "Vendor"},
];
vendors.sort((a,b) => a["location"].localeCompare(b["location"]));

let plazatables = [
{"name": "Cloudie", "image": cookie, "location": "Booth FB01", "website": "https://linktr.ee/cookietanuki", "role": "Official Artist"},
{"name": "Freeze", "image": freezeex, "location": "Booth FB02", "website": "https://icecute.squarespace.com/", "role": "Official Artist"},
{"name": "Lemon-Crème", "image": lemoncreme, "location": "Booth FB03", "website": "https://www.etsy.com/shop/LemonCremeStudios", "role": "Festival Booth"},
{"name": "Kusoya / Yasoku", "image": placeholder, "location": "Booth FB04", "website": "", "role": "Festival Booth"},
{"name": "Youkai Mountain", "image": youkaimountain, "location": "Booth FB05", "website": "https://x.com/YoukaiMountain", "role": "Festival Booth"},
{"name": "Wudjadoo", "image": wudjadoo, "location": "Booth FB06", "website": "https://wudjadoo.myshopify.com/", "role": "Festival Booth"},
{"name": "Maid Academy", "image": maidacademy, "location": "Booth FB07", "website": "https://linktr.ee/maidacademy", "role": "Vendor"},
{"name": "Edward Cadenza", "image": placeholder, "location": "Booth FB08 ~ FB10", "website": "", "role": "Festival Booth"},
];
plazatables.sort((a,b) => a["location"].localeCompare(b["location"]));

let communitytables = [
{"name": "The Corps Dance Crew", "image": corpsdancecrew, "location": "Booth FT1 ~ FT2", "website": "https://x.com/TheCorpsDC", "role": ""},
{"name": "Organized Touhou Networking in Japan", "image": organizedtouhounetworking, "location": "Booth FT3", "website": "https://twipla.jp/events/675392", "role": ""},
{"name": "Bowers Museum", "image": bowersmuseum, "location": "Booth FT5 (Saturday)", "website": "https://www.bowers.org/", "role": ""},
{"name": "Dave & Busters", "image": daveandbusters, "location": "Booth FT5 (Sunday)", "website": "https://www.daveandbusters.com/us/en/home", "role": ""},
{"name": "Anime Los Angeles", "image": animelosangeles, "location": "Booth FT6", "website": "https://animelosangeles.org/", "role": ""},
{"name": "LA Idol Matsuri", "image": idolmatsuri, "location": "Booth FT7", "website": "https://www.la-idolmatsuri.org/", "role": ""},
];
communitytables.sort((a,b) => a["location"].localeCompare(b["location"]));

export const artistVendorsPage = {
    "header": (<><FontAwesomeIcon icon={faYen} fixedWidth></FontAwesomeIcon> Artist Alley & Vendors</>),
    "fluidImage": (<Image src={artistalley} fluid />),
    "body": (<>
        <h4>Location</h4>
        <p>Artist Alley will be held at the <b>Toyota Meeting Hall</b>, (<CircledBullets argument="5"/> Artist Alley & Cosplay Booths) next to the Torino Festival Plaza. Vendor Booths (<CircledBullets argument="3"/> Vendor Booths) is split between the Entry Plaza and the Torino Festival Plaza.</p>
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

        <h4>Artist Alley</h4>
        <h5 className="mt-3">Artist Alley Booth Map</h5>
        <p>Pinch to focus in/zoom on the map as needed. Artist locations are denoted by the alphanumeric code next to them. (e.g. Lyrica Live corresponds to A1)</p>
        <Row className="justify-content-center">
            <Col xs={12} lg={8}>
                <GlobalTransformWrapper src={artistalleymap} caption="Map of Artist Alley"/>
            </Col>
        </Row>

        <h5 className="mt-2">Artist Alley Listing</h5>

        <Row xs={2} md={4} lg={5} className="g-3 justify-content-center">
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

        <h4 className="mt-3">Vendors</h4>
        <h5>Vendors Booth Map</h5>
        <p>Pinch to focus in/zoom on the map as needed. Artist locations are denoted by the alphanumeric code next to them.</p>

        <Row className="mt-3 justify-content-center">
            <Col xs={12} md={8} className="text-center">
                <GlobalTransformWrapper src={vendorsmap} caption="Map of Vendors"/>
            </Col>
        </Row>

        <h5>List of Vendors</h5>
        <p>Entries listed below are in vendors (denoted "Booth VXX").</p>
        <Row xs={2} md={4} lg={5} className="g-3 justify-content-center">
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

       <h4 className="mt-2">Community & Shrine Tables at Torino Plaza</h4>
       <h5>Booth Map</h5>
        <p>Pinch to focus in/zoom on the map as needed. Participant locations are denoted by the alphanumeric code next to them. Participants in this sections are spread out over several different locations and will be indicated accordingly.</p>
        <Row className="justify-content-center">
            <Col xs={12} lg={10}>
                <GlobalTransformWrapper src={torinoplazamap} caption="Map of Vendors at Torino Plaza" />
            </Col>
        </Row>
       <h5>List of Participants</h5>
        <h6>Entry Foyer (Community Tables)</h6>
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
                    {artist["website"] !== "" ? <Card.Footer className="text-center small"><a href={artist["website"]} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> Artist Link</a></Card.Footer> : <></>}
                </Card>
            </Col>
            </>)}
        </Row>

       <h6 className="mt-3">Torino Plaza (Shrine Booths)</h6>
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