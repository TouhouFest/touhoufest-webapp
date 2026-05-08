import { IconDefinition, fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7,fa8, fa9, faA, faB, faC, faCircle, faCircleExclamation, faGamepad, faRestroom, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'universal-cookie';

export let colors = ["purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","silver","gray", "aqua"];

export const COOKIE_NAME = "BOOKMARKS";

export const CON_TIMEZONE:string = "America/Los_Angeles";

export const COLORSTATUS:string = "COLORSTATUS";

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

export function cmp(a:number,b:number) {return a > b;}

export function CircledBullets({argument}: {argument:string}){
    
    function returnicon(arg:IconDefinition,shrink:number=5,adds:string="") {
        return <FontAwesomeIcon icon={arg} color="white" fixedWidth transform={`shrink-${shrink} ${adds}`}/>;
    }

    let lettercomp = returnicon(fa0);
    let baseicon = faCircle;
    switch(argument){
        case 'A':
            lettercomp = returnicon(faA);
            break;
        case 'B':
            lettercomp = returnicon(faB);
            break;
        case '1':
            lettercomp = returnicon(fa1);
            break;
        case '2':
            lettercomp = returnicon(fa2);
            break;
        case '3':
            lettercomp = returnicon(fa3);
            break;
        case '4':
            lettercomp = returnicon(fa4);
            break;
        case '5':
            lettercomp = returnicon(fa5);
            break;
        case '6':
            lettercomp = returnicon(fa6);
            break;
        case '7':
            lettercomp = returnicon(fa7);
            break;
        case '8':
            lettercomp = returnicon(fa8);
            break;
        case '9':
            lettercomp = returnicon(fa9);
            break;
        case '10':
            lettercomp = <span>{returnicon(fa1, 6, "left-3")}{returnicon(fa0, 6, "right-3")}</span>
            break;
        case '11':
            lettercomp = <span>{returnicon(fa1, 6, "left-3")}{returnicon(fa1, 6, "right-3")}</span>
            break;
        case '12':
            lettercomp = <span>{returnicon(fa1, 6, "left-3")}{returnicon(fa2, 6, "right-3")}</span>
            break;
        case '13':
            lettercomp = <span>{returnicon(fa1, 6, "left-3")}{returnicon(fa3, 6, "right-3")}</span>
            break;
        case '14':
            lettercomp = <span>{returnicon(fa1, 6, "left-3")}{returnicon(fa4, 6, "right-3")}</span>
            break;
        case '15':
            lettercomp = <span>{returnicon(fa1, 6, "left-3")}{returnicon(fa5, 6, "right-3")}</span>
            break;
        case '16':
            lettercomp = <span>{returnicon(fa1, 6, "left-3")}{returnicon(fa6, 6, "right-3")}</span>
            break;
        case "C":
            lettercomp = returnicon(faC);
            break;
        case "restroom":
            lettercomp = returnicon(faRestroom);
            baseicon = faSquare;
            break;
        default:
            break;
    }

    return (<>
        <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={baseicon} fixedWidth color="black"/>
            {lettercomp}    
        </span> 
    </>);
}

// location imports 
import con_banner from "./con_banner.jpg";
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
import maidacademy from "./images/artistalley/maidacademy.webp";

import neosanctum from "./images/artistalley/neosanctum.jpg";
import suzukann from "./images/suzukann.jpg";
import { Alert, Col, ListGroup, Row } from 'react-bootstrap';

export {con_banner, toyota, kenmiller, pinewindgarden, assemblyhall, entryplaza, torinoplaza, nakanotheatre, odyssey, shihori, tam, placeholder, artistalleymap, vendorsmap, torinoplazamap, gamingmap, neosanctum, maidacademy, suzukann};

export const DEFAULTNOTIFY:string = "DEFAULTNOTIFY";

// consts to determine if the app should display event times relative to the CON
// or to the DEVICE TZ
export const NATIVETIMETYPE:string = "NATIVETIMETYPE";
export const USECONTZ:string = "USECONTZ";
export const USEDEVICETZ:string = "USEDEVICETZ";

export function WarningAlert({children}:{children:any}) {
    return (<>
        <Alert variant="warning">
            <p><FontAwesomeIcon icon={faCircleExclamation}/> <b>Warning!</b></p>
            <div>{children}</div>
        </Alert> 
    </>);
}

import {Badge, Image} from 'react-bootstrap';

export function EventTypeGenerator({text}: {text:string}) {
    return (<><Badge pill className={text.replace(" ","_")+ ' me-1'}>{/*<FontAwesomeIcon icon={faGamepad}/>*/}{text}</Badge></>);
}

import gohei_border from "./gohei_border.svg";
import hakurei_border from "./hakurei_border.svg";

export function MakeGoheiHeader({content, vertical_margin=true, larger_header=false} : {content:JSX.Element | string, vertical_margin?:boolean, larger_header?:boolean}) {
    return (          
    <Row className={"g-0 " + (vertical_margin ? "my-2" : "")}>
      <Col>
        <ListGroup.Item className="newtimes">
          {larger_header ? <h2 className="mb-0">{content}</h2> : <h4 className="mb-0">{content}</h4>}
        </ListGroup.Item>
      </Col>
      <Col xs="auto" className="newtimes-filler text-center">
        <Image src={hakurei_border} className="h-100 w-auto mx-auto"/>
      </Col>
      <Col xs="1" className="newtimes-end"></Col>
      <Col xs="auto"><Image src={gohei_border} className="h-100 filter-shadow object-fit-cover w-100" /></Col>
    </Row>
);
}