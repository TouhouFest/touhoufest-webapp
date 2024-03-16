import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";
import EventDescription from './EventDescription';
import { useEffect, useState } from 'react';
import Bookmark from "./Bookmark";
import { ListGroup } from 'react-bootstrap';
import { colors, get_cookie_list, cmp } from "./Utils.js"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import events from './events.csv';
import noresults from './noresults.jpg'
import Papa from 'papaparse';

dayjs.extend(customParseFormat)

class SPDataFrame {
  constructor(data) {
    this.data = data;
    this.index = [...Array(data.length).keys()];
  }

  addColumn(column_name, series) {
    let output = this.data.map(function(row, index) {
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

  sortValues(column, ascending=true){
    this.data.sort((a,b) => {
      let val = a[column].localeCompare(b[column]);
      return (ascending) ? val : !val;
    });
    return new SPDataFrame(this.data);
  }

  get(column){
    let output = this.data.map((x) => {
      return x[column];
    });
    return output;
  }

  debug(){
    console.log(this.data);
  }

  loc(params){
    let rows = params.rows.map((value, index) => {
      if(typeof value === "boolean" && value === true){
        return this.data[index];
      }
      else{
        return this.data[value];
      }
    }).filter(item => item); 
    return new SPDataFrame(rows);
  }

  toJSON(){
    return this.data;
  }

  compare(column, value, op){
    let output = this.data.filter((row) => {
      switch(op){
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

export default function Dataset({mode, param_fxn, appliedFilters, changeDays}) {
  const [dataSet, setDataSet] = useState(new SPDataFrame([]));
  const [dataUpdated, setDataUpdated] = useState(false);
  const [showEventDescription, setShowEventDescription] = useState(false);
  const [eventDetails, setEventDetails] = useState({});
  const [evtPrint, setEvtPrint] = useState(<></>);
  // const [availableDays, setAvailableDays] = useState([]);

  function handleEventOnClick(index, evtbulk){
    let evt = dataSet.loc({rows:[index]}).toJSON()[0];
    // let evt = toJSON(dataSet.loc({rows:[index]}))[0];
    setEventDetails(evt);
    setShowEventDescription(true);
    setEvtPrint(evtbulk);
  };
  const handleEventOnHide = () => setShowEventDescription(false);

  function uniqueColumn(series) {
    return [...new Set(series)];
  }

  useEffect(() => {

    Papa.parse(events, {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: function(results) {
        let newdata = new SPDataFrame(results.data);
        newdata = newdata.addColumn("combinedStart", newdata.apply((row) => {
          return dayjs(row["event_start_day"] + " " + row["event_start_time"], "M/D/YY H:mm").toISOString();
        }));
        newdata = newdata.addColumn("combinedEnd", newdata.apply((row) => {
          return dayjs(row["event_end_day"] + " " + row["event_end_time"], "M/D/YY H:mm").toISOString();
        }));
        newdata = newdata.sortValues("combinedStart");
        newdata = newdata.addColumn("uniqueID", newdata.index);

        let event_types = uniqueColumn(newdata.get("event_type"));
        let room_list = uniqueColumn(newdata.get("event_room"));
        let params = {'event_types':event_types, 'room_list': room_list};

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

  function noResults() {
    return (
      <div className="row d-flex align-items-center justify-content-center" id="infobody">
        <div className="col-sm-6 text-center opacity-75">
          <p className="small mb-0"><a href="https://twitter.com/sobamushi_mo/status/1399661514043232259" target="blank" rel="noreferrer">Source</a></p>
          <img src = {noresults} className="img-fluid" alt="Confused Marisa"></img>
          <h5>No Results</h5>
          <p>Try setting some bookmarks or adjusting your filter options</p>
        </div>
      </div>
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
    let title_search = new Set([...reduced_title].filter(i => cleaned_search.has(i)))
    let description_search = new Set([...reduced_description].filter(i => cleaned_search.has(i)));
    let unified_search = new Set([...title_search, ...description_search]);
    // return ratio of words that got hits from original search compared to total
    return unified_search.size / cleaned_search.size;
  }

  let output = [];
  
  if (dataUpdated) {

    let event_types = uniqueColumn(dataSet.get("event_type"));

    let displayData = dataSet;
    if(mode === "bookmarks"){
      let cookie_list = get_cookie_list();
      // console.log(cookie_list);
      cookie_list = cookie_list.map(Number);
      cookie_list.sort(cmp);
      displayData = dataSet.loc({rows:cookie_list});
    }
    else if(mode === "filter"){
       
        if(appliedFilters["search_query"] !== ""){
          let results = displayData.apply(rankResults);
          results = results.map((rank, idx) => {
            return {
              "assignIndex": idx,
              "rank": rank
            };
          });
          let finalresults = (new SPDataFrame(results)).compare("rank",0.5,">=").get("assignIndex");
          displayData = displayData.loc({rows: finalresults});
        }

        if(appliedFilters["event_types"].length > 0){
            let result = displayData.get("event_type").map((param) => {return appliedFilters["event_types"].includes(param)});
            // console.log(result);
            displayData = displayData.loc({rows: result});
        }

        if(appliedFilters["room_list"].length > 0){
            let result = displayData.get("event_room").map((param) => {return appliedFilters["room_list"].includes(param)});
            // console.log(result);
            displayData = displayData.loc({rows: result});
        }
 
        // if(appliedFilters["room_list"] !== []){
        //     displayData = displayData[displayData.event_room.ne(eventSeries)];
        // }
    }
    else{

    }
   
    if(displayData.index.length > 0){
      displayData = displayData.sortValues("combinedStart",{acending: true});
    }

    let jsonexport = displayData.toJSON();

    let daynum = -1;
    let num_evts_ctr = 0;

    // console.log(jsonexport);
    jsonexport.forEach(function (elem, index_) {

      let index = elem["uniqueID"];

      // compute event type badge styling
      let evttype = (elm) => elm === elem["event_type"];
      let event_idx = event_types.findIndex(evttype);
      let css_class = colors[event_idx];

      // compute time display
      let startjs = dayjs(elem["combinedStart"]);
      let endjs = dayjs(elem["combinedEnd"]);
      
      // we've moved onto a new set of days, we need to add a new day indicator
      if(daynum === -1 || startjs.day() !== daynum){
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

      num_evts_ctr += 1;

      let format_str = "";
      if(startjs.day() !== endjs.day()){
        format_str = "D/M h:mm A";
      }
      else{
        format_str = "h:mm A";
      }
      startjs = startjs.format(format_str);
      endjs = endjs.format(format_str);

      let eventbulk = (<>
        <h4 className="mb-1">{elem["event_title"]} </h4>
        <p className="mb-1">{elem["event_room"]}, {startjs.toString()} - {endjs.toString()}</p>
        <p className="mb-1"><Badge pill className={css_class}>{elem["event_type"]}</Badge> <Badge pill bg="danger">{elem["event_age_limit"]}</Badge></p>
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
      <ListGroup>
        {output}
      </ListGroup>
      {output.length < 1 ? noResults() : <></>}
    </>
  );
}

