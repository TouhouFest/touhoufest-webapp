/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import touhoufest_main from '../images/touhoufest_main.jpg';
import touhoufest_outer from '../images/touhoufest_outer.jpg';
import { Image } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function MapModals(){
    const [showOuter, setShowOuter] = useState(false);
    const [showInner, setShowInner] = useState(false);

    return (<>
        <p>Tap to focus in/zoom on either map as needed.</p>

        <Figure onClick={() => setShowOuter(true)}>
            <Figure.Image src={touhoufest_outer} fluid/>
            <Figure.Caption>Map of the entire convention center</Figure.Caption>
        </Figure>

        <p className="small"><FontAwesomeIcon icon={faCircleInfo} fixedWidth></FontAwesomeIcon> James Armstrong Theatre (TCAC) and Dance Studios (TCAC) aren't being used by TouhouFest events.</p>

        <Figure onClick={() => setShowInner(true)}>
            <Figure.Image src={touhoufest_main} fluid/>
            <Figure.Caption>Map of main areas of TouhouFest (The entirety of this map is contained within the bottom half of the first map)</Figure.Caption>
        </Figure>

        <Modal show={showOuter} size="lg" onHide={() => setShowOuter(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Outer TouhouFest Map</Modal.Title>
            </Modal.Header>
            <Modal.Body className="align-items-center px-0">
                <Image src={touhoufest_outer} fluid/>
            </Modal.Body>
        </Modal>

        <Modal show={showInner} size="lg" onHide={() => setShowInner(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Inner TouhouFest Map</Modal.Title>
            </Modal.Header>
            <Modal.Body className="align-items-center px-0">
                <Image src={touhoufest_main} fluid/>
            </Modal.Body>
        </Modal>

    </>);
}

export const conCenterPage = {
    "header": (<><FontAwesomeIcon icon={faMapLocationDot} fixedWidth></FontAwesomeIcon> Convention Maps</>),
    "body": (<><MapModals></MapModals></>)
}