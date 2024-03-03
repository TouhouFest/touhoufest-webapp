/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

export const aboutConPage = {
    "header": (<><FontAwesomeIcon icon={faCircleInfo} fixedWidth></FontAwesomeIcon> About the Con</>),
    "body": (
      <>
        <h4><a href="http://www.conjanai.org/" target="_blank" rel="noreferrer">Con Ja Nai XXVII</a></h4>
          <p>A free mini-anime convention hosted by <a href="https://maizepages.umich.edu/organization/animania" target="_blank" rel="noreferrer">Animania</a>, U of M's anime club</p>
        <h5>Sponsors and Affiliates</h5>
        <ul>
          <li><a href="https://maizepages.umich.edu/organization/ontaku" target="_blank" rel="noreferrer">Ontaku</a> (<a href="https://discord.gg/UQze7V7" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon> Discord</a>)</li>
          <li><a href="https://dreamscomechuu.square.site/" target="_blank" rel="noreferrer">Dreams Come Chuu Maid Cafe</a></li>
          <li><a href="https://ii.umich.edu/cjs" target="_blank" rel="noreferrer">U of M Center of Japanese Studies</a></li>
          <li><a href="https://www.vaultofmidnight.com/" target="_blank" rel="noreferrer">Vault of Midnight</a></li>
          <li><a href="https://maruposeggtarts.square.site/about-us" target="_blank" rel="noreferrer">Marupo's Egg Tarts</a></li>
          <li><a href="https://www.csg.umich.edu/sofc" target="_blank" rel="noreferrer">U of M SOFC</a></li>
        </ul>
        <h5>Donate to Animania</h5>
        <p>Animania would appreciate donations of any amount to ensure that large events like Con Ja Nai can continue to be organized into the future.</p>
        <p>If you are interested, please send any monetary contributions to our Venmo at <b>@Animania</b>. Thank you very much for your support!</p>
      </>
    ),
}