import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar, faFilter, faBook, faHeart, faCheck, faMagnifyingGlass, faCalendarDays, faComment, IconDefinition, faToriiGate, faBroom, faCircle, faAngleRight, faFilterCircleXmark, faBars, faChevronRight, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import FilterOptions from "./FilterOptions"
import MenuPage from "./MenuPage"
import Dataset from "./Dataset";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DarkModeSelector from './DarkModeSelector';
import { COLORSTATUS, getColorState } from './Utils';
import MainMenuOffcanvas from './MainMenuOffcanvas';
import {App as CapacitorApp} from '@capacitor/app';

import touhoufest from "./images/touhoufest.jpg";
import touhoufest_dark from "./images/touhoufest_dark.jpg";
import { Stack } from 'react-bootstrap';

import { faStar } from '@fortawesome/free-regular-svg-icons';
import { Link, Outlet } from 'react-router';


function MainWrapper({ menupagedata, menuheader }: {menupagedata:Record<string, JSX.Element>[], menuheader:JSX.Element|JSX.Element[]}) { 

  // indicator for home, bookmarks, filtering
  // const [mode, setMode] = useState("home");
  // const [filterOptions, setFilterOptions] = useState({});

  // show/dont show filter
  // const [showFilterPane, setshowFilterPane] = useState(false);
  // const handleFilterPaneOnHide = () => setshowFilterPane(false);

  // keep track of query status
  // const [appliedFilters, setAppliedFilters] = useState({ "event_types": [], "room_list": [], "search_query": "" });
  // function wereFiltersApplied() {
  //   return appliedFilters["event_types"].length > 0 || appliedFilters["room_list"].length > 0 || appliedFilters["search_query"] !== "";
  // }

  // keep track of opened/closed status of menu pages
  // const [menupagebools, setMenuPages] = useState(Array(menupagedata.length).fill(false));

  // let initScrollSettings:Record<string,number> = { "home": 0, "bookmarks": 0, "filter": 0 };
  // const [scrollSettings, setScrollSettings] = useState(initScrollSettings);

  const [availableDays, setAvailableDays] = useState([]);
  // decomissioned with fragments inplace instead
  // const [activeDayIndex, setActiveDayIndex] = useState(0);
  // const [summonDayScroll, setSummonDayScoll] = useState(0);

  const [showMainMenu, setShowMainMenu] = useState(false);

  // const [showEventDescription, setShowEventDescription] = useState(false);

  const [selectedDay, setSelectedDay] = useState("All Days");

  // state variables/functions for setting color theme
  // (i cant beievei its this much typescript all for changing the color theme :skull:)
  const [oppositecolorState, setOppositeColorState] = useState(getColorState());

  function grabTrueColorState(input:IconDefinition) {
    if(input === faToriiGate) {return faBroom;}
    else{ return faToriiGate;}
  }

  // function changeMenuPageState(idx:number, isDisplayed:boolean) {
  //   let newstate = [...menupagebools];
  //   newstate[idx] = isDisplayed;
  //   setMenuPages(newstate);
  // }
  // function getMenuState(idx:number) { return menupagebools[idx]; }

  // function handleRoleChange(type:string) {

  //   let oldmode = mode;

  //   let changedScroll = { ...scrollSettings };
  //   changedScroll[oldmode] = window.scrollY;
  //   setScrollSettings({
  //     "home": changedScroll["home"],
  //     "bookmarks": changedScroll["bookmarks"],
  //     "filter": changedScroll["filter"]
  //   });
  //   // window.scrollTo(0,changedScroll[oldmode]);

  //   let newmode = "";
  //   // case 1: applying filters for the first time
  //   if (oldmode !== "filter" && type === "filterView" && !wereFiltersApplied()) {
  //     setshowFilterPane(true);
  //     newmode = "filter";
  //   }
  //   // case 2: moving to filters page, and filters were applied
  //   else if (oldmode !== "filter" && type === "filterView") {
  //     newmode = "filter";
  //   }
  //   // case 3: already on filters page, tapping again to edit
  //   else if(oldmode === "filter" && type === "filterView") {
  //     setshowFilterPane(true);
  //     newmode = oldmode;
  //   }
  //   // case 4: already on bookmarks, tapping again to exit
  //   else if (oldmode === "bookmarks" && type === oldmode) {
  //     newmode = "home";
  //   } 
  //   // case 5: everything else
  //   else {
  //     newmode = type;
  //   }

  //   setMode(newmode);

  // }

  // function dualLink(params:any, mode:string) {
  //   if (mode === "toFilterOptions") {
  //     setFilterOptions(params);
  //   }
  //   else if (mode === "toDataSet") {
  //     setAppliedFilters(params);
  //   }
  // }

  // TODO: need to figure how to avoid prematurely closing the app
  // useEffect(() => {
  //   if(showFilterPane === false && showMainMenu === false && menupagebools.every(v => !v) && showEventDescription === false ) {
  //     CapacitorApp.addListener('backButton', () => {
  //       CapacitorApp.exitApp();
  //     })
  //   }
  // }, [showFilterPane, showMainMenu, menupagebools, showEventDescription]);

  const [activeMenuKey, setActiveMenuKey] = useState("dataset");

  function setActiveMenuItem(codename:string) {
    setActiveMenuKey(codename);
    setShowMainMenu(false);
  }

  let menunavs = [<Nav.Link onClick={() => setActiveMenuItem("dataset")} className={activeMenuKey === "dataset" ? "menu-selected" : ""} to={"/"} eventKey={"dataset"} as={Link}><FontAwesomeIcon icon={faBookOpen} fixedWidth/> Schedule <FontAwesomeIcon icon={faChevronRight} className="ms-2"/></Nav.Link>];
                        
  // let menupages = [];

  for (const [i, entry] of menupagedata.entries()) {
    menunavs.push(<Nav.Link onClick={() => setActiveMenuItem(entry["codename"])} className={activeMenuKey === entry["codename"] ? "menu-selected" : ""} to={"/" + entry["codename"]} eventKey={entry["codename"]} as={Link}>{entry["header"]} <FontAwesomeIcon icon={faChevronRight} className="ms-2"/></Nav.Link>);
    // menupages.push(
    //   <MenuPage show_var={() => getMenuState(i)} hide_fxn={changeMenuPageState} idx={i}>
    //     <MenuPage.Header >{entry["header"]}</MenuPage.Header>
    //     <MenuPage.Body fluidImage={entry["fluidImage"]} mainText={entry["body"]}></MenuPage.Body>
    //   </MenuPage>
    // );
  }

  // let filterclass = "hasFilters p-1 me-2 align-items-center";
  // let num_filters = appliedFilters["event_types"].length + appliedFilters["room_list"].length;
  // let filter_active:boolean = !(num_filters === 0 && appliedFilters["search_query"] === "");

  // // this useeffect runs whenever mode changes, and after the display set is repopulated
  // useEffect(() => {
  //   window.scrollTo({ top: scrollSettings[mode], behavior:  'instant' });
  // }, [mode]);


  let rendered_days = availableDays.map((day) => {
    // onClick={() => { handleDaySelect(day)}
    return (<NavDropdown.Item className={selectedDay === day ? "newtimes-filler" : ""} onClick={() => {setSelectedDay(day)}}>{day}</NavDropdown.Item>);
  });

  // function returnFilterIndicator() : JSX.Element {
  //   return (<span className="fa-layers fa-fw fa-2x">
  //     <FontAwesomeIcon icon={faFilter} className={mode === "filterView" ? "starred-active" : ""}/>
  //     {filter_active ? <FontAwesomeIcon icon={faCircle} transform="shrink-7 right-6 up-6" className="filter-indicator"/> : <></>}
  //   </span>);
  // }

    return <>
     <div className="App">
        <Navbar collapseOnSelect expand={false} className="sticky-top mb-0 shadow-sm"  id="main-navbar" onSelect={() => setShowMainMenu(false)}>
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} onClick={() => setShowMainMenu(true)} className="border-0">
              <FontAwesomeIcon icon={faBars} className='fa-2x'/>
            </Navbar.Toggle>
            <Navbar.Brand className="ms-2">
              {/* if desired to dynamically change page title based on scroll position, start here */}
              {/* title={(availableDays.length > 0) ? availableDays[activeDayIndex] : ""} */}
              {activeMenuKey === "dataset" &&
              <NavDropdown title={selectedDay} id="day-dropdown-widget">
                { rendered_days }
                <NavDropdown.Item className={selectedDay === "All Days" ? "newtimes-filler" : ""} onClick={() => {setSelectedDay("All Days")}}>All Days</NavDropdown.Item>
              </NavDropdown>
              }
            </Navbar.Brand>
            <MainMenuOffcanvas 
              mainIcon={<FontAwesomeIcon icon={grabTrueColorState(oppositecolorState)} fixedWidth/>} 
              menuheader={menuheader} 
              touhoufest={grabTrueColorState(oppositecolorState) === faBroom ? touhoufest_dark : touhoufest} 
              menunavs={menunavs} 
              darkModeSelector={<DarkModeSelector oppositecolorState={oppositecolorState} setOppositeColorState={setOppositeColorState}/>}
              showMainMenu={showMainMenu} setShowMainMenu={setShowMainMenu}
            />

            <div className="d-flex order-1 ms-auto" id="filter-widget">
              {/* <Nav className="flex-row">
                <Nav.Link href="#home" className="me-2" onClick={() => handleRoleChange("filter")}>
                  {returnFilterIndicator()} Edit Filters
                </Nav.Link>
              </Nav> */}
            </div>
          </Container>
        </Navbar>

        <Outlet context={[availableDays, setAvailableDays, selectedDay, setSelectedDay]}/>

    </div>
    {/* menupages */}
    </>;
}

export default MainWrapper;