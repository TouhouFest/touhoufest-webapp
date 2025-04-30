import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';

import totebag from "./../images/conmerch/totebag.png";
import lightstick_freeze from "./../images/conmerch/lightstick_freeze.png";
import lightstick_cloudie from "./../images/conmerch/lightstick_cloudie.png";
import lanyard from "./../images/conmerch/lanyard.png";
import marisapin from "./../images/conmerch/marisapin.png";
import enamelpin from "./../images/conmerch/enamelpin.png";

let pricelist = [
    {
        "price": "$15.00",
        "title": "TouhouFest 2025 Tote Bag",
        "description": "TouhouFest’s official 2025 exclusive tote bag featuring various Touhou Project characters, including Reimu Hakurei, Marisa Kirisame, Sanae Kochiya, Cirno, Reisen Udongein Inaba, and Youmu Konpaku!",
        "photo": totebag,
        "notes": ""
    },
    {
        "price": "$40.00",
        "title": "TouhouFest Live 2025 Lightstick Freeze-Ex Ver. ",
        "description": "New to TouhouFest this year are exclusively branded lightsticks made in collaboration with Neon Shrine! Featuring artwork of Reimu Hakurei, cheer for your favorite performers with these lightsticks during TouhouFest Live 2025, where live performances will take place throughout the event!",
        "photo":lightstick_freeze,
        "notes": "May be in short supply!"
    },
    {
        "price": "$40.00",
        "title": "TouhouFest Live 2025 Lightstick CookieTanuki Ver. ",
        "description": "New to TouhouFest this year are exclusively branded lightsticks made in collaboration with Neon Shrine! Featuring artwork of various Touhou characters, cheer for your favorite performers with these lightsticks during TouhouFest Live 2025, where live performances will take place throughout the event!",
        "photo": lightstick_cloudie,
        "notes": "May be in short supply!"
    },
    {
        "price": "$5.00",
        "title": "TouhouFest Lanyard",
        "description": "TouhouFest's official lanyard!",
        "photo": lanyard,
        "notes": ""
    },
    {
        "price": "$15.00",
        "title": "TouhouFest 2025 Tote Bag",
        "description": "TouhouFest’s official 2025 exclusive tote bag featuring various Touhou Project characters, including Reimu Hakurei, Marisa Kirisame, Sanae Kochiya, Cirno, Reisen Udongein Inaba, and Youmu Konpaku!",
        "photo": marisapin,
        "notes": ""
    },
    {
        "price": "$15.00",
        "title": "TouhouFest Logo Enamel Pin",
        "description": "TouhouFest’s official enamel pin featuring the TouhouFest logo! ",
        "photo": enamelpin,
        "notes": ""
    }
];

export const conMerchPage= {
    "header": (<><FontAwesomeIcon icon={faBagShopping} fixedWidth></FontAwesomeIcon> Con Merch</>),
    "fluidImage": (<></>),
    "body": (<>
        <p>The below items are available for purchase at TouhouFest's Merch Booth! It is located in the <b>Entry Plaza</b> at <b>Booth V09</b>. (See below map)</p>
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