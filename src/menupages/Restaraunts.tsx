/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowUpRightFromSquare, faBowlFood, faGlobeAmericas, faPepperHot, faSquareArrowUpRight, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Card, Row, Col, Carousel, Image } from 'react-bootstrap';
import okamoto from "./../images/okamoto.jpg";
import lupitastacos from "./../images/lupitas-tacos.jpg";
import thefixonwheels from "./../images/thefixonwheels.jpg";
import poutinebrothers from "./../images/poutinebrothers.png";
import {MakeGenericCard, MakeGoheiHeader, maidacademy } from '../Utils';
import sabroso from "./../images/sabroso.jpg";

import mainmenu from "./../images/maidacademymenu/mainmenu.jpg";
import entry01 from "./../images/maidacademymenu/entry01.jpg";
import entry02 from "./../images/maidacademymenu/entry02.jpg";
import entry03 from "./../images/maidacademymenu/entry03.jpg";

import friday01 from "./../images/maidacademymenu/friday01.png";
import friday02 from "./../images/maidacademymenu/friday02.png";

import { useState } from 'react';
import { GlobalTransformWrapper } from '../GlobalTransformWrapper';

function MaidCarousel({imagelist}: {imagelist:string[]}) {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} >

        {imagelist.map((image) => <Carousel.Item>
            <GlobalTransformWrapper src={image} caption=""/>
        </Carousel.Item>)}

    </Carousel>
  );
}

export const restarauntsPage = {
    "codename": "restaraunts",
    "header": (<><FontAwesomeIcon icon={faUtensils} fixedWidth></FontAwesomeIcon> Food</>),
    "fluidImage": (<></>),
    "body": (<>
        <p>The below food options are available TouhouFest for those interested. Locations are indicated for each food option.</p> 


        <Row className="justify-content-center">

        <Col xs={12} md={6} lg={true}>
            <MakeGenericCard subtitle="Japanese Food Truck" title="Okamoto Kitchen" picture={okamoto} location="Front Circular Drive" links={
                [
                    {"link": "https://okamotokitchen.com/#", "title": <><FontAwesomeIcon icon={faGlobeAmericas}/> Website</>}, 
                    {"link": "https://okamotokitchen.com/TakeOutMenu_Current.pdf", "title": <><FontAwesomeIcon icon={faBowlFood}/> Menu</>}
                ]
            }>
                <p>Okamoto Kitchen brings people to authentic, lesser known Japanese dishes like Chicken Nanban, Cheese, Mochi, and Classic Style Japanese Curry.</p>
                <p>The vibrant Akiba-style decor and engaging customer service makes this food truck an experience you'll want to share with your friends!</p>
            </MakeGenericCard>
        </Col>

        <Col xs={12} md={6} lg={true}>
            <MakeGenericCard subtitle="Burger Food Truck" title="The Fix on Wheels" picture={thefixonwheels} location="Front Circular Drive" links={
                [
                    {"link": "https://www.yelp.com/biz/the-fix-on-wheels-los-angeles?dd_referrer=", "title": <><FontAwesomeIcon icon={faGlobeAmericas}/> Website</>}, 
                    {"link": "https://thefixonwheels.com/menu/", "title": <><FontAwesomeIcon icon={faUtensils}/> Menu</>}
                ]
            }>
                <p>The Fix on Wheels started as a way to bring the amazing food of The Fix Burger in Silver Lake to other neighborhoods in the greater Los Angeles area.</p>
            </MakeGenericCard>
       </Col>

        <Col xs={12} md={6} lg={true}>
            <MakeGenericCard subtitle='Snacks & Light Refreshments' title="Maid Academy Cafe" location='Torino Plaza' picture={maidacademy} links={
                [
                        {"link": "https://linktr.ee/maidacademy", "title": <><FontAwesomeIcon icon={faGlobeAmericas}/> Website</>}, 
                ]
            }>
                <p>Maid Academy Cafe is one of vendors/performers and will also be selling a selection of light refreshments and drinks at their vendors booth located in Torino Plaza.</p>
            </MakeGenericCard>
        </Col>
        <Col xs={12} md={6} lg={true}>
            <MakeGenericCard subtitle='BBQ & Burgers' title="Sabroso Mobile Kitchen" location='Front Circular Drive' picture={sabroso} links={
                [
                        {"link": "https://www.yelp.com/biz/sabroso-mobile-kitchen-santa-ana", "title": <><FontAwesomeIcon icon={faGlobeAmericas}/> Website</>}, 
                ]
            }>
                <p>A food truck for BBQ, smoked ribs, and burgers that many people will enjoy</p>
            </MakeGenericCard>
        </Col>
        </Row>

        <h4 className="mt-3">Other Options</h4>
        <p> This Google Maps link to <a href = "https://www.google.com/maps/search/Restaurants/@33.834631,-118.3583814,15z/data=!4m8!2m7!3m6!1sRestaurants!2sTorrance+Cultural+Arts+Center,+3330+Civic+Center+Dr,+Torrance,+CA+90503!3s0x80c2b52a55535501:0xbf414574f90a0717!4m2!1d-118.3439379!2d33.8394014?entry=ttu" target="_blank" rel="noreferrer">restaraunts nearby the Torrance Cultural Arts Center</a> may be helpful.</p>

        <MakeGoheiHeader content="Maid Academy Information"/>

        <h4>Maid Academy Cafe's Day 0 Picnic Plaza</h4>

        <p>Maid Academy brings a interactive outdoor mini cafe experience featuring Touhou themed maids, fresh food and drinks, games, performances, and plenty of Touhou inspired music.</p>
        <p><b>Note</b> Reservations are required for seating. Please use the below link to get registered:</p>

        <a className="text-center text-reset text-decoration-none" href="https://www.eventbrite.com/e/1990580397554?aff=oddtdtcreator" target="_blank" rel="noreferrer"><h5 className="mb-3">Picnic Plaza Registration Link <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></h5></a>

        <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
                <MaidCarousel imagelist={[friday01, friday02]}/>
            </Col>
        </Row>

        {/*
        <h4 className="my-3">Maid Academy Saturday & Sunday Food Menu</h4>

        <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
                <MaidCarousel imagelist=[mainmenu, entry01, entry02, entry03]/>
            </Col>
        </Row>

        */}


    </>),
}