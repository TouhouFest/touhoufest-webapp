import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Figure, ListGroup, Row } from 'react-bootstrap';

import totebag from "./../images/conmerch/totebag.png";
import lightstick_freeze from "./../images/conmerch/lightstick_freeze.png";
import lightstick_cloudie from "./../images/conmerch/lightstick_cloudie.png";
import lanyard from "./../images/conmerch/lanyard.png";
import marisapin from "./../images/conmerch/marisapin.png";
import enamelpin from "./../images/conmerch/enamelpin.png";
import reimuposter from "./../images/conmerch/reimuposter.png";
import reimutote from "./../images/conmerch/reimutote.png";
import tfestposter from "./../images/conmerch/tfestposter.png";
import { entryplaza, MakeGenericCard, torinoplazamap } from '../Utils';

import reimulego from "./../images/conmerch/reimulego.png";
import marisalego from "./../images/conmerch/marisalego.png";
import mimasticker from "./../images/conmerch/mimasticker.png";
import whimsycirnosticker from "./../images/conmerch/whimsycirnosticker.png";
import reimuexaccessory from "./../images/conmerch/reimuexaccessory.png";
import marisaexaccessory from "./../images/conmerch/marisaexaccessory.png";
import vinylsticker from "./../images/conmerch/vinylsticker.jpg";
import squarevinylsticker from "./../images/conmerch/squarevinylsticker.jpg";
import uchiwafan from "./../images/conmerch/uchiwafan.png";
import mofwallscroll from "./../images/conmerch/mofwallscroll.jpg";
import yuyukoburger from "./../images/conmerch/yuyukoburger.png";
import gensokyostreetstyle from "./../images/conmerch/gensokyostreetstyle.png";
import youkailifornia from "./../images/conmerch/youkailifornia.png";
import youkailiforniasticker from "./../images/conmerch/youkailiforniasticker.png";

import merchlisting from "./../images/merchlisting.png";
import { GlobalTransformWrapper } from '../GlobalTransformWrapper';

import touhoufestmerch from "./../images/touhoufestmerch.jpg";
import { Image } from 'react-bootstrap';
import { vendorsmap } from '../Utils';

let pricelist = [
    {
        "price": "$70",
        "title": "Reimu Figure Building Kit",
        "description": <>
            <p>Build a chibi figure of Reimu using real LEGO® bricks. This 300-piece custom kit comes complete with buildable gohei and donation box accessories to allow for a variety of display options.</p>

            <p>Approximate Dimensions:</p>
            <ul>
                <li>H: 12.6 cm (5.0 in.)</li>
                <li>W: 5.6 cm (2.2 in.)</li>
                <li>L: 7.8 cm (3.1 in.)</li>
            </ul>

            <p>Items included with purchase:</p>
            <ul>
                <li>300 hand-sorted LEGO® bricks</li>
                <li>PDF building instructions</li>
                <li>PRE-ORDER BONUS: Beer Mug (×1)</li>
            </ul>

            <p>Digital building instructions are provided upon purchase as a download included with your receipt. Physical items are shipped separately.</p>
            <p>Model and instructions designed by @lavishlump</p>
            <p>LEGO® is a trademark of the LEGO Group, which does not sponsor, authorize, or endorse this product.</p>
        </>,
        "photo": reimulego,
        "notes": "Artist: lavushplump"
    },
    {
        "price": "$70",
        "title": "Marisa Figure Building Kit",
        "description": <>
            <p>Build a chibi figure of Marisa using real LEGO® bricks. This 300-piece custom kit comes complete with buildable broom and mini-hakkero accessories to allow for a variety of display options.</p>

            <p>Approximate Dimensions:</p>
            <ul>
                <li>H: 16.6 cm (6.5 in.)</li>
                <li>W: 9.6 cm (3.8 in.)</li>
                <li>L: 9.6 cm (3.8 in.)</li>
            </ul>

            <p>Items included with purchase:</p>
            <ul>
                <li>300 hand-sorted LEGO® bricks</li>
                <li>PDF building instructions</li>
                <li>PRE-ORDER BONUS: Beer Mug (×1)</li>
            </ul>

            <p>Digital building instructions are provided upon purchase as a download included with your receipt. Physical items are shipped separately.</p>
            <p>Model and instructions designed by @lavishlump</p>
            <p>LEGO® is a trademark of the LEGO Group, which does not sponsor, authorize, or endorse this product.</p>
        </>,
        "photo": marisalego,
        "notes": "Artist: lavushplump"
    },
    {
        "price": "$5",
        "title": "Mima Sticker",
        "description": <><p>A cel shaded sticker of Mima. Specifications: 3.7 in; Artwork by 金雲 GoldenJin</p></>,
        "photo": mimasticker,
        "notes": "Artist: 金雲 GoldenJin"
    },
    {
        "price": "$3",
        "title": "Whimsy Cirno Sticker",
        "description": <p>A flat color chibi sticker featuring Cirno with a lollipop and propeller hat. Specifications: 2.4 in; Artwork by 金雲 GoldenJin</p>,
        "photo": whimsycirnosticker,
        "notes": "Artist: 金雲 GoldenJin"
    },
    {
        "price": "$25",
        "title": "Reimu EX Accessory",
        "description": <>
        
            <p>Expand your Reimu Figure Building Kit with extra accessories, including custom UV-printed elements.</p>

            <p>Buildable accessories in this pack include:</p>
            <ul>
                <li>UV-printed ofuda (×5)</li>
                <li>Attack effect element</li>
                <li>UV-printed donation box engravings</li>
                <li>Prized bottle of sake</li>
                <li>Stone lantern environment decoration</li>
                <li>Collectible UV-printed “Power” tile</li>
            </ul>

            <p>Items included with purchase:</p>
            <ul>
                <li>26 hand-sorted LEGO® bricks, including UV-printed elements</li>
                <li>PDF building instructions</li>
            </ul>

            <p>Digital building instructions are provided upon purchase as a download included with your receipt. Physical items are shipped separately.</p>
            <p>Model and instructions designed by lavishlump</p>
            <p>LEGO® is a trademark of the LEGO Group, which does not sponsor, authorize, or endorse this product.</p>
        </>,
        "photo": reimuexaccessory,
        "notes": "Artist: lavishplump"
    },
    {
        "price": "$25",
        "title": "Marisa EX Accessory",
        "description": <>
        
            <p>Expand your Marisa Figure Building Kit with extra accessories, including custom UV-printed elements.</p>

            <p>Buildable accessories in this pack include:</p>
            <ul>
                <li>“Stardust Reverie” spell card effect</li>
                <li>“Borrowed” grimoire</li>
                <li>Broom lantern attachment</li>
                <li>Magical forest environment decoration</li>
                <li>Collectible UV-printed “Item” tile</li>
            </ul>

            <p>Items included with purchase:</p>
            <ul>
                <li>35 hand-sorted LEGO® bricks, including UV-printed elements</li>
                <li>PDF building instructions</li>
            </ul>

            <p>Digital building instructions are provided upon purchase as a download included with your receipt. Physical items are shipped separately.</p>
            <p>Model and instructions designed by lavishlump</p>
            <p>LEGO® is a trademark of the LEGO Group, which does not sponsor, authorize, or endorse this product.</p>
        </>,
        "photo": marisaexaccessory,
        "notes": "Artist: lavishplump"
    },
    {
        "price": "$20",
        "title": "TouhouFest Horizontal Vinyl Sticker",
        "description": <p>Touhoufest Vinyl Sticker! Ready to add some new style on your car or Computer</p>,
        "photo": vinylsticker,
        "notes": "Artist: StickyTSM"
    },
    {
        "price": "$20",
        "title": "TouhouFest Square Vinyl Sticker",
        "description": <p>Touhoufest Vinyl Sticker! Ready to add some new style on your car or Computer</p>,
        "photo": squarevinylsticker,
        "notes": "Artist: StickyTSM"
    },
    {
        "price": "$15",
        "title": "Uchiwa fan",
        "description": "13.5 in. x 9.5 in. fan to keep you cool during the con",
        "photo": uchiwafan,
        "notes": "Artist: Siliconcat"
    },
    {
        "price": "$20",
        "title": "MoF Wall Scroll",
        "description": "Massive 10 in. x 36 in. wall scroll depicting the cast of Touhou 10 'Mountain of Faith'",
        "photo": mofwallscroll,
        "notes": "Artist: Kishinjou"
    },
    {
        "price": "$5",
        "title": "Yuyuko Burger Sticker",
        "description": "2 in. x 2.5 in. sticker of Yuyuko eating a burger",
        "photo": yuyukoburger,
        "notes": "Artist: literalcringe"
    },
    {
        "price": "$25",
        "title": "Gensokyo Street Style Graphic Tee",
        "description": <>
            <p>Show off your Gensokyo Street Style pride for the whole world to see - commemorating another incredible year of TouhouFest!</p>
            <p>White T-Shirt with a black oversize frontal graphic.</p>
        </>,
        "photo": gensokyostreetstyle,
        "notes": "Artist: cipher_jpg"
    },
    {
        "price": "$30",
        "title": "Youkailifornia Represent Graphic Tee",
        "description": <>
            <p>Black T-Shirt with a frontal and rear graphic.</p>
            <p>All proceeds go directly to fund Tsukasa's world domination plan - starting with California, of course! Ohhoho!</p>
        </>,
        "photo": youkailifornia,
        "notes": "Artist: cipher_jpg"
    },
    {
        "price": "$4",
        "title": "Youkailifornia Flag Sticker",
        "description": <>
            <p>The Golden state? You CLEARLY mean the Youkai State.</p>
            <p>Show those pesky humans who's boss with the flag of the GREAT state of Yokailifornia!</p>
            <p>5 in. x 3.5 in.</p>
        </>,
        "photo": youkailiforniasticker,
        "notes": "Artist: cipher_jpg"
    }


    // {
    //     "price": "$15.00",
    //     "title": "TouhouFest 2025 Tote Bag",
    //     "description": "TouhouFest’s official 2025 exclusive tote bag featuring various Touhou Project characters, including Reimu Hakurei, Marisa Kirisame, Sanae Kochiya, Cirno, Reisen Udongein Inaba, and Youmu Konpaku!",
    //     "photo": totebag,
    //     "notes": "Artist: Cloudie"
    // },
    // {
    //     "price": "$40.00",
    //     "title": "TouhouFest Live 2025 Lightstick Freeze-Ex Ver. ",
    //     "description": "New to TouhouFest this year are exclusively branded lightsticks made in collaboration with Neon Shrine! Featuring artwork of Reimu Hakurei, cheer for your favorite performers with these lightsticks during TouhouFest Live 2025, where live performances will take place throughout the event!",
    //     "photo":lightstick_freeze,
    //     "notes": "Artist: Freeze-Ex"
    // },
    // {
    //     "price": "$40.00",
    //     "title": "TouhouFest Live 2025 Lightstick CookieTanuki Ver. ",
    //     "description": "New to TouhouFest this year are exclusively branded lightsticks made in collaboration with Neon Shrine! Featuring artwork of various Touhou characters, cheer for your favorite performers with these lightsticks during TouhouFest Live 2025, where live performances will take place throughout the event!",
    //     "photo": lightstick_cloudie,
    //     "notes": "Artist: Cloudie"
    // },
    // {
    //     "price": "$5.00",
    //     "title": "TouhouFest Lanyard",
    //     "description": "TouhouFest's official lanyard!",
    //     "photo": lanyard,
    //     "notes": ""
    // },
    // {
    //     "price": "$5.00",
    //     "title": "TouhouFest 2024 Marisa Button Pin ",
    //     "description": "TouhouFest’s official 2024 button pin featuring the character Marisa Kirisame!",
    //     "photo": marisapin,
    //     "notes": "Artist: Cloudie"
    // },
    // {
    //     "price": "$10.00",
    //     "title": "TouhouFest Logo Enamel Pin",
    //     "description": "TouhouFest’s official enamel pin featuring the TouhouFest logo! ",
    //     "photo": enamelpin,
    //     "notes": ""
    // },
    // {
    //     "price": "From $10.00",
    //     "title": "TouhouFest Reimu Poster ",
    //     "description": "A print of TouhouFest’s official artwork featuring the Touhou Project character, Reimu Hakurei! Choose between two sizes: 8 in. x 11 in. ($10.00) or 11 in. x 17 in. ($15.00)",
    //     "photo": reimuposter,
    //     "notes": "Artist: Cloudie"
    // },
    // {
    //     "price": "$15.00",
    //     "title": "TouhouFest 2024 Tote Bag",
    //     "description": "TouhouFest’s official tote bag featuring the Touhou Project character, Reimu Hakurei!",
    //     "photo": reimutote,
    //     "notes": "Artist: Cloudie"
    // },
    // {
    //     "price": "$15.00",
    //     "title": "TouhouFest 2024 Reimu and Marisa Poster",
    //     "description": "A print of TouhouFest’s official 2024 artwork featuring the Touhou Project characters, Reimu Hakurei and Marisa Kirisame!",
    //     "photo": tfestposter,
    //     "notes": "Artist: Freeze-Ex"
    // },

];

export const conMerchPage= {
    "codename": "conmerch",
    "header": (<><FontAwesomeIcon icon={faBagShopping} fixedWidth></FontAwesomeIcon> Con Merch</>),
    "fluidImage": (<Image src={touhoufestmerch} fluid/>),
    "body": (<>
        <p>The below items are available for purchase at TouhouFest's Merch Booth! It is located in the <b>Entry Plaza</b> at Booth V04.</p>

        <Row className="justify-content-center">
            <Col xs={12} lg={8}>
                <GlobalTransformWrapper src={vendorsmap} caption="Map of Artist Alley"/>
            </Col>
        </Row>

        <h4 className="mb-3">2025 Con Merch Listing</h4>

        <Row className="justify-content-center">
            <Col xs={12} md={10}>
                <GlobalTransformWrapper src={merchlisting} caption="2025 Merch Listing"/>
            </Col>
        </Row>

        <h4>General Item Listing</h4>
        <Row xs={1} md={2} lg={3} className="justify-content-center g-3">
            {pricelist.map((item, i) => <>
            <Col>
                <Card>
                    <Card.Img variant="top" src={item["photo"]} />
                    <Card.Header className="text-center fw-bold">Price: {item["price"]}</Card.Header>
                    <Card.Body>
                        <h5>{item["title"]}</h5>
                        {item["description"]}
                    </Card.Body>
                    {item["notes"] !== "" ? <Card.Footer className="text-center">{item["notes"]}</Card.Footer> : <></>}
                </Card>
            </Col>
            </>)}
        </Row>
    </>),
}