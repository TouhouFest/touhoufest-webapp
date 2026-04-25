import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar, faFilter, faBook, faHeart, faCheck, faMagnifyingGlass, faCalendarDays, faComment, IconDefinition, faToriiGate, faBroom, faCircle } from '@fortawesome/free-solid-svg-icons';
import FilterOptions from "./FilterOptions"
import MenuPage from "./MenuPage"
import Dataset from "./Dataset";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DarkModeSelector from './DarkModeSelector';
import { COLORSTATUS } from './Utils';
import MainMenuOffcanvas from './MainMenuOffcanvas';
import {App as CapacitorApp} from '@capacitor/app';

import touhoufest from "./images/touhoufest.jpg";
import touhoufest_dark from "./images/touhoufest_dark.jpg";

function App({ menupagedata, menuheader }: {menupagedata:Record<string, JSX.Element>[], menuheader:JSX.Element|JSX.Element[]}) {

  // indicator for home, bookmarks, filtering
  const [mode, setMode] = useState("home");
  const [filterOptions, setFilterOptions] = useState({});

  // show/dont show filter
  const [showFilterPane, setshowFilterPane] = useState(false);
  const handleFilterPaneOnHide = () => setshowFilterPane(false);

  // keep track of query status
  const [appliedFilters, setAppliedFilters] = useState({ "event_types": [], "room_list": [], "search_query": "" });

  // keep track of opened/closed status of menu pages
  const [menupagebools, setMenuPages] = useState(Array(menupagedata.length).fill(false));

  let initScrollSettings:Record<string,number> = { "home": 0, "bookmarks": 0, "filter": 0 };
  const [scrollSettings, setScrollSettings] = useState(initScrollSettings);

  const [availableDays, setAvailableDays] = useState([]);
  // decomissioned with fragments inplace instead
  // const [activeDayIndex, setActiveDayIndex] = useState(0);
  // const [summonDayScroll, setSummonDayScoll] = useState(0);

  const [showMainMenu, setShowMainMenu] = useState(false);

  const [showEventDescription, setShowEventDescription] = useState(false);

  let [selectedDay, setSelectedDay] = useState("All Days");

  // state variables/functions for setting color theme
  // (i cant beievei its this much typescript all for changing the color theme :skull:)
  const [oppositecolorState, setOppositeColorState] = useState(getColorState());
  function getColorState() {
      let status:string|null = localStorage.getItem(COLORSTATUS);
      if(status === null ){
        if((window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.setAttribute('data-bs-theme','dark');
          return faToriiGate;
        }
        else {
          document.documentElement.setAttribute('data-bs-theme','light');
          return faBroom;
        }
      }
      if(status === "light") {
        document.documentElement.setAttribute('data-bs-theme','light');
        return faBroom;
      }
      else {
        document.documentElement.setAttribute('data-bs-theme','dark');
        return faToriiGate;
      }
  }
  function grabTrueColorState(input:IconDefinition) {
    if(input === faToriiGate) {return faBroom;}
    else{ return faToriiGate;}
  }

  function changeMenuPageState(idx:number, isDisplayed:boolean) {
    let newstate = [...menupagebools];
    newstate[idx] = isDisplayed;
    setMenuPages(newstate);
  }
  function getMenuState(idx:number) { return menupagebools[idx]; }

  function handleRoleChange(type:string) {

    let oldmode = mode;

    let changedScroll = { ...scrollSettings };
    changedScroll[oldmode] = window.scrollY;
    setScrollSettings({
      "home": changedScroll["home"],
      "bookmarks": changedScroll["bookmarks"],
      "filter": changedScroll["filter"]
    });
    // window.scrollTo(0,changedScroll[oldmode]);

    let newmode = "";
    if (type === "filterView") {
      newmode = "filter";
    }
    else {
      newmode = type;
    }

    setMode(newmode);

    let numActiveFilters = appliedFilters["event_types"].length + appliedFilters["room_list"].length;
    if (type === "filterView" && numActiveFilters === 0 && appliedFilters["search_query"] === "") {
      setshowFilterPane(true);
    }
    else if (type === "filter") { setshowFilterPane(true); }

  }

  function dualLink(params:any, mode:string) {
    if (mode === "toFilterOptions") {
      setFilterOptions(params);
    }
    else if (mode === "toDataSet") {
      setAppliedFilters(params);
    }
  }

  // TODO: need to figure how to avoid prematurely closing the app
  useEffect(() => {
    if(showFilterPane === false && showMainMenu === false && menupagebools.every(v => !v) && showEventDescription === false ) {
      CapacitorApp.addListener('backButton', () => {
        CapacitorApp.exitApp();
      })
    }
  }, [showFilterPane, showMainMenu, menupagebools, showEventDescription]);

  let menunavs = [];
  let menupages = [];

  for (const [i, entry] of menupagedata.entries()) {
    menunavs.push(<Nav.Link href="#action1" onClick={() => changeMenuPageState(i, true)} key={i}>{entry["header"]}</Nav.Link>);
    menupages.push(
      <MenuPage show_var={() => getMenuState(i)} hide_fxn={changeMenuPageState} idx={i}>
        <MenuPage.Header >{entry["header"]}</MenuPage.Header>
        <MenuPage.Body fluidImage={entry["fluidImage"]} mainText={entry["body"]}></MenuPage.Body>
      </MenuPage>
    );
  }

  // let filterclass = "hasFilters p-1 me-2 align-items-center";
  let num_filters = appliedFilters["event_types"].length + appliedFilters["room_list"].length;
  let filter_active:boolean = !(num_filters === 0 && appliedFilters["search_query"] === "");

  // this useeffect runs whenever mode changes, and after the display set is repopulated
  useEffect(() => {
    window.scrollTo({ top: scrollSettings[mode], behavior:  'instant' });
  }, [mode]);


  let rendered_days = availableDays.map((day) => {
    // onClick={() => { handleDaySelect(day)}
    return (<NavDropdown.Item className={selectedDay === day ? "newtimes-filler" : ""} onClick={() => {setSelectedDay(day)}}>{day}</NavDropdown.Item>);
  });

  function returnFilterIndicator() : JSX.Element {
    return (<span className="fa-layers fa-fw">
      <FontAwesomeIcon icon={faFilter}/>
      {filter_active ? <FontAwesomeIcon icon={faCircle} transform="shrink-7 right-6 up-6" className="filter-indicator"/> : <></>}
    </span>);
  }


  // bg="light" data-bs-theme="light"
  return (
    <>
      <div className="App">

        <Navbar collapseOnSelect expand={false} className="sticky-top mb-0 shadow-sm"  id="main-navbar" onSelect={() => setShowMainMenu(false)}>
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} onClick={() => setShowMainMenu(true)}/>
            <Navbar.Brand className="ms-2">
              {/* if desired to dynamically change page title based on scroll position, start here */}
              {/* title={(availableDays.length > 0) ? availableDays[activeDayIndex] : ""} */}
              <NavDropdown title={selectedDay} id="day-dropdown-widget">
                { rendered_days }
                <NavDropdown.Item className={selectedDay === "All Days" ? "newtimes-filler" : ""} onClick={() => {setSelectedDay("All Days")}}>All Days</NavDropdown.Item>
              </NavDropdown>
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
              <Nav className="flex-row">
                <Nav.Link href="#home" className="me-2" onClick={() => handleRoleChange("filter")}>
                  {returnFilterIndicator()} Edit Filters
                </Nav.Link>
              </Nav>
            </div>
          </Container>
        </Navbar>

        <Container id="infobody2">
          <FilterOptions show_var={showFilterPane} hide_fxn={handleFilterPaneOnHide} param_fxn={dualLink} filterOptions={filterOptions}></FilterOptions>
          <div id="dataset">
            <Dataset 
              mode={mode} 
              param_fxn={dualLink} 
              appliedFilters={appliedFilters} 
              changeDays={setAvailableDays} 
              oppositeTheme={oppositecolorState}
              showEventDescription={showEventDescription} setShowEventDescription={setShowEventDescription}
              selectedDay={selectedDay} 
            ></Dataset>
          </div>
        </Container>
        <Nav fill defaultActiveKey="home" activeKey={mode} className="sticky-bottom bg-white shadow-lg mt-2">
          <Nav.Item onClick={() => handleRoleChange("home")}>
            <Nav.Link eventKey="home"><FontAwesomeIcon icon={faBook}></FontAwesomeIcon> Events</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => handleRoleChange("bookmarks")}>
            <Nav.Link eventKey="bookmarks"><FontAwesomeIcon icon={fasStar}></FontAwesomeIcon> Starred</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => handleRoleChange("filterView")}>
            <Nav.Link eventKey="filter">{returnFilterIndicator()}Filters</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      {menupages}
    </>
  );
}

export default App;
