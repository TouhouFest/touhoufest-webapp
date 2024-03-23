/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYen, faExclamationCircle, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { Alert, ListGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import placeholder from "./../images/placeholder.jpg"
import torinoplaza from "./../images/torinoplaza.jpg";
import {Image} from 'react-bootstrap';

export const artistVendorsPage = {
    "header": (<><FontAwesomeIcon icon={faYen} fixedWidth></FontAwesomeIcon> Artist Alley & Vendors</>),
    "fluidImage": (<></>),
    "body": (<>
        <p>Artist Alley and Vendors will be held at the <b>Torino Plaza</b>, at the center of the main TouhouFest area.</p>
        <Image src={torinoplaza} fluid/>

        <h4 className="mt-2">Artist Alley</h4> 
        <Alert variant="warning"><FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon> This section is a placeholder until it can be populated with actual artists</Alert>
        <Row xs={2} className="g-3">
            <Col>
                <Card>
                    <Card.Img variant="top" src={placeholder}></Card.Img>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center">Artist Name</ListGroup.Item>
                        <ListGroup.Item className="text-center">Artist Location</ListGroup.Item>
                    </ListGroup>
                    <Card.Footer className="text-center"><a href="https://en.touhouwiki.net/wiki/Marisa_Kirisame" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> External Link</a></Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={placeholder}></Card.Img>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center">Artist Name</ListGroup.Item>
                        <ListGroup.Item className="text-center">Artist Location</ListGroup.Item>
                    </ListGroup>
                    <Card.Footer className="text-center"><a href="https://en.touhouwiki.net/wiki/Marisa_Kirisame" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> External Link</a></Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={placeholder}></Card.Img>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center">Artist Name</ListGroup.Item>
                        <ListGroup.Item className="text-center">Artist Location</ListGroup.Item>
                    </ListGroup>
                    <Card.Footer className="text-center"><a href="https://en.touhouwiki.net/wiki/Marisa_Kirisame" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> External Link</a></Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={placeholder}></Card.Img>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-center">Artist Name</ListGroup.Item>
                        <ListGroup.Item className="text-center">Artist Location</ListGroup.Item>
                    </ListGroup>
                    <Card.Footer className="text-center"><a href="https://en.touhouwiki.net/wiki/Marisa_Kirisame" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon> External Link</a></Card.Footer>
                </Card>
            </Col>
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