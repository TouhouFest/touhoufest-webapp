import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import { faAngleRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { App } from '@capacitor/app';
import { EventTypeGenerator } from './Utils';
import { Col, Row } from 'react-bootstrap';

export default function FilterOptions({show_var, hide_fxn, param_fxn, filterOptions}: {show_var:boolean, hide_fxn:Function, param_fxn:Function, filterOptions:any}) {

  let event_type_starter:string[] = [];
  let room_list_starter:string[] = [];
  const [stack, setStack] = useState({"event_types":event_type_starter, "room_list": room_list_starter, "search_query": ""});

  function handleHide() {
    App.removeAllListeners().then(() => {
      hide_fxn();
    });
  }

  useEffect(() => {
    if(show_var === true) {
        App.removeAllListeners().then(() => {
          App.addListener('backButton', () => {
            handleHide();
          });
        });
    }
  }, [show_var]);

  // I wasn't able to get form submission to work with checkboxes,
  // so I just tracked each checkbox via state instead.
  // TODO: figure out how to preserve?
  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let selected_rooms = [];
    for(const room of filterOptions["room_list"]) {
      const elem = document.getElementById(room) as HTMLInputElement;
      if(elem.checked){
        selected_rooms.push(room);
      }
    }

    let selected_types = [];
    for(const event of filterOptions["event_types"]) {
      const elem = document.getElementById(event) as HTMLInputElement;
      if(elem.checked){
        selected_types.push(event);
      }
    }

    let queryelem = document.getElementById("searchtext") as HTMLInputElement;
    let query = queryelem.value.replace(/[^\w\s]/gi, '').toLowerCase();
   
    let newState = {
      "event_types": selected_types,
      "room_list": selected_rooms,
      "search_query": query
    }
   
    setStack(newState);

    param_fxn(newState, "toDataSet");
    handleHide();
  }

  // prevent pressing Enter from prematurely submitting the form
  function disableEnter(e:React.KeyboardEvent) {
    if(e.keyCode === 13){
      e.preventDefault();
      return false;
    }
  }
  
  function clearText(){
    let elem = document.getElementById("searchtext") as HTMLInputElement;
    elem.value = "";
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
      let styled_elem = <EventTypeGenerator text={elem}/>
      let defaultChecked = stack["event_types"].includes(elem);
      // eventtypes.push(<Form.Check defaultChecked={defaultChecked} type="checkbox" id={elem} label={elem} onClick={() => foo(elem, "event_types")}></Form.Check>);
      eventtypes.push(<Col className="my-1"><Form.Check className="ps-0" defaultChecked={defaultChecked} type="checkbox" id={elem} label={styled_elem}></Form.Check></Col>);
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
    <Modal show={show_var} onHide={handleHide} placement={"end"} centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title>Filter Options</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {/* onReset={handleReset} */}
        <Form onSubmit={handleSubmit} onKeyDown={disableEnter} id="filterForm">
          <Form.Group>
            <Form.Label>Search programming</Form.Label>
            <InputGroup className="mb-3" id="filter-searchgroup">
              <InputGroup.Text id="searchbar"><FontAwesomeIcon icon={faMagnifyingGlass} /></InputGroup.Text>
              <Form.Control type="search" aria-label="Default" aria-describedby="searchbar" id="searchtext" defaultValue={stack["search_query"]}></Form.Control>
              <InputGroup.Text id="searchend" onClick={clearText}><FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon></InputGroup.Text>
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
                  <Row xs={2}>
                  {eventtypes}
                  </Row>
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className="text-center"><Button type="submit" className = "mt-3 submitbutton">Apply <FontAwesomeIcon icon={faAngleRight}/></Button></div>
          {/*<Button variant="secondary" type="reset" className="mt-3 mx-2">Clear Filters</Button>*/}
        </Form>

      </Modal.Body>
    </Modal>
  );
}