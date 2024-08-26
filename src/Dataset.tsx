import dayjs from "dayjs/esm/index.js";
import customParseFormat from "dayjs/esm/plugin/customParseFormat";
import EventDescription from './EventDescription';
import { useEffect, useState } from 'react';
import Bookmark from "./Bookmark";
import { ListGroup } from 'react-bootstrap';
import { colors, get_cookie_list, cmp } from "./Utils"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Papa from 'papaparse';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPixiv } from '@fortawesome/free-brands-svg-icons';

const events = './src/events.csv';
import noresults from './noresults.jpg';

dayjs.extend(customParseFormat);

class SPDataFrame {
  
  data:any[];
  index:any[];


  constructor(data) {
    this.data = data;
    this.index = Array.from(Array(data.length).keys());
  }

  addColumn(column_name, series) {
    let output = this.data.map(function (row, index) {
      row[column_name] = series[index];
      return row;
    })
    return new SPDataFrame(output);
  }

  apply(func) {
    let output = this.data.map((row) => {
      return func(row);
    });
    return output;
  }

  sortValues(column, ascending = true) {
    this.data.sort((a, b) => {
      let val = a[column].localeCompare(b[column]);
      return (ascending) ? val : !val;
    });
    return new SPDataFrame(this.data);
  }

  get(column) {
    let output = this.data.map((x) => {
      return x[column];
    });
    return output;
  }

  debug() {
    console.log(this.data);
  }

  loc(params) {
    let rows = params.rows.map((value, index) => {
      if (typeof value === "boolean" && value === true) {
        return this.data[index];
      }
      else {
        return this.data[value];
      }
    }).filter(item => item);
    return new SPDataFrame(rows);
  }

  toJSON() {
    return this.data;
  }

  compare(column, value, op) {
    let output = this.data.filter((row) => {
      switch (op) {
        case '!==':
          return row[column] !== value;
        case '>=':
          return row[column] >= value;
        default:
          return row[column] === value;
      }
    });
    return new SPDataFrame(output);
  }

};

export default function Dataset({ mode, param_fxn, appliedFilters, changeDays }) {
  const [dataSet, setDataSet] = useState(new SPDataFrame([]));
  const [dataUpdated, setDataUpdated] = useState(false);
  const [showEventDescription, setShowEventDescription] = useState(false);
  const [eventDetails, setEventDetails] = useState({});
  const [evtPrint, setEvtPrint] = useState(<></>);
  // const [availableDays, setAvailableDays] = useState([]);

  function handleEventOnClick(index, evtbulk) {
    let evt = dataSet.loc({ rows: [index] }).toJSON()[0];
    // let evt = toJSON(dataSet.loc({rows:[index]}))[0];
    setEventDetails(evt);
    setShowEventDescription(true);
    setEvtPrint(evtbulk);
  };
  const handleEventOnHide = () => setShowEventDescription(false);

  function uniqueColumn(series) {
    return Array.from(new Set(series));
  }

  useEffect(() => {

    Papa.parse(events, {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: function (results) {
        let newdata = new SPDataFrame(results.data);
        newdata = newdata.addColumn("combinedStart", newdata.apply((row) => {
          return dayjs(row["event_start_day"] + " " + row["event_start_time"], "M/D/YY H:mm").toISOString();
        }));
        newdata = newdata.addColumn("combinedEnd", newdata.apply((row) => {
          return dayjs(row["event_end_day"] + " " + row["event_end_time"], "M/D/YY H:mm").toISOString();
        }));
        newdata = newdata.sortValues("combinedStart");
        newdata = newdata.addColumn("uniqueID", newdata.index);

        let event_types = uniqueColumn(newdata.get('event_type').map((elm) => elm.split(".")).flat(1)).sort();
        let room_list = uniqueColumn(newdata.get("event_room"));
        let params = { 'event_types': event_types, 'room_list': room_list };

        // newdata.debug();
        // console.log(params);

        let days = newdata.apply((row) => {
          return dayjs(row["combinedStart"]).format("ddd, M/D").toString();
        });
        days = uniqueColumn(days);
        changeDays(days);
        // setAvailableDays(days);

        param_fxn(params, 'toFilterOptions');
        // optional: drop original time parameters

        setDataSet(newdata);
        setDataUpdated(true);

      }
    });

  }, []);

  // <img src = {noresults} className="img-fluid" alt="Confused Marisa"></img>
  // <p className="small mb-1"><a href="https://twitter.com/sobamushi_mo/status/1399661514043232259" target="blank" rel="noreferrer">Source</a></p>
  function noResults() {
    return (
      <Row className="d-flex align-items-center justify-content-center flex-grow-1" id="infobody">
        <Col md={3} lg={4} className="text-center opacity-75">
          <p className="small mb-1"><a href="https://www.pixiv.net/en/artworks/54659563" target="blank" rel="noreferrer"><FontAwesomeIcon icon={faPixiv}/> Image Source</a></p>
          <Image src={noresults} fluid alt="Confused Reimu" rounded />
          <h5 className="mt-2">No Results</h5>
          <p>Try setting some bookmarks or adjusting your filter options</p>
        </Col>
      </Row>
    );
  }

  // reduce title and description to just alphanumeric + characters, split by word
  // then do a set intersection
  // return the number of hit
  function rankResults(row) {
    // reduce title, description, and search to sets and split by word
    let reduced_title = new Set(row["event_title"].replace(/[^\w\s]/gi, '').toLowerCase().split(" "));
    let reduced_description = new Set(row["event_description"].replace(/[^\w\s]/gi, '').toLowerCase().split(" "));
    let cleaned_search = new Set(appliedFilters["search_query"].split(" "));
    // conduct searches wrt title and description
    let title_search = new Set(Array.from(reduced_title).filter(i => cleaned_search.has(i)))
    let description_search = new Set(Array.from(reduced_description).filter(i => cleaned_search.has(i)));
    let unified_search = new Set(Array.from(title_search).concat(Array.from(description_search)));
    // return ratio of words that got hits from original search compared to total
    return unified_search.size / cleaned_search.size;
  }

  let output = [];

  if (dataUpdated) {

    let event_types = uniqueColumn(dataSet.get('event_type').map((elm) => elm.split(".")).flat(1)).sort();

    let displayData = dataSet;
    if (mode === "bookmarks") {
      let cookie_list = get_cookie_list();
      cookie_list = cookie_list.map(Number);
      cookie_list.sort(cmp);
      displayData = dataSet.loc({ rows: cookie_list });
    }
    else if (mode === "filter") {

      if (appliedFilters["search_query"] !== "") {
        let results = displayData.apply(rankResults);
        results = results.map((rank, idx) => {
          return {
            "assignIndex": idx,
            "rank": rank
          };
        });
        let finalresults = (new SPDataFrame(results)).compare("rank", 0.5, ">=").get("assignIndex");
        displayData = displayData.loc({ rows: finalresults });
      }

      if (appliedFilters["event_types"].length > 0) {
        let result = displayData.get("event_type").map((evtstr) => appliedFilters["event_types"].filter(item => evtstr.split(".").includes(item)).length > 0);
        displayData = displayData.loc({ rows: result });
      }

      if (appliedFilters["room_list"].length > 0) {
        let result = displayData.get("event_room").map((param) => { return appliedFilters["room_list"].includes(param) });
        // console.log(result);
        displayData = displayData.loc({ rows: result });
      }

      // if(appliedFilters["room_list"] !== []){
      //     displayData = displayData[displayData.event_room.ne(eventSeries)];
      // }
    }
    else {

    }

    if (displayData.index.length > 0) {
      displayData = displayData.sortValues("combinedStart");
    }

    let jsonexport = displayData.toJSON();

    let daynum = -1;
    let num_evts_ctr = 0;

    let hourfxn = null;

    // console.log(jsonexport);
    jsonexport.forEach(function (elem, index_) {

      let index = elem["uniqueID"];
      let splitevt = elem["event_type"].split(".");
    
      // compute event type badge styling
      let event_indexes = splitevt.map(evt => event_types.findIndex((elm) => {return elm === evt;}))
      let css_classes = event_indexes.map((idx) => colors[idx]);

      // compute time display
      let startjs = dayjs(elem["combinedStart"]);
      let endjs = dayjs(elem["combinedEnd"]);

      // we've moved onto a new set of days, we need to add a new day indicator
      if (daynum === -1 || startjs.day() !== daynum) {
        daynum = startjs.day();
        let formatted_start = startjs.format("dddd, MMMM D").toString();
        // the number of events preceding the day indicator are enscribed into the classname
        output.push(
          <div id={startjs.format("ddd, M/D").toString()} className="anchorpoint"></div>
        );
        output.push(
          <ListGroup.Item key={formatted_start} className={"text-center sticky-top2 day-indicator events-" + num_evts_ctr} >
            <p className="mb-0"><b>{formatted_start}</b></p>
          </ListGroup.Item>
        );
        num_evts_ctr = 0;
      }

      let floortime = startjs.minute(0);
      if(hourfxn === null || hourfxn.diff(floortime) !== 0){
        output.push(
          <><ListGroup.Item className="text-center small newtimes">{floortime.format("h:mm A")}</ListGroup.Item></>
        );
        hourfxn = floortime;
      }

      num_evts_ctr += 1;

      let format_str = "";
      if (startjs.day() !== endjs.day()) {
        format_str = "D/M h:mm A";
      }
      else {
        format_str = "h:mm A";
      }
      let startstr = startjs.format(format_str);
      let endstr = endjs.format(format_str);

      let eventbulk = (<>
        <h4 className="mb-1">{elem["event_title"]} </h4>
        <p className="mb-1 datedisplay">{dayjs(elem['combinedStart']).format("dddd, MMMM D").toString()}</p>
        <p className="mb-1">{elem["event_room"]}, {startstr} - {endstr}</p>
        <p className="mb-1"><span>
          {css_classes.map((color, idx) => {
            return (<><Badge pill className={color + ' me-1'}>{splitevt[idx]}</Badge></>);
          })}
          <Badge pill bg="danger">{elem["event_age_limit"]}</Badge>
        </span></p>
      </>);

      // generate event listing
      output.push(
        <ListGroup.Item key={index} className="event-item">
          <Row>
            <Col xs="10" onClick={() => handleEventOnClick(index, eventbulk)}>
              {eventbulk}
            </Col>
            <Col xs="2" className="text-center align-self-center">
              <Bookmark index={index}></Bookmark>
            </Col>
          </Row>
        </ListGroup.Item>
      );
    });

  }

  return (
    <>
      <EventDescription show_var={showEventDescription} hide_fxn={handleEventOnHide} event_package={eventDetails} evt_print={evtPrint}></EventDescription>
      {output.length > 1 ?
        <>
          <ListGroup variant="flush" className="flex-grow-1">
            {output}
          </ListGroup>
        </>
      : <></>}
      {output.length < 1 ? noResults() : <></>}
    </>
  );
}

