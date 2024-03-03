import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* IMPORT YOUR MENUPAGES HERE */
import {directionsPage} from "./menupages/Directions";
import {parkingPage} from "./menupages/Parking";
import {conCenterPage} from "./menupages/ConCenter";
import {restarauntsPage} from "./menupages/Restaraunts";
import {aboutConPage} from "./menupages/AboutCon";
import {operatingHours} from "./menupages/OperatingHours";

const root = ReactDOM.createRoot(document.getElementById('root'));

/* DECLARE YOUR MENUPAGES HERE */
let menupagedata = [aboutConPage, operatingHours, directionsPage, parkingPage, conCenterPage, restarauntsPage];

let menuheader = (<>TouhouFest 2023</>);

root.render(
  <React.StrictMode>
    <App menupagedata={menupagedata} menuheader={menuheader}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
