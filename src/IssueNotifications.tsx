import {LocalNotifications, ScheduleOptions, LocalNotificationSchema, PendingResult, LocalNotificationDescriptor, CancelOptions} from '@capacitor/local-notifications';
import {Toast} from '@capacitor/toast';
import { faBell, faBellSlash } from '@fortawesome/free-regular-svg-icons';
import { faBell as fasBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import dayjs from "dayjs/esm/index.js";
import DefaultNoficationModal from './DefaultNotificationModal';
import { DEFAULTNOTIFY } from './Utils';

// todo: optionally switch to push notifications if louder notifications are requested
export default function IssueNotifications({index, title, start_ts}: {index:number, title:string, start_ts:dayjs.Dayjs}) {

  const [bellType, setBellType] = useState(defaultState());
  const NOTIFYNAME:string = "NOTIFY";

  // show/dont show default nofication modal
  const [showModal, setShowModal] = useState(false);

  function defaultState() {
    return (dayjs().isAfter(start_ts)) ? faBellSlash : faBell;
  }

  function issueNotification(subtracttime:number = 0, usedate:dayjs.Dayjs|null = null){
    // retrieve date to use and store notification for later in case it gets cleared for whatever reason    
    if(usedate === null) {
      usedate = start_ts.subtract(subtracttime,"m");
      
      // edge case: if time of notification start is after calculated event start time,
      // then fall back to the event start date
      if(dayjs().isAfter(usedate)) {
        usedate = start_ts;
      }

      Toast.show({
        text: `Will notify ${subtracttime} minutes before start time.`,
        position: "center"
      });

    }
    localStorage.setItem(`${NOTIFYNAME}-${index}`, usedate.toISOString());

    let bodydesc:string = `Your event "${title}" is starting soon.`
    LocalNotifications.schedule({
      notifications: [
        {
          title:"Event Starting Soon!",
          body:bodydesc,
          id:index,
          schedule: {
            at: usedate.toDate(),
            allowWhileIdle:true
          },
        }
      ]
    }).then(() => {
      // add listener for when any notification is fired off
      LocalNotifications.addListener('localNotificationReceived', checkNotificationFired);
    }).then(() => {
      setBellType(fasBell);
    });
  }

  function permissionsCheck() {
    // attempt to issue notification
    // if denied, means user will need to go into settings
    LocalNotifications.requestPermissions().then((e) => {
      if (e.display != 'granted') {
        Toast.show({
          text:"Notifications permissions were denied!",
          position:"center"
        }); 
      }
      else {
        // issueNotification();
        setShowModal(true);
      }
    });
  }

  function onTriggerFunction() {
    // disable notifications if the event has already started
    if(bellType === faBellSlash) {
        Toast.show({
          text:"This event has already started.",
          position:"center"
        }); 
    }
    // check permissions the first time
    else if (bellType === fasBell) {
      let cancelitem:CancelOptions = {notifications: [{id: index}]};
      LocalNotifications.cancel(cancelitem).then(() => {
        removeNotification();
      });
    }
    else{
      LocalNotifications.checkPermissions().then(
        (e) => {
          // issue permissions check if not granted, otherwise issue notification
          if (e.display != 'granted') {
            permissionsCheck();
          }
          else if (localStorage.getItem(DEFAULTNOTIFY) !== null){
            // a default value is required for TypeScript typing, however
            // it is guaranteed to never be used because of the null check
            let filledval:string = localStorage.getItem(DEFAULTNOTIFY) || '0';
            issueNotification(+filledval);
          }
          else {
            // issueNotification();
            setShowModal(true);
          }
      });
    }
  }

  // remove item from storage and update ui -- doesn't raise exception if already gone so whatever
  function removeNotification() {
    localStorage.removeItem(`${NOTIFYNAME}-${index}`);
    setBellType(defaultState());
  }

  function checkNotificationFired(fired_not: LocalNotificationSchema) {
    //update ui accordingly
    if (fired_not["id"] === index) {
      removeNotification();
    }
  }

  useEffect(function() {
   
    // search localnotifications to see if a notification is already queued
    let foundNotification:boolean = false;
    LocalNotifications.getPending().then((result) => {
      result.notifications.map((notice, i) => {
        if (notice.id === index) {
          foundNotification = true;
        }
      });
    // run after inspection of pending notifications is complete
    }).then(() => {
      // case 1: a pending notification was already found
      if (foundNotification && bellType !== fasBell) {
        setBellType(fasBell);
      }
      // case 2: no pending notifications were found
      else {
        // check for existence of cached notification
        let cachedtime:string|null = localStorage.getItem(`${NOTIFYNAME}-${index}`);
        // check if a cached notification exist; leave alone if not
        if (cachedtime !== null){
          let parsed_cachedtime:dayjs.Dayjs = dayjs(cachedtime);
          let now_time = dayjs();
          
          // check if current time is less than that of event start time
          // schedule if it is, otherwise ignore
          if( now_time < start_ts) {
            issueNotification(0, parsed_cachedtime);
          }
          // remove the old item
          else {
            localStorage.removeItem(`${NOTIFYNAME}-${index}`);
          }
        }
      }
    });
  });

  // add listener for when any notification is fired off
  LocalNotifications.addListener('localNotificationReceived', checkNotificationFired);

  return (
    <>
      <DefaultNoficationModal show={showModal} changeState={setShowModal} callBackNotify = {issueNotification}/>
      <FontAwesomeIcon onClick={() => onTriggerFunction()} icon={bellType} size="lg"/>
    </>
  );
}
