/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faSquareXTwitter, faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Image } from 'react-bootstrap';
import Ratio from 'react-bootstrap/Ratio';
import con_banner from '../con_banner.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const aboutConPage = {
    "header": (<><FontAwesomeIcon icon={faCircleInfo} fixedWidth></FontAwesomeIcon> About the Con</>),
    "body": (
      <>
        <Image src={con_banner} fluid />
        <div className = "text-center mt-3">
          <h3 className="display-6">Welcome to TouhouFest!</h3>
          <p className="lead">April 27th-28th, 2024</p>
        </div>
        <Row className="text-center">
          <Col><a href="https://discord.com/invite/touhoufest" target="_blank" rel="noreferrer" className="text-black"><h5><FontAwesomeIcon icon={faDiscord} fixedWidth></FontAwesomeIcon></h5></a></Col>
          <Col><a href="https://twitter.com/TouhouFest" target="_blank" rel="noreferrer" className="text-black"><h5><FontAwesomeIcon icon={faSquareXTwitter} fixedWidth></FontAwesomeIcon></h5></a></Col>
          <Col><a href="https://www.facebook.com/TouhouFest" target="_blank" rel="noreferrer" className="text-black"><h5><FontAwesomeIcon icon={faSquareFacebook} fixedWidth></FontAwesomeIcon></h5></a></Col>
          <Col><a href="https://www.instagram.com/touhoufest/" target="_blank" rel="noreferrer" className="text-black"><h5><FontAwesomeIcon icon={faInstagram} fixedWidth></FontAwesomeIcon></h5></a></Col>
        </Row>
        <div className = "text-center mt-3">
          <h4>Torrance Cultural Arts Center</h4>
          <p>3330 Civic Center Dr, Torrance, CA 90503</p>

          <Ratio aspectRatio="16x9">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.9497761747903!2d-118.34651282403861!3d33.83940582893829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b52a55535501%3A0xbf414574f90a0717!2sTorrance%20Cultural%20Arts%20Center!5e0!3m2!1sen!2sus!4v1709492414671!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Ratio>
          <p class="small mb-0"><a href ="https://www.google.com/maps?ll=33.839401,-118.343938&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=13781372703427135255" target="_blank" rel="noreferrer">Google Maps Link (if embed isn't working)</a></p>
       </div>
       <p className="mt-3">
       A Touhou fan event being held on April 27-28th, 2024, at the Torrance Cultural Arts Center in Torrance, California. Touhou fans from across the country will gather to celebrate the coming season and enjoy all the Touhou community has to offer such as art, music, and more!
       </p>
      </>
    ),
}