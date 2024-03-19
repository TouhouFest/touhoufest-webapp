import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Offcanvas from 'react-bootstrap/Offcanvas';
import InputGroup from 'react-bootstrap/InputGroup';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FilterOptions({show_var, hide_fxn, param_fxn, filterOptions}) {

  const [stack, setStack] = useState({"event_types":[], "room_list": [], "search_query": ""});

  // I wasn't able to get form submission to work with checkboxes,
  // so I just tracked each checkbox via state instead.
  // TODO: figure out how to preserve?
  function handleSubmit(e) {
    e.preventDefault();

    let selected_rooms = [];
    for(const room of filterOptions["room_list"]) {
      if(document.getElementById(room).checked){
        selected_rooms.push(room);
      }
    }

    let selected_types = [];
    for(const event of filterOptions["event_types"]) {
      if(document.getElementById(event).checked){
        selected_types.push(event);
      }
    }

    let query = document.getElementById("searchtext").value.replace(/[^\w\s]/gi, '').toLowerCase();
   
    let newState = {
      "event_types": selected_types,
      "room_list": selected_rooms,
      "search_query": query
    }
   
    setStack(newState);

    param_fxn(newState, "toDataSet");
    hide_fxn();
  }

  // prevent pressing Enter from prematurely submitting the form
  function disableEnter(e) {
    if(e.keyCode === 13){
      e.preventDefault();
      return false;
    }
  }
  
  function clearText(){
    document.getElementById("searchtext").value = "";
  }

  // modify applied events
  // the stack was initially manually unkept but that was superseded
  // this function will stay incase it's needed 
  // function foo(elem, type) {
  //   if(stack[type].includes(elem)){
  //     stack[type].splice(stack[type].indexOf(elem), 1);
  //   }
  //   else{
  //     stack[type].push(elem);
  //   }
  // }

  let eventtypes = [];
  let rooms = [];
  if(Object.keys(filterOptions).length !== 0){
    for(const elem of filterOptions["event_types"]) {
      let defaultChecked = stack["event_types"].includes(elem);
      // eventtypes.push(<Form.Check defaultChecked={defaultChecked} type="checkbox" id={elem} label={elem} onClick={() => foo(elem, "event_types")}></Form.Check>);
      eventtypes.push(<Form.Check defaultChecked={defaultChecked} type="checkbox" id={elem} label={elem}></Form.Check>);
    }

    for (const elem of filterOptions["room_list"]) {
      let defaultChecked = stack["room_list"].includes(elem);
      // rooms.push(<Form.Check defaultChecked={defaultChecked} type="checkbox" id={elem} label={elem} onClick={() => foo(elem, "room_list")}></Form.Check>);
      rooms.push(<Form.Check defaultChecked={defaultChecked} type="checkbox" id={elem} label={elem}></Form.Check>);
    }
  }

  // this function's borked because there's no actual way to get the buttons to programatically change
  // (while also preserving the ability to actually use them)
  // for that reason, resetting forms will not be added until someone wants it badly enough
  // function handleReset(e) {
  //   e.preventDefault();
  //   stack["event_types"] = [];
  //   stack["room_list"] = [];
  //   for(let i = 0; i < eventtypes.length; i++){
  //     // eventtypes[i].useRef().click();
  //     eventtypes[i].props["onClick"]();
  //   }
  // }

  return (
    <Offcanvas show={show_var} onHide={hide_fxn} placement={"end"}>
      <Offcanvas.Header closeButton closeVariant='white'>
        <Offcanvas.Title>Filter Options</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>

        {/* onReset={handleReset} */}
        <Form onSubmit={handleSubmit} onKeyDown={disableEnter} id="filterForm">
          <Form.Group>
            <Form.Label>Search Events</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="searchbar"><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></InputGroup.Text>
              <Form.Control type="search" aria-label="Default" aria-describedby="searchbar" id="searchtext" defaultValue={stack["search_query"]}></Form.Control>
              <InputGroup.Text onClick={clearText}><FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon></InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Accordion alwaysOpen className="open">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Filter by Room</Accordion.Header>
              <Accordion.Body>
                <Form.Group>
                  {rooms}
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Filter by Event Type</Accordion.Header>
              <Accordion.Body>
                <Form.Group>
                  {eventtypes}
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className="text-center"><Button type="submit" className = "mt-3 submitbutton">Submit</Button></div>
          {/*<Button variant="secondary" type="reset" className="mt-3 mx-2">Clear Filters</Button>*/}
        </Form>

      </Offcanvas.Body>
    </Offcanvas>
  );
}