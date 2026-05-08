import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

/* IMPORT YOUR MENUPAGES HERE */
import {conCenterPage} from "./menupages/ConCenter";
import {aboutConPage} from "./menupages/AboutCon";
import { guestsPage } from './menupages/Guests';
import { gamingPage } from "./menupages/Gaming";
import { artistVendorsPage } from './menupages/ArtistVendors';
import { cosplayPage } from './menupages/Cosplay';
import { mainLocationsPage } from './menupages/MainLocations';
import { installationPage } from './menupages/Installation';
import { restarauntsPage } from './menupages/Restaraunts';
import { settingsPage } from './menupages/Settings'
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { registerSW } from 'virtual:pwa-register'
import { conMerchPage } from "./menupages/ConMerch";
import {sponsorsPage} from "./menupages/Sponsors";

import { Capacitor } from '@capacitor/core';

import {Animation, StatusBar, Style} from '@capacitor/status-bar';

import { BrowserRouter } from "react-router";

// Display content under transparent status bar (Android only)
StatusBar.setOverlaysWebView({ overlay: false });

const setStatusBarStyleDark = async () => {
  await StatusBar.setStyle({ style: Style.Dark });
};
setStatusBarStyleDark();

const showStatusBar = async () => {
  await StatusBar.show({animation: Animation.None});
};
showStatusBar();

registerSW({ immediate: true })

const root = ReactDOM.createRoot(document.getElementById('root'));

/* DECLARE YOUR MENUPAGES HERE */
let menupagedata = [aboutConPage];

if(!Capacitor.isNativePlatform() && Capacitor.getPlatform() == 'web') {
  menupagedata = menupagedata.concat([installationPage]);
}

menupagedata = menupagedata.concat([conCenterPage, sponsorsPage, mainLocationsPage, restarauntsPage, guestsPage, gamingPage, artistVendorsPage, cosplayPage, conMerchPage, settingsPage ]);

let menuheader = (<>TouhouFest 2025</>);

import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


// Call the element loader before the render call
defineCustomElements(window);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App menupagedata={menupagedata} menuheader={menuheader}/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();

// grab latest commit hash, compare to cached, then reload if necessary
// fetch("https://api.github.com/repos/TouhouFest/touhoufest-webapp/git/refs/heads/main")
//   .then((resp) => resp.json())
//   .then((obj) => {
//     let latest_sha = obj["object"]["sha"];
//     let cached_ver = localStorage.getItem("LATEST_SHA");
//     if(cached_ver !== latest_sha) {
//       localStorage.setItem("LATEST_SHA",latest_sha);
//       // forceReload();
//     }
//   });
// 