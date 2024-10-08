import { fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7,fa8, fa9, faA, faB, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'universal-cookie';

export let colors = ["purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","silver","gray", "aqua"];

export const COOKIE_NAME = "BOOKMARKS";

let today = new Date();
today.setDate(today.getDate() + 30);
export const cookie_parameters = {expires: today, sameSite:"lax" as const}
export const cookies = new Cookies();

export function get_cookie_list(){
    let current_cookie_list = cookies.get(COOKIE_NAME);
    if(current_cookie_list === undefined){
        current_cookie_list = [];
    }
    else{
        current_cookie_list = current_cookie_list.split(",");
        if(current_cookie_list.includes("")){
            current_cookie_list.splice(current_cookie_list.indexOf(""),1);
        }
    }
    return current_cookie_list;
}

export function cmp(a,b) {return a > b;}

export function CircledBullets({argument}){
    let lettercomp = <FontAwesomeIcon icon={fa0} inverse fixedWidth transform="shrink-5"/>
    switch(argument){
        case 'A':
            lettercomp = <FontAwesomeIcon icon={faA} inverse fixedWidth transform="shrink-5"/>
            break;
        case 'B':
            lettercomp = <FontAwesomeIcon icon={faB} inverse fixedWidth transform="shrink-5"/>
            break;
        case '1':
            lettercomp = <FontAwesomeIcon icon={fa1} inverse fixedWidth transform="shrink-5"/>
            break;
        case '2':
            lettercomp = <FontAwesomeIcon icon={fa2} inverse fixedWidth transform="shrink-5"/>
            break;
        case '3':
            lettercomp = <FontAwesomeIcon icon={fa3} inverse fixedWidth transform="shrink-5"/>
            break;
        case '4':
            lettercomp = <FontAwesomeIcon icon={fa4} inverse fixedWidth transform="shrink-5"/>
            break;
        case '5':
            lettercomp = <FontAwesomeIcon icon={fa5} inverse fixedWidth transform="shrink-5"/>
            break;
        case '6':
            lettercomp = <FontAwesomeIcon icon={fa6} inverse fixedWidth transform="shrink-5"/>
            break;
        case '7':
            lettercomp = <FontAwesomeIcon icon={fa7} inverse fixedWidth transform="shrink-5"/>
            break;
        case '8':
            lettercomp = <FontAwesomeIcon icon={fa8} inverse fixedWidth transform="shrink-5"/>
            break;
        case '9':
            lettercomp = <FontAwesomeIcon icon={fa9} inverse fixedWidth transform="shrink-5"/>
            break;
        case '10':
            lettercomp = <span><FontAwesomeIcon icon={fa1} inverse fixedWidth transform="shrink-6 left-3"/><FontAwesomeIcon icon={fa0} inverse fixedWidth transform="shrink-6 right-3"/></span>
            break;
        case '11':
            lettercomp = <span><FontAwesomeIcon icon={fa1} inverse fixedWidth transform="shrink-6 left-3"/><FontAwesomeIcon icon={fa1} inverse fixedWidth transform="shrink-6 right-3"/></span>
            break;
        case '12':
            lettercomp = <span><FontAwesomeIcon icon={fa1} inverse fixedWidth transform="shrink-6 left-3"/><FontAwesomeIcon icon={fa2} inverse fixedWidth transform="shrink-6 right-3"/></span>
            break;
        case '13':
            lettercomp = <span><FontAwesomeIcon icon={fa1} inverse fixedWidth transform="shrink-6 left-3"/><FontAwesomeIcon icon={fa3} inverse fixedWidth transform="shrink-6 right-3"/></span>
            break;
        case '14':
            lettercomp = <span><FontAwesomeIcon icon={fa1} inverse fixedWidth transform="shrink-6 left-3"/><FontAwesomeIcon icon={fa4} inverse fixedWidth transform="shrink-6 right-3"/></span>
            break;
        case '15':
            lettercomp = <span><FontAwesomeIcon icon={fa1} inverse fixedWidth transform="shrink-6 left-3"/><FontAwesomeIcon icon={fa5} inverse fixedWidth transform="shrink-6 right-3"/></span>
            break;
        default:
            break;
    }

    return (<>
        <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faCircle} fixedWidth/>
            {lettercomp}    
        </span> 
    </>);
}

// location imports 
import con_banner from "./con_banner.png";
import toyota from "./images/toyota.jpg";
import kenmiller from "./images/kenmiller.webp";
import pinewindgarden from "./images/pinewindgarden.jpg";
import assemblyhall from "./images/assemblyhall.jpg";
import entryplaza from "./images/entryplaza.jpg";
import torinoplaza from "./images/torinoplaza.jpg";
import nakanotheatre from "./images/nakanotheatre.jpg";
import odyssey from "./images/odyssey.jpg";
import shihori from "./images/shihori.jpg";
import tam from "./images/tam.jpg";
import placeholder from "./images/placeholder.png";
import artistalleymap from "./images/artistalleymap.png";
import vendorsmap from "./images/vendorsmap.png";
import torinoplazamap from "./images/torinoplazamap.png";
import gamingmap from "./images/gamingmap.jpg";

export {con_banner, toyota, kenmiller, pinewindgarden, assemblyhall, entryplaza, torinoplaza, nakanotheatre, odyssey, shihori, tam, placeholder, artistalleymap, vendorsmap, torinoplazamap, gamingmap};