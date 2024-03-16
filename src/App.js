import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar, faFilter, faBook, faHeart, faCheck, faMagnifyingGlass, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import FilterOptions from "./FilterOptions"
import MenuPage from "./MenuPage"
import Dataset from "./Dataset";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function App({ menupagedata, menuheader }) {

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

  const [scrollSettings, setScrollSettings] = useState({ "home": 0, "bookmarks": 0, "filter": 0 });

  const [availableDays, setAvailableDays] = useState([]);
  // decomissioned with fragments inplace instead
  // const [activeDayIndex, setActiveDayIndex] = useState(0);
  // const [summonDayScroll, setSummonDayScoll] = useState(0);

  function changeMenuPageState(idx, isDisplayed) {
    let newstate = [...menupagebools];
    newstate[idx] = isDisplayed;
    setMenuPages(newstate);
  }
  function getMenuState(idx) { return menupagebools[idx]; }

  function handleRoleChange(type) {

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

  function dualLink(params, mode) {
    if (mode === "toFilterOptions") {
      setFilterOptions(params);
    }
    else if (mode === "toDataSet") {
      setAppliedFilters(params);
    }
  }

  // decomissioned with usage of fragments instead
  // function handleDaySelect(day) {
  //   console.log(day);
  //   setSummonDayScoll(summonDayScroll + 1);
  //   setActiveDayIndex(availableDays.indexOf(day));
  // }

  let menunavs = [];
  let menupages = [];

  for (const [i, entry] of menupagedata.entries()) {
    menunavs.push(<Nav.Link href="#action1" onClick={() => changeMenuPageState(i, true)} key={i}>{entry["header"]}</Nav.Link>);
    menupages.push(
      <MenuPage show_var={() => getMenuState(i)} hide_fxn={changeMenuPageState} idx={i}>
        <MenuPage.Header >{entry["header"]}</MenuPage.Header>
        <MenuPage.Body>{entry["body"]}</MenuPage.Body>
      </MenuPage>
    );
  }

  let filterclass = "hasFilters p-1 me-2 align-items-center";
  let num_filters = appliedFilters["event_types"].length + appliedFilters["room_list"].length;
  if (num_filters === 0 && appliedFilters["search_query"] === "") {
    filterclass += " d-none"
  }

  // this useeffect runs whenever mode changes, and after the display set is repopulated
  useEffect(() => {
    window.scrollTo({ top: scrollSettings[mode], behavior: 'instant' });
  }, [mode]);

  // this method runs whenever the day adjustor is selected
  // each of the day idnicators are polled for the number of events preceding it
  // (as it was inscribed into the classname)
  // then a rough scroll amount is calculated and we jump to that position
  // NOTE: decommissioned now that href fragments are in-place
  // useEffect(() => {
  //   if (availableDays.length > 0 && summonDayScroll > 0) {
  //     let total_evts = 0;
  //     for(const num in [...Array(activeDayIndex+1).keys()]){
  //       try {
  //         let clslist = [...document.getElementById(availableDays[num]).classList];
  //         let num_evts = clslist.filter((cls) => cls.includes("events"))[0].split("-")[1];
  //         total_evts += Number(num_evts);
  //       } catch(e) {

  //       }
  //     }
  //     let total_scroll = 130 * total_evts + 42 * activeDayIndex;
  //     window.scrollTo(0, total_scroll);
  //   }
  // }, [summonDayScroll]);

  let rendered_days = availableDays.map((day) => {
    // onClick={() => { handleDaySelect(day)}
    return (<NavDropdown.Item href={'#'+day}>{day}</NavDropdown.Item>);
  });

  // bg="light" data-bs-theme="light"
  return (
    <>
      <div className="App">

        <Navbar collapseOnSelect expand={false} className="sticky-top mb-0 shadow-sm"  id="main-navbar">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
            <Navbar.Brand className="ms-2">
              {/* if desired to dynamically change page title based on scroll position, start here */}
              {/* title={(availableDays.length > 0) ? availableDays[activeDayIndex] : ""} */}
              <NavDropdown title={<><FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon> Days</>} id="day-dropdown-widget">
                { rendered_days }
              </NavDropdown>
            </Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                  {menuheader}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {menunavs}
                  <Nav.Link href="https://github.com/kir12/touhoufest-webapp" target="_blank"><FontAwesomeIcon icon={faGithub} fixedWidth></FontAwesomeIcon> About App</Nav.Link>
                  <Nav.Link href="https://www.google.com/search?q=marisa+kirisame&client=firefox-b-1-d&source=lnms&tbm=isch&sa=X&ved=2ahUKEwioqcvz4fT9AhW2kYkEHTCND3AQ0pQJegQIBBAC&biw=1920&bih=884&dpr=1" target="_blank"><FontAwesomeIcon icon={faHeart} fixedWidth></FontAwesomeIcon> Best Girl</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="d-flex order-1 ms-auto" id="filter-widget">
              <Nav className="flex-row">
                <Nav.Link href="#home" className={filterclass}>
                  <small><FontAwesomeIcon icon={faCheck} className="align-middle"></FontAwesomeIcon></small>
                </Nav.Link>
                <Nav.Link href="#home" className="me-2" onClick={() => handleRoleChange("filter")}>
                  <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon> / <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </Nav.Link>
                { /* <Nav.Link href="#home" className="me-2" onClick={() => handleRoleChange("filter")}><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon> Search</Nav.Link> */}
              </Nav>
            </div>
          </Container>
        </Navbar>

        <Container id="infobody2">
          <FilterOptions show_var={showFilterPane} hide_fxn={handleFilterPaneOnHide} param_fxn={dualLink} filterOptions={filterOptions}></FilterOptions>
          <div id="dataset">
            <Dataset mode={mode} param_fxn={dualLink} appliedFilters={appliedFilters} changeDays={setAvailableDays}></Dataset>
          </div>
        </Container>
        <Nav fill variant="pills" defaultActiveKey="home" activeKey={mode} className="sticky-bottom bg-white shadow-sm mt-2">
          <Nav.Item onClick={() => handleRoleChange("home")}>
            <Nav.Link eventKey="home"><FontAwesomeIcon icon={faBook}></FontAwesomeIcon> Events</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => handleRoleChange("bookmarks")}>
            <Nav.Link eventKey="bookmarks"><FontAwesomeIcon icon={fasStar}></FontAwesomeIcon> Starred</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => handleRoleChange("filterView")}>
            <Nav.Link eventKey="filter"><FontAwesomeIcon icon={faFilter}></FontAwesomeIcon> Filters</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      {menupages}
    </>
  );
}

export default App;
