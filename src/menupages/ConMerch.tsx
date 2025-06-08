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
import { entryplaza } from '../Utils';

import merchlisting from "./../images/merchlisting.png";
import { GlobalTransformWrapper } from '../GlobalTransformWrapper';

let pricelist = [
    {
        "price": "$15.00",
        "title": "TouhouFest 2025 Tote Bag",
        "description": "TouhouFest’s official 2025 exclusive tote bag featuring various Touhou Project characters, including Reimu Hakurei, Marisa Kirisame, Sanae Kochiya, Cirno, Reisen Udongein Inaba, and Youmu Konpaku!",
        "photo": totebag,
        "notes": "Artist: Cloudie"
    },
    {
        "price": "$40.00",
        "title": "TouhouFest Live 2025 Lightstick Freeze-Ex Ver. ",
        "description": "New to TouhouFest this year are exclusively branded lightsticks made in collaboration with Neon Shrine! Featuring artwork of Reimu Hakurei, cheer for your favorite performers with these lightsticks during TouhouFest Live 2025, where live performances will take place throughout the event!",
        "photo":lightstick_freeze,
        "notes": "Artist: Freeze-Ex"
    },
    {
        "price": "$40.00",
        "title": "TouhouFest Live 2025 Lightstick CookieTanuki Ver. ",
        "description": "New to TouhouFest this year are exclusively branded lightsticks made in collaboration with Neon Shrine! Featuring artwork of various Touhou characters, cheer for your favorite performers with these lightsticks during TouhouFest Live 2025, where live performances will take place throughout the event!",
        "photo": lightstick_cloudie,
        "notes": "Artist: Cloudie"
    },
    {
        "price": "$5.00",
        "title": "TouhouFest Lanyard",
        "description": "TouhouFest's official lanyard!",
        "photo": lanyard,
        "notes": ""
    },
    {
        "price": "$5.00",
        "title": "TouhouFest 2024 Marisa Button Pin ",
        "description": "TouhouFest’s official 2024 button pin featuring the character Marisa Kirisame!",
        "photo": marisapin,
        "notes": "Artist: Cloudie"
    },
    {
        "price": "$10.00",
        "title": "TouhouFest Logo Enamel Pin",
        "description": "TouhouFest’s official enamel pin featuring the TouhouFest logo! ",
        "photo": enamelpin,
        "notes": ""
    },
    {
        "price": "From $10.00",
        "title": "TouhouFest Reimu Poster ",
        "description": "A print of TouhouFest’s official artwork featuring the Touhou Project character, Reimu Hakurei! Choose between two sizes: 8 in. x 11 in. ($10.00) or 11 in. x 17 in. ($15.00)",
        "photo": reimuposter,
        "notes": "Artist: Cloudie"
    },
    {
        "price": "$15.00",
        "title": "TouhouFest 2024 Tote Bag",
        "description": "TouhouFest’s official tote bag featuring the Touhou Project character, Reimu Hakurei!",
        "photo": reimutote,
        "notes": "Artist: Cloudie"
    },
    {
        "price": "$15.00",
        "title": "TouhouFest 2024 Reimu and Marisa Poster",
        "description": "A print of TouhouFest’s official 2024 artwork featuring the Touhou Project characters, Reimu Hakurei and Marisa Kirisame!",
        "photo": tfestposter,
        "notes": "Artist: Freeze-Ex"
    },

];

export const conMerchPage= {
    "header": (<><FontAwesomeIcon icon={faBagShopping} fixedWidth></FontAwesomeIcon> Con Merch</>),
    "fluidImage": (<></>),
    "body": (<>
        <h4>Location</h4>
        <p>The below items are available for purchase at TouhouFest's Merch Booth! It is located in the <b>Entry Plaza</b>.</p>
        <Row className="justify-content-center">
            <Col xs={12} sm={10} lg={8}>
                <Figure>
                    <Figure.Image src={entryplaza} fluid rounded></Figure.Image>
                    <Figure.Caption>Entry Plaza (when entering from the Nakano Theatre entrance)</Figure.Caption>
                </Figure>
            </Col>
        </Row>

        <h4 className="mb-3">2025 Con Merch Listing</h4>

        <Row className="justify-content-center">
            <Col xs={12} md={10}>
                <GlobalTransformWrapper src={merchlisting} caption="2025 Merch Listing"/>
            </Col>
        </Row>

        <h4>General Item Listing</h4>
        <Row xs={1} md={2} lg={4} className="justify-content-center g-3">
            {pricelist.map((item, i) => <>
            <Col>
                <Card>
                    <Card.Img variant="top" src={item["photo"]} />
                    <Card.Header className="text-center">{item["price"]}</Card.Header>
                    <Card.Body>
                        <Card.Title>{item["title"]}</Card.Title>
                        <Card.Text>{item["description"]}</Card.Text>
                    </Card.Body>
                    {item["notes"] !== "" ? <Card.Footer className="text-center">{item["notes"]}</Card.Footer> : <></>}
                </Card>
            </Col>
            </>)}
        </Row>
    </>),
}