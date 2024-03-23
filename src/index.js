import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* IMPORT YOUR MENUPAGES HERE */
import {conCenterPage} from "./menupages/ConCenter";
import {aboutConPage} from "./menupages/AboutCon";
import {operatingHours} from "./menupages/OperatingHours";
import { guestsPage } from './menupages/Guests';
import { gamingPage } from "./menupages/Gaming";
import { artistVendorsPage } from './menupages/ArtistVendors';
import { cosplayPage } from './menupages/Cosplay';
import { mainLocationsPage } from './menupages/MainLocations';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* DECLARE YOUR MENUPAGES HERE */
let menupagedata = [aboutConPage, operatingHours, conCenterPage, mainLocationsPage, guestsPage, gamingPage, artistVendorsPage, cosplayPage];

let menuheader = (<>TouhouFest 2024</>);

root.render(
  <React.StrictMode>
    <App menupagedata={menupagedata} menuheader={menuheader}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
