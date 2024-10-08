import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

/* IMPORT YOUR MENUPAGES HERE */
import {conCenterPage} from "./menupages/ConCenter";
import {aboutConPage} from "./menupages/AboutCon";
import {operatingHours} from "./menupages/OperatingHours";
import { guestsPage } from './menupages/Guests';
import { gamingPage } from "./menupages/Gaming";
import { artistVendorsPage } from './menupages/ArtistVendors';
import { cosplayPage } from './menupages/Cosplay';
import { mainLocationsPage } from './menupages/MainLocations';
import { installationPage } from './menupages/Installation';
import { restarauntsPage } from './menupages/Restaraunts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToriiGate } from '@fortawesome/free-solid-svg-icons';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* DECLARE YOUR MENUPAGES HERE */
let menupagedata = [aboutConPage, operatingHours, installationPage, conCenterPage, mainLocationsPage, restarauntsPage, guestsPage, gamingPage, artistVendorsPage, cosplayPage ];

let menuheader = (<><FontAwesomeIcon icon={faToriiGate}/> TouhouFest 2024</>);

// Call the element loader before the render call
defineCustomElements(window);

root.render(
  <React.StrictMode>
    <App menupagedata={menupagedata} menuheader={menuheader}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();