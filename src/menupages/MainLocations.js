/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import torinoplaza from "./../images/torinoplaza.jpg";
import assemblyhall from "./../images/assemblyhall.png";
import kenmiller from "./../images/kenmiller.webp";
import pinewindgarden from "./../images/pinewindgarden.jpg";
import toyota from "./../images/toyota.jpg";
import { Alert, Figure } from 'react-bootstrap';

export const mainLocationsPage= {
  "header": (<><FontAwesomeIcon icon={faBuilding} fixedWidth></FontAwesomeIcon> Key Locations</>),
  "fluidImage": (<></>),
  "body": (
    <>
      <h4>Torino Plaza</h4>
      <p>Torino Plaza is TouhouFest's general open area for congregation. Various outdoor musical performances - including TAMUSIC's performance - will take place throughout the con.</p>
      <Figure>
          <Figure.Image src={torinoplaza} fluid rounded></Figure.Image>
          <Figure.Caption>Torino Plaza</Figure.Caption>
      </Figure>

      <h4>Assembly Hall</h4>
      <p>The Assembly Hall will be where most of the convention's highlight events take place.</p>
      <Figure>
          <Figure.Image src={assemblyhall} fluid rounded></Figure.Image>
          <Figure.Caption>Assembly Hall (furniture may be adjusted depending on the event)</Figure.Caption>
      </Figure>

      <h4>Ken Miller</h4>
      <p>Artist Alley and Vendors will be at Ken Miller.</p>
      <Figure>
          <Figure.Image src={kenmiller} fluid rounded/>
          <Figure.Caption>Ken Miller Recreation Center</Figure.Caption>
      </Figure>

      <h4>Pine Wind Garden</h4>
      <p>All cosplay photoshoots will take place at the Pine Wind Garden. Specific locations may vary within the garden for concurrent photoshoots - for more details consult a Cosplay Ambassador.</p>
      <Figure>
          <Figure.Image src={pinewindgarden} fluid rounded/>
          <Figure.Caption>Pine Wind Garden</Figure.Caption>
      </Figure>

      <h4>Toyota Hall</h4>
      <p>All gaming-related events will take place at the Toyota Hall.</p>
      <Figure>
          <Figure.Image src={toyota} fluid rounded></Figure.Image>
          <Figure.Caption>Toyota Meeting Hall</Figure.Caption>
      </Figure>

      <h4>Garden Room B</h4>
      <p>The majority of panels will take place at Garden Room B.</p>
      <Alert>TODO: add picture of panel room B when able</Alert>
   </>
  ),
}