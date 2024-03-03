/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const directionsPage = {
    "header": (<><FontAwesomeIcon icon={faLocationDot} fixedWidth></FontAwesomeIcon> Directions</>),
    "body": (<>test</>),
}