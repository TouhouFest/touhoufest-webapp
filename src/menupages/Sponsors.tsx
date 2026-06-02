/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faFire, faGlobe, faSquareParking } from '@fortawesome/free-solid-svg-icons';
import { Card, Carousel, Col, Image, Row } from 'react-bootstrap';

import murasaki01 from "./../images/sponsors/murasaki/murasaki01.jpg";
import murasaki02 from "./../images/sponsors/murasaki/murasaki02.jpg";
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { MakeGenericCard } from '../Utils';

export const sponsorsPage = {
    "codename":"sponsors",
    "header": (<><FontAwesomeIcon icon={faFire} fixedWidth></FontAwesomeIcon> Sponsors</>),
    "fluidImage": (<></>),
    "body": (<>

        {/*
        <Row className="justify-content-center align-self-center">
            <Col xs={12} md={10} lg={6}>
                <Card>
                    <Card.Header className="text-center">
                        <Card.Link href="www.murasakikakurega.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEarthAmericas}/></Card.Link>
                        <Card.Link href="https://www.facebook.com/people/Murasaki-Kakurega/61573073595244/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/></Card.Link>
                        <Card.Link href="https://www.instagram.com/mkmangacafe/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></Card.Link>
                        <Card.Link href="https://x.com/MurasakiKak" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter}/></Card.Link>
                        <Card.Link href="https://www.tiktok.com/@mkmangacafe?lang=en" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTiktok}/></Card.Link>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Murasaki Kakurega</Card.Title>
                        <Card.Text>A vibrant hub for manga lovers and anime enthusiasts, offering an exclusive lounge experience. Dive into captivating manga, join cosplay events, enjoy anime movie marathons, engage in epic gaming tournaments, and connect with a passionate community. Where stories come to life, friendships are forged, and creativity thrives.</Card.Text>
                        <Carousel interval={null}>
                            <Carousel.Item>
                                <Image src={murasaki01} fluid rounded/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={murasaki02} fluid rounded/>
                            </Carousel.Item>
                        </Carousel>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
        */}
    </>),
}