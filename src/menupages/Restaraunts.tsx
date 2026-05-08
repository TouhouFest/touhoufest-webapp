/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faGlobeAmericas, faPepperHot, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Card, Row, Col, Carousel, Image } from 'react-bootstrap';
import okamoto from "./../images/okamoto.jpg";
import lupitastacos from "./../images/lupitas-tacos.jpg";
import poutinebrothers from "./../images/poutinebrothers.png";
import { maidacademy } from '../Utils';

import mainmenu from "./../images/maidacademymenu/mainmenu.jpg";
import entry01 from "./../images/maidacademymenu/entry01.jpg";
import entry02 from "./../images/maidacademymenu/entry02.jpg";
import entry03 from "./../images/maidacademymenu/entry03.jpg";
import { useState } from 'react';

function MaidCarousel() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        <Carousel.Item>
            <Image src={mainmenu} fluid rounded/>
        </Carousel.Item>
        <Carousel.Item>
            <Image src={entry01} fluid rounded/>
        </Carousel.Item>
        <Carousel.Item>
            <Image src={entry02} fluid rounded/>
        </Carousel.Item>
        <Carousel.Item>
            <Image src={entry03} fluid rounded/>
        </Carousel.Item>
    </Carousel>
  );
}

export const restarauntsPage = {
    "codename": "restaraunts",
    "header": (<><FontAwesomeIcon icon={faUtensils} fixedWidth></FontAwesomeIcon> Food</>),
    "fluidImage": (<></>),
    "body": (<>
        <h4>Food Options</h4>
        <p>The below food options are available TouhouFest for those interested. Locations are indicated for each food option.</p> 

        <Row className="justify-content-center">

        <Col xs={12} md={6} lg={true}>

        <Card className="mt-2">
            <Card.Header className="text-center small">Japanese Food Truck</Card.Header>
            <Card.Img src={okamoto} className="rounded-0"/>
            <Card.Body>
                <Card.Title>Okamoto Kitchen</Card.Title>
                <Card.Subtitle className="mb-2">Location: Circular Drive</Card.Subtitle>
                <Card.Text>Okamoto Kitchen brings people to authentic, lesser known Japanese dishes like Chicken Nanban, Cheese, Mochi, and Classic Style Japanese Curry.</Card.Text>
                <Card.Text>The vibrant Akiba-style decor and engaging customer service makes this food truck an experience you'll want to share with your friends!</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center small">
                <Card.Link href="https://okamotokitchen.com/#" target="_blank"><FontAwesomeIcon icon={faGlobeAmericas}/> Link</Card.Link>
                <Card.Link href="https://okamotokitchen.com/TakeOutMenu_Current.pdf" target="_blank"><FontAwesomeIcon icon={faBowlFood}/> Menu</Card.Link>
            </Card.Footer>
        </Card>

        </Col>

        <Col xs={12} md={6} lg={true}>
        <Card className="mt-2">
            <Card.Header className="text-center small">Poutine Food Truck</Card.Header>
            <Card.Img src={poutinebrothers} className="rounded-0"/>
            <Card.Body>
                <Card.Title>Poutine Brothers</Card.Title>
                <Card.Subtitle className="mb-2">Location: Circular Drive</Card.Subtitle>
                <Card.Text>Poutine Brothers will make their first appearance at this year's Touhoufest. They specialize in different styles of poutine. If you haven't had poutine before you're in for a treat. </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center small">
                <Card.Link href="https://poutinebrothers.com/" target="_blank"><FontAwesomeIcon icon={faGlobeAmericas}/> Link</Card.Link>
                <Card.Link href="https://static1.squarespace.com/static/6232a315838eac42a1d9696c/t/678888d8ce614b2156b4f6ee/1737001177635/Poutine+Brothers+Website.pdf" target="_blank"><FontAwesomeIcon icon={faUtensils}/> Menu</Card.Link>
            </Card.Footer>
        </Card>
        </Col>

        <Col xs={12} md={6} lg={true}>
        <Card className="mt-2">
            <Card.Header className="text-center small">Mexican Food Truck</Card.Header>
            <Card.Img src={lupitastacos} className="rounded-0"/>
            <Card.Body>
                <Card.Title>Lupitas Tacos</Card.Title>
                <Card.Subtitle className="mb-2">Location: Circular Drive</Card.Subtitle>
                <Card.Text>Lupitas Tacos will be returning again this year. They are known for their delicious Mexican cuisine. Be on the look out for their Touhoufest themed dishes. 
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center small">
                <Card.Link href="https://www.instagram.com/lupitastacos/?hl=en" target="_blank"><FontAwesomeIcon icon={faGlobeAmericas}/> Link</Card.Link>
                <Card.Link href="https://www.bestfoodtrucks.com/truck/lupita-s-tacos/menu" target="_blank"><FontAwesomeIcon icon={faPepperHot}/> Menu</Card.Link>
            </Card.Footer>
        </Card>
        </Col>

        <Col xs={12} md={6} lg={true}>
        <Card className="mt-2">
            <Card.Header className="text-center small">Snacks & Light Refreshments</Card.Header>
            <Card.Img src={maidacademy} className="rounded-0"/>
            <Card.Body>
                <Card.Title>Maid Academy Cafe</Card.Title>
                <Card.Subtitle className="mb-2">Location: Torino Plaza</Card.Subtitle>
                <Card.Text>Maid Academy Cafe is one of vendors/performers and will also be selling a selection of light refreshments and drinks at their vendors booth located in Torino Plaza.
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center small">
                <Card.Link href="https://linktr.ee/maidacademy" target="_blank"><FontAwesomeIcon icon={faGlobeAmericas}/> Link</Card.Link>
            </Card.Footer>
        </Card>
        </Col>
        </Row>

        <h5 className="my-3">Maid Academy Food Menu</h5>

        <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
                <MaidCarousel />
            </Col>
        </Row>

        <h4 className="mt-3">Other Options</h4>
        <p> This Google Maps link to <a href = "https://www.google.com/maps/search/Restaurants/@33.834631,-118.3583814,15z/data=!4m8!2m7!3m6!1sRestaurants!2sTorrance+Cultural+Arts+Center,+3330+Civic+Center+Dr,+Torrance,+CA+90503!3s0x80c2b52a55535501:0xbf414574f90a0717!4m2!1d-118.3439379!2d33.8394014?entry=ttu" target="_blank" rel="noreferrer">restaraunts nearby the Torrance Cultural Arts Center</a> may be helpful.</p>

    </>),
}